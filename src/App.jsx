import { useState } from 'react'
import './App.css'
import CardImageOverlay from './components/CardImageOverlay'
import Input from './components/Input'
import { getMovieDetailsByTitle, getMovieSearchDetailsByChar } from './api/movie.api'
import MovieModal from './components/MovieModal'
import ReactPaginate from 'react-paginate'
const initialList = [
  {
    Title:"Breaking Bad",
    Type:"series",
    Year:"2008–2013",
    Poster:"https://m.media-amazon.com/images/M/MV5BMzU5ZGYzNmQtMTdhYy00OGRiLTg0NmQtYjVjNzliZTg1ZGE4XkEyXkFqcGc@._V1_SX300.jpg"
  },
  {
    Title:"Mindhunter",
    Type:"series",
    Year:"2017–2019",
    Poster:"https://m.media-amazon.com/images/M/MV5BYTk4NDA4MGMtNjliOC00MjExLWI1YzctOTc4NWIxM2I1YjM5XkEyXkFqcGc@._V1_SX300.jpg"
  },
  {
    Title:"Dark",
    Type:"series",
    Year:"2017–2020",
    Poster:"https://m.media-amazon.com/images/M/MV5BM2RhZGVlZGItMGZiMy00YjdjLWIwMGUtMWYxOGIwNjA0MjNmXkEyXkFqcGc@._V1_SX300.jpg"
  }
]

function App() {
  const [movieList, setMovieList] = useState(initialList)
  const [searchParam, setSearchParam] = useState('')
  const [loader, setLoader] = useState(false)
  const [show, setShow] = useState(false)
  const [movieDataByTitle, setMovieDataByTitle] = useState(null)
  const [totalPages, setTotalPages] = useState(0)
  const [currentPage, setCurrentPage] = useState(0)

  const hanleSearch = async (e) => {
    setLoader(true)
    e.preventDefault()
    const data = await getMovieSearchDetailsByChar(searchParam, 0)
    if(data) {
      setMovieList(data?.Search)
      setTotalPages( Math.round(Number(data?.totalResults)/10) )
    }
    
    setLoader(false)
  }

  const handleClick = async (title) => {
    setLoader(true)
    const response = await getMovieDetailsByTitle(title)
    setLoader(false)
    setShow(true)
    setMovieDataByTitle(response)
  }

  const handlePageChange = async (e) => {
    setLoader(true)
    const data = await getMovieSearchDetailsByChar(searchParam, e.selected)
    if(data) {
      setMovieList(data?.Search)
      setTotalPages( Math.round(Number(data?.totalResults)/10) )
    }
    
    setLoader(false)
  }

  return (
    <>
      { show && <MovieModal setShow={setShow} movieDataByTitle={movieDataByTitle}/>}
      <main>
      <Input searchParam={searchParam} setSearchParam={setSearchParam} hanleSearch={hanleSearch} loader={loader}/>
      <section className='p-10 flex flex-wrap gap-4 justify-center items-center '>
        {
          movieList?.map((item, idx) => (
            <CardImageOverlay 
              title={item.Title}
              type={item.Type}
              thumnail={item.Poster}
              date={item.Year}
              idx={idx}
              key={idx}
              handleClick={handleClick}
            />
          ))
        }
      </section>

      <ReactPaginate
            previousLabel={totalPages > 1 ? ' < ' : ' '}
            nextLabel={totalPages > 1 ? ' > ' : ''}
            breakLabel={'...'}
            breakClassName={'break-me'}
            pageCount={totalPages}
            marginPagesDisplayed={1}
            pageRangeDisplayed={3}
            onPageChange={handlePageChange}
            containerClassName={'m4-que-ans-pagination'}
            subContainerClassName={'pages que-ans-pagination'}
            activeClassName={'active'}
            nextLinkClassName={'m4-ques-page-pagination-arrow'}
            previousLinkClassName={'m4-ques-page-pagination-arrow'}
            // forcePage={parseInt(currentPage)}
          />
  
    </main>
    </>
  )
}

export default App
