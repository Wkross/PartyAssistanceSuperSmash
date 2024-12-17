import React, { useEffect, useState } from 'react';
import { Flex, Button } from '@chakra-ui/react';
import StyledPlayersSelection from './styled.tsx';
import PlayerPool from '../playerPool/PlayerPool.tsx';
import { useContext } from 'react';
import { CharacterContext } from "../../context/CharacterContext.js";

function PlayersSelection () {
	const { selectionStatus } = useContext(CharacterContext);

	const playerPoolCards = () => {
		const playerPoolCardsList = []
		for (let i = 0; i < Object.keys(selectionStatus).length - 1; i++) {
			playerPoolCardsList.push(<PlayerPool key={'player' + i} playerId={'player' + i}/>);
		}

		return playerPoolCardsList;
	}

	const addPlayer = () => {

	}

	const removePlayer = () => {
		
	}

	return (
		<StyledPlayersSelection>
			{playerPoolCards()}
			<div>
				<Button onClick={addPlayer}>+</Button>
				<Button onClick={removePlayer}>-</Button>
			</div>
    </StyledPlayersSelection>
	)
}

export default PlayersSelection;