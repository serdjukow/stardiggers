import { memo } from 'react'
import { Link } from 'react-router-dom'
import './social-links.scss'

const SocialLinks = memo(props => {
	return (
		<div className={`social ${props.styleName || ''}`}>
			<Link to={'#'} className="social__link discord"></Link>
			<Link to={'#'} className="social__link twitter"></Link>
		</div>
	)
})

export default SocialLinks
