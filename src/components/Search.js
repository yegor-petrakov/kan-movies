const Search = () => {
    return (
        <section class="search">
        <div class="container">

            <div class="btn-group flex flex--align-center">
            <a href="#" class="btn btn--transparent">Все (1022)</a>
            <a href="#" class="btn btn--transparent">Фильмы (500)</a>
            <a href="#" class="btn btn--transparent">Сериалы (322)</a>
            <a href="#" class="btn btn--transparent">Мультфильмы (200)</a>
            </div>

            <div class="btn-container">
            <div class="btn-group flex flex--align-center">
                <a href="#" class="btn btn--select">Акцент<i class="arrow-down"></i></a>
                <a href="#" class="btn btn--select">Страна<i class="arrow-down"></i></a>
                <a href="#" class="btn btn--select">Сложность<i class="arrow-down"></i></a>
                <a href="#" class="btn btn--select">Год выпуска<i class="arrow-down"></i></a>
            </div>
            <a href="#" class="btn btn--select">По популярности<i class="arrow-down"></i></a>
            </div>

            <small class="search__result">Найдено: 811</small>
            <div class="selected-group flex">
            <a href="#" class="btn btn--selected">Для начинающих<i class="cross"></i></a>
            <a href="#" class="btn btn--selected">Тайваньский акцент<i class="cross"></i></a>
            </div>
        </div>
        </section>
    );
}
 
export default Search;