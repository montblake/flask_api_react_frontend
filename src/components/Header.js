import Dashboard from './Dashboard';
import Nav from './Nav';

function Header(props){
    return (
        <header>
			<h1>Django and Flask</h1>

			<Dashboard currentUser={props.currentUser.username} user_id={props.currentUser.id} login={props.login} register={props.register} />
			
			<Nav />
      	</header>
    );
}


export default Header;