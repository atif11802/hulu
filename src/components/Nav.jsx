import "../Styles/Nav.css";
import requests from "../components/requests"

function Nav({setSelectedOption}) {



	return (
		<div className="nav">
			<h2 onClick={()=> setSelectedOption(requests.fetchTrending)}>TRENDING</h2>
			<h2 onClick={()=> setSelectedOption(requests.fetchTopRated)}>TOP RATED</h2>
			<h2 onClick={()=> setSelectedOption(requests.fetchActionMovies)}>ACTION</h2>
			<h2 onClick={()=> setSelectedOption(requests.fetchComedyMovies)}>COMEDY</h2>
			<h2 onClick={()=> setSelectedOption(requests.fetchHorrorMovies)}>HORROR</h2>
			<h2 onClick={()=> setSelectedOption(requests.fetchRomanceMovies)}>ROMANCE</h2>
			<h2 onClick={()=> setSelectedOption(requests.fetchMystry)}>MYSTRY</h2>
			<h2 onClick={()=> setSelectedOption(requests.fetchSCIFI)}>SCI-FI</h2>
			<h2 onClick={()=> setSelectedOption(requests.fetchWestern)}>WESTERN</h2>
			<h2 onClick={()=> setSelectedOption(requests.fetchActionMovies)}>ANIMATION</h2>
			<h2 onClick={()=> setSelectedOption(requests.fetchTV)}>MOVIE</h2>
		</div>
	);
}

export default Nav;
