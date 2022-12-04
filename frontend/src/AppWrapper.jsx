import React from 'react'
import './AppWrapper.scss'
import MainPage from './main-page/mainPage'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const AppWrapper = () => {
	return (
		<div className='app-wrapper'>
			<MainPage />
		</div>
	)
}
export default AppWrapper
