import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUnlockKeyhole, faUser } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

export default function ResetPassword() {
    const loginMobilenumber = "Đăng nhập bằng tin nhắn >>"
    return (
        <div className='main'>
            <div className='back'></div>
            <h2 className='title'>Thiết lập mật khẩu</h2>
            <div className='form'>
                <div className='box-input'>
                    <FontAwesomeIcon className='icon' icon={faUnlockKeyhole} />
                    <input className='form-input' type="password" placeholder='Thiết lập mật khẩu'></input>
                </div>
                <div className='box-input'>
                    <FontAwesomeIcon className='icon' icon={faUnlockKeyhole} />
                    <input className='form-input' type="password" placeholder='Nhập lại mật khẩu'></input>
                </div>
                <button className='login-button'>TIẾP THEO</button>
            </div>
            <Link to='/mobile'> {loginMobilenumber} </Link>
        </div>
    )
}
