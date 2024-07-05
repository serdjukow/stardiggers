import { useEffect, useContext, } from 'react'
import ButtonOpenLootBox2 from '../../../Layouts/Buttons/ButtonOpenLootBox2/ButtonOpenLootBox2'
import { AppContext } from '../../../context/AppContext'

import './loot-box-details-page.scss'

const LootBoxDetailsPage = () => {
	const { setHeaderLight } = useContext(AppContext)

	useEffect(() => {
		document.querySelector('body')?.classList.remove('dark')
		document.querySelector('.sub-open-link')?.classList.remove('active')
		document.title = `Loot Box Details`
		setHeaderLight(true)
	})
	return (
		<>
			<div className="loot-box-details-button-container">
				<ButtonOpenLootBox2 buttonValue={'5'}>OPEN LOOT BOX</ButtonOpenLootBox2>
			</div>
		</>
	)
}

export default LootBoxDetailsPage
