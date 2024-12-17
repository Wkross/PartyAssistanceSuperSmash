import { useContext } from 'react';
import CharacterSelection from '../components/characterSelection/CharacterSelection.tsx';
import CharacterSelectionHeader from '../components/characterSelectionHeader/CharacterSelectionHeader.tsx';
import PlayersSelection from '../components/playersSelection/PlayersSelection.tsx';

import StyledCharactersSetup from './styled.tsx';
import { CharacterContext } from "../context/CharacterContext.js";

function CharactersSetup() {
	const { characterListSelected } = useContext(CharacterContext);

	return (
		<StyledCharactersSetup>
			<CharacterSelectionHeader />

			<CharacterSelection charInfo={characterListSelected} />

			<PlayersSelection/>
		</StyledCharactersSetup>
	)
}

export default CharactersSetup;