import React from "react";

const MessageItem = (props) => {
    const {text, id, isMe, avatar,users} = props;
    const getAvatar = (users, idd) => users.filter((user) => user.id === idd);

   const [avatarFriend] = getAvatar(users, id);

    return (
        <div className={`message-bubble ${isMe ? `me` : ``}`}>
            <div className="message-bubble-inner">
                <div className="message-avatar"><img src={`${isMe ? avatar : avatarFriend.avatar}`} alt="ava"/>
                </div>
                <div className="message-text">
                    <p>{text}</p>
                </div>
            </div>
            <div className="uk-clearfix"></div>
        </div>
    )
};

export default MessageItem;
