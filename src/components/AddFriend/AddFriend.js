import React from 'react';
import "./AddFriend.css";

const AddFriend = (props) => {
    const addedFriend = props.addFriend;
    // console.log(addedFriend);
    let totalSalary = 0;
    for (let i = 0; i < addedFriend.length; i++) {
        const element = addedFriend[i].salary;
        totalSalary += element;

    }
    return (
        <div className="add-friend-status">
            <h1>Status</h1>
            <h2>Friends Number : {addedFriend.length}</h2>
            <h3>Total Salary : {totalSalary}</h3>
        </div>
    );
};

export default AddFriend;