import { memo } from 'react'
import './button-connect.scss'

const ButtonConnect = memo(({ ...props }) => {
	return (
		<div className="button-connect-container">
			<div className="button-connect-border">
				<button onClick={props.onClick} className="button button-connect">
					<span className="button button-connect__text">{props.children}</span>
				</button>
			</div>
			<span className="button button-connect-container__decor"></span>
		</div>
	)
})

export default ButtonConnect
