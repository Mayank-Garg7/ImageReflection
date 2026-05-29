import React from 'react'
import Button from '../../shared/Button'
import Card from '../../shared/Card'

function Calculator() {
    const arr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "-", "%", "/", "+", "ac", "x"];
    return (
        <Card>
            <form>
                <input type="text" placeholder='calculate...' />
                <div className='grid grid-cols-3'>
                    {arr.map((data, idx) => (
                        <Button key={idx} variant='secondary'>
                            <span>{data}</span>
                        </Button>
                    ))}
                </div>
            </form>
        </Card>
    )
}

export default Calculator
