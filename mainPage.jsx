import React from 'react'
import './mainPage.scss'
import TrackChart from '../charts/tracking/TrackChart'

const topBar = () => {
	const topBarTitles = ['Tracking', 'Meal Prep', 'Recipes']

	const topBarButtons = topBarTitles.map((title) => {
		<div key={title} className="topbar-button">
			{title}
		</div>
	})

	return (
		<div className='top-bar-wrapper'>
			{topBarButtons}
		</div>
	)
}

const trackChart = () => {
	return (
		<div className="chart-wrapper">
			<TrackChart />
		</div>
	)
}

const title = () => {
	const titleText = 'EZ-MAC'
	return (
		<div className="title-wrapper">
			<div className="title" >
				{titleText}
			</div>
		</div>
	)
}

const MainPage = () => {
	return (
		<div className="main-wrapper">
			<div className="header-wrapper">
				{title()}
				{topBar()}
			</div>

			{trackChart()}
		</div>
	)
}

export default MainPage
