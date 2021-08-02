import './App.css';
import { useState, useEffect } from "react";
import LoginForm from './components/LoginForm';
import Header from './components/Header';
import Episodes from './components/Episodes'
import RegistrationForm from './components/RegistrationForm';


function App() {
  // const URL="http://localhost:5000/";
  const URL="https://flask-detective-api-backend.herokuapp.com/";


  const [episodes, setEpisodes] = useState([]);
  const [ currentUser, setCurrentUser] = useState({username: "", user_id: null});
  const [ showLogin, setShowLogin] = useState(false);
  const [ showRegistration, setShowRegistration] = useState(false);


  async function getEpisodes() {
    const response = await fetch(URL + 'episodes')
    const data = await response.json();
    console.log(data);
    setEpisodes(data.episodes);
    if (data.current_user) setCurrentUser({username: data.current_user, user_id: data.user_id})
  }

  const deleteEpisode = async (id) => {
    await fetch(URL + 'episodes/' + id +'/delete', {
      "Content-Type": "application/json",
      "method": "GET"
    });
    getEpisodes();
  }

  const createEpisode = async (form) => {
    await fetch(URL + 'episodes', {
      method: "POST",
      // credentials: "include",
      body: JSON.stringify(form),
      cache: "no-cache",
      headers: new Headers({
        "content-type": "application/json"
      })
    })
    getEpisodes();
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

  async function register(){
    console.log('I am registering.')
  }


  useEffect(() => {
    getEpisodes()
  }, [])

  return (
  <div className="App">
    <Header currentUser={currentUser.username} user_id={currentUser.id} showLogin={showLogin} setShowLogin={setShowLogin} showRegistration={showRegistration} setShowRegistration={setShowRegistration} register={register} login={login}logout={logout} />
    { showRegistration ?
      <RegistrationForm />
      :
      <></>
    }
    { showLogin ? 
      <LoginForm login={login} showLogin={showLogin} setShowLogin={setShowLogin} showRegistration={showRegistration} setShowRegistration={setShowRegistration} />
      :
      <></>
    }
    <Episodes getEpisodes={getEpisodes} episodes={episodes} currentUser={currentUser} deleteEpisode={deleteEpisode} createEpisode={createEpisode} />

    }
  </div>
  );
}

export default App;
