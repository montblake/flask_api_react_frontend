import Dashboard from './Dashboard';
import Nav from './Nav';

function Header(props){
    return (
        <header>
			<Nav />
			<h1>Django and Flask</h1>
			{ !props.showRegistration && !props.showLogin ?
			<Dashboard 
				currentUser={props.currentUser} 
				user_id={props.currentUser.id} 
				setShowLogin={props.setShowLogin} 
				showLogin={props.showLogin}  
				showRegistration={props.ShowRegistration} 
				setShowRegistration={props.setShowRegistration}
				login={props.login} 
				logout={props.logout} 
				register={props.register}
			/>
			:
			<></>
			}
			
			
      	</header>
    );
}


export default Header;