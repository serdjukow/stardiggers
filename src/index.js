import React from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.scss'
import App from './App'

// const root = hydrateRoot(typeof window !== 'undefined' && document.getElementById('root'))
// root.render(
// 	<React.StrictMode>
// 		<BrowserRouter>
// 			<App />
// 		</BrowserRouter>
// 	</React.StrictMode>
// )

// const Container = () => {
// 	return (
// 		<React.StrictMode>
// 			<BrowserRouter>
// 				<App />
// 			</BrowserRouter>
// 		</React.StrictMode>
// 	)
// }

// hydrateRoot(document.getElementById('root'), <Container />)

const root = createRoot(typeof window !== 'undefined' && document.getElementById('root'))
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>
)
