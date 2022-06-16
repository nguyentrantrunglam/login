import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faUnlockKeyhole, faUser } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

export default function FogotPassword() {
    
    return (
        <div className='main'>
            <div className='back'></div>
            <h2 className='title'>Gửi lại mật khẩu</h2>
            <div className='form'>
                <div className='box-input'>
                    <FontAwesomeIcon className='icon' icon={faUser} />
                    <input className='form-input' type="text" placeholder='Email/ Số điện thoại'></input>
                </div>
                <button className='login-button'><Link to='/authfogot'><p className='white-text'>TIẾP THEO</p></Link></button>

            </div>
        </div>
    )
}
