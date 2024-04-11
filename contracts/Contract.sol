// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract Charity {

    struct Request{
        uint256 reqId;
        // request initiated by ngos(address)
        address payable initiater;
        // minimum amount wanted
        uint256 target;
        // description for raising
        string desc;
        // wanted till
        uint256 deadline;
        // address of donors with the amount they have donated
        // mapping (address=>bool) donors;
        address[] donors;
        
        // uint256[] donationId;
        // total amount created
        uint256 totalAmount;
        // request closed or open
        bool completed;
    }

    // request no.
    uint256 public requestID=0;
    // storing all requests initiated by NGos
    mapping (address=>Request) public requests;
    // list(array) of all requests
    // index requestId
    Request[] public reqList;

    
    // ngos details
    struct Ngo{
        // ngo number
        uint srNo;
        // account
        address acc;
        // ngo name
        string ngoName;
        // description of the NGO
        string desc;
        // all request IDs made by ngo
        uint256[] requestIds;
        // overall rating
        uint256 rating;

        // total donations taken
        // uint256 totalDonation;
    }
    // storing all ngos with address
    mapping (address=>Ngo) public allNgos;
    // for index of ngoList
    uint256 public ngoNo=0; 
    // array to get all ngo list
    Ngo[] public ngoList;
    // get info of an ngo using (ngoNo-1)or(NGO.srNo-1)


    // donors list
    struct donor{
        uint srNo;
        // account 
        address acc;
        // name
        string name;
        // donation ids which are made by this donor
        uint256[] donationIds;
        // total donation made
        // uint256 totalAmountDonated;
    }   
    // storing all donors
    mapping (address=>donor) public allDonor;
    uint256 public donorNo=0;
    donor[] public donorList;
    // mapping (address=>bool) checkIfDonor;


    // ---------------------------------------------------------------------

    function ifNgo(address _address) public view returns (bool){
            return allNgos[_address].acc!=0x0000000000000000000000000000000000000000;
        }

    // checking if Donor
    function ifDonor(address _address) public view returns (bool){
        return allDonor[_address].acc!=0x0000000000000000000000000000000000000000;
    }

    function getDetail(address _address) public view returns (uint){
        return allNgos[_address].srNo;
    }

    function getDetailDonor(address _address) public view returns (uint){
        return allDonor[_address].srNo;
    }

    // add NGO
    function addNgo(string calldata _name,string calldata _desc) public {
        // register a NGO only if not register earlier
        require(!ifNgo(msg.sender),"you are already registered");

            Ngo memory newNgo = Ngo({
            srNo:ngoNo,
            acc: msg.sender,
            ngoName: _name,
            desc: _desc,
            requestIds: new uint256[](0),
            rating: 0
            // totalRequest: 0,
            // totalDonation: 0
                });

            // entry in the mapping
            allNgos[msg.sender]=(newNgo);
            // entry in ngoList
            ngoList.push(newNgo);
            ngoNo++;
    }

    // add donors
    function addDonor(string calldata _name) public{
        // register a NGO only if not register earlier
        require(!ifDonor(msg.sender),"you are already registered");

            donor memory newDonor = donor({
            srNo:donorNo,
            acc: msg.sender,
            name: _name,
            donationIds: new uint256[](0)
            // totalAmountDonated: 0
                });
            allDonor[msg.sender]=(newDonor);
            donorList.push(newDonor); 
            donorNo++;
               

    }


    // getting all ngo list
    function allNgoList() public view returns (Ngo[] memory){
        return ngoList;
    }

    
    

    // modifier for only ngos
    modifier onlyNGO(){
        require(ifNgo(msg.sender),"You need to be an organization to raise money");
        _;
    }

    // function to make requests by ngos for donations 
    function makeRequest(uint256 _target,string calldata _desc,uint256 _deadline)
     public onlyNGO{
        // requests[msg.sender].deadline*1 days<block.timestamp &&
        require(allNgos[msg.sender].requestIds.length ==0 || requests[msg.sender].completed==true,"You have already made request. Wait for deadline");

        Request storage newReq=requests[msg.sender];
            newReq.reqId=requestID;
            newReq.initiater=payable (msg.sender);
            newReq.target=_target;
            newReq.desc=_desc;
            newReq.deadline=_deadline;
            newReq.totalAmount=0;
            newReq.completed=false;
        
        // requests[msg.sender]=newRequest;

        allNgos[msg.sender].requestIds.push(requestID);
        reqList.push(newReq);
        requestID++;
        // allNgos[msg.sender].totalRequest++;

    }

    function allReqList() public view returns (Request[] memory){
        return reqList;
    }


    // making donations
    function makeDonations(address _address) public payable {
        require(requests[_address].completed==false,"Already Completed");
        require(msg.value>0,"No amount");
        require(requests[_address].totalAmount<requests[_address].target,"Required amount collected");
        // changes in request structure
        requests[_address].totalAmount+=msg.value;
        requests[_address].donors.push(msg.sender);
        // changes in donation structure
        allDonor[msg.sender].donationIds.push(requests[_address].reqId);
    }

    // tranfering money to NGOs
    function makePayment() public onlyNGO{
        // require(block.timestamp>requests[msg.sender].deadline* 1 days,"Deadline not reached");
        require(block.timestamp>requests[msg.sender].deadline,"Deadline not reached");
        require(requests[msg.sender].completed==false,"Already Completed");
        require(requests[msg.sender].target<=requests[msg.sender].totalAmount,"Not enough balance");

        // transfering money
        requests[msg.sender].initiater.transfer(requests[msg.sender].totalAmount);
        requests[msg.sender].completed=true;

    }
}