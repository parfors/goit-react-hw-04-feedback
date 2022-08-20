import { Statistic } from '../Statistic/Statistic';
import { Section, Notification, FeedbackOptions } from 'components';
import { useState } from 'react';

export const Feedback = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedbacks = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbacks = () => {
    return Math.round((good / countTotalFeedbacks()) * 100);
  };

  const handleChange = bntName => {
    switch (bntName) {
      case 'good':
        setGood(good + 1);
        break;

      case 'bad':
        setBad(bad + 1);
        break;

      case 'neutral':
        setNeutral(neutral + 1);
        break;

      default:
        return;
    }
  };

  const onClearBtn = () => {
    setGood(0);
    setBad(0);
    setNeutral(0);
  };

  const options = ['good', 'bad', 'neutral'];
  const totalFeedbacks = countTotalFeedbacks();
  const positiveFeedbacks = countPositiveFeedbacks();
  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={options}
          onLeaveFeedback={handleChange}
          onClear={onClearBtn}
        ></FeedbackOptions>
      </Section>
      <Section title="Statistic">
        {totalFeedbacks === 0 ? (
          <Notification title="There is no feedback"></Notification>
        ) : (
          <Statistic
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedbacks}
            positivePercentage={positiveFeedbacks}
          ></Statistic>
        )}
      </Section>
    </>
  );
};
