import styled from 'styled-components';

export const Title = styled.h1`
  color: ${({ theme }) => theme.text};
  margin-bottom: 1rem;
  text-transform: capitalize;
  font-size: ${({ theme }) => theme.typography.fontSize.heading1};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: transparent;
  display: inline-block;
  overflow: hidden;
  position: relative;
  text-decoration: none;
  text-shadow: 0 0 #141414, 0.08em 0 0 #fff, 0 0, -0.08em 0 0 #fff;
  vertical-align: bottom;

  &:after {
    content: '';
    height: 3px;
    left: 0;
    position: absolute;
    bottom: 3px;
    width: 400%;
    will-change: transform;

    background-image: linear-gradient(
      90deg,
      #7a5fff 15%,
      #01ff89 35%,
      #7a55ff 85%
    );
  }
`;

export const Subtitle = styled.h2`
  color: ${({ theme }) => theme.text};
  font-size: ${({ theme }) => theme.typography.fontSize.heading2};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  text-transform: capitalize;
  margin-bottom: 1rem;
  text-shadow: 0px 5px 10px rgba(255, 255, 255, 0.9);
`;

export const Magic = styled.span`
  --a: #db91cb;
  --b: #673fd7;
  background: linear-gradient(-45deg, var(--a), var(--a), var(--b), var(--b));
  background-size: 300%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: animated_text 10s ease-in-out infinite;
  -moz-animation: animated_text 10s ease-in-out infinite;
  -webkit-animation: animated_text 10s ease-in-out infinite;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  font-size: ${({ theme }) => theme.typography.fontSize.heading2};
  /* import font family deberia estar en themes con las otras fuentes.  */
  @import url('https://fonts.googleapis.com/css2?family=Literata:opsz,wght@7..72,200&display=swap');
  font-family: 'Literata';
  @keyframes animated_text {
    0% {
      background-position: 0px 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0px 50%;
    }
  }
`;

export const Paragraph = styled.p`
  color: ${({ theme }) => theme.text};
  font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
  margin-bottom: 1rem;
  &::first-letter {
    text-transform: uppercase;
  }
`;
