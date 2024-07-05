import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../../context/AppContext'
import { useNavigate } from 'react-router-dom'
import { isMobile } from 'react-device-detect'
import { HOME_ROUTE, IDENTIFICATION_ROUTE } from '../../utils/const'
import ButtonConnect from '../../Layouts/Buttons/ButtonConnect/ButtonConnect'
import Navigation from '../../components/Navigation/Navigation'
import './header.scss'

const Header = () => {
	const { isAuthenticated, changeAuth, isDesktop, setBodyIsLocked } = useContext(AppContext)
	const history = useNavigate()
	const [burgerActive, setBurgerActive] = useState(false)

	useEffect(() => {
		burgerActive ? setBodyIsLocked(true) : setBodyIsLocked(false)
	}, [burgerActive])

	const clickHandler = e => {
		const link = e.target.tagName.toLowerCase()
		if (link === 'a') {
			setBurgerActive(!burgerActive)
		}
	}

	const onClick = () => {
		changeAuth()
		history('/identification')
	}

	return (
		<>
			{isDesktop ? (
				<header className="header">
					<Link to={HOME_ROUTE} className="header__logo header-logo">
						<img src={require('../../assets/images/logo.png')} alt="logo" />
					</Link>

					<Navigation />
					{!isMobile ? (
						<div className="header__buttons header-buttons">
							{isAuthenticated ? (
								<>
									<Link to={IDENTIFICATION_ROUTE} className="button button-user"></Link>
									<div className="button button-currency">MATIC - 1000</div>
								</>
							) : (
								<ButtonConnect onClick={onClick}>Coming Soon</ButtonConnect>
							)}
						</div>
					) : null}
				</header>
			) : (
				<>
					<header className="header">
						<Link to={HOME_ROUTE} className="header__logo header-logo">
							<img src={require('../../assets/images/logo.png')} alt="logo" />
						</Link>
						<div onClick={() => setBurgerActive(!burgerActive)} className={`burger ${burgerActive ? 'active' : ''}`}>
							<div className={`burger__wrapper`}>
								<div className="burger__middle"></div>
							</div>
						</div>
					</header>
					<Navigation burgerActive={burgerActive} clickHandler={clickHandler} />
				</>
			)}
		</>
	)
}
export default Header
