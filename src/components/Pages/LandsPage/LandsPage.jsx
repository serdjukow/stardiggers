import { useEffect, useContext, useState } from 'react'
import PageTitle from '../../../Layouts/PageTitle/PageTitle'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../../../context/AppContext'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Navigation, Mousewheel } from 'swiper'
import './lands-page.scss'

const landsContent = {
	subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
	items: [
		{
			id: '0',
			title: 'Land One',
		},
		{
			id: '1',
			title: 'Land Two',
		},
		{
			id: '2',
			title: 'Land Three',
		},
	],
}

const LandsPage = () => {
	const { activeLand, isDesktop } = useContext(AppContext)
	const [activeItem, setActiveItem] = useState(0)
	const history = useNavigate()
	useEffect(() => {
		document.querySelector('body')?.classList.add('dark')
		document.querySelector('.sub-open-link')?.classList.add('active')
		document.title = `Lands`
	})

	const goBack = () => {
		history('/planet-one')
	}

	const getTitle = () => {
		const currentPage = landsContent.items.filter(item => item.id == activeItem)
		return <h2>{currentPage[0]?.title}</h2>
	}

	return (
		<section className="lands-page page-section">
			<div className="lands-page__content">
				{isDesktop ? (
					<>
						<div className="back-to" onClick={goBack}>
							Back to Planet One
						</div>
						<PageTitle>Lands</PageTitle>
						<div className="lands-page__subtitle page-subtitle">
							<p>
								The variety of lands is enormous. From lava fields saturated with metal to huge glaciers reaching into the depths of the planet and hiding Geodes of
								precious minerals.
							</p>
						</div>
						<div className="lands-page__body">
							<Swiper
								loop={true}
								effect={'coverflow'}
								navigation={true}
								grabCursor={true}
								initialSlide={+activeLand}
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
								className="lands-page__slider planets-slider"
								breakpoints={
									{
										// when window width is >= 640px
										// 1080: {
										// 	navigation: false,
										// },
									}
								}
							>
								<SwiperSlide className="planets-slider__slide">
									<span className="planets-slider__slide-decor"></span>
									<div className="planets-slider__body">
										<div className="planets-slider__slide-map">
											<img src={require('../../../assets/images/planetmap1.png')} />
										</div>
										<div className="planets-slider__slide-planet">
											<img src={require('../../../assets/images/planet1.png')} />
										</div>
									</div>
								</SwiperSlide>
								<SwiperSlide className="planets-slider__slide">
									<span className="planets-slider__slide-decor"></span>
									<div className="planets-slider__body">
										<div className="planets-slider__slide-map">
											<img src={require('../../../assets/images/planetmap2.png')} />
										</div>
										<div className="planets-slider__slide-planet">
											<img src={require('../../../assets/images/planet2.png')} />
										</div>
									</div>
								</SwiperSlide>
								<SwiperSlide className="planets-slider__slide">
									<span className="planets-slider__slide-decor"></span>
									<div className="planets-slider__body">
										<div className="planets-slider__slide-map">
											<img src={require('../../../assets/images/planetmap3.png')} />
										</div>
										<div className="planets-slider__slide-planet">
											<img src={require('../../../assets/images/planet3.png')} />
										</div>
									</div>
								</SwiperSlide>
							</Swiper>
						</div>
					</>
				) : (
					<>
						<div className="page-title">
							<div className="lands-page-prev"></div>
							{getTitle()}
							<div className="lands-page-next"></div>
						</div>
						<div className="lands-page__subtitle page-subtitle">
							<p>
								The variety of lands is enormous. From lava fields saturated with metal to huge glaciers reaching into the depths of the planet and hiding Geodes of
								precious minerals.
							</p>
						</div>
						<div className="lands-page__body">
							<Swiper
								navigation={{
									prevEl: '.lands-page-prev',
									nextEl: '.lands-page-next',
								}}
								loop={false}
								grabCursor={true}
								initialSlide={+activeLand}
								mousewheel={false}
								modules={[Mousewheel, Navigation]}
								onSlideChange={swiper => setActiveItem(swiper.activeIndex)}
								onSwiper={swiper => setActiveItem(swiper.activeIndex)}
								spaceBetween={20}
								breakpoints={{}}
								className="lands-page__slider lands-mobile-slider"
							>
								<SwiperSlide className="lands-mobile-slider__slide">
									<div className="lands-mobile-slider__body" style={{ backgroundImage: `url(${require(`../../../assets/images/lands/planet1.png`)})` }}>
										<span className="lands-mobile-slider__slide-decor"></span>
									</div>
								</SwiperSlide>
								<SwiperSlide className="lands-mobile-slider__slide">
									<div className="lands-mobile-slider__body" style={{ backgroundImage: `url(${require(`../../../assets/images/lands/planet2.png`)})` }}>
										<span className="lands-mobile-slider__slide-decor"></span>
									</div>
								</SwiperSlide>
								<SwiperSlide className="lands-mobile-slider__slide">
									<div className="lands-mobile-slider__body" style={{ backgroundImage: `url(${require(`../../../assets/images/lands/planet3.png`)})` }}>
										<span className="lands-mobile-slider__slide-decor"></span>
									</div>
								</SwiperSlide>
							</Swiper>
						</div>
					</>
				)}
			</div>
		</section>
	)
}

export default LandsPage
