import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './contexts/authContext';
import { Login } from './pages/login';
import { Dashboard } from './pages/dashboard';

function App() {
    const { currentUser } = useAuth(); // Use correct property from authContext

    return (
        <Router>
            <Routes>
                {/* Public Route for Login */}
                <Route path="/login" element={!currentUser ? <Login /> : <Navigate to="/dashboard" />} />

                {/* Private Route for Dashboard */}
                <Route path="/dashboard" element={currentUser ? <Dashboard /> : <Navigate to="/login" />} />

                {/* Catch-all Route */}
                <Route path="*" element={<Navigate to={currentUser ? "/dashboard" : "/login"} />} />
            </Routes>
        </Router>
    );
}

export default App;
