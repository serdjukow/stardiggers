import './page-title.scss'

const PageTitle = ({ children }) => {
	
	return (
		<div className="page-title">
			<span className="page-title__decor-left"></span>
			<h2>{children}</h2>
			<span className="page-title__decor-right"></span>
		</div>
	)
}

export default PageTitle
