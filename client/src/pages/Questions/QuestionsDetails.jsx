import React from "react";
import { useParams, Link } from "react-router-dom";

import upVote from "../../assets/sort-up.svg";
import downVote from "../../assets/sort-down.svg";
import Avatar from "../../components/Avatar/Avatar";
import "./Questions.css";
import DisplayAnswer from "./DisplayAnswer";

const QuestionsDetails = () => {
  const { id } = useParams();

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
      answer: [
        {
          answerBody: "Answer",
          userAnswered: "Ghosh",
          answeredOn: "6 feb, 2022",
          userId: 2,
        },
      ],
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
      answer: [
        {
          answerBody: "Answer",
          userAnswered: "Ghosh",
          answeredOn: "11 feb, 2022",
          userId: 2,
        },
      ],
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
      answer: [
        {
          answerBody: "Answer",
          userAnswered: "Ghosh",
          answeredOn: "july 19, 2023",
          userId: 2,
        },
      ],
    },
  ];

  return (
    <div className="question-details-page">
      {questionsList === null ? (
        <h1>Loading...</h1>
      ) : (
        <>
          {questionsList
            .filter((question) => question._id === +id)
            .map((question) => (
              <div key={question._id}>
                <section className="question-details-container">
                  <h1>{question.questionTitle}</h1>
                  <div className="question-details-container-2">
                    <div className="question-votes">
                      <img src={upVote} alt="" width="18" className="votes-icon"/>
                      <p>{question.upVotes - question.downVotes}</p>
                      <img src={downVote} alt="" width="18" className="votes-icon"/>
                    </div>
                    <div style={{ width: "100%" }}>
                      <p className="question-body">{question.questionBody}</p>
                      <div className="question-details-tags">
                        {question.questionTags.map((tag) => (
                          <p key={tag}>{tag}</p>
                        ))}
                      </div>
                      <div className="question-actions-user">
                        <div>
                          <button type="button">Share</button>
                          <button type="button">Delete</button>
                        </div>
                        <div>
                          <p>asked {question.askedOn}</p>
                          <Link to={`/User/${question.userId}`} className="user-link" style={{ color: "#0086d8" }} >
                          <Avatar backgroundColor="orange"  px="8px" py="5px">
                            {question.userPosted.charAt(0).toUpperCase()}
                          </Avatar>
                          <div>{question.userPosted}</div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                {question.noOfAnswers !== 0 && (
                  <section>
                    <h3>{question.noOfAnswers} answers</h3>
                    <DisplayAnswer question={question} key={question._id} />
                  </section>
                )}

                <section className="post-ans-container">
                  <h3>Your Answer</h3>
                  <form>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                    <br />
                    <input
                      type="submit"
                      className="post-ans-btn"
                      value="Post Your Answer"
                    />
                  </form>
                  <p>
                    Browse other Question tagged
                    {question.questionTags.map((tag) => (
                      <Link to="/Tags" key={tag} className="ans-tags">
                        {tag}
                      </Link>
                    ))}{" "}
                    or
                    <Link to="/AskQuestion" style={{ textDecoration: 'none', color: '#099dff' }}> ask your own question.</Link>
                  </p>
                </section>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default QuestionsDetails;
