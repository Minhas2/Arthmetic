import React from 'react'
import ASSET_PATHS from '../../constant'

export default function Header() {

    const imgRoute = ASSET_PATHS.IMG_URL

    return (
        <>
            <div className='header'>

                <div className='logo'>
                    <a> <img src={`${imgRoute}/logo.png`} alt='logo' /> </a>
                </div>

                <div className='nav-links'>
                    <ul>
                        <li>
                            <a>Marketplace</a>
                        </li>
                        <li>
                            <a>Wallet</a>
                        </li>
                        <li>
                            <a>Statistics</a>
                        </li>
                        <li>
                            <a>Roadmap</a>
                        </li>
                    </ul>
                </div>

                <div className='login'>
                    <a> <img src={`${imgRoute}/login2.png`} alt='logo' />  </a>
                    <a> <img src={`${imgRoute}/login1.png`} alt='logo' />  </a>
                </div>


            </div>
        </>
    )
}
