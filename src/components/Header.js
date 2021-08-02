import Nav from './Nav';

function Header(props){
    return (
        <header>
			<Nav />
			<h1 id="logo">django_and_flask</h1>
      	</header>
    );
}


export default Header;