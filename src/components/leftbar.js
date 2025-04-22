import React, { useState } from 'react';
import './leftbar.css';
import { FaTachometerAlt, FaUsers, FaCog, FaFileAlt, FaChevronLeft, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Leftbar = ({ onNavigate }) => {
    const [expandedModule, setExpandedModule] = useState(null); // Track which module is expanded

    const modules = [
        { name: 'Dashboard', icon: <FaTachometerAlt /> },
        { name: 'Student Management', icon: <FaUsers /> },
        { name: 'Commission', icon: <FaCog /> },
        { name: 'Course Management', icon: <FaFileAlt /> },
        { name: 'User Management', icon: <FaFileAlt /> },
        { name: 'Fees Collection (Account)', icon: <FaFileAlt /> },
        { name: 'Appointment Management', icon: <FaFileAlt /> },
        { name: 'Task Management', icon: <FaFileAlt /> },
        { name: 'Special Date Module', icon: <FaFileAlt /> },
        { name: 'Account Management', icon: <FaFileAlt /> },
        { name: 'Master', icon: <FaFileAlt /> },
        { name: 'Location Master', icon: <FaFileAlt /> }
    ];

    return (
        <div className="sidebar">
            <ul>
                {modules.map((mod) => (
                    <li key={mod.name}>
                        <span className="icon">{mod.icon}</span>
                        {mod.name}
                        <span className="expand-icon">
                            <FaChevronLeft />
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Leftbar;