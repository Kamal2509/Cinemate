import {Routes, Route,} from 'react-router-dom';
import {MovieDetail, MovieList, PageNotFound,Search} from '../pages/Index';


export const AllRoutes = () => {
  return (
    <div className='dark:bg-slate-800'>
    <Routes>
        <Route path='/' element={<MovieList apipath="movie/now_playing"/>}/>
        <Route path='/movie/:id' element={<MovieDetail/>}/>
        <Route path='/movies/popular' element={<MovieList apipath="movie/popular"/>}/>
        <Route path='movies/top' element={<MovieList apipath="movie/top_rated"/>}/>
        <Route path='movies/upcoming' element={<MovieList apipath="movie/upcoming" />}/>
        <Route path='search' element={<Search apipath="search/movie"/>}/>
        <Route path='*' element={<PageNotFound/>}/>
    </Routes>
    
    </div>
  )
}
