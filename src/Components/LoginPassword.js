import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUnlockKeyhole, faUser } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

export default function LoginPassword() {
    const loginMobilenumber = "Đăng nhập bằng tin nhắn >>"
    return (
        <div className='main'>
            <div className='back'></div>
            <h2 className='title'>Đăng nhập</h2>
            <div className='form'>
                <div className='box-input'>
                    <FontAwesomeIcon className='icon' icon={faUser} />
                    <input className='form-input' type="text" placeholder='Email/ Số điện thoại'></input>
                </div>
                <div className='box-input'>
                    <FontAwesomeIcon className='icon' icon={faUnlockKeyhole} />
                    <input className='form-input' type="password" placeholder='Mật khẩu'></input>
                    <div className='divider'></div>
                    <Link to='/fogot'>Quên?</Link>
                </div>
                <button className='login-button'>ĐĂNG NHẬP</button>
            </div>
            <Link to='/mobile'> {loginMobilenumber} </Link>
        </div>
    )
}
