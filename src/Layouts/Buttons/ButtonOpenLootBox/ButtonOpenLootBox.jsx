import { memo } from 'react'
import './button-open-loot-box.scss'

const ButtonOpenLootBox = memo(({ ...props }) => {
	return (
		<button onClick={props.onClick} className="button button-open-loot-box">
			{props.children}
		</button>
	)
})

export default ButtonOpenLootBox
