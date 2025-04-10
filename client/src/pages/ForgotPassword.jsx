import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import axios from "axios";

const ForgotPassword = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSendOtp = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/auth/forgotPassword", { email });
      setMessage(res.data.message);
      setStep(2);
    } catch (err) {
      setMessage(err.response?.data?.message || "Error sending OTP");
    }
  };

  const handleVerifyAndReset = async () => {
    try {
      await axios.post("http://localhost:5000/api/auth/resetPassword", {
        email,
        otp,
        newPassword,
      });
      setMessage("Password reset successful!");
      setTimeout(() => navigate("/login"), 2000);
    } catch (err) {
      setMessage(err.response?.data?.message || "Error resetting password");
    }
  };

  return (
    <div className="flex justify-center items-center h-[80vh]">
      <div className="w-[90%] sm:w-[50%] lg:w-[30%] flex flex-col gap-5">
        <h2 className="text-2xl font-bold text-center">Forgot Password</h2>
        {message && <p className="text-center text-red-600">{message}</p>}

        {step === 1 && (
          <>
            <TextField
              label="Email"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              onClick={handleSendOtp}
              className="bg-blue-700 text-white py-2 rounded"
            >
              Send OTP
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <TextField
              label="OTP"
              fullWidth
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            <TextField
              label="New Password"
              type="password"
              fullWidth
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <button
              onClick={handleVerifyAndReset}
              className="bg-green-700 text-white py-2 rounded"
            >
              Verify & Reset
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
