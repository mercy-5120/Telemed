import { useState } from "react";
import { FaPhoneAlt, FaVideo } from "react-icons/fa";
import { CiMenuKebab } from "react-icons/ci";
import { MdKeyboardVoice, MdEmojiEmotions } from "react-icons/md";
import { IoIosAttach } from "react-icons/io";
import { IoSend } from "react-icons/io5";

export default function DoctorMessages() {
  const [messages, setMessages] = useState([
    {
      from: "Mary Doe",
      content: "Remember to book your appointment for your skin to be checked",
      type: "received",
    },
    { from: "You", content: "Thank you for the reminder!", type: "sent" },
  ]);

  return (
    <div className="doc-mess">
      {/* Sidebar removed; assume it's handled by layout */}

      <div className="messages">
        <div className="chat-list">
          <div className="search-add">
            <input type="text" placeholder="Search messages.." />
            <div className="add-2">+</div>
          </div>

          <div className="chat-entry-seen">
            <img
              src="https://ui-avatars.com/api/?name=Mary+Doe"
              className="avatar"
              alt="avatar"
            />
            <div className="text">
              <strong>Mary Doe</strong>
              <small>Remember to book your appointment for y...</small>
            </div>
            <time>4 min</time>
          </div>

          <div className="chat-entry-seen-over">
            <img
              src="https://ui-avatars.com/api/?name=Mary+Doe"
              className="avatar"
              alt="avatar"
            />
            <div className="text">
              <strong>Mary Doe</strong>
              <small>Remember to book your appointment for y...</small>
            </div>
            <time>4 min</time>
          </div>
        </div>
      </div>

      <div className="chat-window">
        <div className="header">
          <div className="profile">
            <img
              src="https://ui-avatars.com/api/?name=Mary+Doe"
              alt="Profile"
            />
            <div className="text-box">
              <h2>Mary Doe</h2>
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
              className={
                msg.type === "sent" ? "message-sent" : "message received"
              }
            >
              {msg.content}
            </div>
          ))}
        </div>

        <div className="input-area">
          <IoIosAttach className="icon-send" />
          <MdKeyboardVoice className="icon-send" />

          <MdEmojiEmotions className="icon-send" />
          <input type="text" placeholder="Type something .." />
          <button>
            <IoSend className="icon-send-msg" />
          </button>
        </div>
      </div>
    </div>
  );
}
