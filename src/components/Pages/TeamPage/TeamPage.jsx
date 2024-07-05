import { useEffect } from 'react'
import PageTitle from '../../../Layouts/PageTitle/PageTitle'
import './team-page.scss'

const team = {
	title: 'Our Team',
	items: [
		{
			id: 0,
			itemTitle: 'Lorem Ipsum',
			itemText: 'Lorem Ipsum',
			itemImg: '1',
		},
		{
			id: 1,
			itemTitle: 'Lorem Ipsum',
			itemText: 'Lorem Ipsum',
			itemImg: '2',
		},
		{
			id: 2,
			itemTitle: 'Lorem Ipsum',
			itemText: 'Lorem Ipsum',
			itemImg: '1',
		},
		{
			id: 3,
			itemTitle: 'Lorem Ipsum',
			itemText: 'Lorem Ipsum',
			itemImg: '2',
		},
		{
			id: 4,
			itemTitle: 'Lorem Ipsum',
			itemText: 'Lorem Ipsum',
			itemImg: '2',
		},
		{
			id: 5,
			itemTitle: 'Lorem Ipsum',
			itemText: 'Lorem Ipsum',
			itemImg: '1',
		},
	],
}

const TeamPage = () => {
	useEffect(() => {
		document.querySelector('body')?.classList.add('dark')
		document.querySelector('.sub-open-link')?.classList.remove('active')
		document.title = `Our Team`
	})

	return (
		<section className="team-page page-section">
			<div className="team-page__content">
				<PageTitle>{team.title}</PageTitle>
				<div className="team-page__cards">
					{team.items.map((item, id) => (
						<div key={id} className="team-page__card team-card">
							<div className="team-card__body">
								<div className="team-card__img">
									<img src={require(`../../../assets/images/team/${item.id + 1}.png`)} alt={item.itemTitle} />
								</div>
							</div>
							<div className="team-card__info">
								<h4 className="team-card__title">{item.itemTitle}</h4>
								<p className="team-card__text">{item.itemText}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default TeamPage
