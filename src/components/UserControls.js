function UserControls(props){
    function handleEdit() {
        console.log(props.episode_id);
    }

    async function handleDelete() {
        console.log(props.episode_id)
        props.deleteEpisode(props.episode_id);
    }
    
    
    return (
        <div className="user_controls">
            <button onClick={handleEdit}>EDIT</button>
            <button onClick={handleDelete}>DELETE</button>
        </div>
    );
}

export default UserControls;