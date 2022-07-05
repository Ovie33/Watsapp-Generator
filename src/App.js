import "./App.css";
import Controls from "./components/Controls/Controls";
import MessageBox from "./components/MessageBox/MessageBox";
import { useState } from "react";
import dark from "./components/MessageBoxBackground/messageBackgroundDark.svg";
import light from "./components/MessageBoxBackground/messageBackgroundLight.svg";
function App() {
  const [messages, setMessages] = useState([]);
  const [whoIsToSend, setWhoIsToSend] = useState("sender");
  const [backgroung, setBackgroung] = useState(dark);
  const onClick = () => {
    setBackgroung((prevValue) => (prevValue === dark ? light : dark));
  };

  return (
    <div className={`App ${backgroung === dark ? "dark" : "light"}`}>
      <h2 className="header">WHATSAPP CHAT GENERATOR</h2>
      <div className="flex">
        <MessageBox
          messages={messages}
          setMessages={setMessages}
          backgroung={backgroung}
          onClick={onClick}
          setBackgroung={setBackgroung}
        />
        <Controls
          className="controls"
          whoIsToSend={whoIsToSend}
          setWhoIsToSend={setWhoIsToSend}
          setMessages={setMessages}
        />
      </div>
    </div>
  );
}

export default App;
