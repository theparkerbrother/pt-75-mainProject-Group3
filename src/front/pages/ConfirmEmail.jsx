import React from "react";
import { useNavigate } from "react-router-dom";

export const ConfirmEmail = () => {
    const navigate = useNavigate();

    return (
        <div className="container d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
            <div className="card p-4 text-center" style={{ width: "400px" }}>
                <h3 className="mb-3">Thank you for registering!</h3>
                <p className="text-muted">
                    Please confirm your email by clicking the link in the email sent from <strong>noreply@mail.app.supabase.io</strong>.
                </p>
                <p>If you don’t see the email, check your spam folder or request a new one.</p>
                <button className="btn btn-dark w-100 mt-3" onClick={() => navigate("/login")}>
                    Go to Login
                </button>
            </div>
        </div>
    );
};
