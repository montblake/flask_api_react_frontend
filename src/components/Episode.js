import { useState } from 'react';
import UserControls from './UserControls';

function Episode(props) {
    const [ displayFull, setDisplayFull ] = useState(false);

    function handleClick() {
        setDisplayFull(!displayFull);
    }

    function fullEp() {

        return (
            <div className="episode_full">
                <button onClick={handleClick} className="episode_closer">CLOSE</button>
                <h4>{props.title}</h4>
                <p>{props.episode_id}</p>
                <h5>written by {props.writer}</h5>
                <p>{props.plot}</p>
                { props.currentUser.username === props.writer ?<UserControls episode_id={props.episode_id} deleteEpisode={props.deleteEpisode}/> : "" }
                    
            </div>
        )
    }

    function listEp() {
        return (
            <div key={props.episode_id} className="episode_link">
              <h4 onClick={handleClick}>{props.title}</h4><span>written by {props.writer}</span>
            </div>
          )
    }
    
    
    
    return (displayFull ? fullEp() : listEp() )
}

export default Episode; 