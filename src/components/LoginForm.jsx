import { useState } from "react";
import axios from "axios";

const projectID = "968c5593-e031-42d6-8f7b-14beec146568";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = {
      "Project-ID": projectID,
      "User-Name": username,
      "User-Secret": password,
    };

    try {
      await axios.get("https://api.chatengine.io/chats", {
        headers: authObject,
      });

      localStorage.setItem("username", username);
      localStorage.setItem("password", password);

      window.location.reload();
      setError("");
    } catch (err) {
      setError("Oops, incorrect credentials.");
    }
  };

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Chat Application</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            className="input"
            placeholder="Username"
            required
          />
          <input
            type="text"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="input"
            placeholder="Password"
            required
          />
          <div align="center">
            <button type="submit" className="button">
              <span>Start Chating</span>
            </button>
            <h2 className="error">{error}</h2>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
