import React, { useState } from "react";
import { Input, Button, message } from "antd";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username === "" || password === "") {
      message.error("Please enter both username and password");
      return;
    } else if (!username.includes(".gmail.com")) {
      message.error("Invalid username");
      return;
    }
    console.log("Submitted:", { username, password });
    message.success("Login successful!");
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <Input
          className="mb-4"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input.Password
          className="mb-6"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="primary" block onClick={handleLogin}>
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Login;
