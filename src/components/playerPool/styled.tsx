import styled from 'styled-components';

const StyledPlayerPool = styled.div`
  border: 2px solid black;
  max-width: 265px;
  min-width: 265px;
  max-height: 395px;
  position: relative;
  
  & div[role=button] {
    width: fit-content;
    height: fit-content;
  }

  
  .player-pool {
    &__background {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background: linear-gradient(31deg, #6f1919 18%, #9c1f1f 18%, #9c1f1f 27%, #ea2c2c 27%);
    }
  
    &__content {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
      display: flex;
      padding: 4px;
      overflow-y: auto;
      align-content: baseline;
      flex-wrap: wrap;
      justify-content: space-between;

      &__name {
        width: 100%;
        text-align: center;
        text-transform: uppercase;
        color: white;
        font-size: 30px;
        -webkit-text-stroke: 2px black;
        text-shadow: 3px 3px black;
        font-weight: 900;
  
        & input {
          text-transform: uppercase;
        }
      }
    }

    &__player1 {
      filter: hue-rotate(225deg);
    }
    &__player2 {
      filter: hue-rotate(59deg);
    }
    &__player3 {
      filter: hue-rotate(145deg);
    }
    &__player4 {
      filter: hue-rotate(27deg);
    }
    &__player5 {
      filter: hue-rotate(184deg);
    }
    &__player6 {
      filter: hue-rotate(303deg);
    }
    &__player7 {
      filter: hue-rotate(261deg);
    }
  }
`

export default StyledPlayerPool;