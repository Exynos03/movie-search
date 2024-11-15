import { RxCross1 } from "react-icons/rx"


const MovieModal = ({loader, setShow, movieDataByTitle}) => {
  return (
    <>
        <div className='popup-wrapper' onClick={() => setShow(false)}></div>
            <div className='popup-contailer'>
                    {
                        loader ? 
                            <>
                                {/* // Need loader */}
                            </>
                        : 
                        <>
                        <img src={movieDataByTitle?.Poster} alt="Poster"/>
                        <div className="movie_details">
                            <RxCross1 style={{background:"transparent", position:"absolute", right:"8px", top:"8px", cursor:"pointer"}} onClick={() => setShow(false)}/>
                            <h3>{movieDataByTitle?.Title}</h3>
                            <p><span>Genre:</span> {movieDataByTitle?.Genre}</p>
                            <p><span>IMDB Rating:</span> {movieDataByTitle?.imdbRating}</p>
                            <p><span>Year:</span> {movieDataByTitle?.Year}</p>
                            <p><span>Writer:</span> {movieDataByTitle?.Writer}</p>
                            <p><span>Actors:</span> {movieDataByTitle?.Actors}</p>
                            <p><span>Language:</span> {movieDataByTitle?.Language}</p>
                            <p><span>Plot</span> <br/>{movieDataByTitle?.Plot}</p>
                        </div>
                        </>
                    }
                </div>   
    </>
  )
}

export default MovieModal
