import { useEffect, useState, useContext } from 'react'
import PageTitle from '../../../Layouts/PageTitle/PageTitle'
import { AppContext } from '../../../context/AppContext'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, Thumbs } from 'swiper'
import './game-features.scss'

const gameFeaturesList = {
	title: 'Game Overview',
	subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
	items: [
		{
			id: '0',
			name: 'Diggers',
			icon: 'energy',
			text: 'Digger is a unique creation of the Seekers Guild advanced technology and your main tool in the exploration of the bowels of mysterious planets. Digger equipment ranges from simple but rugged factory models to mysterious mechanisms created with alien technology.',
		},
		{
			id: '1',
			name: 'Upgrades',
			icon: 'shelter',
			text: "As expansion proceeded, miners have faced both, increase in competition and new threats from the flora and fauna of distant planets. To overcome these obstacles find, buy and install a wide range of upgrades. Feel like you' re falling behind the other players in the race? Time to change engines or install a couple of new boosters to your steel monster. Is Ore hidden under a layer of tough obsidian? Not a problem because the markets just released the new monomolecular drills!",
		},
		{
			id: '2',
			name: 'Mines',
			icon: 'fire',
			text: 'The galaxy is infinite in the diversity of its worlds. And their depths hide countless treasures, facinating technologies and deposits of rare resources. Travel into the depths of worlds, break through mountainsides and explore ancient caverns. The most bold explorers will come back with fame and enormous prosperity!',
		},
		{
			id: '3',
			name: 'Resources',
			icon: 'space',
			text: "As you have already understood, the main tool of every Seeker is his digger. And his target is ore. You have to explore the planet's core, going through different layers of soil and extract resources of different rarity: from iron and tin to diamonds and contained dark matter. The more valuable the resource, the harder it is to extract. But for the brave and tenacious Seeker, that's no problem, is it?",
		},
		{
			id: '4',
			name: 'Cartels',
			icon: 'digger',
			text: "The Seekers' Guild is not as united as it seems. From time to time its members form cartels to support each other in their search for hidden treasures in different sectors of the galaxy. And, of course, to compete with others ! Who hasn't wanted to prove they're better than the others?",
		},
		{
			id: '5',
			name: 'Co-op competitions',
			icon: 'star',
			text: 'Speaking of who is better. Cartel ranking is important, of course. But what about covering yourself in glory and immortalizing your name? Members of the Seekers Guild regularly have tournaments to see whose digger is more powerful and whose management skills are better.',
		},
	],
}

const GameFeaturesPage = () => {
	const { isDesktop } = useContext(AppContext)
	useEffect(() => {
		document.querySelector('body')?.classList.add('dark')
		document.querySelector('.sub-open-link')?.classList.add('active')
		document.title = `Game Overview`
	}, [])

	const [thumbsSwiper, setThumbsSwiper] = useState()
	const [activeItem, setActiveItem] = useState(0)

	const getInfo = () => {
		const hintContent = gameFeaturesList.items.filter(item => item.id == activeItem)
		return (
			<div className="game-features-page__info features-mobile-info">
				<h5 className="features-mobile-info__title">{hintContent[0].name}</h5>
				<p className="features-mobile-info__text">{hintContent[0].text}</p>
			</div>
		)
	}

	return (
		<section className="game-features-page page-section">
			<div className="game-features-page__content ">
				<div className="game-features-page__body">
					<PageTitle>Game Features</PageTitle>
					{isDesktop ? (
						<>
							<Swiper
								modules={[Thumbs]}
								thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
								className="features-slider"
							>
								{gameFeaturesList.items?.map((item, id) => (
									<SwiperSlide
										key={item.id}
										className="features-slider__slide"
										style={{ backgroundImage: `url(${require(`../../../assets/images/features/slide${id + 1}.png`)})` }}
									>
										<div className={`features-info ${item.icon.toLocaleLowerCase() || ''}`}>
											<h5 className="features-info__title">{item.name}</h5>
											<p className="features-info__text">{item.text}</p>
										</div>
									</SwiperSlide>
								))}
							</Swiper>
							<div className="features-slider-decor">
								<Swiper modules={[Thumbs]} slidesPerView={6} spaceBetween={0} onSwiper={setThumbsSwiper} className="features-slider-2">
									{gameFeaturesList.items?.map((item, id) => (
										<SwiperSlide key={id} id={item.id}>
											<div className="features-slider-2__slide-body">
												<div className={`features-slider-2__item-img ${item.icon.toLocaleLowerCase() || ''}`}></div>
												<div className="features-slider-2__item-name">{item.name}</div>
											</div>
										</SwiperSlide>
									))}
								</Swiper>
							</div>
						</>
					) : (
						<>
							<Swiper
								modules={[Navigation, Pagination, Thumbs]}								
								thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
								pagination={{
									clickable: true,
								}}
								onSlideChange={swiper => setActiveItem(swiper.activeIndex)}
								onSwiper={swiper => setActiveItem(swiper.activeIndex)}
								className="features-slider"
							>
								{gameFeaturesList.items?.map((item, id) => (
									<SwiperSlide
										key={item.id}
										className="features-slider__slide"
										style={{ backgroundImage: `url(${require(`../../../assets/images/features/slide-mobile${id + 1}.png`)})` }}
									></SwiperSlide>
								))}
							</Swiper>
							<div className="features-slider-decor">
								<Swiper modules={[Thumbs, Navigation, Pagination]} slidesPerView={3} spaceBetween={0} onSwiper={setThumbsSwiper} className="features-slider-2">
									{gameFeaturesList.items?.map((item, id) => (
										<SwiperSlide key={id} id={item.id}>
											<div className="features-slider-2__slide-body">
												<div className={`features-slider-2__item-img ${item.icon.toLocaleLowerCase() || ''}`}></div>
												<div className="features-slider-2__item-name">{item.name}</div>
											</div>
										</SwiperSlide>
									))}
								</Swiper>
							</div>
							{getInfo()}
						</>
					)}
				</div>
			</div>
		</section>
	)
}

export default GameFeaturesPage
