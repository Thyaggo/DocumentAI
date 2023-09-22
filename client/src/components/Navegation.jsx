import { Link } from "react-router-dom";

export function Navegation() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <Link to="/" className="navbar-brand">File Manager</Link>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <Link to="/file" className="nav-link active" aria-current="page">File</Link>
                <Link to="/task" className="nav-link">Task</Link>
            
            </div>
            </div>
        </div>
        </nav>
    );
}