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

	  const updateEpisode = async (form, id) => {
		  await fetch(props.URL + '/edit_episode/' + id + '/', {
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
		  <Episode title={epi.title} plot={epi.plot} writer={epi.writer} episode_id={epi.episode_id} key={epi.episode_id} currentUser={props.currentUser} deleteEpisode={deleteEpisode} updateEpisode={updateEpisode} />
		  ));
      }
	  

	  return (
	  	<main id="episodes" className="toggle-content">
			<section>
				{ props.currentUser.username ? 
				<EpisodeForm currentUser={props.currentUser} createEpisode={createEpisode} />
				:
				<></>
				}
				<h2>Episodes ({ props.episodes ? props.episodes.length : "?"})</h2>
				{ props.episodes  ? renderEpisodes() : "Loading..." }
			</section>  
        </main>
    )
}

export default Episodes;