pragma solidity ^0.5.0;

contract MemberInfo {
    // Member Information is currently stored in the blockchain logs
    // Data operations with different origins should generally not affect each other's data

    // AddInfo will add new elements or turn elements into lists and add to them
    event InfoAdd(address origin, uint256 id, string element, string data);

    function AddInfo(address origin, uint256 id, string memory element, string memory data) public {
        emit InfoAdd(origin, id, element, data);
    }

    // ReplaceInfo will replace elements or items in an element list when the origins match
    // If an element or item is not found with a matching origin, it will act like an InfoAdd
    event InfoReplace(address origin, uint256 id, string element, string olddata, string data);

    function ReplaceInfo(address origin, uint256 id, string memory element, string memory olddata, string memory data) public {
        emit InfoReplace(origin, id, element, olddata, data);
    }

    // InfoDelete will remove elements or items in an element list when the origins match
    // If an element or item is not found with a matching origin, it will have no effect
    event InfoDelete(address origin, uint256 id, string element, string data);

    function DeleteInfo(address origin, uint256 id, string memory element, string memory data) public {
        emit InfoDelete(origin, id, element, data);
    }
}