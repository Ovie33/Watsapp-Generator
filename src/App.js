import "./App.css";
import Controls from "./components/Controls/Controls";
import MessageBox from "./components/MessageBox/MessageBox";
import { useState } from "react";

function App() {
  const [messages, setMessages] = useState([
    {
      text: "Heyyy, how life my guy",
      id: 1,
      owner: "sender",
    },
    {
      text: "Heyyy, how life my guy 2",
      id: 2,
      owner: "sender",
    },
    {
      text: "Heyyy, how life my guy 3",
      id: 3,
      owner: "sender",
    },
    {
      text: "Heyyy, how life my guy 3",
      id: 4,
      owner: "receiver",
    },
  ]);

  const [whoIsToSend, setWhoIsToSend] = useState("sender");

  return (
    <div className="App">
      <div className="flex">
        <MessageBox messages={messages} />
        <Controls whoIsToSend={whoIsToSend} setWhoIsToSend={setWhoIsToSend} />
      </div>
    </div>
  );
}

export default App;
