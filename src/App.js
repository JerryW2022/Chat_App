import { ChatEngine } from "react-chat-engine";

import ChatFeed from "./components/ChatFeed";
import LoginForm from "./components/LoginForm";
import "./App.css";

const projectID = "968c5593-e031-42d6-8f7b-14beec146568";

const App = () => {
  if (!localStorage.getItem("username")) return <LoginForm />;

  return (
    // userName='TestUser123'
    // userSecret='123123'
    // userName='CodeNinja42'
    // userSecret='123123'
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem("username")}
      userSecret={localStorage.getItem("password")}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() =>
        new Audio(
          "https://chat-engine-assets.s3.amazonaws.com/click.mp3"
        ).play()
      }
    />
  );
};

// infinite scroll, logout, more customizations...

export default App;
