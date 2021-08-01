import './App.css';
import { useState, useEffect } from "react";
import Episode from './components/Episode';
import EpisodeForm from './components/EpisodeForm';
import LoginForm from './components/LoginForm';


function App() {
  const URL="http://localhost:5000/";
  // const URL="https://flask-detective-api-backend.herokuapp.com/";


  const [episodes, setEpisodes] = useState([{title:"heyooo!", plot:"whaaat?!!"}])

  const [ currentUser, setCurrentUser] = useState({username: "", user_id: null})

  async function getEpisodes() {
    const response = await fetch(URL + 'episodes')
    const data = await response.json();
    console.log(data);
    setEpisodes(data);
  }

  const renderEpisodes = () => {
    return episodes.map(epi => (
      <Episode title={epi.title} plot={epi.plot} writer={epi.writer} episode_id={epi.episode_id} key={epi.episode_id} currentUser={currentUser} deleteEpisode={deleteEpisode}/>
    ));
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


  useEffect(() => {
    getEpisodes()
  }, [])

  return (
    <div className="App">
      <header>
        <h1>Django and Flask</h1>
        <p>Hello, {currentUser.username}</p>
      </header>
      { (currentUser.user_id !== null) ? 
        <EpisodeForm currentUser={currentUser} createEpisode={createEpisode} />
        :
        <LoginForm login={login} />
      }
      <main>
        <h2 className="main_title">A Crowd-Sourced Detective Series</h2>
        <p>Dat zijn ook makelaars in koffie, doch hun adres behoeft ge niet te weten. Ik pas er dus wel op, dat ik geen romans schrijf, of andere valse opgaven doe. <span>Ik heb dan ook </span>altijd opgemerkt dat mensen die zich met zoiets inlaten, gewoonlijk slecht wegkomen. Ik ben drieënveertig jaar oud, bezoek sedert twintig jaren de beurs, en kan dus voor de dag treden, als men iemand roept die ondervinding heeft. Ik heb al wat huizen zien <span>vallen!</span> En gewoonlijk, wanneer ik de oorzaken naging, kwam het me voor, dat die moesten gezocht worden in de verkeerde richting die aan de meesten gegeven was in hun jeugd.</p>
      </main>
      <footer>
      <h2 className="list_title">Episodes</h2>
      { renderEpisodes() }
      </footer>

    </div>
  );
}

export default App;
