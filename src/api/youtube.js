/** @format */

import axios from 'axios'

const YOUTUBE_KEY = 'AIzaSyBB1X-VgHRrnSZvdscR4AyC4aElUm3ikyI'

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		type: 'video',
		maxResults: 5,
		key: YOUTUBE_KEY,
	},
})
