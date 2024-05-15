import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {totalCoinsTossed: 0, tossResult: 0, totalHeads: 0, totalTails: 0}

  btnClicked = () => {
    const tossResult2 = Math.floor(Math.random() * 2)
    this.setState(prevstate => ({
      totalCoinsTossed: prevstate.totalCoinsTossed + 1,
      tossResult: tossResult2,
      totalHeads:
        tossResult2 === 0 ? prevstate.totalHeads + 1 : prevstate.totalHeads,
      totalTails:
        tossResult2 === 1 ? prevstate.totalTails + 1 : prevstate.totalTails,
    }))
  }

  render() {
    const {totalCoinsTossed, tossResult, totalHeads, totalTails} = this.state
    console.log(tossResult)
    const HeadOrTailimg =
      tossResult === 0
        ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
    return (
      <div className="container">
        <div className="card">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="p">Heads (or) Tails</p>
          <img src={HeadOrTailimg} className="headtailcss" alt="toss result" />
          <button className="btn" type="button" onClick={this.btnClicked}>
            Toss Coin
          </button>
          <div className="results">
            <p className="sp">Total: {totalCoinsTossed}</p>
            <p className="sp">Heads: {totalHeads}</p>
            <p className="sp">Tails: {totalTails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
