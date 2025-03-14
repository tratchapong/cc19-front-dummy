import React, { useState } from "react";
import useUserStore from "../stores/userStore";

function Login() {
  const login = useUserStore((state) => state.login);
  const [input, setInput] = useState({
    username: "",
    password: "",
  });

  const hdlChange = (e) => {
    setInput((prv) => ({ ...prv, [e.target.name]: e.target.value }));
  };
  const hdlLogin = async (e) => {
    try {
      const { username, password } = input;
      e.preventDefault();
      // validation
      if (!username.trim() || !password.trim()) {
        return alert("Please fill all inputs");
      }
      let data = await login(input);
      console.log(data)
    } catch (err) {
      const errMsg = err.response?.data?.error || err.message;
      console.log(errMsg);
      alert(errMsg);
    }
  };
  return (
    <div className="relative flex flex-col justify-center h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-lg">
        <h1 className="text-3xl font-semibold text-center text-purple-700">
          Login Page
        </h1>
        <form className="space-y-4" onSubmit={hdlLogin}>
          <div>
            <label className="label">
              <span className="text-base label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="Email Address"
              className="w-full input input-bordered input-primary"
              name="username"
              value={input.username}
              onChange={hdlChange}
            />
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered input-primary"
              name="password"
              value={input.password}
              onChange={hdlChange}
            />
          </div>

          <div>
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
