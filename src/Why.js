import React from 'react'
import img4 from'./images/Group 28.svg'

const Why = () => {
  return (
    <div className='contt'>
        <h1 className='heead'>Why do people get involved with Cryptocurrencies</h1>

        <div className="container">
            <div className="row" >
                <div className="col" id='roww'>
                    <img src={img4} alt="" />
                    <div className='xxl'>
                        <h3 className='text-center pt-3'>Easy Mode Of Payment</h3>
                        <p>People can now easily send and recieve money from anywhere in the world to purchase goods and pay for services</p>
                    </div>
                </div>
                <div className="col" id='roww'>
                    <img src={img4} alt="" />
                    <div className='xxl'>
                        <h3 className='text-center pt-3'>Financial Freedom</h3>
                        <p>Just like the internet no single entity controls the crypto network which provides users transparency and privacy, which puts you in absolute control of your money</p>
                    </div>
                </div>
                <div className="col" id='roww'>
                    <img src={img4} alt="" />
                    <div className='xxl'>
                        <h3 className='text-center pt-3'>Investment</h3>
                        <p>The constant demand has made cryptocurrencies a Digital Gold used for alternative store of wealth on long term investments</p>
                    </div>
                </div>
            </div>
            <div>
            <button className='btn4'>
                Learn More
            </button>
        </div>
        </div>
    </div>
  )
}

export default Why