import { Link } from 'react-router-dom';
import Movie from '../images/movie1.png'

const Hero = () => {
    return (
        <section class="hero">
            <div class="container flex flex--justify-center flex--col">
                <h1 class="hero__title">Фильмы, сериалы и мультфильмы на китайском языке с двойными субтитрами</h1>
                <div class="hero__buttons flex flex--justify-center">
                <a href="#" class="btn">Новое</a>
                <a href="#" class="btn">Популярное</a>
                <a href="#" class="btn">Лучшее</a>
                </div>
 
                <div class="hero__container-movies flex flex--justify-center">
                <Link to='/' class="hero__card">
                    <div class="hero__image"><img src={Movie} alt="name of the movie" /></div>
                    <p class="hero__title-movie">Восемь сотен</p>
                </Link>
                <Link to='/' class="hero__card">
                    <div class="hero__image"><img src={Movie} alt="name of the movie" /></div>
                    <p class="hero__title-movie">Восемь сотен</p>
                </Link>
                <Link to='/' class="hero__card">
                    <div class="hero__image"><img src={Movie} alt="name of the movie" /></div>
                    <p class="hero__title-movie">Восемь сотен</p>
                </Link>
                <Link to='/' class="hero__card">
                    <div class="hero__image"><img src={Movie} alt="name of the movie" /></div>
                    <p class="hero__title-movie">Восемь сотен</p>
                </Link>
                <Link to='/' class="hero__card">
                    <div class="hero__image"><img src={Movie} alt="name of the movie" /></div>
                    <p class="hero__title-movie">Восемь сотен</p>
                </Link>
                <Link to='/' class="hero__card">
                    <div class="hero__image"><img src={Movie} alt="name of the movie" /></div>
                    <p class="hero__title-movie">Восемь сотен</p>
                </Link>
                </div>

                <a href="#" class="btn btn--more">Показать еще</a>
            </div>
        </section>
    );
}
 
export default Hero;