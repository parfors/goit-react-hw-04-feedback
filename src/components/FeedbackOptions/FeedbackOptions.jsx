import { Button, ButtonWrap } from 'components/Feedback/Feedback.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback, onClear }) => {
  return (
    <>
      <ButtonWrap>
        {options.map(el => (
          <Button key={el} onClick={() => onLeaveFeedback(el)}>
            {el}
          </Button>
        ))}
        <Button onClick={onClear}>Clear</Button>
      </ButtonWrap>
    </>
  );
};
