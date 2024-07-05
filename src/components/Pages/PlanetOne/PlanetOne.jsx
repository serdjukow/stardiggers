import { useEffect, useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import PageTitle from '../../../Layouts/PageTitle/PageTitle'
import './planet-one.scss'
import { AppContext } from '../../../context/AppContext'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Navigation, Mousewheel } from 'swiper'

const planetsContent = {
	subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
	planets: [
		{
			id: '0',
			title: 'Planet One',
			link: {
				title: 'Lorem ipsum',
				text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
			},
			items: [
				{
					title: 'Lorem ipsum',
					text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
				},
			],
		},
		{
			id: '1',
			title: 'Planet Two',
			link: {
				title: 'Lorem ipsum',
				text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
			},
			items: [
				{
					title: 'Lorem ipsum',
					text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
				},
				{
					title: 'Lorem ipsum',
					text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
				},
			],
		},
		{
			id: '2',
			title: 'Planet Three',
			link: {
				title: 'Lorem ipsum',
				text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
			},
			items: [
				{
					title: 'Lorem ipsum',
					text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
				},
				{
					title: 'Lorem ipsum',
					text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
				},
			],
		},
	],
}

const PlanetOne = () => {
	const { activePlanet, saveActiveLand, isDesktop } = useContext(AppContext)
	const [activeItem, setActiveItem] = useState(0)
	const history = useNavigate()

	useEffect(() => {
		document.querySelector('body')?.classList.add('dark')
		document.querySelector('.sub-open-link')?.classList.add('active')
		document.title = `Planet One`
	})

	const goBack = () => {
		history('/planets')
	}

	const toLandsPage = e => {
		if (e.target.closest('.planet-one-slide') && e.target.classList.contains('planet-mask')) {
			saveActiveLand(e.currentTarget.id)
			history('/lands')
		}
	}

	const toLandsPageMobile = e => {
		e.preventDefault()
		saveActiveLand(e.currentTarget.id)
		history('/lands')
	}

	const getTitle = () => {
		const currentPlanet = planetsContent.planets.filter(item => item.id == activeItem)
		return <h2>{currentPlanet[0]?.title}</h2>
	}

	const getInfoLink = () => {
		const currentPlanet = planetsContent.planets.filter(item => item.id == activeItem)

		return (
			<div className="planet-one-page__info-item planet-one-info-item">
				<h5 className="planet-one-info-item__title">{currentPlanet[0].link.title}</h5>
				<p className="planet-one-info-item__text">{currentPlanet[0].link.text}</p>
				<div id={currentPlanet[0].id} onClick={toLandsPageMobile} className="planet-one-info-item__link">
					GO TO THE LAND
				</div>
			</div>
		)
	}

	const getInfoItems = () => {
		const currentPlanet = planetsContent.planets.filter(item => item.id == activeItem)
		return currentPlanet[0].items.map((item, id) => (
			<div key={id} className="planet-one-page__info-item planet-one-info-item">
				<h5 className="planet-one-info-item__title">{item.title}</h5>
				<p className="planet-one-info-item__text">{item.text}</p>
			</div>
		))
	}

	return (
		<section className="planet-one-page page-section">
			<div className="planet-one-page__content">
				{isDesktop ? (
					<>
						<div className="back-to" onClick={goBack}>
							Back to Planets{' '}
						</div>
						<PageTitle>Planet One</PageTitle>
						<div className="planet-one-page__subtitle page-subtitle">
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,{' '}
							</p>
						</div>
						<div className="planet-one-page__body lands-body">
							<Swiper
								loop={true}
								effect={'coverflow'}
								initialSlide={+activePlanet - 1}
								navigation={true}
								grabCursor={false}
								centeredSlides={true}
								mousewheel={false}
								slidesPerView={'auto'}
								coverflowEffect={{
									rotate: 0,
									stretch: 0,
									depth: 1500,
									modifier: 1,
									slideShadows: false,
								}}
								pagination={true}
								modules={[EffectCoverflow, Mousewheel, Navigation]}
								className="lands-body__slider planets-slider"
							>
								<SwiperSlide id="0" onClick={toLandsPage} className="planets-slider__slide planet-one-slide">
									<span className="planets-slider__slide-decor"></span>
									<div className="planets-slider__body planet-one-slide__body">
										<div className="planet-one-slide__planet green">
											<div className="planet-one-slide__hint hint-1">
												<div className="planet-one-slide__hint-info">
													<h5>Lorem ipsum</h5>
													<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
												</div>
											</div>
											<div className="planet-one-slide__hint hint-2">
												<div className="planet-one-slide__hint-info">
													<h5>Lorem ipsum</h5>
													<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
												</div>
											</div>
											<span className="planet-mask"></span>
											<img src={require('../../../assets/images/planetone1.png')} alt={'Lorem ipsum'} />
										</div>
									</div>
								</SwiperSlide>
								<SwiperSlide id="1" onClick={toLandsPage} className="planets-slider__slide planet-one-slide">
									<span className="planets-slider__slide-decor"></span>
									<div className="planets-slider__body planet-one-slide__body">
										<div className="planet-one-slide__planet yellow">
											<div className="planet-one-slide__hint hint-1">
												<div className="planet-one-slide__hint-info">
													<h5>Lorem ipsum</h5>
													<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
												</div>
											</div>
											<div className="planet-one-slide__hint hint-2">
												<div className="planet-one-slide__hint-info">
													<h5>Lorem ipsum</h5>
													<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
												</div>
											</div>
											<div className="planet-one-slide__hint hint-3">
												<div className="planet-one-slide__hint-info">
													<h5>Lorem ipsum</h5>
													<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
												</div>
											</div>
											<span className="planet-mask"></span>
											<img src={require('../../../assets/images/planetone2.png')} alt={'Lorem ipsum'} />
										</div>
									</div>
								</SwiperSlide>
								<SwiperSlide id="2" onClick={toLandsPage} className="planets-slider__slide planet-one-slide ">
									<span className="planets-slider__slide-decor"></span>
									<div className="planets-slider__body planet-one-slide__body">
										<div className="planet-one-slide__planet blue">
											<div className="planet-one-slide__hint hint-1">
												<div className="planet-one-slide__hint-info">
													<h5>Lorem ipsum</h5>
													<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
												</div>
											</div>
											<div className="planet-one-slide__hint hint-2">
												<div className="planet-one-slide__hint-info">
													<h5>Lorem ipsum</h5>
													<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
												</div>
											</div>
											<div className="planet-one-slide__hint hint-3">
												<div className="planet-one-slide__hint-info">
													<h5>Lorem ipsum</h5>
													<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
												</div>
											</div>
											<span className="planet-mask"></span>
											<img src={require('../../../assets/images/planetone3.png')} alt={'Lorem ipsum'} />
										</div>
									</div>
								</SwiperSlide>
							</Swiper>
						</div>
					</>
				) : (
					<>
						<div className="page-title">
							<div className="planet-one-page-prev"></div>
							{getTitle()}
							<div className="planet-one-page-next"></div>
						</div>
						<div className="planet-one-page__subtitle page-subtitle">
							<p>
								The variety of lands is enormous. From lava fields saturated with metal to huge glaciers reaching into the depths of the planet and hiding Geodes of
								precious minerals.
							</p>
						</div>
						<div className="planet-one-page__body">
							<Swiper
								navigation={{
									prevEl: '.planet-one-page-prev',
									nextEl: '.planet-one-page-next',
								}}
								loop={false}
								grabCursor={true}
								initialSlide={+activePlanet}
								mousewheel={false}
								modules={[Mousewheel, Navigation]}
								onSlideChange={swiper => setActiveItem(swiper.activeIndex)}
								onSwiper={swiper => setActiveItem(swiper.activeIndex)}
								spaceBetween={20}
								breakpoints={{}}
								className="planet-one-page__slider planet-one-mobile-slider"
							>
								<SwiperSlide id="0" className="planet-one-mobile-slider__slide">
									<div
										className="planet-one-mobile-slider__body"
										style={{ backgroundImage: `url(${require(`../../../assets/images/planets/planets-mobile-bg.png`)})` }}
									>
										<span className="planet-one-mobile-slider__slide-decor"></span>
										<div className="planet-one-mobile-slider__planet">
											<img src={require('../../../assets/images/planets/planetone-m1.png')} alt={'Lorem ipsum'} />
										</div>
									</div>
								</SwiperSlide>
								<SwiperSlide id="0" className="planet-one-mobile-slider__slide">
									<div
										className="planet-one-mobile-slider__body"
										style={{ backgroundImage: `url(${require(`../../../assets/images/planets/planets-mobile-bg.png`)})` }}
									>
										<span className="planet-one-mobile-slider__slide-decor"></span>
										<div className="planet-one-mobile-slider__planet">
											<img src={require('../../../assets/images/planets/planetone-m2.png')} alt={'Lorem ipsum'} />
										</div>
									</div>
								</SwiperSlide>
								<SwiperSlide id="0" className="planet-one-mobile-slider__slide">
									<div
										className="planet-one-mobile-slider__body"
										style={{ backgroundImage: `url(${require(`../../../assets/images/planets/planets-mobile-bg.png`)})` }}
									>
										<span className="planet-one-mobile-slider__slide-decor"></span>
										<div className="planet-one-mobile-slider__planet">
											<img src={require('../../../assets/images/planets/planetone-m3.png')} alt={'Lorem ipsum'} />
										</div>
									</div>
								</SwiperSlide>
							</Swiper>
							<div className="planet-one-page__info-items">
								{getInfoLink()}
								{getInfoItems()}
							</div>
						</div>
					</>
				)}
			</div>
		</section>
	)
}

export default PlanetOne
