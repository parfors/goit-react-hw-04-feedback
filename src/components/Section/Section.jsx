import { SectionStyled, Title } from 'components';

export const Section = ({ title, children }) => {
  return (
    <>
      <SectionStyled>
        <Title>{title}</Title>
        {children}
      </SectionStyled>
    </>
  );
};
