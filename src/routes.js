import React from 'react'
import { lazy } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { isMobile } from 'react-device-detect'
import {
	HOME_ROUTE,
	GAME_OVERVIEW_ROUTE,
	GAME_FEATURES_ROUTE,
	ROAD_MAP_ROUTE,
	COMMUNITY_ROUTE,
	LOOT_BOX_ROUTE,
	TEAM_ROUTE,
	FAQ_ROUTE,
	PLANETS_ROUTE,
	LANDS_ROUTE,
	PLANET_ONE_ROUTE,
	IDENTIFICATION_ROUTE,
} from './utils/const'
const AppPages = lazy(() => import('./components/AppPages'))
const IdentificationPages = lazy(() => import('./components/IdentificationPages'))
const LootBoxPages = lazy(() => import('./components/LootBoxPages'))

const MainPage = lazy(() => import('./components/Pages/MainPage/MainPage'))
const GameOverviewPage = lazy(() => import('./components/Pages/GameOverviewPage/GameOverviewPage'))
const GameFeaturesPage = lazy(() => import('./components/Pages/GameFeaturesPage/GameFeaturesPage'))
const RoadMapPage = lazy(() => import('./components/Pages/RoadMapPage/RoadMapPage'))
const CommunityPage = lazy(() => import('./components/Pages/CommunityPage/CommunityPage'))
const TeamPage = lazy(() => import('./components/Pages/TeamPage/TeamPage'))
const FaqPage = lazy(() => import('./components/Pages/FaqPage/FaqPage'))
const PlanetsPage = lazy(() => import('./components/Pages/PlanetsPage/PlanetsPage'))
const LandsPage = lazy(() => import('./components/Pages/LandsPage/LandsPage'))
const PlanetOnePage = lazy(() => import('./components/Pages/PlanetOne/PlanetOne'))

const IdentificationPage = lazy(() => import('./components/Pages/IdentificationPage/IdentificationPage'))

const NotFoundPage = lazy(() => import('./components/Pages/NotFoundPage/NotFoundPage'))

const LootBoxPage = lazy(() => import('./components/Pages/LootBoxPage/LootBoxPage'))
const LootBoxDetailsPage = lazy(() => import('./components/Pages/LootBoxDetailsPage/LootBoxDetailsPage'))

const useRoutes = () => {
	const PrivateRoutes = ({ children }) => {
		return children
	}

	const DesktopRoutes = ({ children }) => {
		if (isMobile) {
			return <Navigate to="/" />
		}
		return children
	}

	return (
		<Routes>
			<Route path={HOME_ROUTE} element={<AppPages />}>
				<Route index element={<MainPage />} />
				<Route path={GAME_OVERVIEW_ROUTE} element={<GameOverviewPage />} />
				<Route path={GAME_FEATURES_ROUTE} element={<GameFeaturesPage />} />
				<Route path={ROAD_MAP_ROUTE} element={<RoadMapPage />} />
				<Route path={COMMUNITY_ROUTE} element={<CommunityPage />} />
				<Route path={TEAM_ROUTE} element={<TeamPage />} />
				<Route path={FAQ_ROUTE} element={<FaqPage />} />
				<Route path={PLANETS_ROUTE} element={<PlanetsPage />} />
				<Route path={LANDS_ROUTE} element={<LandsPage />} />
				<Route path={PLANET_ONE_ROUTE} element={<PlanetOnePage />} />
				<Route path="*" element={<NotFoundPage />} />
			</Route>

			<Route path={HOME_ROUTE} element={<IdentificationPages />}>
				<Route
					path={IDENTIFICATION_ROUTE}
					element={
						<DesktopRoutes>
							<IdentificationPage />
						</DesktopRoutes>
					}
				/>
			</Route>

			<Route path={HOME_ROUTE} element={<LootBoxPages />}>
				<Route
					path={LOOT_BOX_ROUTE}
					element={
						<DesktopRoutes>
							<LootBoxPage />
						</DesktopRoutes>
					}
				/>
				<Route
					path={`${LOOT_BOX_ROUTE}/:id`}
					element={
						<DesktopRoutes>
							<LootBoxDetailsPage />
						</DesktopRoutes>
					}
				/>
			</Route>
		</Routes>
	)
}
export default useRoutes
