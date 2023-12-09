import React from 'react';

import { Link } from 'react-router-dom';
import Avatar from '../../components/Avatar/Avatar';

const DisplayAnswer = ({ question }) => {
  return (
    <div>
      {question && question.answer.map((ans) => (
        <div className="display-ans" key={ans._id}>
          <p>{ans.answerBody}</p>
          <div className="question-actions-user">
            <div>
              <button type='button'>Share</button>
              <button type='button'>Delete</button>
            </div>
            <div>
              <p>answered {ans.answeredOn}</p>
              <Link to={`/User/${question.userId}`} className="user-link" style={{ color: "#0086d8" }}>
                <Avatar backgroundColor="green" px="8px" py="5px" className="avt">
                  {ans.userAnswered.charAt(0).toUpperCase()}
                </Avatar>
                <div>
                    {ans.userAnswered}
                </div>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DisplayAnswer;
