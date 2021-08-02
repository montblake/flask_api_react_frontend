function Nav(){

    function scrollToHome(){
        window.scrollTo({
            top:0,
            behavoir: "smooth"
        });
    }

    function scrollToEpisodes(){
        window.scrollTo({
            top: 1000,
            behavior: "smooth"
        });
    }

    function scrollToContributors(){
        window.scrollTo({
            top: 2000,
            behavior: "smooth"
        });
    }

    return (
        <nav className="mainNav">
            
            <button onClick={scrollToHome}>home</button>
            <button onClick={scrollToEpisodes}>episodes</button>
            <button onClick={scrollToContributors}>contributors</button>
         
			 
        </nav>
    )
}

export default Nav;