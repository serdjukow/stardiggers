export const HOME_ROUTE = '/'
export const ROAD_MAP_ROUTE = 'road-map'
export const COMMUNITY_ROUTE = 'community'
export const TEAM_ROUTE = 'team'
export const FAQ_ROUTE = 'faq'
export const GAME_OVERVIEW_ROUTE = 'game-overview'
export const GAME_FEATURES_ROUTE = 'game-features'
export const PLANETS_ROUTE = 'planets'
export const LANDS_ROUTE = 'lands'
export const PLANET_ONE_ROUTE = 'planet-one'
export const LOOT_BOX_ROUTE = 'loot-box'
export const IDENTIFICATION_ROUTE = 'identification'

export const NAV_LINKS = [
	{
		route: HOME_ROUTE,
		menuName: 'Home',
		type: 'link',
	},
	{
		route: '',
		menuName: 'Game',
		type: 'sublinks',
		links: [
			{
				route: GAME_OVERVIEW_ROUTE,
				menuName: 'Game Overview',
				type: 'sublink',
			},
			{
				route: GAME_FEATURES_ROUTE,
				menuName: 'Game Features',
				type: 'sublink',
			},
			{
				route: PLANETS_ROUTE,
				menuName: 'Planets',
				type: 'sublink',
			},
			{
				route: LANDS_ROUTE,
				menuName: 'Lands',
				type: 'sublink',
			},
			{
				route: PLANET_ONE_ROUTE,
				menuName: 'Planet One',
				type: 'sublink',
			},
		],
	},
	{
		route: ROAD_MAP_ROUTE,
		menuName: 'Road Map',
		type: 'link',
	},
	{
		route: COMMUNITY_ROUTE,
		menuName: 'Community',
		type: 'link',
	},
	{
		route: TEAM_ROUTE,
		menuName: 'Team',
		type: 'link',
	},
	{
		route: FAQ_ROUTE,
		menuName: 'FAQ',
		type: 'link',
	},
]
