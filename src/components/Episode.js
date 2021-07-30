function Episode(props) {
    return (
        <div className="episode">
            <h4>{props.title}</h4>
            <h5>written by {props.writer}</h5>
            <p>{props.plot}</p>
        </div>
    )
}

export default Episode; 