import React from 'react'
import ASSET_PATHS from '../../constant'

export default function Footer() {
  const imgRoute = ASSET_PATHS.IMG_URL

  return (
    <>
      <div className='footer'>
        <div className='logo'>
          <img src={`${imgRoute}/flogo.png`} alt='logo' />          
          <p><a href='/'>blog.ARITHMETIC.ai</a></p>
          <span>© 2022-2024</span>
          <p>marketing@ARM</p>
          <div className='twitter'>
            <img src={`${imgRoute}/twitter.png`} alt='logo' />
          </div>
        </div>

        <div className='offer'>
          <h4>Main</h4>
          <ul>
            <li>Use cases</li>
            <li>Statistic</li>
            <li>Types of rentals</li>
            <li>Proof of holding system</li>
            <li>About CLORE</li>
            <li>Roadmap</li>
            <li>FAQ</li>
          </ul>
        </div>

        <div className='offer'>
          <h4>Menu</h4>
          <ul>
            <li>Marketplace</li>
            <li>Wallet</li>
            <li>Explorer</li>
            <li>Roadmap</li>
          </ul>
        </div>

        <div className='offer'>
          <h4>Documents</h4>
          <ul>
            <li>Terms of use</li>
            <li>Privacy Policy</li>
            <li>API</li>
          </ul>
        </div>

        <div className='offer'>
          <h4>Sign in</h4>
          <ul>
            <li><a href='/' className='account'>Create an account</a></li>
          </ul>
        </div>


      </div>
    </>
  )
}
