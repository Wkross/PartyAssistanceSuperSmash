import styled from 'styled-components';

const StyledCharacterCard = styled.div`
	width: 115px;		
	height: 105px;
	background: linear-gradient(36deg, #FED500 0%, #fbf0b8 60%);
  border: 2px solid black;
	margin: 1.5px;
	position: relative;
	overflow: hidden;
	
	&:hover {
		.char-card__image {
			transform: scale(1.1);
		}
	}
	
	.char-card {
    &__image {
      width: auto;
      height: 100%;
      margin: auto;
      transition: transform .3s;
    }
    
    &__name {
      text-transform: uppercase;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      margin-top: auto;
      text-align: center;
      font-size: 16px;
      font-weight: 800;
      -webkit-text-stroke: 1.5px black;
      color: white;
    }
  }
`

export default StyledCharacterCard;