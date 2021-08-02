import './App.css';
import { useState, useEffect } from "react";
import LoginForm from './components/LoginForm';
import Header from './components/Header';
import Footer from './components/Footer';
import Episodes from './components/Episodes'
import RegistrationForm from './components/RegistrationForm';
import Home from './components/Home';
import Writers from './components/Writers';

function App() {
	const URL="http://localhost:5000/";
  	// const URL="https://flask-detective-api-backend.herokuapp.com/";

  
	const [ currentUser, setCurrentUser] = useState({username: "", user_id: null});
	const [ showLogin, setShowLogin] = useState(false);
	const [ showRegistration, setShowRegistration] = useState(false);
	const [episodes, setEpisodes] = useState(null);

	async function getEpisodes() {
		const response = await fetch(URL + 'episodes')
		const data = await response.json();
		console.log('this is data:', data);
		setEpisodes(data.episodes);
	}

	async function login(form){
		console.log('I am logging in!');
		const response = await fetch(URL + 'login', {
		method: "POST",
		cache: "no-cache",
		headers: new Headers({
			"content-type": "application/json"
		}),
		body: JSON.stringify(form)
		});
		const data = await response.json();
		console.log(data.username)
		setCurrentUser({username: data.username, user_id: data.user_id})
	}


  async function logout(){
    const response = await fetch(URL + 'logout');
    const data = await response.json();
    console.log(data);
    setCurrentUser({username: data.username, user_id: data.user_id})
  }


  async function register(form){
    console.log('I am registering.')
	const response = await fetch(URL + 'register', {
		method: "POST",
		cache: "no-cache",
		headers: new Headers({
		  "content-type": "application/json"
		}),
		body: JSON.stringify(form)
	  });
	  const data = await response.json();
	  console.log(data)
  }


  async function getCurrentUser(){
	  console.log("getting user");
	  const response = await fetch(URL);
	  const data = await response.json();
	  console.log(data);
  }

  
  

  useEffect(() => {
	  getEpisodes();
	  getCurrentUser();

  }, [])


  return (
  <div className="App">
    <Header 
    	currentUser={currentUser.username} 
		user_id={currentUser.id} 
		showLogin={showLogin} 
		setShowLogin={setShowLogin} 
		showRegistration={showRegistration} 
		setShowRegistration={setShowRegistration} 
		register={register} 
		login={login} 
		logout={logout} />
	<div className="user-section">
		{ showRegistration ?
			<RegistrationForm
				showLogin={showLogin} 
				setShowLogin={setShowLogin} 
				showRegistration={showRegistration} 
				setShowRegistration={setShowRegistration} 
				register={register} 
		/>
		:
		<></>
		}
		{ showLogin ? 
			<LoginForm
				login={login} 
				showLogin={showLogin} 
				setShowLogin={setShowLogin} 
				showRegistration={showRegistration} 
				setShowRegistration={setShowRegistration} 
			/>
			:
			<></>
		}
	</div>

	<Home />
    <Episodes currentUser={currentUser} setCurrentUser={setCurrentUser} episodes={episodes} getEpisodes={getEpisodes} URL={URL} />
	{ console.log("episodes:", episodes)}
	<Writers currentUser={currentUser} setCurrentUser={setCurrentUser} URL={URL} />
	<Footer />

  </div>
  );
}

export default App;