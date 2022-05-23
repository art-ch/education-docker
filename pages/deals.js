import styled from 'styled-components';

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

export default function CSSJS() {
  return (
    <div>
      <Title>Deals</Title>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur
        mollitia voluptatem omnis repudiandae facilis. Eaque, enim! Ut deleniti
        excepturi ullam recusandae odit voluptatum, consequatur blanditiis
        animi, numquam ab nam praesentium.
      </p>
      <h2 style={{ color: 'seagreen' }}>Deals Of The Day</h2>
    </div>
  );
}
