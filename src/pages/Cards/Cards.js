import data from '../json/data'
import './Cards.css'

const Cards = () => {
  return (
    <>
      {
        data.map((i) => {
          return (
            <div className='pad'>
              <div className='card'>
                <div className='card-half-circle'></div>
                <div className='btc-txt'><img src={i.bitcointxt} /></div>
                <div className='btc-border'><img className='dollar-txt' src={i.dollar1} /><img className='dollargreen' src={i.dollargreen} /></div>
                <div className='price'><img src={i.price} /></div>
                <div className='btc-border-two'><img className='dollar-txt-two' src={i.dollar2} /></div>
                <div className='tvl'><img src={i.tvl} alt='tvl' /></div>
                <div className='btc-border-three'>
                  <img className='solana' src={i.solana} alt='solana' />
                  <img className='solana1' src={i.solana1} alt='solana1' />
                  <img className='solana2' src={i.solana2} alt='solana2' />
                  <img className='solana3' src={i.solana3} alt='solana3' />
                  <img className='eth' src={i.eth} alt='eth' />
                  <img className='eth1' src={i.eth1} alt='eth1' />
                  <img className='eth6' src={i.eth6} alt='eth2' />
                  <img className='eth2' src={i.eth2} alt='eth3' />
                  <img className='eth3' src={i.eth3} alt='eth4' />
                  <img className='eth4' src={i.eth4} alt='eth5' />
                  <img className='eth5' src={i.eth5} alt='eth6' />
                  <img className='binance2' src={i.binance2} alt='binance2' />
                  <img className='binance' src={i.binance} alt='binance' />
                  <img className='binance1' src={i.binance1} alt='binance1' />
                </div>
                <div className='pp'><img src={i.pp} alt='pp' /></div>
              </div>
              <div className='ok'>
                <div className="mid-circle">
                  <div className='mid-bitcoin'>
                    <img className='mid-bitcoin-logo' src={i.bitcoinlogo} />
                  </div>
                </div>
              </div>
            </div>
          )
        })
      }
    </>
  )
}

export default Cards

