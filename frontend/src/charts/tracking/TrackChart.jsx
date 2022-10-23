import React from 'react'
import './TrackChart.scss'

const createTitle = () => {
	const titles = [
		'Food', 'Protein', 'Carbs', 'Fat', 'Calories'
	]
	const titleBar = titles.map((title) => {
		return (
			<div key={title} className="titles">
				{ title }
			</div>
		)
	})
	return (
		<div className="title-bar" >
			{ titleBar }
		</div>
	)
}

const TrackChart = () => {
	return (
		<div className="tracking-chart">
			{ createTitle() }
		</div>
	)
}

export default TrackChart
