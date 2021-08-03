import Nav from './Nav';
import Dashboard from './Dashboard';


function Header(props){
    return (
        <header>
            <section className="nav-section">
                <Nav />
                <Dashboard 
                    showLogin={props.showLogin} 
                    setShowLogin={props.setShowLogin} 
                    showRegistration={props.showRegistration} 
                    setShowRegistration={props.setShowRegistration} 
                    username={props.username} 
		            user_id={props.user_id} 
                />
            </section>
			
			<h1 id="logo">django_and_flask</h1>
      	</header>
    );
}


export default Header;