import { Outlet, Link } from 'react-router-dom'
import SocialLinks from '../Layouts/SocialLinks/SocialLinks'
import { HOME_ROUTE } from '../utils/const'
import ButtonConnect from '../Layouts/Buttons/ButtonConnect/ButtonConnect'
import '../components/Header/header.scss'

const IdentificationPages = () => {
	return (
		<div className="wrapper">
			<header id="header" className="header">
				<Link to={HOME_ROUTE} className="header__logo header-logo">
					<img src={require('../assets/images/logo.png')} alt="logo" />
				</Link>
				<ButtonConnect>0x374283f6ca5D3204A0219AcDA4F3f517A4683e0D</ButtonConnect>
			</header>
			
			<main className="page">
				<Outlet />
			</main>

			<SocialLinks styleName="white" />
		</div>
	)
}
export default IdentificationPages
