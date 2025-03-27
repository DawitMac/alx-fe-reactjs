import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TodoList from './components/TodoList'; // Import the TodoList component
import Navbar from './components/Navbar'; // If you have a Navbar component
import './App.css'; // Your CSS file if needed

const App = () => {
    return (
        <Router>
            <div>
                <Navbar /> {/* Include Navbar if you have one */}
                <Routes>
                    <Route path="/" element={<TodoList />} /> {/* Set TodoList as the main component */}
                    {/* Add more routes here as needed */}
                </Routes>
            </div>
        </Router>
    );
};

export default App;