import { useEffect, useState, type ChangeEvent } from "react";
import io from "socket.io-client";
type Message = string;

const socket = io("http://localhost:5000");

const App = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [messageInput, setMessageInput] = useState<string>("");

  useEffect(() => {
    socket.on("message", (message: Message) => {
      setMessages([...messages, message]);
    });

    return () => {
      socket.off("message");
    };
  });

  const sendMessage = () => {
    if (messageInput.trim() !== "") {
      socket.emit("message", messageInput);
      setMessageInput("");
    }
  };

  return (
    <div className="App">
      <h1>Simple Chat App</h1>

      <input
        type="text"
        value={messageInput}
        placeholder="Type your message..."
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setMessageInput(e.target.value)
        }
      />
      <button onClick={sendMessage}>Send</button>

      <div className="messages">
        {messages.map((message, index) => (
          <div key={index}>{message}</div>
        ))}
      </div>
    </div>
  );
};

export default App;
