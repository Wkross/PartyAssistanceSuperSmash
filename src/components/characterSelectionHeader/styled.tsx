import styled from 'styled-components';

const StyledCharacterSelectionHeader = styled.div`
	// background-color: #fe0000;
	display: flex;
	height: 60px;
	align-items: center;
	justify-content: center;
	background: linear-gradient(359deg, #6f1919 50%, #ea2c2c 50%);
	
	&:after {
	}

	.char-selection-header {
		&__select {
			background-color: #FED500;
			font-size: 25px;
			font-weight: 800;
			letter-spacing: 1px;
			border: 3px solid black;
			align-items: center;
			width: 500px;
			border-radius: 0;
			text-align: center;

			&:hover {
				border: 4px solid black;
			}

			&:focus-visible {
				border-color: black;
				box-shadow: 0 0 0 1px black;
			}
		}

		&__option {
			background-color: #fff09f;
			font-size: 25px;
			font-weight: 800;
		}

		&__btn-start {
			position: absolute;
			top: 9px;
			right: 0;
			background-color: #FED500;
			font-size: 25px;
			font-weight: 800;
			letter-spacing: 1px;
			border: 3px solid black;
			border-radius: 0;
			// linear-gradient(179deg, rgba(232,0,0,1) 0%, rgba(232,199,0,1) 50%);
		}
	}

	.chakra-select__wrapper {
		width: auto;
	}
`

export default StyledCharacterSelectionHeader;