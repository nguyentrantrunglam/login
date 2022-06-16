import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faUnlockKeyhole, faUser } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

export default function LoginMobilenumber() {

  const loginPassworđ = "Đăng nhập bằng mật khẩu >>"
  return (
    <div className='main'>
      <div className='back'></div>
      <h2 className='title'>Đăng nhập</h2>
      <div className='form'>
        <div className='box-input'>
          <FontAwesomeIcon className='icon' icon={faPhone} />
          <input className='form-input' type="text" placeholder='Số điện thoại'></input>
        </div>
        <button className='login-button'><Link  to='/auth'><p className='white-text'>ĐĂNG NHẬP</p></Link></button>
      </div>
      <Link to='/'> {loginPassworđ} </Link>
    </div>
  )
}
