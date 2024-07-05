import { memo } from 'react'
import './button-open-loot-box2.scss'

const ButtonOpenLootBox2 = memo(({ ...props }) => {
	return (
		<button onClick={props.onClick} className="button button-loot-box2">
			{props.children}
			{props.buttonValue ? <span className="button-loot-box2__value">[{props.buttonValue}]</span> : ''}
		</button>
	)
})

export default ButtonOpenLootBox2
