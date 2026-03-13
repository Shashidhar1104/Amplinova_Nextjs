"use client";
// import React, { useState, FormEvent } from "react";

// interface Message {
//   id: number;
//   text: string;
//   fromUser: boolean;
// }

// const Chatbot: React.FC = () => {
//   const [messages, setMessages] = useState<Message[]>([]);
//   const [input, setInput] = useState("");

//   const handleSubmit = (e: FormEvent) => {
//     e.preventDefault();
//     const trimmed = input.trim();
//     if (!trimmed) return;

//     const userMsg: Message = {
//       id: Date.now(),
//       text: trimmed,
//       fromUser: true,
//     };

//     setMessages((prev) => [...prev, userMsg]);
//     setInput("");

//     // placeholder for your bot logic / API call
//     setTimeout(() => {
//       const botMsg: Message = {
//         id: Date.now() + 1,
//         text: `You said: "${trimmed}"`,
//         fromUser: false,
//       };
//       setMessages((prev) => [...prev, botMsg]);
//     }, 500);
//   };

//   return (
//     <div className="chatbot-container">
//       <div className="messages">
//         {messages.map((m) => (
//           <div
//             key={m.id}
//             className={m.fromUser ? "message user" : "message bot"}
//           >
//             {m.text}
//           </div>
//         ))}
//       </div>
//       <form onSubmit={handleSubmit} className="input-form">
//         <input
//           type="text"
//           value={input}
//           onChange={(e) => setInput(e.currentTarget.value)}
//           placeholder="Type a message..."
//         />
//         <button type="submit">Send</button>
//       </form>
//     </div>
//   );
// };

// export default Chatbot;