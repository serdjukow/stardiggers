import { Outlet } from 'react-router-dom'
import Header from './Header/Header'

const LootBoxPages = () => {
	return (
		<div className="wrapper header-">
			<Header />
			<main className="loot-box-page">
				<Outlet />
			</main>
		</div>
	)
}
export default LootBoxPages
