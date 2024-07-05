import { createContext } from 'react'

function noop() {}

export const AppContext = createContext({
	isAuthenticated: false,
	changeAuth: noop,
	saveActivePlanet: noop,
	saveActiveLand: noop,
	activePlanet: Number,
	activeLand: Number,
	isDesktop: Boolean,
	isMobile: Boolean,
	openModal: noop,
	closeModal: noop,
	modalIsOpen: Boolean,
	setBodyIsLocked: noop,
	headerLight: Boolean,
	setHeaderLight: noop
})
