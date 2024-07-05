import { useEffect, useContext } from 'react'
import PageTitle from '../../../Layouts/PageTitle/PageTitle'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../../../context/AppContext'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Mousewheel } from 'swiper'
import './planets-page.scss'


const planetsContent = {
	subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
	planets: [
		{
			id: '0',
			title: 'Planet One',
			link: {
				title: 'Kalmazonia',
				text: 'Jungle planet with blooming flora and fauna. Containing all sorts of resources. However hostile biosphere presents danger for any expedition which will be brave enough to step on planet surface.',
			},
		},
		{
			id: '1',
			title: 'Planet Two',
			link: {
				title: 'Gekos I',
				text: 'Desert planet with deep web of underground mines and ancient tombs. Rich with natural obsidian and diamond formations. Hiding a lot of long forgotten tech treasures',
			},
		},
		{
			id: '2',
			title: 'Planet Three',
			link: {
				title: 'Sirena V',
				text: 'Ocean planet , rich with Iron , Nickel and small geodes on gemstones.',
			},
		},
	],
}

const PlanetsPage = () => {
	const { activePlanet, saveActivePlanet, isDesktop } = useContext(AppContext)
	const history = useNavigate()
	useEffect(() => {
		document.querySelector('body')?.classList.add('dark')
		document.querySelector('.sub-open-link')?.classList.add('active')
		document.title = `Planets`
	})

	const toPlanetOnePage = e => {
		if (e.target.closest('.planets-body__planet')) {
			saveActivePlanet(e.currentTarget.id)
			history('/planet-one')
		}
	}

	const toPlanetOnePageMobile = e => {
		e.preventDefault()
		history('/planet-one')
	}

	const getInfoLink = () => {
		const currentPlanet = planetsContent.planets.filter(item => item.id == activePlanet)

		return (
			<div className="planets-mobile-slider__info-item planets-info-item">
				<h5 className="planets-info-item__title">{currentPlanet[0].link.title}</h5>
				<p className="planets-info-item__text">{currentPlanet[0].link.text}</p>
				<div id={currentPlanet[0].id} onClick={toPlanetOnePageMobile} className="planets-info-item__link">
					GO TO THE PLANET
				</div>
			</div>
		)
	}

	const getTitle = () => {
		const currentPlanet = planetsContent.planets.filter(item => item.id == activePlanet)
		return <h2>{currentPlanet[0]?.title}</h2>
	}

	return (
		<section className="planets-page page-section">
			<div className="planets-page__content">
				{isDesktop ? (
					<>
						<PageTitle>Planets</PageTitle>
						<div className="planets-page__subtitle page-subtitle">
							<p>
								Planets can be explored in more ways than one. Once you have accumulated resources and experience, you move on to the next stage of space
								exploration: buying a land. Imagine: hundreds of diggers from all over the universe come to mine resources, and each of them pays to rent a piece of
								your land.
							</p>
							<p>
								Owning your own land is an important stage in every Digger's life. After you become a land owner, your passive income blooms with flow of tenants.
								Saving up money for a big purchase or investing right away in a new piece for a digger? Each Land lord decides for himself!
							</p>
						</div>
						<div className="planets-page__body planets-body">
							<div id="2" onClick={toPlanetOnePage} className="planets-body__planet planet-1">
								<img src={require('../../../assets/images/planets/planetfull1.png')} alt="" />
								<div className="planets-body__hint hint-1">
									<div className="planets-body__hint-info">
										<h5>Sirena V</h5>
										<p> Ocean planet , rich with Iron , Nickel and small geodes on gemstones.</p>
									</div>
								</div>
							</div>
							<div id="1" onClick={toPlanetOnePage} className="planets-body__planet planet-2">
								<img src={require('../../../assets/images/planets/planetfull2.png')} alt="" />
								<div className="planets-body__hint hint-2">
									<div className="planets-body__hint-info">
										<h5>Gekos I</h5>
										<p>
											Desert planet with deep web of underground mines and ancient tombs. Rich with natural obsidian and diamond formations. Hiding a lot of
											long forgotten tech treasures
										</p>
									</div>
								</div>
							</div>
							<div id="3" onClick={toPlanetOnePage} className="planets-body__planet planet-3">
								<img src={require('../../../assets/images/planets/planetfull3.png')} alt="" />
								<div className="planets-body__hint hint-3">
									<div className="planets-body__hint-info">
										<h5>Kalmazonia</h5>
										<p>
											Jungle planet with blooming flora and fauna. Containing all sorts of resources. However hostile biosphere presents danger for any
											expedition which will be brave enough to step on planet surface.
										</p>
									</div>
								</div>
							</div>
						</div>
					</>
				) : (
					<>
						<div className="page-title">
							<div className="planets-page-prev"></div>
							{getTitle()}
							<div className="planets-page-next"></div>
						</div>
						<div className="page-subtitle">
							<p>
								The variety of lands is enormous. From lava fields saturated with metal to huge glaciers reaching into the depths of the planet and hiding Geodes of
								precious minerals.
							</p>
						</div>
						<div className="planets-page__body">
							<Swiper
								navigation={{
									prevEl: '.planets-page-prev',
									nextEl: '.planets-page-next',
								}}
								loop={false}
								grabCursor={true}
								initialSlide={+activePlanet}
								mousewheel={false}
								modules={[Mousewheel, Navigation]}
								onSlideChange={swiper => saveActivePlanet(swiper.activeIndex)}
								onSwiper={swiper => saveActivePlanet(swiper.activeIndex)}
								spaceBetween={20}
								breakpoints={{}}
								className="planets-mobile-slider"
							>
								<SwiperSlide id="0" className="planets-mobile-slider__slide">
									<div
										className="planets-mobile-slider__body"
										style={{ backgroundImage: `url(${require(`../../../assets/images/planets/planets-mobile-bg.png`)})` }}
									>
										<span className="planets-mobile-slider__slide-decor"></span>
										<div className="planets-mobile-slider__planet">
											<img src={require('../../../assets/images/planets/planetfull3.png')} alt={'Lorem ipsum'} />
										</div>
									</div>
								</SwiperSlide>
								<SwiperSlide id="0" className="planets-mobile-slider__slide">
									<div
										className="planets-mobile-slider__body"
										style={{ backgroundImage: `url(${require(`../../../assets/images/planets/planets-mobile-bg.png`)})` }}
									>
										<span className="planets-mobile-slider__slide-decor"></span>
										<div className="planets-mobile-slider__planet">
											<img src={require('../../../assets/images/planets/planetfull2.png')} alt={'Lorem ipsum'} />
										</div>
									</div>
								</SwiperSlide>
								<SwiperSlide id="0" className="planets-mobile-slider__slide">
									<div
										className="planets-mobile-slider__body"
										style={{ backgroundImage: `url(${require(`../../../assets/images/planets/planets-mobile-bg.png`)})` }}
									>
										<span className="planets-mobile-slider__slide-decor"></span>
										<div className="planets-mobile-slider__planet">
											<img src={require('../../../assets/images/planets/planetfull1.png')} alt={'Lorem ipsum'} />
										</div>
									</div>
								</SwiperSlide>
							</Swiper>
							<div className="planets-mobile-slider__info-items">{getInfoLink()}</div>
						</div>
					</>
				)}
			</div>
		</section>
	)
}

export default PlanetsPage
