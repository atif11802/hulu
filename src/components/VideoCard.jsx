import "../Styles/VideoCard.css";
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import {forwardRef} from "react";

const base_url = "https://image.tmdb.org/t/p/original/"

const VideoCard = forwardRef(({movie},ref)=> {
    const truncateString = (string, maxLength =3000) => {
        if (!string) return null;
        if (string.length <= maxLength) return string;
        return `${string.substring(0, maxLength)} ...`;
      };

    return (
        <div ref={ref} className="VideoCard">
            
            <img src={`${base_url}${movie.backdrop_path || movie.posters_path}  `} alt="movie poster" />
           
           <p>{truncateString((movie.overview),50)}</p>
            <h2>{movie.original_title || movie.original_name }</h2>
            <p className="videoCard_stats">  
                <ThumbUpIcon/> {movie.vote_count}</p>
        </div>
    )
})
;
export default VideoCard
