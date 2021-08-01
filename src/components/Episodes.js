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
            <h3>Add to the collection</h3>
            <EpisodeForm currentUser={props.currentUser} createEpisode={props.createEpisode} />
            <h3>Past contributions</h3>
            { props.episodes  ? renderEpisodes() : props.getEpisodes() }
        </footer>
    )
}

export default Episodes;