import React from 'react'
import './mainPage.scss'
import TrackChart from '../charts/TrackChart'

const topBar = () => {
	return (
		<div className='button-wrapper'>
			<div className="topbar-button">
				Tracking
			</div>
			<div className="topbar-button" >
				Meal Prep
			</div>
			<div className="topbar-button">
				Recipes
			</div>
		</div>
	)
}

const title = (titleText) => {
	return (
		<div className="title" >
			{ titleText }
		</div>

	)
}

const MainPage = () => {
	return (
		<div className="main-wrapper">
			<div className="header-wrapper">
				<div className="title-wrapper">
					{ title('EZ-MAC') }
				</div>
				<div className="top-bar-wrapper">
					{ topBar() }
				</div>
			</div>
			<div className="chart-wrapper">
				<TrackChart />
			</div>
		</div>
	)
}

export default MainPage
