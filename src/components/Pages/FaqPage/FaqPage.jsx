import { useEffect, useState, useContext } from 'react'
import PageTitle from '../../../Layouts/PageTitle/PageTitle'
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion'
import { AppContext } from '../../../context/AppContext'
import './faq-page.scss'

const accordionData = [
	{
		sectionTitle: 'Game Economy',
		sectionContent: [
			{
				title: 'How to earn tokens?',
				content: [
					`In Star Diggers you can earn tokens in many different ways! Rewards will await everyone involved in the activities. For underworld missions and participating in PvP competitions. For selling resources and equipment found in the bowels of planets. These are the ways that are available to everyone from the first minutes of the game. In addition, landowners and cartels receive bonus tokens when their clients playing actively on their territories. Successful trading economy is as rewarding as the success on the battlefield! Star Diggers gives every player the opportunity to earn, from combat or creating your own economy and trading structure.
				`,
				],
			},
		],
	},
	{
		sectionTitle: 'NFTs In Star Diggers',
		sectionContent: [
			{
				title: 'What about NFTs?',
				content: [
					`In Star Digger, there are three main types: digger vehicles for underworld exploration, mining lands for development and gathering resources, and digger dodgers that improve vehicle performance and appearance.`,
				],
			},
			{
				title: 'What are the utilities',
				content: [
					`You know it is no fun without utilities and bonuses, you can't go anywhere without bonuses! That's what buying NFTs will do for you. An NFT planet gives you a bonus to the production of resources and tokens, and other players can explore it. By buying your own planet and renting out land on it, you're laying a solid foundation for your economic success. Plus, a personal planet sounds cool!`,
					`The NFT digger is the pinnacle of technological advancement, giving significant bonuses to both research and combat missions. If a planet is an investment into the economy, a digger is an investment in how quickly and efficiently you tackle new challenges.`,
				],
			},
		],
	},
]

const FaqPage = () => {
	const { isDesktop } = useContext(AppContext)
	const [activeButton, setActiveButton] = useState(0)
	useEffect(() => {
		document.querySelector('body')?.classList.add('dark')
		document.querySelector('.sub-open-link')?.classList.remove('active')
		document.title = `FAQ`
	})

	const clearItems = () => {
		const items = document.querySelectorAll('[aria-expanded]')
		items.forEach((item, id) => {
			if ((id == 0) & (item.attributes[1].value !== 'true')) {
				item.click()
			}
		})
	}

	return (
		<section className="faq-page page-section">
			<div className="faq-page__content">
				<PageTitle>FAQ</PageTitle>
				{isDesktop ? (
					<div className="faq-page__body">
						<div className="faq-page__navigation faq-navigation">
							<div className="faq-navigation__buttons">
								{accordionData?.map((item, id) => (
									<div
										key={id}
										onClick={() => {
											setActiveButton(id)
											clearItems()
										}}
										className={`faq-navigation__button ${id == activeButton && 'active'}`}
									>
										{item.sectionTitle}
									</div>
								))}
							</div>
						</div>
						<div className="faq-page__accordion">
							<Accordion preExpanded={[0]}>
								{accordionData[activeButton].sectionContent.map((item, id) => (
									<AccordionItem key={id} uuid={id}>
										<AccordionItemHeading>
											<AccordionItemButton aria-expanded={false}>{item.title}</AccordionItemButton>
										</AccordionItemHeading>
										<AccordionItemPanel hidden>
											{item.content.map((p, id) => (
												<p key={id}>{p}</p>
											))}
										</AccordionItemPanel>
									</AccordionItem>
								))}
							</Accordion>
						</div>
					</div>
				) : (
					<div className="faq-page__body">
						<div className="faq-page__accordion faq-page-mobile">
							<Accordion allowZeroExpanded>
								{accordionData.map((section, id) => (
									<AccordionItem key={id} uuid={id}>
										<AccordionItemHeading>
											<AccordionItemButton aria-expanded={false}>{section.sectionTitle}</AccordionItemButton>
										</AccordionItemHeading>
										<AccordionItemPanel hidden style={{ padding: '0' }}>
											<Accordion allowZeroExpanded className="awdawdawdawd">
												{section.sectionContent.map((item, id) => (
													<AccordionItem key={id} uuid={id}>
														<AccordionItemHeading>
															<AccordionItemButton aria-expanded={false}>{item.title}</AccordionItemButton>
														</AccordionItemHeading>
														<AccordionItemPanel hidden>
															{item.content.map((p, id) => (
																<p key={id}>{p}</p>
															))}
														</AccordionItemPanel>
													</AccordionItem>
												))}
											</Accordion>
										</AccordionItemPanel>
									</AccordionItem>
								))}
							</Accordion>
						</div>
					</div>
				)}
			</div>
		</section>
	)
}

export default FaqPage
