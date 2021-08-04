import { useState } from 'react';
import UserControls from './UserControls';
import EpisodeForm from './EpisodeForm';

function Episode(props) {
    const [ displayFull, setDisplayFull ] = useState(false);
    const [ editForm, setEditForm ] = useState({displayForm: false});

    function handleClick() {
        console.log('clicked!!!');
        setDisplayFull(!displayFull);
    }

    function renderEpisode() {
        return (
            <div key={props.episode_id} className="episode_full">
                <button onClick={handleClick} className="episode_closer">CLOSE</button>
                <h4>{props.title}</h4>
                <h5>written by {props.writer}</h5>
                <p className="plot">{props.plot}</p>
                { (props.currentUser.username === props.writer) 
                ?
                <UserControls 
                    episode_id={props.episode_id} 
                    deleteEpisode={props.deleteEpisode} 
                    setEditForm={setEditForm} 
                    editForm={editForm} 
                    currentUser={props.currentUser}
                /> 
                : 
                <></> 
                }        
            </div>
        )
    }

    function renderEpisodeEdit() {
        return (
            <EpisodeForm 
                currentUser={props.currentUser} 
                editForm={editForm.displayForm}
                setEditForm={setEditForm} 
                title={props.title} 
                plot={props.plot}
                episode_id={props.episode_id}
                updateEpisode={props.updateEpisode}
            />
        )
    }


    function fullEp() {
        return (
            editForm.displayForm ? renderEpisodeEdit() : renderEpisode()
        )
    }

    function listEp() {
        return (
            <div key={props.episode_id} >
              <h4 onClick={handleClick} className="episode_link">{props.title}</h4>
              <h5 className="list-writer">written by {props.writer}</h5>
            </div>
        )
    }
    
    return (displayFull ? fullEp() : listEp() )
}

export default Episode; 