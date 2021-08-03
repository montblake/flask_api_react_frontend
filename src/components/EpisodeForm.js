import { useState } from 'react';

function EpisodeForm(props){
    const [episodeForm, setEpisodeForm] = useState({title: "", plot: "", user_id: props.currentUser.user_id})

    function handleSubmit(event){
        event.preventDefault();
        console.log(episodeForm)
        props.createEpisode(episodeForm);
        setEpisodeForm({title: "", plot: "", user_id: props.currentUser.user_id})
    }

    function handleChange(event) {
        console.log(event.target.name);
        setEpisodeForm(prevState => ({
          ...prevState,
          [event.target.name] : event.target.value
        }));
      }
    
    return (
        <div className="episodeCreator">
            <h2 className="contribute_title">Contribute an Episode</h2>
            <form className="episodeForm" onSubmit={handleSubmit}>
                <input 
                    onChange={handleChange}
                    type="text" 
                    name="title" 
                    placeholder="This is the Title of the Episode" 
                    value={episodeForm.title}
                />
                {/* <h5>Written by {props.currentUser.username}</h5> */}
                <textarea 
                    name="plot" 
                    placeholder="This is the placeholder plot ... Change it."
                    onChange={handleChange}
                    value={episodeForm.plot}
                >
                    
                </textarea>
                <input type="submit" value="submit episode"/>
            </form>
        </div> 
    )
}

export default EpisodeForm;