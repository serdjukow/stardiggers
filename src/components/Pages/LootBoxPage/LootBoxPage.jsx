import { useEffect, useContext } from 'react'
import ButtonOpenLootBox2 from '../../../Layouts/Buttons/ButtonOpenLootBox2/ButtonOpenLootBox2'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../../../context/AppContext'

import './loot-box-page.scss'

const LootBoxPage = () => {
	const { setHeaderLight } = useContext(AppContext)
	const history = useNavigate()

	useEffect(() => {
		document.querySelector('body')?.classList.remove('dark')
		document.querySelector('.sub-open-link')?.classList.remove('active')
		document.title = `Loot Box`
		setHeaderLight(true)
	})
	return (
		<>
			<div className="loot-box-button-container">
				<ButtonOpenLootBox2 onClick={() => history('/loot-box/1')} buttonValue={''}>
					OPEN LOOT BOX
				</ButtonOpenLootBox2>
			</div>
		</>
	)
}

export default LootBoxPage
