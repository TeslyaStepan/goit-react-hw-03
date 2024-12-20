import "./App.css";
import "modern-normalize";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";
import { useEffect, useState } from "react";

const App = () => {
  const [response, setResponse] = useState(() => {
    const savedResponse = window.localStorage.getItem("saved-response");

    if (savedResponse !== null) {
      return JSON.parse(savedResponse);
    }

    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });
  const updateFeedback = (feedbackType) => {
    setResponse((prev) => ({
      ...prev,
      [feedbackType]: prev[feedbackType] + 1,
    }));
  };

  const totalFeedback = response.good + response.neutral + response.bad;

  const positiveFeedback = Math.round((response.good / totalFeedback) * 100);

  const resetClick = () => {
    setResponse({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  useEffect(() => {
    window.localStorage.setItem("saved-response", JSON.stringify(response));
  }, [response]);

  return (
    <>
      <Description></Description>
      <Options
        handleClick={updateFeedback}
        handleReset={resetClick}
        total={totalFeedback}
      ></Options>
      {totalFeedback === 0 ? (
        <Notification></Notification>
      ) : (
        <Feedback
          good={response.good}
          neutral={response.neutral}
          bad={response.bad}
          total={totalFeedback}
          positive={positiveFeedback}
        />
      )}
    </>
  );
};

export default App;
