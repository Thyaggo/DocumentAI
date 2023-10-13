import React, { useState } from "react";
import Chat from "./Chat";

const ChatRoom = () => {
    const [messages, setMessages] = useState([]);

    const handleSendMessage = (message) => {
        setMessages([...messages, message]);
    };

    return (
        <div>
            <h1>Chat Room</h1>
            <Chat messages={messages} onSendMessage={handleSendMessage} />
        </div>
    );
};

export default ChatRoom;
