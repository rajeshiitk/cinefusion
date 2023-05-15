import './App.css'
import { useState, useEffect } from 'react'
import Card from './components/Card'


// import { API_KEY } from "@env";
const API_KEY  = "sash"
const key = API_KEY

const API_URL = "https://imdb-api.com/en/API/SearchMovie/"

function App() {

  const [movies, setMovies] = useState([])
  const [searchMovies, setSearchMovies] = useState("")
  const movie1 = {

    "id": "tt0145487",
    "resultType": "Movie",
    "image": "https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_Ratio0.6757_AL_.jpg",
    "title": "Spider-Man",
    "description": "2002 Tobey Maguire, Kirsten Dunst"

  }

 const  moviedummy = [
    {

"id": "tt014547",
"resultType": "Movie",
"image": "https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_Ratio0.6757_AL_.jpg",
"title": "Spider-Man",
"description": "2002 Tobey Maguire, Kirsten Dunst"

},
    {

"id": "tt014487",
"resultType": "Movie",
"image": "https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_Ratio0.6757_AL_.jpg",
"title": "Spider-Man",
"description": "2002 Tobey Maguire, Kirsten Dunst"

},
    {

"id": "t0145487",
"resultType": "Movie",
"image": "https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_Ratio0.6757_AL_.jpg",
"title": "Spider-Man",
"description": "2002 Tobey Maguire, Kirsten Dunst"

},
    {

"id": "tt045487",
"resultType": "Movie",
"image": "https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_Ratio0.6757_AL_.jpg",
"title": "Spider-Man",
"description": "2002 Tobey Maguire, Kirsten Dunst"

},
    {

"id": "tt01454r87",
"resultType": "Movie",
"image": "https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_Ratio0.6757_AL_.jpg",
"title": "Spider-Man",
"description": "2002 Tobey Maguire, Kirsten Dunst"

},
    {

"id": "tt01f45487",
"resultType": "Movie",
"image": "https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_Ratio0.6757_AL_.jpg",
"title": "Spider-Man",
"description": "2002 Tobey Maguire, Kirsten Dunst"

},
    {

"id": "tt0k145487",
"resultType": "Movie",
"image": "https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_Ratio0.6757_AL_.jpg",
"title": "Spider-Man",
"description": "2002 Tobey Maguire, Kirsten Dunst"

},
    {

"id": "tt014g5487",
"resultType": "Movie",
"image": "https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_Ratio0.6757_AL_.jpg",
"title": "Spider-Man",
"description": "2002 Tobey Maguire, Kirsten Dunst"

},

  ]


  const fetchMovies = async (title) => {
    const response = await fetch(`${key}/${API_URL}/${title}`);
    const data = await response.json();
    // console.log(data);
    setMovies(data.results)
    console.log(title)

  }

  useEffect(() => {
    // fetchMovies("spiderman");


  }, []);

  // console.log(movies)
  // console.log("j")
  return (
    <div className='w-full min-h-screen bg-slate-950 '>
      <div className='max-w-6xl mx-auto'>
        <h1 className='text-3xl text-slate-200 text-center'>CineFusion</h1>

        <div className=' md:mx-auto mx-2 my-8 rounded-xl h-8 md:h-12  md:max-w-sm max-w-[240] shadow-2xl bg-slate-500 items-center justify-between overflow-hidden
        flex '>
          <input className='bg-transparent outline-none md:text-2xl text-sm p-2 text-white w-2/3' value={searchMovies} 
           onChange={(e) => setSearchMovies(e.target.value)}
          placeholder='Search Movies ' type="text " />
          <button className='bg-yellow-600 h-full w-1/3 md:w-28 text-lg md:text-2xl ' onClick={() => {fetchMovies(searchMovies) }}>Search</button>

        </div>

        <main className= '' >
          <div className="movies max-w-6xl flex flex-row flex-wrap gap-8 justify-center">

            {

              moviedummy.length > 0 ? (
                moviedummy.map((movie) => (
                  <Card movie={movie} />
                )
                )
              ) :
                (<h2>No movie found</h2>)
            }



          </div>
        </main>
      </div>
    </div>
  )

}

export default App
