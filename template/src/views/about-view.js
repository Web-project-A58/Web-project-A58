import { getUploaded } from "../data/uploaded-gifs.js";
import { fetchGifsById } from "../requests/request-service.js";

export const toAboutView = () => `
<div id="trending-gifs">
    <h3>Trending</h3>
    ${getUploaded().map((id) => {
            const test = fetchGifsById(id);
            console.dir(test)
    }
        )} 
</div>
`;