import React, { useRef } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header/Header'
import SocialLinks from '../Layouts/SocialLinks/SocialLinks'
import Modal from 'react-modal'
import useScollbar from '../hooks/useScollbar'
import useMatchMedia from '../hooks/use-match-media.js'
import ModalComponent from '../components/ModalComponent/Modal'

Modal.setAppElement('#root')

const AppPages = () => {
	const { isDesktop } = useMatchMedia()
	const scrollWrapper = useRef(null)

	useScollbar(scrollWrapper, isDesktop)

	return (
		<div className="scroll-wrapper" style={{ height: isDesktop ? '100vh' : 'auto' }} ref={scrollWrapper}>
			<div className="wrapper">
				<Header />

				<main className="page">
					<Outlet />
				</main>

				<SocialLinks />

				<ModalComponent />

			</div>
		</div>
	)
}
export default AppPages
