import TextField from "@mui/material/TextField";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../UserContext/UserContext";

const Login = () => {
  const { setUser } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
      );
      setUser(response.data.user);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center w-full h-[80vh]">
      <div className="w-[70%] h-full text-center pt-20 flex flex-col gap-2">
        <div className="text-4xl">
          <h2>Login</h2>
        </div>

        <div className="flex justify-center w-full pt-5">
          <TextField
            fullWidth
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            id="email"
            label="Email"
            variant="outlined"
          />
        </div>

        <div className="flex justify-center w-full pt-5">
          <TextField
            fullWidth
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="outlined"
          />
        </div>

        {/* Forgot Password Link */}
        <div className="flex justify-end w-full pt-2 pr-1 text-blue-600 hover:underline">
          <Link to="/forgotPassword">Forgot Password?</Link>
        </div>

        <div className="flex justify-center w-full pt-5">
          <button
            onClick={handleLogin}
            className="w-full h-12 text-xl text-white bg-[#1E293B]"
          >
            Login
          </button>
        </div>

        <div className="flex justify-center gap-3 pt-5 text-xl">
          <p>You don't have an account?</p>
          <Link to={"/signup"}>
            <span className="font-bold text-red-700 duration-100 ease-in-out hover:text-blue-500">
              Signup
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
