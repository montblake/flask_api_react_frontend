import EpisodeForm from './EpisodeForm';
import Episode from './Episode';

function Episodes(props){
    
    const renderEpisodes = () => {
        return props.episodes.map(epi => (
          <Episode title={epi.title} plot={epi.plot} writer={epi.writer} episode_id={epi.episode_id} key={epi.episode_id} currentUser={props.currentUser} deleteEpisode={props.deleteEpisode}/>
        ));
      }

    return (
        <footer>
            <h2 className="list_title">Episodes</h2>
            { props.currentUser.username ? 
            <EpisodeForm currentUser={props.currentUser} createEpisode={props.createEpisode} />
            :
            <></>
            }
            
            <h3>Episode Collection</h3>
            { props.episodes  ? renderEpisodes() : "Loading..." }
        </footer>
    )
}

export default Episodes;