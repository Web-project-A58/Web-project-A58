import { CONTAINER_SELECTOR, FAVORITES } from "../common/constants.js";

import { toSearchView } from "../views/search-view.js";
import { q } from "./helpers.js";

export const renderSearchItems = (gifs) => {
 q(CONTAINER_SELECTOR).innerHTML=toSearchView(gifs);
};
