import React, { useState } from 'react';
import fakedata from "../../user";
import UserInfo from '../UserInfo/UserInfo';
import AddFriend from '../AddFriend/AddFriend';
import "./UserContainer.css";

const UserContainer = () => {
    const [users, setUsers] = useState(fakedata);
    const [addedfriend, setaddedfriend] = useState([]);

    const handleAddFriend = user => {
        const newFriend = [...addedfriend, user];
        setaddedfriend(newFriend);
    }
    return (
        <div className="d-flex">
            <div className="user-container">
                <ul>
                    {
                        users.map(user => <UserInfo handleAddFriend={handleAddFriend} user={user}></UserInfo>)
                    }
                </ul>
            </div>
            <div className="float-right">
                <AddFriend addFriend={addedfriend}></AddFriend>
            </div>
        </div>
    );
};

export default UserContainer;