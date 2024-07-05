import { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import ButtonOpenLootBox from '../../../Layouts/Buttons/ButtonOpenLootBox/ButtonOpenLootBox'
import { AppContext } from '../../../context/AppContext'
import Countdown, { zeroPad } from 'react-countdown'
import './identification-page.scss'

const IdentificationPage = () => {
	const { isDesktop } = useContext(AppContext)
	const [timerCompleted, setTimerCompleted] = useState(false)
	const history = useNavigate()
	const startDay = '2023-04-01T00:00:00'

	useEffect(() => {
		document.querySelector('body')?.classList.add('dark')
		document.querySelector('.sub-open-link')?.classList.add('active')
		document.title = `Identification`
	})

	const renderer = ({ days, hours, minutes, seconds, completed }) => {
		if (!completed) {
			return (
				<div className="countdown">
					<div className="countdown__days">
						<div className="countdown__days-number">{days || '0'}</div>
					</div>
					<div className="countdown__items">
						<div className="countdown__item">
							<div className="countdown__item-number">{zeroPad(hours) || '00'}</div>
							<div className="countdown__item-text">HOURS</div>
						</div>
						<div className="countdown__separator">:</div>
						<div className="countdown__item">
							<div className="countdown__item-number">{zeroPad(minutes) || '00'}</div>
							<div className="countdown__item-text">MINUTES</div>
						</div>
						<div className="countdown__separator">:</div>

						<div className="countdown__item">
							<div className="countdown__item-number">{zeroPad(seconds) || '00'}</div>
							<div className="countdown__item-text">SECONDS</div>
						</div>
					</div>
				</div>
			)
		}
	}

	return (
		<>
			{timerCompleted ? (
				<section className="identification-page">
					<div className="identification-page__content">
						<div className="identification-page__body">
							<div className="identification-page__items identification-quests">
								<p className="identification-page__item">Quest 1</p>
								<p className="identification-page__item">Quest 2</p>
								<p className="identification-page__item">Quest 3</p>
								<p className="identification-page__item">Quest 4</p>
							</div>
							<div className="identification-page__counter"></div>
							<div className="identification-page__items identification-rewards">
								<p className="identification-page__item">Reward 1</p>
								<p className="identification-page__item">Reward 2</p>
								<p className="identification-page__item">Reward 3</p>
								<p className="identification-page__item">Reward 4</p>
							</div>
						</div>
						<div className="identification-page__button-container">
							<ButtonOpenLootBox onClick={() => history('/loot-box')}>OPEN LOOT BOX</ButtonOpenLootBox>
						</div>
					</div>
				</section>
			) : (
				<section className="identification-page ">
					<div className="identification-page__content content-timer">
						<div className="identification-page__body body-timer">
							<div className="identification-page__counter">
								<Countdown date={startDay} renderer={renderer} onComplete={e => setTimerCompleted(e.completed)} />
							</div>
						</div>
						<div className="identification-page__button-container">
							<ButtonOpenLootBox onClick={() => history('/loot-box')}>OPEN LOOT BOX</ButtonOpenLootBox>
						</div>
					</div>
				</section>
			)}
		</>
	)
}

export default IdentificationPage
