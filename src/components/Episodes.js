import EpisodeForm from './EpisodeForm';
import Episode from './Episode';

function Episodes(props){
		
	  const deleteEpisode = async (id) => {
		await fetch(props.URL + 'episodes/' + id +'/delete', {
		  "Content-Type": "application/json",
		  "method": "GET"
		});
		props.getEpisodes();
	  }
	
	  const createEpisode = async (form) => {
		await fetch(props.URL + 'episodes', {
		  method: "POST",
		  body: JSON.stringify(form),
		  cache: "no-cache",
		  headers: new Headers({
			"content-type": "application/json"
		  })
		})
		props.getEpisodes();
	  }
	  
	  const renderEpisodes = () => {
		  return props.episodes.map(epi => (
		  <Episode title={epi.title} plot={epi.plot} writer={epi.writer} episode_id={epi.episode_id} key={epi.episode_id} currentUser={props.currentUser} deleteEpisode={deleteEpisode}/>
		  ));
      }
	  

	  return (
	  	<main id="episodes">
            <h2 className="list_title">Episodes</h2>
            { props.currentUser.username ? 
            <EpisodeForm currentUser={props.currentUser} createEpisode={createEpisode} />
            :
            <></>
            }
            { props.episodes  ? renderEpisodes() : "Loading..." }
        </main>
    )
}

export default Episodes;