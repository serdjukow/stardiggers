import { useEffect } from 'react'
import { OverlayScrollbars } from 'overlayscrollbars'

const config = {
	scrollbars: {
		visibility: 'auto',
		autoHide: 'leave',
	},
}

const useScollbar = (root, hasScroll) => {

	useEffect(() => {
		let scrollbars
		let oldScrollY
		if ((root.current, hasScroll)) {
			scrollbars = OverlayScrollbars(
				root.current,
				{ config },
				{
					scroll(instance, event) {
						if (event.target.scrollTop > oldScrollY) {
							document.querySelector('body').classList.remove('up')
							document.querySelector('body').classList.add('down')
						} else {
							document.querySelector('body').classList.remove('down')
							document.querySelector('body').classList.add('up')
						}
						oldScrollY = event.target.scrollTop
					},
				}
			)
		}

		return () => {
			if (scrollbars) {
				scrollbars.destroy()
				oldScrollY = 0
			}
		}
	}, [root, hasScroll])
}

export default useScollbar
