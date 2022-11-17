import styled from 'styled-components';
import { Subtitle, Magic } from '../typography';

const StyledGlassCard = styled.div`
  background-image: url('https://images.vexels.com/media/users/3/166921/raw/c6f81468e5c97ca8ac0a326cb6e2c55d-fondo-de-puntos-de-color-abstracto.jpg');
  background-size: cover;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;

  .card {
    border-radius: 1rem;
    background-color: #d9d9d914;
    box-shadow: -41px 34px 40px 0px #16161666, 0px -3px 20px 0px #ffffff29 inset;
    width: 50vw;
    height: 50vh;
    backdrop-filter: blur(10px);
  }

  .contenido {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

type GlassCardProps = {
  title: string;
  subTitle: string;
};

export const GlassCard = ({ title, subTitle }: GlassCardProps) => (
  <StyledGlassCard>
    <div className="card"></div>
    <div className="contenido">
      <Subtitle>{title}</Subtitle>
      <Magic>{subTitle}</Magic>
    </div>
  </StyledGlassCard>
);
