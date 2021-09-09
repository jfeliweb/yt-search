/** @format */

import React, { useState, useEffect } from 'react'
import SearchBar from './SearchBar'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'
import useVideos from '../hooks/useVideos'

const App = () => {
	const [selectedVideo, setSelectedVideo] = useState(null)
	const [videos, search] = useVideos('Adele')

	useEffect(() => {
		setSelectedVideo(videos[0])
	}, [videos])

	return (
		<div className='container'>
			<SearchBar onTermSubmit={search} />
			<div className='columns'>
				<div className='column is-two-thirds'>
					<VideoDetail video={selectedVideo} />
				</div>
				<div className='column'>
					<VideoList onVideoSelect={setSelectedVideo} videos={videos} />
				</div>
			</div>
		</div>
	)
}

export default App
