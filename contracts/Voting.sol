// SPDX-License-Identifier: MIT
pragma solidity >=0.4.0 <0.9.0;

contract Election {
    // Enum representing the possible states of the election
    enum State {
        NotStarted,
        InProgress,
        Ended
    }

    // Struct representing a candidate
    struct Candidate {
        uint256 id;
        string name;
        uint256 voteCount;
    }

    // Contract owner's address and current state of the election
    address public owner;
    State public electionState;

    // Struct representing a voter
    struct Voter {
        uint256 id;
        string name;
    }

    // Mapping to store candidate details using their IDs
    mapping(uint256 => Candidate) candidates;
    // Mapping to keep track of whether a voter has voted
    mapping(address => bool) voted;
    // Mapping to check if an address is a registered voter
    mapping(address => bool) isVoter;
    // Counts of candidates and voters
    uint256 public candidatesCount = 0;
    uint256 public votersCount = 0;

    // Contract constructor initializing owner and setting the initial state
    constructor() {
        owner = msg.sender;
        electionState = State.NotStarted;
    }

    // Event emitted when a vote is cast
    event Voted(uint256 indexed _candidateId);

    // Function to start the election, restricted to the owner
    function startElection() public {
        require(msg.sender == owner);
        require(electionState == State.NotStarted);
        electionState = State.InProgress;
    }

    // Function to end the election, restricted to the owner
    function endElection() public {
        require(msg.sender == owner);
        require(electionState == State.InProgress);
        electionState = State.Ended;
    }

    // Function to add a candidate, restricted to the owner and before the election starts
    function addCandidate(string memory _name) public {
        require(owner == msg.sender, "Only owner can add candidates");
        require(
            electionState == State.NotStarted,
            "Election has already started"
        );

        candidates[candidatesCount] = Candidate(candidatesCount, _name, 0);
        candidatesCount++;
    }

    // Function to add a voter, restricted to the owner and before the election starts
    function addVoter(address _voter) public {
        require(owner == msg.sender, "Only owner can add voter");
        require(!isVoter[_voter], "Voter already added");
        require(
            electionState == State.NotStarted,
            "Voter can't be added after election started"
        );

        isVoter[_voter] = true;
    }

    // Function to get the role of an address (owner, voter, or unauthorized)
    function getRole(address _current) public view returns (uint256) {
        if (owner == _current) {
            return 1;
        } else if (isVoter[_current]) {
            return 2;
        } else {
            return 3;
        }
    }

    // Function to allow a registered voter to cast a vote for a candidate
    function vote(uint256 _candidateId) public {
        require(
            electionState == State.InProgress,
            "Election is not in progress"
        );
        require(isVoter[msg.sender], "Non authorised user cannot vote");
        require(!voted[msg.sender], "You have already voted");
        require(
            _candidateId >= 0 && _candidateId < candidatesCount,
            "Invalid candidate ID"
        );

        candidates[_candidateId].voteCount++;
        voted[msg.sender] = true;

        // Emit the Voted event
        emit Voted(_candidateId);
    }

    // Function to get details of a candidate by their ID
    function getCandidateDetails(
        uint256 _candidateId
    ) public view returns (string memory, uint256) {
        require(
            _candidateId >= 0 && _candidateId < candidatesCount,
            "Invalid candidate ID"
        );
        return (
            candidates[_candidateId].name,
            candidates[_candidateId].voteCount
        );
    }
}
