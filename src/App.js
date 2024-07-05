import React, { Suspense, useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import useRoutes from './routes'
import { AppContext } from './context/AppContext'
import Loader from './Layouts/Loader/Loader'
import useMatchMedia from './hooks/use-match-media.js'
import { isMobile } from 'react-device-detect'
import { HOME_ROUTE } from './utils/const'

import 'overlayscrollbars/overlayscrollbars.css'
import 'swiper/css'
import 'swiper/scss/navigation'
import './App.scss'

function App() {
	const routes = useRoutes()
	let { pathname } = useLocation()
	const { isDesktop } = useMatchMedia()

	const [isAuthenticated, setIsAuthenticated] = useState(false)
	const [activePlanet, setActivePlanet] = useState(1)
	const [activeLand, setActiveLand] = useState(1)
	const [modalIsOpen, setModalIsOpen] = useState(false)
	const [bodyIsLocked, setBodyIsLocked] = useState(false)
	const [headerLight, setHeaderLight] = useState(false)

	useEffect(() => {
		bodyIsLocked ? document.querySelector('body').classList.add('_lock') : document.querySelector('body').classList.remove('_lock')
	}, [bodyIsLocked])

	const changeAuth = () => setIsAuthenticated(!isAuthenticated)

	const saveActivePlanet = slide => setActivePlanet(slide)

	const saveActiveLand = slide => setActiveLand(slide)

	const openModal = () => {
		setModalIsOpen(true)
		setBodyIsLocked(true)
	}

	const closeModal = () => {
		setModalIsOpen(false)
		setBodyIsLocked(false)
	}

	useEffect(() => {
		pathname === HOME_ROUTE ? setHeaderLight(true) : setHeaderLight(false)
	}, [pathname])

	return (
		<AppContext.Provider
			value={{
				isAuthenticated,
				changeAuth,
				saveActivePlanet,
				saveActiveLand,
				activePlanet,
				activeLand,
				isDesktop,
				isMobile,
				openModal,
				closeModal,
				modalIsOpen,
				setBodyIsLocked,
				headerLight,
				setHeaderLight,
			}}
		>
			<Suspense fallback={<Loader />}>{routes}</Suspense>
		</AppContext.Provider>
	)
}

export default App
