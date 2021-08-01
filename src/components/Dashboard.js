function Dashboard(props) {
    return (
        <div>
            <h2>Dashboard</h2>
            { props.currentUser ? 
            <nav>
                <p>Hello, {props.currentUser.username}</p>
                <button>Edit Profile</button>
                <button>Logout</button>
            </nav>
            :
            <nav>
				<button>Login</button>
				<button>Register</button>
			</nav>
        }
        </div>
    );
}

export default Dashboard;