import { styled } from 'styled-components';
import { DeviceQuery, screenScale } from '../../utils/Responsive';

interface StyledRedButtonProps {
  height?: number;
  width?: number;
}

export const Styled_RedButton = {
  Button: styled.button<StyledRedButtonProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    height: ${props => (props.height ? `${props.height}px` : '56px')};
    width: ${props => (props.width ? `${props.width}px` : '195px')};
    background-color: var(--primary-background-color);
    color: white;
    font-size: var(--basic-font-size);
    border: 0px;
    &:hover {
      background-color: #d82f24;
      cursor: pointer;
    }
    &:focus {
    }

    ${DeviceQuery.bigScreen`
      font-size: calc(var(--basic-font-size) / ${screenScale.bigScreen});
      
      height: ${(props: StyledRedButtonProps) =>
        props.height
          ? `calc(${props.height}px / ${screenScale.bigScreen})`
          : `calc(56px / ${screenScale.bigScreen})`};

      width: ${(props: StyledRedButtonProps) =>
        props.width
          ? `calc(${props.width}px / ${screenScale.bigScreen})`
          : `calc(195px / ${screenScale.bigScreen})`};
    `}
    ${DeviceQuery.desktop`
      font-size: calc(var(--basic-font-size) / ${screenScale.desktop});
      
      height: ${(props: StyledRedButtonProps) =>
        props.height
          ? `calc(${props.height}px / ${screenScale.desktop})`
          : `calc(56px / ${screenScale.desktop})`};

      width: ${(props: StyledRedButtonProps) =>
        props.width
          ? `calc(${props.width}px / ${screenScale.desktop})`
          : `calc(195px / ${screenScale.desktop})`};
    `}
      ${DeviceQuery.tablet`
      font-size: calc(var(--basic-font-size) / ${screenScale.tablet});
      
      height: ${(props: StyledRedButtonProps) =>
        props.height
          ? `calc(${props.height}px / ${screenScale.tablet})`
          : `calc(56px / ${screenScale.tablet})`};

      width: ${(props: StyledRedButtonProps) =>
        props.width
          ? `calc(${props.width}px / ${screenScale.tablet})`
          : `calc(195px / ${screenScale.tablet})`};
    `}
     ${DeviceQuery.mobile`
      font-size: calc(var(--basic-font-size) / 1.5);
      
      height: ${(props: StyledRedButtonProps) =>
        props.height ? `calc(${props.height}px / 1.5)` : 'calc(56px / 1.5)'};

      width: ${(props: StyledRedButtonProps) =>
        props.width ? `calc(${props.width}px / 1.6)` : 'calc(195px / 1.6)'};
    `}
  `,
};
