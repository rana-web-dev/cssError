import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Eye } from 'react-hero-icon/solid'

const QuizContent = () => {
  const quizContent = useLoaderData()
  const question = quizContent.data.questions
  const name = quizContent.data.name
  const id = quizContent.data.id
  return (
    <div className="max-w-6xl mx-auto">
      <ToastContainer />
      <h2 className="text-center text-4xl font-bold text-blue-500 py-10 ">
        Quiz No: {id} {name}
      </h2>
      {question.map(q => (
        <Question key={q.id} questions={q} id={id}></Question>
      ))}
    </div>
  )
}

const Question = ({ questions, id }) => {
  const { options, question, correctAnswer } = questions
  const handleOptionClick = ans => {
    const isCorrect = ans === correctAnswer

    toast(`Correct: ${isCorrect}`)
  }

  const eyeCorrect = () => {
    toast(`${correctAnswer}`)
  }

  return (
    <div className="md:w-1/2 w-1/1 mx-auto mb-10">
      <div className="m-2 md:m-0">
        <p className="font-bold text-2xl">
          <span className="bg-red-500 text-white rounded pb-1 px-4 m-2">
            Question:
          </span>
          <span dangerouslySetInnerHTML={{ __html: question }}></span>
        </p>
        <div className="text-right">
          <button onClick={() => eyeCorrect()}>
            <Eye />
          </button>
        </div>
        <div className="grid grid-cols-2 cursor-default">
          {options.map((op, ind) => (
            <Options
              key={ind}
              option={op}
              onOptionClick={handleOptionClick}
            ></Options>
          ))}
        </div>
      </div>
    </div>
  )
}

const Options = ({ option, onOptionClick }) => {
  const handleClick = () => {
    onOptionClick(option)
  }

  return (
    <div>
      <p
        onClick={handleClick}
        className="bg-blue-500 m-2 text-white p-2 rounded select-none"
      >
        {option}
      </p>
    </div>
  )
}

export default QuizContent
