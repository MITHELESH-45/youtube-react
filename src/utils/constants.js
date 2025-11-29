

const Youtube_API_KEY=import.meta.env.VITE_YOUTUBE_API_KEY;

export const Youtube_video_url="https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+Youtube_API_KEY;