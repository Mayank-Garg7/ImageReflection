import React from 'react'
import Button from '../../shared/Button'

function Calculator() {
    const arr = [0,1,2,3,4,5,6,7,8,9,"+,-,%,/,+,ac,x"]
  return (
    <div>
      {arr.map((data, idx)=> (
        <Button key= {idx}>
            <span>{data}</span>
        </Button>
      ))}
    </div>
  )
}

export default Calculator
