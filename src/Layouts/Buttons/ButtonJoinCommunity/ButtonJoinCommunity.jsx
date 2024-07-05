import { memo } from 'react'
import './button-join-community.scss'

const ButtonJoinCommunity = memo(({ ...props }) => {
	return (
		<button onClick={props.changeAuth} className="button button-join-community">
			{props.children}
		</button>
		
	)
})

export default ButtonJoinCommunity
