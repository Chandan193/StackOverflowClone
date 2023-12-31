import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

import './HomeMainbar.css'

import QuestionList from './QuestionList'


const HomeMainbar = () => {

  const location = useLocation()
  const user = 1;
  const navigate = useNavigate()


  var questionsList = [
    {
      _id: 1,
      upVotes: 3,
      downVotes: 3,
      noOfAnswers: 2,
      questionTitle: "What is a function?",
      questionBody: "It meant to be",
      questionTags: ["java", "node js", "react js", "mongo db"],
      userPosted: "Chandan",
      userId: 1,
      askedOn: "feb 5, 2022",
      answer: [{
        answerBody: "Answer",
        userAnswered: "Ghosh",
        answeredOn: "6 feb, 2022",
        userId: 2,
      }]
    },
    {
      _id: 2,
      upVotes: 3,
      downVotes: 2,
      noOfAnswers: 0,
      questionTitle: "What is a function?",
      questionBody: "It meant to be",
      questionTags: ["javascript", "R", "python"],
      userPosted: "Chandan",
      userId: 1,
      askedOn: "feb 10, 2023",
      answer: [{
        answerBody: "Answer",
        userAnswered: "Ghosh",
        answeredOn: "11 feb, 2022",
        userId: 2,
      }]
    },
    {
      _id: 3,
      upVotes: 4,
      downVotes: 0,
      noOfAnswers: 2,
      questionTitle: "What is a function?",
      questionBody: "It meant to be",
      questionTags: ["c", "c++", "java"],
      userPosted: "Chandan",
      userId: 1,
      askedOn: "july 19, 2023",
      answer: [{
        answerBody: "Answer",
        userAnswered: "Ghosh",
        answeredOn: "july 19, 2023",
        userId: 2,
      }]
    }
  ]


 const checkAuth = () => {
      if(user === null){
        alert("Log In or Sign Up to ask a question")
        navigate('/Auth')
      }
 }

  return (
    <div className='main-bar'>
      <div className='main-bar-header'>
            {
              location.pathname === '/' ? <h1>Top Questions</h1> : <h1>All Questions</h1>
            }
            <Link to='./AskQuestion' onClick={checkAuth} className='ask-btn'>Ask Question</Link>
      </div>
      <div>
            {
              questionsList === null ?
              <h1>Loading...</h1> : 
              <>
                <p>{ questionsList.length } questions</p>
                <QuestionList questionsList={questionsList} />
              </>
            }
      </div>
    </div>
  )
}

export default HomeMainbar
