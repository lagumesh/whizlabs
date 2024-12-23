import React, { useState } from 'react';
import { doSignInWithGoogle } from '../hooks/auth';
import { useNavigate, Navigate } from 'react-router-dom'; 
import { useAuth } from '../contexts/authContext';
import Background from '../images/Login.png'
import rightimg from '../images/logo-left.png'
import taskicon from '../images/task.png'

export const Login = () => {
    const { currentUser } = useAuth();
    const [signedIn, setSignedIn] = useState(false);
    const navigate = useNavigate();

    const onGoogleSignIn = async (e) => {
        e.preventDefault();

        if (!signedIn) {
            setSignedIn(true);
            try {
                await doSignInWithGoogle();
                navigate('/');
            } catch (err) {
                setSignedIn(false);
                console.error('Error during Google Sign-In:', err);
            }
        }
    };

    // Conditional rendering for redirection
    if (currentUser) {
        return <Navigate to="/dashboard" />;
    }

    return (
<>
    <div
        className="h-screen flex flex-col md:flex-row items-center md:justify-between justify-center px-6 md:px-10"
        style={{
            backgroundImage: `url(${Background})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
        }}
    >
        {/* Left Section (Text + Login Button) */}
        <div className="flex flex-col justify-center space-y-6 w-full md:w-2/6 text-center md:text-left">
            {/* Text Section */}
            <div className="flex items-center justify-center md:justify-start space-x-3">
                <img
                    src={`${taskicon}`} // Replace with a preferred checklist icon if needed
                    alt="Checklist Icon"
                    className="h-8 w-8"
                />
                <h1 className="text-4xl font-bold text-blue-700">To-Do-List</h1>
            </div>
            <p className="text-gray-500 mt-2">
                Streamline your workflow and track progress effortlessly with our all-in-one task management app.
            </p>

            {/* Google Sign-In Button */}
            <button
                onClick={onGoogleSignIn}
                disabled={signedIn}
                className={`flex items-center justify-center md:justify-start px-6 py-3 bg-black text-white text-lg rounded-2xl shadow-md hover:bg-gray-800 transition duration-300 font-popins ${
                    signedIn ? "opacity-50 cursor-not-allowed" : ""
                }`}
            >
                <img
                    src={"https://imagepng.org/wp-content/uploads/2019/08/google-icon.png"}
                    alt="Google Logo"
                    className="h-5 mr-3"
                />
                {signedIn ? "Signing in..." : "Continue with Google"}
            </button>
        </div>

        {/* Right Section (Image - Hidden on Small Screens) */}
        <div className="hidden md:flex w-1/2 flex items-center justify-end">
            <img
                src={`${rightimg}`} // Replace with the actual image path
                alt="Project Design Illustration"
                className="w-3/4 h-auto object-contain"
            />
        </div>
    </div>
</>

    );
};
