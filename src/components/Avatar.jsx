import React from 'react'
import defaultImg from '../assets/default-avatar.png'

function Avatar(props) {
	const {imgSrc, menu, ...restProps} = props
	return (
		<div className='avatar items-center cursor-pointer'>
			<div {...restProps}>
				<img src={imgSrc ? imgSrc : defaultImg} alt="avatar" />
			</div>
		</div>
	)
}

export default Avatar