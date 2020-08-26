import React from 'react';
import "./UserInfo.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const UserInfo = (props) => {
    // console.log(props);
    const { name, email, phone, website, img, salary } = props.user;
    const element = <FontAwesomeIcon icon={faPlus} />
    return (
        <div className="user-info">
            <div className="user-img">
                <img src={img} alt="" className="w-100" />
            </div>
            <div>
                <h3>{name}</h3>
                <p><span>Email -</span> {email}</p>
                <p><span>Phone -</span> {phone}</p>
                <p><span>Salary -</span> {salary}{"$"}</p>
                <p><span>Website -</span> {website}</p>
                <button className="add-btn" onClick={() => props.handleAddFriend(props.user)}>{element} Add Friend</button>
            </div>
        </div>
    );
};

export default UserInfo;