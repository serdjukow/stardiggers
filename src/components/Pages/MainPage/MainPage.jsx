import { useEffect, useContext } from 'react'
import './main-page.scss'
import ButtonMarketplace from '../../../Layouts/Buttons/ButtonMarketplace/ButtonMarketplace'
import { AppContext } from '../../../context/AppContext'

const main = {
	title: 'Star Diggers',
	subtitle: 'Launch into evergrowing race for Prosperity and Domination. Explore the depths of unknown worlds and fight for precious resources.',
	mainText: 'Join the',	
}

const MainPage = () => {
	const { isDesktop } = useContext(AppContext)
	useEffect(() => {
		document.querySelector('body')?.classList.remove('dark')
		document.querySelector('.sub-open-link')?.classList.remove('active')
		document.title = `Home`
	})

	return (
		<>
			{isDesktop ? (
				<section className="main-page">
					<div className="main-page__content">
						<p className="main-page__subtitle">{main.subtitle}</p>
						<h1 className="main-page__title"><span>S</span>tar <span>D</span>igger<span>s</span></h1>
						<div className="main-page__text">{main.mainText}</div>
						<ButtonMarketplace>MARKETPLACE</ButtonMarketplace>
					</div>
				</section>
			) : (
				<section className="main-page page-section">
					<div className="main-page__content">
						<h1 className="main-page__title"><span>S</span>tar <span>D</span>igger<span>s</span></h1>
						<ButtonMarketplace>MARKETPLACE</ButtonMarketplace>
						<p className="main-page__subtitle">{main.subtitle}</p>
					</div>
				</section>
			)}
		</>
	)
}

export default MainPage
