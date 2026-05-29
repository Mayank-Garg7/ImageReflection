import React, { useState } from 'react'
import Button from '../../shared/Button'
import Card from '../../shared/Card'

function Calculator() {
    const arr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "-", "/", "+", "ac", "x"];
    const [value, setValue] = useState("")
    const handleOnChange = (e) => {
        console.log(e.target.value)
    }
    return (
        <div className="w-lg justify-self-center-safe mt-5">
            <Card>
                <form>
                    <input
                        type="text"
                        value ={value}
                        onChange={handleInput}
                        placeholder='calculate...'
                        className="w-full mb-5 rounded-lg border px-4 py-3  text-slate-700  outline-none transition duration-200 placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                    />
                    <div className='grid grid-cols-4 gap-5'>
                        {arr.map((data, idx) => (
                                <Button key={idx} variant='secondary'>
                                    <span value ={value} onChange={handleOnChange}>{data}</span>
                                </Button>
                        ))}
                    </div>
                </form>
            </Card>
        </div >
    )
}

export default Calculator
