function UserControls(props){
    function handleEdit() {
        console.log("Get me the edit form!!!!");
        props.setEditForm({displayForm: true});
    }

    async function handleDelete() {
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