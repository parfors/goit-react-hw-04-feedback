import { Statistic } from '../Statistic/Statistic';
import { Section, Notification, FeedbackOptions } from 'components';
import { useState } from 'react';

export const Feedback = () => {
  const [good, setGood] = useState(0);
  const [neutral, setneutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedbacks = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbacks = () => {
    return Math.round((good / countTotalFeedbacks()) * 100);
  };

  // handleGood = option => {
  //   this.setState(prevState => ({
  //     [option]: prevState[option] + 1,
  //   }));
  // };

  const handleGood = () => {
    setGood(good + 1);
  };

  const onClearBtn = () => {
    setGood(0);
    setBad(0);
    setneutral(0);
  };

  const options = ['good', 'bad', 'neutral'];
  const totalFeedbacks = countTotalFeedbacks();
  const positiveFeedbacks = countPositiveFeedbacks();
  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={options}
          onLeaveFeedback={handleGood}
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
