import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isValidToken, setIsValidToken] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  const { token } = useParams(); 
  const navigate = useNavigate();

  // This runs immediately when the page loads
  useEffect(() => {
    const verifyToken = async () => {
      try {
        // Changed Render URL back to localhost for testing
        await axios.get(`https://password-reset-backend-m4n4.onrender.com/api/auth/verify-token/${token}`);
        setIsValidToken(true); 
      } catch (err) {
        setError(err.response?.data?.message || "Invalid or expired link");
        setIsValidToken(false); 
      } finally {
        setIsLoading(false);
      }
    };
    verifyToken();
  }, [token]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      // Changed Render URL back to localhost for testing
      const response = await axios.post(`https://password-reset-backend-m4n4.onrender.com/api/auth/reset-password/${token}`, {
        password,
      });
      setMessage(response.data.message);
      setIsValidToken(false);
      
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong. Please try again.");
    }
  };

  if (isLoading) {
    return <div className="text-center mt-5"><h3>Verifying your link...</h3></div>;
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow p-4">
            <h3 className="text-center mb-4">Reset Password</h3>
            
            {!isValidToken ? (
              <div className="text-center">
                {message && <div className="alert alert-success">{message}</div>}
                {error && <div className="alert alert-danger">{error}</div>}
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">New Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter your new password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-success w-100">
                  Update Password
                </button>
              </form>
            )}

            {isValidToken && error && <div className="alert alert-danger mt-3">{error}</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
