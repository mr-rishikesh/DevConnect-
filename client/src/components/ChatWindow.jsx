import { useState } from "react";
import { Paperclip, Smile, Send } from "lucide-react";

const ChatWindow = ({ activeChat }) => {
  const [messages, setMessages] = useState([
    { fromSelf: false, text: "Hey there! Ready to collaborate?", timestamp: "10:00 AM" },
    { fromSelf: true, text: "Absolutely! Let’s build something cool 💻", timestamp: "10:01 AM" },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const handleSend = () => {
    if (!newMessage.trim()) return;
    const newMsg = {
      fromSelf: true,
      text: newMessage,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };
    setMessages((prev) => [...prev, newMsg]);
    setNewMessage("");
  };

  return (
    <div className="flex flex-col h-full bg-white dark:bg-gray-900 border-l border-gray-200 dark:border-gray-700">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center space-x-3">
          <img
            src={activeChat.avatar}
            alt="avatar"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h2 className="text-sm font-semibold text-gray-900 dark:text-white">{activeChat.name}</h2>
            <span
              className={`text-xs ${activeChat.online ? "text-green-500" : "text-gray-400"
                }`}
            >
              {activeChat.online ? "Online" : "Offline"}
            </span>
          </div>
        </div>
        {/* Back button for mobile */}
        <button className="md:hidden text-gray-500 dark:text-gray-300">←</button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex ${msg.fromSelf ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-xs px-4 py-2 rounded-lg text-sm transition-all duration-300 hover:scale-[1.02] ${msg.fromSelf
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white"
                }`}
            >
              <p>{msg.text}</p>
              <span className="block text-[10px] text-right mt-1 text-gray-400 dark:text-gray-500">
                {msg.timestamp}
              </span>
            </div>
          </div>
        ))}

        {/* Typing Indicator */}
        {activeChat.online && (
          <div className="flex justify-start">
            <div className="bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-4 py-2 rounded-lg text-sm animate-pulse">
              {activeChat.name} is typing...
            </div>
          </div>
        )}
      </div>

      {/* Message Input */}
      <div className="border-t border-gray-200 dark:border-gray-700 p-3">
        <div className="flex items-center space-x-2">
          <button className="text-gray-500 dark:text-gray-300">
            <Smile className="w-5 h-5" />
          </button>
          <button className="text-gray-500 dark:text-gray-300">
            <Paperclip className="w-5 h-5" />
          </button>
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            className="flex-1 px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none"
            placeholder="Type a message..."
          />
          <button
            onClick={handleSend}
            className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full transition"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
