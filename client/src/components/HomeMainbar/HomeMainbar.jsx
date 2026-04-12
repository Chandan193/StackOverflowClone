import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./HomeMainbar.css";
import QuestionList from "./QuestionList";

const HomeMainbar = () => {
  const location = useLocation();
  const user = useSelector((state) => state.currentUserReducer);
  const navigate = useNavigate();

  const questionsList = useSelector((state) => state.questionsReducer);

  const checkAuth = () => {
    if (user === null) {
      alert("login or signup to ask a question");
      navigate("/Auth");
    } else {
      navigate("/AskQuestion");
    }
  };

  return (
    <div className="main-bar">
      <div className="main-bar-header">
        <div className="main-bar-title-wrap">
          {location.pathname === "/" ? (
            <h1>Top Questions</h1>
          ) : (
            <h1>All Questions</h1>
          )}
          <p className="main-bar-subtitle">
            Discover fresh discussions, trending tags, and expert answers.
          </p>
        </div>
        <button onClick={checkAuth} className="ask-btn">
          Ask Question
        </button>
      </div>
      <div>
        {questionsList.data === null ? (
          <h1 className="questions-loading">Loading...</h1>
        ) : (
          <>
            <p className="questions-count-chip">
              {questionsList.data.length} questions
            </p>
            <QuestionList questionsList={questionsList.data} />
          </>
        )}
      </div>
    </div>
  );
};

export default HomeMainbar;
