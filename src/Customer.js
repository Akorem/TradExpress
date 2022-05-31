import React from 'react'
import box from './images/Union 1.svg'
import quotes from'./images/Group 8699.svg'
import face from './images/488-4887957_profile-picture-png.png'

const Customer = () => {
  return (
    <div className='oooo'>
        <h2>Customer's Review</h2>
        <div class="container">
            <div class="row">
                <div class="col" id='brrr'>
                    <img src={box} alt="" id='bbtt'/>
                    <div className='quotes'>
                        <img src={quotes} alt="" id='brrrx'/>
                        <p>Trading on TradExpress mobile and web platforms has been a smooth experience for me quite easy to navigate.</p>
                    </div>
                </div>
                <div class="col" id='brrr'>
                    <img src={box} alt="" id='bbtt'/>
                    <div className='quotes'>
                        <img src={quotes} alt="" />
                        <p>They have the best rate compared to other platforms with fast payout.</p>
                    </div>
                </div>
                <div class="col" id='brrr'>
                    <img src={box} alt="" id='bbtt'/>
                    <div className='quotes'>
                        <img src={quotes} alt="" />
                        <p>Easy to fund and withdraw coins or cash on their platform, i will definitely trade with them again.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row" id='face'>
                <div class="col" id='merc'>
                    <img src={face} alt="" />
                    <div className='toppp'>
                        <h6>Ireti</h6>
                        <p>USA</p>
                    </div>
                </div>
                    <div class="col" id='merc1'>
                    <img src={face} alt="" />
                    <div className='toppp'>
                        <h6>Bayo</h6>
                        <p>USA</p>
                    </div>
                </div>
                <div class="col" id='merc2'>
                    <img src={face} alt="" />
                    <div className='toppp'>
                        <h6>Olagoke</h6>
                        <p>USA</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Customer