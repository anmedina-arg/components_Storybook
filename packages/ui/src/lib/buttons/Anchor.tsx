import styled, { css } from 'styled-components';

type StyledAnchorProps = {
  block: boolean;
};

const StyledAnchor = styled.span<StyledAnchorProps>`
  a,
  a:link {
    transition: all 0.3s ease-in-out;
    text-decoration: none;
    color: ${({ theme, block }) => (block ? theme.text : theme.slate)};
    &:hover {
      color: ${({ theme, block }) => (block ? theme.slate : theme.text)};
    }
  }
  ${(props) =>
    props.block &&
    css`
      cursor: pointer;
      display: flex;
      width: fit-content;
      border-radius: 0.5rem;
      padding: 0.5rem;
      transition: all 0.3s ease-in-out;
      & .icon {
        margin-right: 4px;
        width: 1rem;
        height: 100%;
        color: ${({ theme }) => theme.text};
      }
      &:hover {
        background-color: ${({ theme }) => theme.bg};
        a,
        a:link,
        .icon {
          color: ${({ theme }) => theme.slate};
        }
      }
    `}
`;

type AnchorProps = {
  label: string;
  to: string;
  icon?: JSX.Element;
  block?: boolean;
};

export const Anchor = ({ label, to, icon, block = false }: AnchorProps) => (
  <StyledAnchor block={block}>
    {icon}
    <a href={to}>{label}</a>
  </StyledAnchor>
);
