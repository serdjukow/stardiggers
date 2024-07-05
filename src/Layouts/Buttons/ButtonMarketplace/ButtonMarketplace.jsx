import { memo } from 'react'
import { Link } from 'react-router-dom'
import './button-marketplace.scss'

const ButtonMarketplace = memo(({ ...props }) => {
	return <Link to={'#'} className="button button-marketplace">{props.children}</Link>
})

export default ButtonMarketplace
