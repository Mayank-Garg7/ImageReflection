import React from 'react'
import Button from '../../shared/Button'
import Card from '../../shared/Card'

function Calculator() {
    const arr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "-", "%", "/", "+", "ac", "x"];
    return (
        <div className="w-xl justify-self-center-safe mt-5">
            <Card>
                <form>
                    <input 
                    type="text" 
                    placeholder='calculate...' 
                    className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm outline-none transition duration-200 placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                    />
                    <div className='grid grid-cols-3'>
                        {arr.map((data, idx) => (
                            <Button key={idx} variant='secondary'>
                                <span>{data}</span>
                            </Button>
                        ))}
                    </div>
                </form>
            </Card>
        </div >
    )
}

export default Calculator
