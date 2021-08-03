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
        return writers.map(writer => <li className="writers-li" key={writer.writer_id}>{writer.username}</li>)
    }

    
    useEffect(() => {
        getWriters();
    }, []);

    return (
        <main id="contributors" className="toggle-content">
            <section>
                <h2>Contributing Writers</h2>
                <ul>
                    { writers ? renderWriters() : <></> }
                </ul>
            </section>
        </main>
    );
}

export default Writers;