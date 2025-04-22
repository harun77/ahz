import './dashboard.css';
import Navbar from './navbar.js';
import Leftbar from './leftbar.js';
import Widget from './widget.js'; // Import the Widget component

function Dashboard() {
    return (
        <div className="Dashboard">
            <header className="Dashboard-header">
                <div>
                    <Navbar></Navbar>
                    <Leftbar></Leftbar>
                </div>
            </header>
        </div>
    );
}

export default Dashboard;