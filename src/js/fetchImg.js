import axios from 'axios';

const URL = 'https://pixabay.com/api/';
const API_KEY = '30145762-bbea4d10537f12ddab0b4a39f';

async function fetchImage(query, page) {
    const respons = await axios.get(
        `${URL}?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    );

    return respons;
}

export default fetchImage;