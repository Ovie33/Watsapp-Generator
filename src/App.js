import "./App.css";
import Controls from "./components/Controls/Controls";
import MessageBox from "./components/MessageBox/MessageBox";
import { useState } from "react";

function App() {
  const [messages, setMessages] = useState([]);

  const [whoIsToSend, setWhoIsToSend] = useState("sender");

  return (
    <div className="App">
      <h2 className="header">WAHATAPP CHAT GENERATOR</h2>
      <div className="flex">
        <MessageBox messages={messages} />
        <Controls
          whoIsToSend={whoIsToSend}
          setWhoIsToSend={setWhoIsToSend}
          setMessages={setMessages}
        />
      </div>
    </div>
  );
}

export default App;
