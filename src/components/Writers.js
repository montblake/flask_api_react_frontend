import { useEffect, useState } from 'react';


function Writers(props) {
    const [writers, setWriters] = useState(null);

    async function getWriters() {
        console.log("getting writers");
		const response = await fetch(props.URL + 'writers')
		const data = await response.json();
		console.log('this is writers:', data.writers);
        setWriters(data.writers)
	}


    function renderWriters() {
    console.log("I am rendering writers")
        return writers.map(writer => <li key={writer.writer_id}>{writer.username}</li>)
    }

    
    useEffect(() => {
        getWriters();
    }, []);

    return (
        <main id="contributors">
            <h2 className="list_title">Contributing Writers</h2>
            <ul>
                { writers ? renderWriters() : <></> }
            </ul>
        </main>
    );
}

export default Writers;