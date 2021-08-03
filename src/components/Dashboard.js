function Dashboard(props) {

    function handleLogin(){
        props.setShowLogin(true);
        props.setShowRegistration(false);
    }

    function handleLogout(){
        props.logout();
    }

    function handleEdit(){
        console.log("Editing Profile");
    }

    function handleRegistration(){
        props.setShowRegistration(true);
        props.setShowLogin(false);
    }

    return (
        <div className="dashboard">
            { props.username ? 
            <nav>
                <ul>
                    <li className="greet">Hello, {props.username}</li>
                    <li onClick={handleEdit} className="dash">Edit Profile</li>
                    <li onClick={handleLogout} className="dash">Logout</li>
                </ul>
                
            </nav>
            :
            <nav>
                <ul>
                    <li onClick={handleLogin} className="dash">Login</li>
                    <li onClick={handleRegistration} className="dash">Register</li>
                </ul>
			</nav>
            }
        </div>
    );
}

export default Dashboard;