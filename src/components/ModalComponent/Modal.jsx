import { useContext, useState } from 'react'
import { AppContext } from '../../context/AppContext'
import Modal from 'react-modal'
import ButtonModal from '../../Layouts/Buttons/ButtonModal/ButtonModal'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import useSWR from 'swr'
const url = 'http://localhost:8080/api/diggers'

const customStyles = {
	content: {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		zIndex: '100000',
	},
}
Modal.setAppElement('#root')

const ModalComponent = () => {
	const { closeModal, modalIsOpen, changeAuth } = useContext(AppContext)
	const history = useNavigate()

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
		reset
	} = useForm({
		defaultValues: {
			name: '',
			email: '',
			subscribe: true,
		},
	})

	const onSubmit = data => {
		console.log(data)
		reset()
		//localStorage.setItem('userAuth', JSON.stringify(data))
		//addDigger(data)
		//getDiggers()
		closeModal()
		//history('/identification')
		//changeAuth()
	}

	const getDiggers = async () => {
		const response = await fetch(url)
		const json = await response.json()
	}

	const addDigger = async data => {
		const response = await fetch(`${url}`, {
			method: 'POST',
			mode: 'cors',
			cache: 'no-cache',
			credentials: 'same-origin',
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
			body: JSON.stringify(data),
		})
		const json = await response.json()
	}

	return (
		<Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} contentLabel="Example Modal">
			<button className="ReactModal__close" onClick={closeModal}></button>
			<h3 className="ReactModal__title">JOIN US</h3>
			<form onSubmit={handleSubmit(onSubmit)} className="ReactModal__form modal-form">
				<div className="modal-form__item">
					<label htmlFor="name">USER NAME</label>
					<input id={'name'} name={'name'}  {...register('name')} type={'text'} placeholder="DiggerMaster" required />
				</div>
				<div className="modal-form__item">
					<label htmlFor="email">EMAIL</label>
					<input id={'email'} name={'email'}  {...register('email')} type={'email'} placeholder="Johnsmith123@gmail.com" required />
				</div>
				<div className="modal-form__checkbox">
					<input id="subscribe" name="subscribe"  {...register('subscribe')} type={'checkbox'} />
					<label htmlFor="subscribe">Check to subscribe to our newsletter</label>
				</div>
				<ButtonModal>Sign Up</ButtonModal>
			</form>
		</Modal>
	)
}
export default ModalComponent
