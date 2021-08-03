function Nav(){

    const homeElem = document.getElementById('home');
    const episodesElem = document.getElementById('episodes');
    const contributorsElem = document.getElementById('contributors');
    const charactersElem = document.getElementById('characters');
    const bgElem = document.getElementById('bgImage');


    function showHome() {
        homeElem.classList.add('is-visible');
        episodesElem.classList.remove('is-visible');
        contributorsElem.classList.remove('is-visible');
        charactersElem.classList.remove('is-visible');
        bgElem.style.backgroundImage = "url(https://flask-detective-react-frontend.herokuapp.com/images/image1.jpg)"
    }

    function showEps() {
        homeElem.classList.remove('is-visible');
        episodesElem.classList.add('is-visible');
        contributorsElem.classList.remove('is-visible');
        charactersElem.classList.remove('is-visible');
        bgElem.style.backgroundImage = "url(https://flask-detective-react-frontend.herokuapp.com/images/image2.jpg)"
    }

    function showConts() {
        homeElem.classList.remove('is-visible');
        episodesElem.classList.remove('is-visible');
        contributorsElem.classList.add('is-visible');
        charactersElem.classList.remove('is-visible');
        bgElem.style.backgroundImage = "url(https://flask-detective-react-frontend.herokuapp.com/images/image3.jpg)"
    }

    function showCharacters() {
        homeElem.classList.remove('is-visible');
        episodesElem.classList.remove('is-visible');
        contributorsElem.classList.remove('is-visible');
        charactersElem.classList.add('is-visible');
        bgElem.style.backgroundImage = "url(https://flask-detective-react-frontend.herokuapp.com/images/image3.jpg)"
    }


    return (
        <nav className="mainNav">
            <ul>
                <li onClick={showHome}>home</li>
                <li onClick={showCharacters}>characters</li>
                <li onClick={showEps}>episodes</li>
                <li onClick={showConts}>contributors</li>
            </ul>
        </nav>
    )
}

export default Nav;