function Nav(){

    const homeElem = document.getElementById('home');
    const episodesElem = document.getElementById('episodes');
    const contributorsElem = document.getElementById('contributors');
    const charactersElem = document.getElementById('characters');
    const bgElem = document.getElementById('bgImage');
    const btnHome = document.getElementById('btn-home');
    const btnChars = document.getElementById('btn-chars');
    const btnEpis = document.getElementById('btn-epis');
    const btnWriters = document.getElementById('btn-writers');


    function showHome() {
        homeElem.classList.add('is-visible');
        episodesElem.classList.remove('is-visible');
        contributorsElem.classList.remove('is-visible');
        charactersElem.classList.remove('is-visible');
        bgElem.style.backgroundImage = "url(https://flask-detective-react-frontend.herokuapp.com/images/image1.jpg)";

        btnHome.style.borderLeft = '1px solid limegreen';
        btnChars.style.borderLeft = 'none';
        btnEpis.style.borderLeft = 'none';
        btnWriters.style.borderLeft = 'none';
    }

    function showEps() {
        homeElem.classList.remove('is-visible');
        episodesElem.classList.add('is-visible');
        contributorsElem.classList.remove('is-visible');
        charactersElem.classList.remove('is-visible');
        bgElem.style.backgroundImage = "url(https://flask-detective-react-frontend.herokuapp.com/images/image2.jpg)";

        btnHome.style.borderLeft = 'none';
        btnChars.style.borderLeft = 'none';
        btnEpis.style.borderLeft = '1px solid limegreen';
        btnWriters.style.borderLeft = 'none';
    }

    function showConts() {
        homeElem.classList.remove('is-visible');
        episodesElem.classList.remove('is-visible');
        contributorsElem.classList.add('is-visible');
        charactersElem.classList.remove('is-visible');
        bgElem.style.backgroundImage = "url(https://flask-detective-react-frontend.herokuapp.com/images/image3.jpg)";

        btnHome.style.borderLeft = 'none';
        btnChars.style.borderLeft = 'none';
        btnEpis.style.borderLeft = 'none';
        btnWriters.style.borderLeft = '1px solid limegreen';

    }

    function showCharacters() {
        homeElem.classList.remove('is-visible');
        episodesElem.classList.remove('is-visible');
        contributorsElem.classList.remove('is-visible');
        charactersElem.classList.add('is-visible');
        bgElem.style.backgroundImage = "url(https://flask-detective-react-frontend.herokuapp.com/images/image3.jpg)";

        btnHome.style.borderLeft = 'none';
        btnChars.style.borderLeft = '1px solid limegreen';
        btnEpis.style.borderLeft = 'none';
        btnWriters.style.borderLeft = 'none';
    }


    return (
        <nav className="mainNav">
            <ul>
                <li id="btn-home" onClick={showHome}>home</li>
                <li id="btn-chars" onClick={showCharacters}>characters</li>
                <li id="btn-epis" onClick={showEps}>episodes</li>
                <li id="btn-writers" onClick={showConts}>contributors</li>
            </ul>
        </nav>
    )
}

export default Nav;