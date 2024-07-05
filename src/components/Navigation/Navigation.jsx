import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { AppContext } from '../../context/AppContext'
import { NAV_LINKS } from '../../utils/const'

const Navigation = ({ ...props }) => {
	const { isDesktop, headerLight } = useContext(AppContext)
	const [subMenuActive, setSubMenuActive] = useState(false)

	const subLinkToHtml = items => {
		return (
			<ul className="header-nav__sublist">
				{items.map((item, id) => {
					if (item.type === 'sublink') {
						return (
							<li key={id}>
								<NavLink to={item.route} className="header-nav__sublink">
									{item.menuName}
								</NavLink>
							</li>
						)
					}
					return null
				})}
			</ul>
		)
	}

	const subLinkMobileToHtml = items => {
		return (
			<ul className="header-mobile-nav__sublist">
				{items.map((item, id) => {
					if (item.type === 'sublink') {
						return (
							<li key={id}>
								<NavLink to={item.route} className="header-mobile-nav__sublink">
									{item.menuName}
								</NavLink>
							</li>
						)
					}
					return null
				})}
			</ul>
		)
	}

	return (
		<>
			{isDesktop ? (
				<nav className={`header__nav header-nav ${headerLight ? 'header-light' : ''}`}>
					<ul className="header-nav__list">
						{NAV_LINKS.map((item, id) => {
							if (item.type === 'link') {
								return (
									<li key={id}>
										<NavLink to={item.route} className="header-nav__link">
											{item.menuName}
										</NavLink>
									</li>
								)
							} else if (item.type === 'sublinks') {
								return (
									<li key={id}>
										<span className="header-nav__link sub-open-link">{item.menuName}</span>
										{subLinkToHtml(item.links)}
									</li>
								)
							}
							return null
						})}
					</ul>
				</nav>
			) : (
				<nav onClick={props.clickHandler} className={`header__mobile-nav header-mobile-nav ${props.burgerActive ? 'active' : ''}`}>
					<ul className="header-mobile-nav__list">
						{NAV_LINKS.map((item, id) => {
							if (item.type === 'link') {
								return (
									<li key={id}>
										<NavLink to={item.route} className="header-mobile-nav__link">
											{item.menuName}
										</NavLink>
									</li>
								)
							} else if (item.type === 'sublinks') {
								return (
									<li key={id}>
										<span
											onClick={() => {
												setSubMenuActive(!subMenuActive)
											}}
											className={`header-mobile-nav__link sub-open-link ${!subMenuActive ? '' : 'active'}`}
										>
											{item.menuName}
										</span>
										{subLinkMobileToHtml(item.links)}
									</li>
								)
							}
							return null
						})}
					</ul>
				</nav>
			)}
		</>
	)
}

export default Navigation
