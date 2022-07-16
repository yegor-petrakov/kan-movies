import FooterLogo from '../images/main-logo.svg'

const Footer = () => {
    return (
        <footer class="footer">
            <div class="container">
                <nav class="footer__nav flex flex--justify-between flex--align-center">
                    <div class="footer__logo"><img src={ FooterLogo } alt="main logo" /></div>

                    <ul class="footer__menu flex flex--justify-center flex--align-center">
                        <li class="footer__item"><a href="#" class="footer__link">Фильмы</a></li>
                        <li class="footer__item"><a href="#" class="footer__link">Сериалы</a></li>
                        <li class="footer__item"><a href="#" class="footer__link">Мультфильмы</a></li>
                        <li class="footer__item"><a href="#" class="footer__link">Словарь</a></li>
                    </ul>

                    <form action="#" class="footer__search-bar">
                        <input type="text" class="footer__search" />
                        <button class="btn btn--search"><i class="search-btn"></i></button>
                    </form>
                
                </nav>
            </div>
        </footer>
    );
}
 
export default Footer;