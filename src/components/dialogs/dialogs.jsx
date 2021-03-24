import React from "react";
import ChatUser from "./chat-user/chat-user";
import MessageItem from "./message-item/message-item";


const Dialogs = (props) => {
    const {state, id} = props;
    const {users, chats} = state;
    const [chat] = chats.filter((chat) => chat.id === parseInt(id));
    const {texts} = chat;
    const [userAvatar] = users.filter((user) => user.id === parseInt(id));

    const elementTextarea = React.createRef();
    const sendMessage = (e) => {
        e.preventDefault();
        const textAreaValue = elementTextarea.current.value;
        console.log(textAreaValue);
    };

    return (
        <div className="main_content_inner pt-0" style={{maxWidth: `1300px`}}>
            <div className="uk-grid-collapse uk-grid" uk-grid="">
                <div className="uk-width-3-4@m uk-first-column">

                    <div className="chats-container margin-top-0">
                        <div className="chats-container-inner">
                            <div className="chats-inbox">
                                <ul>
                                    {users.map((user) => <ChatUser key={user.name} id={user.id} name={user.name} avatar={user.avatar} isOnline={user.isOnline}/>)}
                                </ul>
                            </div>

                            <div className="message-content">
                                <div className="message-content-inner">
                                    {texts.map((text) => {
                                        return <MessageItem key={text.id + Math.random()} text={text.text} isMe={text.isMe} avatar={userAvatar.avatar} id={text.id} users={users}/>;
                                    })}

                                </div>
                                <div className="message-reply">

                                    <form className="uk-flex-middle uk-width-1-1 uk-grid" uk-grid="">
                                        <div className="uk-flex uk-flex-middle mr-3 uk-width-auto uk-first-column">
                                            <a href="#" className="button primary mr-2" uk-tooltip="filter" title="" aria-expanded="false">
                                                <i className="uil-smile-wink"/>
                                            </a>
                                            <a href="#" className="button primary" uk-tooltip="filter" title="" aria-expanded="false">
                                                <i className="uil-link-alt"/>
                                            </a>
                                        </div>

                                        <textarea ref={elementTextarea} className="uk-textarea uk-width-expand" rows="5" placeholder="Your Message" data-autoresize=""/>

                                        <button type="submit" className="button primary uk-width-auto" onClick={sendMessage}>
                                            <i className="uil-plane"/>
                                        </button>

                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )

};

export default Dialogs;
