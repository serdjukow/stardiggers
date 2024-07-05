import { useEffect, useContext, useState } from 'react'
import PageTitle from '../../../Layouts/PageTitle/PageTitle'
import './road-map-page.scss'
import { AppContext } from '../../../context/AppContext'

const RoadMapPage = () => {
	const { isDesktop } = useContext(AppContext)
	const [modalOpen, setModalOpen] = useState(false)
	const [phase, setPhase] = useState([])
	useEffect(() => {
		document.querySelector('body')?.classList.add('dark')
		document.querySelector('.sub-open-link')?.classList.remove('active')
		modalOpen ? document.querySelector('body')?.classList.add('_lock') : document.querySelector('body')?.classList.remove('_lock')
		document.title = `Road Map`
	})

	const road_map_phase = [
		{
			title: 'DAWN OF DIGGER',
			phase: 'PHASE 1',
			items: ['Concept Creation', 'Game Design Development'],
		},
		{
			title: 'TO THE STARS',
			phase: 'PHASE 2',
			items: ['Diggers NFT development', 'Governance token development', 'Initial advisors onboarding', 'StarDiggers Land NFTs'],
		},
		{
			title: 'FRONTIER',
			phase: 'PHASE 3',
			items: ['Community building', 'Whitelists Open', 'Diggers NFT presale', 'Land NFT presale', 'Founders pack launch'],
		},
		{
			title: 'PIONEERS',
			phase: 'PHASE 4',
			items: ['StarDiggers MVP launch', 'Play to earn mechanics', 'The Space Fair Launch', 'Introduction of StarDiggers Artels'],
		},
		{
			title: 'RACE TO THE DEPTHS',
			phase: 'PHASE 5',
			items: ['Strategic partnerships', 'Coinmarketcap listing', 'StarDiggers Planetary Govemance', 'Land development mechanics'],
		},
		{
			title: 'MOBILE',
			phase: 'PHASE 6',
			items: ['PVP launch', 'Competitive game modes launch', 'Community tournaments'],
		},
	]

	const openModal = e => {
		const currentPhase = road_map_phase.filter((item, id) => id == e.currentTarget.id)
		setModalOpen(!modalOpen)
		setPhase([...currentPhase])
	}
	
	const modalToHtml = phase => (
		<div className="road-map-modal__body">
			<span onClick={() => setModalOpen(false)} className="road-map-modal__close"></span>
			<h6 className="road-map-modal__title">{phase[0]?.title}</h6>
			<p className="road-map-modal__phase">{phase[0]?.phase}</p>
			<ul className="road-map-modal__list">
				{phase[0]?.items.map((item, id) => (
					<li key={id} className="road-map-modal__li">
						{item}
					</li>
				))}
			</ul>
		</div>
	)

	return (
		<section className="road-map-page page-section">
			<div className="road-map-page__content">
				<PageTitle>Road Map</PageTitle>
				<div className="road-map-page__subtitle page-subtitle">
					<p>What does the future hold for diggers? Look at this map! And if you have any questions, feel free to ask them in our social media.</p>
					<p>We value our community so The roadmap will be updated and supplemented based on questions community of Diggers will raise.</p>
				</div>
				<div className="road-map-page__body">
					{isDesktop ? (
						<div className="road-map-page__img">
							<img src={require('../../../assets/images/road_map.png')} />
						</div>
					) : (
						<div className="road-map-page__mobile-container">
							<div className="road-map-page__mobile-items">
								{road_map_phase.map((item, id) => (
									<div key={id} id={id} onClick={openModal} className={`road-map-page__mobile-button road-map-button road-map-button-${id}`}>
										<h6 className="road-map-button__title">{item.title}</h6>
										<p className="road-map-button__phase">{item.phase}</p>
									</div>
								))}
							</div>
							<div className="road-map-page__mobile-img">
								<img src={require('../../../assets/images/road_map_mobile.png')} />
							</div>
						</div>
					)}
				</div>
			</div>
			{!isDesktop && <div className={`road-map-page__modal road-map-modal ${modalOpen ? 'isOpen' : ''}`}>{modalToHtml(phase)}</div>}
		</section>
	)
}

export default RoadMapPage
