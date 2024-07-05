import { useEffect } from 'react'
import PageTitle from '../../../Layouts/PageTitle/PageTitle'
import './game-page.scss'

const gemeOvervewList = {
	title: 'Game Overview',
	items: [
		{
			id: '0',
			text: 'Star diggers is a Play-to-Earn 2D platformer, giving players the opportunity to earn Polygon and conquer wast underground worlds. Join the Star Diggers guild and explore cosmos to help humanity survive.',
		},
		{
			id: '1',
			text: "Welcome to the distant future. Earth, the home of humanity, is depleted: there are no minerals left on the planet. Having exhausted the planet's resources, humanity set out to search for them in outer space, exploring new galaxies.",
		},
		{
			id: '2',
			text: "Thus emerged the Seekers Guild - explorers of space, ready to go on a distant voyage for resources that mankind lacks. Some were brought to the Guild by altruism, others by lust for profit or love of adventures. Gradually, the Seekers' Guild  became the most powerful force on Earth.",
		},
		{
			id: '3',
			text: "The Seekers developed special exploration drones called diggers. Every Seeker strives to make his digger as effective as possible. It's amazing how enthusiastically the adventurer and space wanderer guild invests in new explorations and technologies. All for the precious machines that dig into the bowels of distant planets.",
		},
		{
			id: '4',
			text: "The Guild's recent major breakthrough was the discovery of dark matter, a mysterious but incredibly valuable resource. Earth news compared its discovery to that of oil in the nineteenth century: dark matter became a new source of energy for humanity and opened a new frontier.",
		},
	],
}

const GameOverviewPage = () => {
	useEffect(() => {
		document.querySelector('body')?.classList.add('dark')
		document.querySelector('.sub-open-link')?.classList.add('active')
		document.title = `Game Overview`
	}, [])

	return (
		<section className="game-overview-page page-section">
			<div className="game-overview-page__content">
				<PageTitle>Game Overview</PageTitle>
				<div className="game-overview-page__img"></div>
				<div className="game-overview-page__text">
					{gemeOvervewList.items.map(item => (
						<p key={item.id}>{item.text}</p>
					))}
				</div>
			</div>
		</section>
	)
}

export default GameOverviewPage
