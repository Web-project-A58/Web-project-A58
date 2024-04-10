import { CONTAINER_SELECTOR, FAVORITES } from "../common/constants.js";
import { searchMovies } from "../data/movies.js";
import { toSearchView } from "../views/search-view.js";
import { q, setActiveNav } from "./helpers.js";

export const renderSearchItems = (searchTerm) => {
 const _movies = searchMovies(searchTerm);
 setActiveNav(FAVORITES);
 q(CONTAINER_SELECTOR).innerHTML=toSearchView(_movies,searchTerm);
};
