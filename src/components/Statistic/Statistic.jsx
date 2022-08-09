import { Paragraph } from 'components/Feedback/Feedback.styled';

export const Statistic = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <Paragraph>Good: {good}</Paragraph>
      <Paragraph>Neutral: {neutral}</Paragraph>
      <Paragraph>Bad: {bad}</Paragraph>
      <Paragraph>Total: {total}</Paragraph>
      <Paragraph>Positive Feedback: {positivePercentage || 0}%</Paragraph>
    </>
  );
};
