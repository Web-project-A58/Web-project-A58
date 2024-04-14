import { CONTAINER_SELECTOR, FAVORITES } from "../common/constants.js";
//import { searchMovies } from "../data/movies.js";
import { toSearchView } from "../views/search-view.js";
import { q, setActiveNav } from "./helpers.js";

export const renderSearchItems = (gifs) => {
 q(CONTAINER_SELECTOR).innerHTML=toSearchView(gifs);
};
