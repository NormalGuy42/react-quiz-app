const StartScreen = ({start,setStart})=>{
    const gameStart = ()=>{
        setStart(false);
    }
    return(
        <div className="start-container">
            <h1>Bienvenue</h1>
            <img src="public/assets/flag.webp" alt="" />
            <p>Le but du jeu est de deviner la nationalité de personnes juste avec l'image présentée. Bonne chance!</p>
            <button onClick={()=>gameStart()}>Commencer</button>
        </div>
    )
}

export default StartScreen;