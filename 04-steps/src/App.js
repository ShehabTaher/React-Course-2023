import React, { useState } from "react";
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
export default function App() {
  return (
    <div>
      <Step />
      <StepMessage step={1}>
        <p>Pass in content</p>
        <p>✌️</p>
      </StepMessage>
      <StepMessage step={2}>
        <p>Read children prop</p>
        <p>🤔</p>
      </StepMessage>
    </div>
  )
}
function Step() {
  // const step = 2;
  const [step, setStep] = useState(1)
  const [isOpen, setIsOpen] = useState(true)
  // const [test, setTest] = useState({ name: 'Shehab' })


  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1)

  }
  function handleNext() {
    if (step < 3) {
      setStep((s) => s + 1)
      // setStep((s) => s + 1)
    }

    // Bad Practice
    // test.name = 'Taher'
    // setTest({ name: 'Taher' })
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>&times;</button>
      {isOpen && (<div className="steps">
        <div className="numbers">
          <div className={step >= 1 ? "active" : ""}>1</div>
          <div className={step >= 2 ? "active" : ""}>2</div>
          <div className={step >= 3 ? "active" : ""}>3</div>
        </div>

        <StepMessage step={step}>
          {messages[step - 1]}
          <div className="buttons">
            <Button bgColor='#e7e7e7' textColor='#333' onClick={() => alert(`Learn How to ${messages[step - 1]}`)}>
              Learn How
            </Button>
          </div>
        </StepMessage>

        <div className="buttons">
          <Button textColor="#fff" bgColor="#7950f2" onClick={handlePrevious}>
            <span>👈</span> Previous
          </Button>
          <Button textColor="#fff" bgColor="#7950f2" onClick={handleNext}>
            Next <span>👉</span>
            <span>🤓</span>
          </Button>
        </div>
      </div>)}
    </>
  );
}

function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3> Step {step} </h3>
      {children}
    </div>
  )
}

function Button({ textColor, bgColor, onClick, children }) {
  return (<button
    style={{ backgroundColor: bgColor, color: textColor }}
    onClick={onClick}
  >
    {children}
  </button>
  )
}