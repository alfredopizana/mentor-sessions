import React, { useState, useEffect } from 'react'
function FindANumber(props) {
  function getRandomInt(max) {
    return Math.floor(Math.random() * max)
  }
  function range(start, end) {
    return Array(end - start + 1)
      .fill()
      .map((_, idx) => start + idx)
  }
  const checkElement = (number) => {
      if(classToRandomNumber === "founded")
      return
    if (number === randomNumber) {
      setGameStatus('You Find It!!')
      setClassToRandomNumber("founded")
    } else if (number > inferiorLimit && number < randomNumber) {
      setInferiorLimit(number)
      setNumberOfTries(numberOfTries + 1)
      setGameStatus(' Not Yet')
    } else if (number < superiorLimit) {
      setSuperiorLimit(number)
      setGameStatus(' Not Yet')
    } else {
      setGameStatus(' Not Yet')
    }
  }
  const checkRandomNumberAndGetClass = (number) => {
    if (number === randomNumber) {
      setGameStatus(`You Find It!!  The number was ${randomNumber}`)
    } else if (number > inferiorLimit && number < randomNumber) {
      setInferiorLimit(number)
      setNumberOfTries(numberOfTries + 1)
      setGameStatus(' Not Yet')
    } else if (number < superiorLimit) {
      setSuperiorLimit(number)
      setGameStatus(' Not Yet')
    } else {
      setGameStatus(' Not Yet')
    }
  }
  const [rangeOfNumbers, setRangeOfNumbers] = useState(range(1, 300))
  const [randomNumber, setRandomNumber] = useState(getRandomInt(300))
  const [numberOfTries, setNumberOfTries] = useState(0)
  const [inferiorLimit, setInferiorLimit] = useState(0)
  const [superiorLimit, setSuperiorLimit] = useState(301)
  const [gameStatus, setGameStatus] = useState('')
  const [classToRandomNumber, setClassToRandomNumber] = useState('')
  return (
    <>
      <h1>A guessing game</h1>
      <p>
        Try to find a number from 1 to 300. You should need no more than 9
        guesses.
      </p>
      <h1>Number of Tries: {numberOfTries}</h1>
      <h2>{gameStatus}</h2>
      {rangeOfNumbers.map((number, index) => {
        return (
          <span
            className={`randomNumber ${
              number <= inferiorLimit || number >= superiorLimit
                ? 'crossed'
                : ''
            } ${number === randomNumber ? classToRandomNumber: ""}`
            
        }
            onClick={() => {
              checkElement(number)
            }}
          >
            {number}
          </span>
        )
      })}
    </>
  )
}

export default FindANumber
