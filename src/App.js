import './App.css';
import { useState, useEffect } from "react";
import Episode from './components/Episode';
import EpisodeForm from './components/EpisodeForm';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import Episodes from './components/Episodes'
import Home from './components/Home';
import Writers from './components/Writers';

function App() {
  const URL="http://localhost:5000/";
  // const URL="https://flask-detective-api-backend.herokuapp.com/";


  const [episodes, setEpisodes] = useState([])
  const [ currentUser, setCurrentUser] = useState({username: "", user_id: null})

  async function getEpisodes() {
    const response = await fetch(URL + 'episodes')
    const data = await response.json();
    console.log(data);
    setEpisodes(data.episodes);
    if (data.current_user) setCurrentUser({username: data.current_user, user_id: data.user_id})
  }

  // const renderEpisodes = () => {
  //   return episodes.map(epi => (
  //     <Episode title={epi.title} plot={epi.plot} writer={epi.writer} episode_id={epi.episode_id} key={epi.episode_id} currentUser={currentUser} deleteEpisode={deleteEpisode}/>
  //   ));
  // }

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
     <Header currentUser={currentUser.username} user_id={currentUser.id} register={register} login={login}/>
      <Episodes getEpisodes={getEpisodes} episodes={episodes} currentUser={currentUser} deleteEpisode={deleteEpisode}/>
    </div>
  );
}

export default App;
