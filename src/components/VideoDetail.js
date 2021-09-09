/** @format */

import React from 'react'

const VideoDetail = ({ video }) => {
	if (!video) {
		return <div>Loading...</div>
	}

	const videoSRC = `https://www.youtube.com/embed/${video.id.videoId}`

	return (
		<div>
			<figure className='image is-16by9'>
				<iframe
					title='Video Player'
					src={videoSRC}
					frameBorder='0'
					className='has-ratio'
					allowFullScreen></iframe>
			</figure>
			<div className='card'>
				<div className='card-content'>
					<h4 className='title'>{video.snippet.title}</h4>
					<p>{video.snippet.description}</p>
				</div>
			</div>
		</div>
	)
}

export default VideoDetail
