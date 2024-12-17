import React, { useContext, useState } from 'react'
import StyledCharacterSelectionHeader from './styled.tsx';
import { Select, Button } from '@chakra-ui/react'
import { CharacterContext } from "../../context/CharacterContext.js";
import characterList from '../../utils/charactersList.json';

function CharacterSelectionHeader() {
	const [gameSelected, setGameSelected] = useState('SSBU')
	const { selectionStatus, characterListSelected, setCharacterListSelected, setSelectionStatus } = useContext(CharacterContext);

	const handleChange = (event) => {
		setGameSelected(event.target.value)
		setCharacterListSelected(characterList.characters.filter((character) => character.appearances.includes(event.target.value)))
		setSelectionStatus(
			{
				player0: {
					name: 'PLAYER 1',
					characters: [],
				},
				player1: {
					name: 'PLAYER 2',
					characters: [],
				},
				unselectedCharactersList: characterListSelected,
			}
		);
	}

	const startGame = () => {
		console.log(selectionStatus)
	}

	return (
		<StyledCharacterSelectionHeader>
			<Select value={gameSelected} onChange={handleChange} className='char-selection-header__select'>
				<option className='char-selection-header__option' value='SSBU'>Super Smash Bros Ultimate</option>
				<option className='char-selection-header__option' value='SSB4'>Super Smash Bros 4</option>
				<option className='char-selection-header__option' value='SSBB'>Super Smash Bros Brawl</option>
				<option className='char-selection-header__option' value='SSBM'>Super Smash Bros Meele</option>
				<option className='char-selection-header__option' value='SSB'>Super Smash Bros</option>
			</Select>
			<Button className='char-selection-header__btn-start' onClick={startGame} >READY TO FIGHT</Button>
		</StyledCharacterSelectionHeader>
	)
}

export default CharacterSelectionHeader;