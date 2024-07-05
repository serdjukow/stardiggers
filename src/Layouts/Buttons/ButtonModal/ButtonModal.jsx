import { memo } from 'react'
import './button-modal.scss'

const ButtonModal = memo(({ ...props }) => {
	return (
		<div className="button-modal">
			<div className="button-modal__border">
				<button disabled={props.disabled} className="button-modal__item">
					<span className="button-modal__text">{props.children}</span>
				</button>
			</div>
			<span className="button-modal__decor"></span>
		</div>
	)
})

export default ButtonModal
