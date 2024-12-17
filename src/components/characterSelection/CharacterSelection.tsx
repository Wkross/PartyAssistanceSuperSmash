import React from 'react';
import CharacterCard from '../characterCard/CharacterCard.tsx';
import StyledCharacterSelection from './styled.tsx';
import { Droppable, Draggable } from 'react-beautiful-dnd';

function CharacterSelection ({ charInfo }) {
	const draggableCards = charInfo.map((characterInfo, index) => (
		<Draggable draggableId={characterInfo.name} key={'key_char_' + characterInfo.name} index={index}>
      {(provided) => (
				<div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
					<CharacterCard charInfo={characterInfo} />
				</div>
			)}
		</Draggable>
	))

	return (
		<Droppable droppableId="unselectedCharactersList">
			{provided => (
				<div ref={provided.innerRef} {...provided.droppableProps}>
					<StyledCharacterSelection >
						{draggableCards}
					</StyledCharacterSelection>
				</div>
			)}
    </Droppable>
	)
}

export default CharacterSelection;