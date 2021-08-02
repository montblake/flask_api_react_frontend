function Dashboard(props) {

    function handleLogin(){
        props.setShowLogin(true);
        props.setShowRegistration(false);
    }

    function handleLogout(){
        props.logout();
    }

    function handleRegistration(){
        props.setShowRegistration(true);
        props.setShowLogin(false);
    }

    return (
        <div>
            <h2>Dashboard</h2>
            { props.currentUser ? 
            <nav>
                <span>Hello, {props.currentUser}</span>
                <button>Edit Profile</button>
                <button onClick={handleLogout}>Logout</button>
            </nav>
            :
            <nav>
				<button onClick={handleLogin}>Login</button>
				<button onClick={handleRegistration}>Register</button>
			</nav>
        }
        </div>
    );
}

export default Dashboard;