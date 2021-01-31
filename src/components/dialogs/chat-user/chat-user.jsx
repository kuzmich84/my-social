import React from "react";
import {Link} from "react-router-dom";

const ChatUser = (props) => {
    const {id, name, avatar, isOnline} = props;
    return (
        <li className="active-message">

                <div className="message-avatar"><i className={`status-icon ${isOnline ? `status-online` : ``} `}></i><img src={avatar} alt="avatar"/>
                </div>
                <div className="message-by">
                    <div className="message-by-headline">
                        <Link to={`/dialogs/${id}`}><h5>{name}</h5></Link>
                    </div>
                </div>

        </li>
    )
};

export default ChatUser;
