import { styled } from 'styled-components';
import { DeviceQuery, screenScale } from '../../utils/Responsive';

export const Styled_PaginationBox = {
  Div: styled.div`
    & > .pagination {
      display: flex;
      justify-content: center;
      align-items: center;
      list-style: none;
      gap: 30px;
      margin-top: 10px;

      ${DeviceQuery.bigScreen`
        gap: calc(30px / ${screenScale.bigScreen});
        margin-top: calc(10px / ${screenScale.bigScreen}) 0px calc(200px / ${screenScale.bigScreen}) 0px ;
      `}
      ${DeviceQuery.desktop`
        gap: calc(30px / ${screenScale.desktop});
        margin-top: calc(10px / ${screenScale.desktop}) 0px calc(200px / ${screenScale.desktop}) 0px ;
      `}
      ${DeviceQuery.tablet`
        gap: calc(30px / ${screenScale.tablet});
        margin-top: calc(10px / ${screenScale.tablet}) 0px calc(200px / ${screenScale.tablet}) 0px ;
      `}
      ${DeviceQuery.mobile`
        gap: calc(30px / ${screenScale.mobile});
        margin-top: calc(10px / ${screenScale.mobile}) 0px calc(200px / 1.5) 0px ;
      `}

      li {
        // .active에 focus 안 주어도 자동 focus됨
        &.disabled:active,
        &.active > a {
          color: red;
          font-weight: bold;
        }

        &:hover > a {
          color: red;
        }

        &:nth-child(1),
        &:nth-child(2),
        &:nth-last-child(1),
        &:nth-last-child(2) {
          a {
            font-size: var(--third-title-font-size);

            ${DeviceQuery.bigScreen`
              font-size: calc(var(--third-title-font-size) / ${screenScale.bigScreen});
            `}
            ${DeviceQuery.desktop`
              font-size: calc(var(--third-title-font-size) / ${screenScale.desktop});
            `}
            ${DeviceQuery.tablet`
              font-size: calc(var(--third-title-font-size) / ${screenScale.tablet});
            `}
            ${DeviceQuery.mobile`
              font-size: calc(var(--third-title-font-size) / 1.5);
            `}
          }
        }

        a {
          text-decoration: none;
          color: black;
          font-size: var(--third-title-font-size);

          ${DeviceQuery.bigScreen`
            font-size: calc(var(--third-title-font-size) / ${screenScale.bigScreen});
          `}
          ${DeviceQuery.desktop`
            font-size: calc(var(--third-title-font-size) / ${screenScale.desktop});
          `}
          ${DeviceQuery.tablet`
            font-size: calc(var(--third-title-font-size) / ${screenScale.tablet});
          `}
          ${DeviceQuery.mobile`
            font-size: calc(var(--third-title-font-size) / 1.5);
          `}
        }
      }
    }
  `,
};
