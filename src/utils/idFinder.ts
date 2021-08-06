import {FULL_YOUTUBE_PATH, SHORT_YOUTUBE_PATH, VIMEO_PATH} from "../constans/common";

export enum VIDEO_SERVICES {
    YOUTUBE = 'YOUTUBE',
    VIMEO = 'VIMEO'
}

const VIDEO_SERVICES_PATH = [
    {
        type: VIDEO_SERVICES.YOUTUBE,
        path: FULL_YOUTUBE_PATH
    },
    {
        type: VIDEO_SERVICES.YOUTUBE,
        path: SHORT_YOUTUBE_PATH
    },
    {
        type: VIDEO_SERVICES.VIMEO,
        path: VIMEO_PATH
    }
]

export const getVideoServiceInfo = (url: string): {id: string, type: VIDEO_SERVICES} => {
    const videoServiceInUrl = VIDEO_SERVICES_PATH.find(service => url.includes(service.path));

    if (!videoServiceInUrl) {
        return {
            id: url, // is videoId
            type: VIDEO_SERVICES.YOUTUBE
        }
    }

    return {
        id: url.replace(videoServiceInUrl.path, ''),
        type: videoServiceInUrl.type
    }

    // if (str.includes(FULL_YOUTUBE_PATH)) {
    //     return str.replace(FULL_YOUTUBE_PATH, '');
    // }
    //
    // if (str.includes(SHORT_YOUTUBE_PATH)) {
    //     return str.replace(SHORT_YOUTUBE_PATH, '');
    // }
    //
    // return str;
}

export default getVideoServiceInfo;