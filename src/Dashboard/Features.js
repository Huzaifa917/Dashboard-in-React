import React from 'react'
import './Feature.css';
import BoyIcon from '@mui/icons-material/Boy';
import WomanIcon from '@mui/icons-material/Woman';

const Features = () => {
  return (
    <div className="featured">
    <div className="featuredItem">
        <BoyIcon/>
      <span className="featuredTitle">User 1</span>
      <div className="featuredMoneyContainer">
        <span className="featuredMoney">Huzaifa Sarfraz</span>
        <span className="featuredMoneyRate">
          Salary: 32000 <div className="featuredIcon negative"/>
        </span>
      </div>
      <span className="featuredSub">Expenses last Month : 31000</span>
    </div>
    <div className="featuredItem">
        <BoyIcon/>
      <span className="featuredTitle">User 2</span>
      <div className="featuredMoneyContainer">
        <span className="featuredMoney">Salman Shaheer</span>
        <span className="featuredMoneyRate">
          Salary: 35000 <div className="featuredIcon negative"/>
        </span>
      </div>
      <span className="featuredSub">Expenses last Month : 36000</span>
      </div>
      <div className="featuredItem">
        <WomanIcon/>
      <span className="featuredTitle">User 3</span>
      <div className="featuredMoneyContainer">
        <span className="featuredMoney">Fatima Zahra</span>
        <span className="featuredMoneyRate">
          Salary: 34000 <div className="featuredIcon negative"/>
        </span>
      </div>
      <span className="featuredSub">Expenses last Month : 30000</span>
    </div>
    <div className="featuredItem">
        <WomanIcon/>
      <span className="featuredTitle">User 4</span>
      <div className="featuredMoneyContainer">
        <span className="featuredMoney">Marva Aftab</span>
        <span className="featuredMoneyRate">
          Salary: 33000<div className="featuredIcon negative"/>
        </span>
      </div>
      <span className="featuredSub">Expenses last Month : 28000</span>
    </div>
      </div>

  )
}

export default Features;