import { useEffect } from 'react'
import './not-found.scss'
import { useNavigate } from 'react-router-dom'
import ButtonOpenLootBox from '../../../Layouts/Buttons/ButtonOpenLootBox/ButtonOpenLootBox'

const NotFoundPage = () => {
	const history = useNavigate()
	useEffect(() => {
		document.title = `Not Found`
	})

	const goBack = () => {
		history(-1)
	}

	return (
		<section className="not-found">
			<div className="not-found__message">404 Not found </div>
			<ButtonOpenLootBox onClick={goBack}>Go back</ButtonOpenLootBox>
		</section>
	)
}

export default NotFoundPage
