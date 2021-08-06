import axios from "axios";
import {API_KEY, API_YOUTUBE_BASE_URL} from "../constans/common";

const YOUTUBE_ID_PREFIX = '&id=';

//TODO add types
const youtubeAPI = {
    getVideosList(videos: any[]) {
        //TODO finalize
        const params = 'part=snippet%2CcontentDetails%2Cstatistics';
        const normalizeIds = videos.map(video => YOUTUBE_ID_PREFIX + video.id).join('');

        return axios.get(`${API_YOUTUBE_BASE_URL}videos?${params}${normalizeIds}&key=${API_KEY}` )
            .then(response => {
                return response.data.items;
            })
    }
}

export default youtubeAPI;
