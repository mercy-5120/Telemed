import { useEffect, useState } from "react";
import { FaPhoneAlt, FaVideo } from "react-icons/fa";
import { CiMenuKebab } from "react-icons/ci";
import { MdKeyboardVoice, MdEmojiEmotions } from "react-icons/md";
import { IoIosAttach } from "react-icons/io";
import { IoSend } from "react-icons/io5";

export default function Messages({ userType }) {
  const [inputMessage, setInputMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const userKey = userType === "doctor" ? "loggedInDoctor" : "loggedInPatient";
  const chatWithKey =
    userType === "doctor" ? "loggedInPatient" : "loggedInDoctor";

  const loggedInUser = JSON.parse(localStorage.getItem(userKey));
  const chatWith = JSON.parse(localStorage.getItem(chatWithKey));

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("messages")) || [];
    const filtered = stored.filter(
      (msg) =>
        (msg.senderId === loggedInUser.id && msg.receiverId === chatWith.id) ||
        (msg.senderId === chatWith.id && msg.receiverId === loggedInUser.id)
    );
    setMessages(filtered);
  }, [loggedInUser.id, chatWith.id]);

  const handleSend = () => {
    if (inputMessage.trim() === "") return;

    const newMessage = {
      id: Date.now(),
      senderId: loggedInUser.id,
      receiverId: chatWith.id,
      content: inputMessage,
      timestamp: new Date().toISOString(),
    };

    const allMessages = JSON.parse(localStorage.getItem("messages")) || [];
    const updated = [...allMessages, newMessage];
    localStorage.setItem("messages", JSON.stringify(updated));

    setMessages((prev) => [...prev, newMessage]);
    setInputMessage("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <div className="pat-mess">
      <div className="messages">
        <div className="chat-list">
          <div className="search-add">
            <input type="text" placeholder="Search messages.." />
            <div className="add-2">+</div>
          </div>

          <div className="chat-entry-seen">
            <img
              src={`https://ui-avatars.com/api/?name=${chatWith.first_name}+${chatWith.last_name}`}
              className="avatar"
              alt="avatar"
            />
            <div className="text">
              <strong>
                {chatWith.first_name} {chatWith.last_name}
              </strong>
              <small>{messages[messages.length - 1]?.content}</small>
            </div>
            <time>Just now</time>
          </div>
        </div>
      </div>

      <div className="chat-window">
        <div className="header">
          <div className="profile">
            <img
              src={`https://ui-avatars.com/api/?name=${chatWith.first_name}+${chatWith.last_name}`}
              alt="Profile"
            />
            <div className="text-box">
              <h2>
                {chatWith.first_name} {chatWith.last_name}
              </h2>
              <small>Active now</small>
            </div>
          </div>
          <div className="actions">
            <FaPhoneAlt className="action" />
            <FaVideo className="action" />
            <CiMenuKebab className="action" />
          </div>
        </div>

        <div className="messages-area">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`message ${
                msg.senderId === loggedInUser.id
                  ? "message-sent"
                  : "message-received"
              }`}
            >
              {msg.content}
            </div>
          ))}
        </div>

        <div className="input-area">
          <IoIosAttach className="icon-send" />
          <MdKeyboardVoice className="icon-send" />
          <MdEmojiEmotions className="icon-send" />
          <input
            type="text"
            placeholder="Type something .."
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button onClick={handleSend}>
            <IoSend className="icon-send-msg" />
          </button>
        </div>
      </div>
    </div>
  );
}
