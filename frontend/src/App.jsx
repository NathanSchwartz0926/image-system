import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
    // Check if the user is logged in by checking localStorage
    const isLoggedIn = localStorage.getItem('login') !== null;

    return (
        <>
            <ToastContainer />
            <Routes>
                {/* Redirect to /order if logged in, otherwise to /login */}
                <Route path="/" element={isLoggedIn ? <Navigate to="/order" /> : <Navigate to="/login" />} />
                <Route path="/login" element={<Login />} />
                <Route path="/order" element={<Home />} />
                {/* Catch-all route for any undefined paths */}
                <Route path="*" element={<Navigate to={isLoggedIn ? "/order" : "/login"} />} />
            </Routes>
        </>
    );
}

export default App;
