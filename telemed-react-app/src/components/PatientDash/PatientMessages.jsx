import { useState } from "react";
import { FaPhoneAlt, FaVideo } from "react-icons/fa";
import { CiMenuKebab } from "react-icons/ci";
import { MdKeyboardVoice, MdEmojiEmotions } from "react-icons/md";
import { IoIosAttach } from "react-icons/io";
import { IoSend } from "react-icons/io5";

export default function PatientMessages() {
  const [messages, setMessages] = useState([
    {
      from: "Mary Doe",
      content: "Hi, this is Dr. Mary. Hope you're doing well today.",
      type: "received",
    },
    {
      from: "You",
      content: "Yes doctor, I’ve been feeling a bit off lately.",
      type: "sent",
    },
    {
      from: "Mary Doe",
      content: "Can you describe your symptoms?",
      type: "received",
    },
  ]);

  const [inputMessage, setInputMessage] = useState("");

  const autoReplies = [
    "Okay, I’ve noted that.",
    "Let’s confirm a booking then.",
    "Try to rest and drink water.",
    "I’ll review your file and get back to you.",
    "Thanks. We'll follow up soon.",
  ];

  const handleSend = () => {
    if (inputMessage.trim() === "") return;

    const newMessage = {
      from: "You",
      content: inputMessage,
      type: "sent",
    };

    setMessages((prev) => [...prev, newMessage]);
    setInputMessage("");

    setTimeout(() => {
      const reply = autoReplies[Math.floor(Math.random() * autoReplies.length)];

      setMessages((prev) => [
        ...prev,
        {
          from: "Mary Doe",
          content: reply,
          type: "received",
        },
      ]);
    }, 1200);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <div className="pat-mess">
      {/* Sidebar assumed to be in layout */}
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
              className={`message ${
                msg.type === "sent" ? "message-sent" : "message-received"
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
