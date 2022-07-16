import { Link } from 'react-router-dom';
import Movie2 from '../images/movie2.png'

const Movies = () => {
    return (
            <section class="movies">
                <div class="container flex flex--col">
                    <div class="movies__container flex flex--justify-center">
                        <Link to='/' class="movies__card">
                            <div class="movies__image"><img src={ Movie2 } alt="name of the movie" /></div>
                            <p class="movies__title">Наше время</p>
                        </Link>
                        <Link to='/' class="movies__card">
                            <div class="movies__image"><img src={ Movie2 } alt="name of the movie" /></div>
                            <p class="movies__title">Наше время</p>
                        </Link>
                        <Link to='/' class="movies__card">
                            <div class="movies__image"><img src={ Movie2 } alt="name of the movie" /></div>
                            <p class="movies__title">Наше время</p>
                        </Link>
                        <Link to='/' class="movies__card">
                            <div class="movies__image"><img src={ Movie2 } alt="name of the movie" /></div>
                            <p class="movies__title">Наше время</p>
                        </Link>
                        <Link to='/' class="movies__card">
                            <div class="movies__image"><img src={ Movie2 } alt="name of the movie" /></div>
                            <p class="movies__title">Наше время</p>
                        </Link>
                        <Link to='/' class="movies__card">
                            <div class="movies__image"><img src={ Movie2 } alt="name of the movie" /></div>
                            <p class="movies__title">Наше время</p>
                        </Link>
                        <Link to='/' class="movies__card">
                            <div class="movies__image"><img src={ Movie2 } alt="name of the movie" /></div>
                            <p class="movies__title">Наше время</p>
                        </Link>
                        <Link to='/' class="movies__card">
                            <div class="movies__image"><img src={ Movie2 } alt="name of the movie" /></div>
                            <p class="movies__title">Наше время</p>
                        </Link>
                        <Link to='/' class="movies__card">
                            <div class="movies__image"><img src={ Movie2 } alt="name of the movie" /></div>
                            <p class="movies__title">Наше время</p>
                        </Link>
                        <Link to='/' class="movies__card">
                            <div class="movies__image"><img src={ Movie2 } alt="name of the movie" /></div>
                            <p class="movies__title">Наше время</p>
                        </Link>
                        <Link to='/' class="movies__card">
                            <div class="movies__image"><img src={ Movie2 } alt="name of the movie" /></div>
                            <p class="movies__title">Наше время</p>
                        </Link>
                        <Link to='/' class="movies__card">
                            <div class="movies__image"><img src={ Movie2 } alt="name of the movie" /></div>
                            <p class="movies__title">Наше время</p>
                        </Link>
                    </div>
                    <a href="#" class="btn btn--more">Показать еще</a>
                </div>
            </section>
    );
}
 
export default Movies;