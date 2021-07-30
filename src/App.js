import './App.css';
import { useState, useEffect } from "react";
import Episode from './components/Episode';


function App() {
  const URL="http://localhost:5000/";
  // const URL="https://flask-detective-api-backend.herokuapp.com/";


  const [episodes, setEpisodes] = useState([{title:"heyooo!", plot:"whaaat?!!"}])

  const [ currentUser, setCurrentUser] = useState({username: "Blake"})

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
    await fetch(URL + '/episodes/' + id, {
      "Content-Type": "application/json",
      "method": "DELETE"
    });
    getEpisodes();
  }

  useEffect(() => {
    getEpisodes()
  }, [])

  return (
    <div className="App">
      <header>
        <h1>Django and Flask</h1>
      </header>
      <main>
        <h2>Episodes</h2>
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
