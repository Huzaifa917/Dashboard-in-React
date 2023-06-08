import React , {PureComponent } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import './Chart.css';

const Chart = () => {

    const data = [
        
        {
            name: 'Huzaifa Sarfraz',
            Expense: 31000,
            Salary:  32000,

        },
        {
          name: 'Salman Shaheer',
          Expense: 36000,
          Salary: 1398,
  
        },
        {
          name: 'Fatima Zahra',
          Expense: 30000,
          Salary: 34000,
          
        },
        {
            name: 'Marva Aftab',
            Expense: 28000,
            Salary: 33000,
           
          },
        
    ];




return (
    <div className='chart'>
        <h3>Users Expense Chart of Last Month</h3>
        <ResponsiveContainer width= "100%" aspect={4 /1}>
           <LineChart data = {data}>
              <XAxis dataKey= "name"  stroke = '#008b8b'/>
              <Line type="monotone" dataKey="Expense" stroke='#008b8b'/>
              <Tooltip/>
              <YAxis/>
              <Legend/>



          </LineChart>
        </ResponsiveContainer>
    
    
    </div>

  )
}

export default Chart