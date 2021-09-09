/** @format */
import './VideoItem.css'
import React from 'react'

const VideoItem = ({ video, onVideoSelect }) => {
	return (
		<div
			onClick={() => {
				onVideoSelect(video)
			}}
			className='media video-item'>
			<figure className='media-left'>
				<p className='image'>
					<img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
				</p>
			</figure>
			<div className='media-content'>
				<div className='content'>
					<p className='title is-6'>{video.snippet.title}</p>
				</div>
			</div>
		</div>
	)
}

export default VideoItem
