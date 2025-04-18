// Import necessary components from react-router-dom and other parts of the application.
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";  // Custom hook for accessing the global state.
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Define API base URL from environment variables
const backendUrl = import.meta.env.VITE_BACKEND_URL;

export const Register = () => {
    // Access the global state and dispatch function using the useGlobalReducer hook.
    const { store, dispatch } = useGlobalReducer()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        try {
            const response = await fetch(`${backendUrl}/api/register`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            if (response.status === 201) {
                navigate("/confirm-email"); // Redirect to email confirmation page
            } else {
                const data = await response.json();
                alert(data.message || "Registration failed");
            }
        } catch (error) {
            console.error("Error during registration:", error);
            alert("Something went wrong. Please try again.");
        }
    };


    return (
        <div className="container d-flex justify-content-center align-items-center">
            <div className="card p-4 mt-5" style={{ width: "350px" }}>
                <h3 className="text-center">Register</h3>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Confirm Password</label>
                        <input
                            type="password"
                            className="form-control"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-dark w-100">
                        Register
                    </button>
                </form>
                <p className="text-center mt-3">
                    Already have an account?{" "}
                    <span
                        className="text-muted"
                        style={{ cursor: "pointer" }}
                        onClick={() => navigate("/login")}
                    >
                        Login here.
                    </span>
                </p>
            </div>
        </div>
    );
};
