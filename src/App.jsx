

import { useState } from 'react'
import './App.css'
import { TextField , Stack , Button } from '@mui/material'

function App() {
  const [principle, setPrinciple] = useState(0)
  const [rate, setRate] = useState(0)
  const [year, setYear] = useState(0)
  const [interest, setInterest] = useState(0)

  const [invalidPrinciple, setInvalidPrinciple] = useState(false)
  const [invalidRate, setInvalidRate] = useState(false)
  const [invalidYear, setInvalidYear] = useState(false)




  const validateInput = (inputTag) => {
    console.log(inputTag, typeof inputTag);
    const { name, value } = inputTag;
    console.log(!!value.match(/^\d+(\.\d+)?$/));
    
    
    if (name === 'principle') {
      setPrinciple(value);
      if (value.match(/^\d+(\.\d+)?$/)) {
        setInvalidPrinciple(false);
      } else {
        setInvalidPrinciple(true);
      }
    } else if (name === 'rate') {
      setRate(value);
      if (value.match(/^\d+(\.\d+)?$/)) {
        setInvalidRate(false);
      } else {
        setInvalidRate(true);
      }

    } else  {
      setYear(value);
      if (value.match(/^\d+(\.\d+)?$/)) {
        setInvalidYear(false);
      } else {
        setInvalidYear(true);
      }
    }
  }

  const handleCalc = (e) =>
  {
    e.preventDefault()
    console.log("Clicked");
    
    if(principle && rate && year)
    {
       setInterest((principle*rate*year)/100)
       console.log(interest);
       
    }
    else{
      alert(`Fill the form completely`)
    }
  }
  
  const handleReset = () =>
  {
    setPrinciple(0)
    setYear(0)
    setRate(0)
    setInterest(0)
    setInvalidPrinciple(false)
    setInvalidRate(false)
    setInvalidYear(fal)
  }

  return (
    <>
      <div style={{ width: '100%', minHeight: '100vh' }} className='d-flex justify-content-center align-items-center bg-dark'>
        <div className='bg-light p-5 rounded'>
          <h3>Simple Interest Calculator</h3>
          <p>Calculate Your Interest Easily!</p>
          <div className='text-center bg-warning p-5 rounded'>
            <h1>₹ {interest}</h1>
            <p className='fw-bolder'>Total Simple Interest</p>
          </div>
          <form action="" className='mt-5'>

            {/* Principle Amount */}
            <div className='mb-3'>
              <TextField
                value={principle || ""}
                name='principle'
                onChange={(e) => validateInput(e.target)}
                className='w-100'
                id="outlined-principle"
                label="₹ Principle Amount"
                variant="outlined"
              />
            </div>

            {/* Invalid Principle */}
            {invalidPrinciple && <div className='text-danger fw-bolder mb-3'>Invalid Principle Amount</div>}

            {/* Rate */}
            <div className='mb-3'>
              <TextField
                value={rate || ""}
                name='rate'
                onChange={(e) => validateInput(e.target)}
                className='w-100'
                id="outlined-rate"
                label="% Rate"
                variant="outlined"
              />
            </div>

            {/* Invalid Rate */}
            {invalidRate && <div className='text-danger fw-bolder mb-3'>Invalid Rate</div>}


            {/* Year */}
            <div className='mb-3'>
              <TextField
                value={year || ""}
                name='year'
                onChange={(e) => validateInput(e.target)}
                className='w-100'
                id="outlined-year"
                label="Time period (Yr)"
                variant="outlined"
              />
            </div>

            {/* Invalid Rate */}
            {invalidYear && <div className='text-danger fw-bolder mb-3'>Invalid Year</div>}

            {/* Buttons */}
            <Stack direction="row" spacing={2}>
              <Button type='submit' onClick={handleCalc} disabled = {invalidPrinciple || invalidRate || invalidYear} variant="contained" style={{ width: '50%', height: '70px' }} className='bg-dark'>CALCULATE</Button>
              <Button onClick={handleReset} variant="outlined" style={{ width: '50%', height: '70px' }}>RESET</Button>
            </Stack>

          </form>
        </div> 
      </div>
    </>
  )
}

export default App
