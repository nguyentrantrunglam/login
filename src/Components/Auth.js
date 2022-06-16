import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faUnlockKeyhole, faUser } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

export default function Auth() {

  const back = "< Quay lại"
  return (
    <div className='main'>
      <div className='back'>
        <Link to='/mobile'>{back}</Link>
      </div>
      <h2 className='title'>Xác minh</h2>
      <p style={{textAlign: "center", fontSize:'14px'}}> Mã xác minh đã được gửi qua tinh nhắn SMS đến</p>
      <h4>0967876309</h4>
      <p style={{textAlign: "center", fontSize:'14px'}}> Vui lòng nhập vào bên dưới</p>
      <div className='form'>
        <div className='code'>
          <input className='sms-code' type="number"></input>
          <input className='sms-code' type="number"></input>
          <input className='sms-code' type="number"></input>
          <input className='sms-code' type="number"></input>
          <input className='sms-code' type="number"></input>
        </div>
        <p style={{textAlign: "center", fontSize:'12px'}}>Mã xác minh còn hiệu lực trong vòng 112 giây nữa </p>
        <button className='login-button'> TIẾP THEO </button>
      </div>
    </div>
  )
}
