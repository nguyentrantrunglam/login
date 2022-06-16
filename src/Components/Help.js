import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons'
export default function Help() {
    return (
        <div className='help'>
            <FontAwesomeIcon className='yellow-circle-question' icon={faCircleQuestion}></FontAwesomeIcon>
            <a href='/help'>Trợ giúp</a>
        </div>
    )
}
