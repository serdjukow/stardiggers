import { useEffect } from 'react'
import PageTitle from '../../../Layouts/PageTitle/PageTitle'
import './community-page.scss'
import CountUp from 'react-countup'
import ButtonJoinCommunity from '../../../Layouts/Buttons/ButtonJoinCommunity/ButtonJoinCommunity'

const CommunityPage = () => {
	useEffect(() => {
		document.querySelector('body')?.classList.add('dark')
		document.querySelector('.sub-open-link')?.classList.remove('active')
		document.title = `Community`
	})
	return (
		<section className="community-page page-section">
			<div className="community-page__content">
				<PageTitle>Community</PageTitle>
				<div className="community-page__subtitle page-subtitle">
					<p>
						You know with out who the Diggers wouldn't exist? Without you! Yes, personally, without you reading these lines. Our community is our strength, and we are
						grateful to everyone who joining us on this amazing adventure. So even if you came to our site for the first time, we are grateful: each acquaintance with
						Diggers allows us to take another step deep into the universe!
					</p>
				</div>
				<div className="community-page__body">
					<div className="community-page__row">
						<div className="community-page__info-items">
							<div className="community-page__info-item info-item">
								<div className="info-item__header">A community of</div>
								<div className="info-item__count">
									<CountUp start={100} end={310} duration={2.5} />+
								</div>
								<div className="info-item__footer">Explorers</div>
							</div>
							<div className="community-page__info-item info-item">
								<div className="info-item__header">From</div>
								<div className="info-item__count">
									<CountUp start={10} end={54} duration={2.5} />+
								</div>
								<div className="info-item__footer">Countries</div>
							</div>
							<div className="community-page__info-item info-item">
								<div className="info-item__header">Exchanging</div>
								<div className="info-item__count">
									<CountUp start={0} end={3.6} decimals={1} decimal="." duration={2.5} />
									K+
								</div>
								<div className="info-item__footer">Messages/day</div>
							</div>
							<div className="community-page__info-item info-item">
								<div className="info-item__header">Earned</div>
								<div className="info-item__count">
									<CountUp start={0} end={20} duration={2.5} />
									M+
								</div>
								<div className="info-item__footer">Points</div>
							</div>
						</div>
						<div className="community-page__info-text">
							<p>
								Day after day, Diggers dive deeper into the universe, exploring and conquering it. And the community is keeping up, becoming more and more involved
								in the development of the game world by the hour. We watch with admiration for the lively discussions. From gameplay and Lore to the creation of
								Diggers own memes, great fan art, and active help for newcomers. Join the Star Diggers community- and it will become your second family!
							</p>
						</div>
						<ButtonJoinCommunity>JOIN COMMUNITY</ButtonJoinCommunity>
					</div>

					<div className="community-page__img">
						<img src={require('../../../assets/images/communityimage.png')} alt="community image" />
					</div>
				</div>
			</div>
		</section>
	)
}

export default CommunityPage
