// Import necessary components from react-router-dom and other parts of the application.
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";  // Custom hook for accessing the global state.
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    // Access the global state and dispatch function using the useGlobalReducer hook.
    const { store, dispatch } = useGlobalReducer()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Email:", email, "Password:", password);
        // Handle login logic here
    };

    return (
        <div className="container d-flex justify-content-center align-items-center">
            <div className="card p-4 mt-5" style={{ width: "350px" }}>
                <h3 className="text-center">Login</h3>
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
                    <button type="submit" className="btn btn-dark w-100">
                        Login
                    </button>
                </form>
                <p className="text-center mt-3">
                    Not yet a member?{" "}
                    <span
                        className="text-muted"
                        style={{ cursor: "pointer" }}
                        onClick={() => navigate("/register")}
                    >
                        Register here.
                    </span>
                </p>
            </div>
        </div>
    );
};

