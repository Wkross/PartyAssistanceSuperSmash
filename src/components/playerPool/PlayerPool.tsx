import React, { useEffect, useState } from 'react';
import { Editable, EditableInput, EditablePreview, Flex, SimpleGrid } from '@chakra-ui/react';
import StyledPlayerPool from './styled.tsx';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import CharacterCard from '../characterCard/CharacterCard.tsx';
import { useContext } from 'react';
import { CharacterContext } from "../../context/CharacterContext.js";

function PlayerPool ({ playerId }) {
	const { selectionStatus } = useContext(CharacterContext);
	const [nameValue, setNameValue] = useState(selectionStatus[playerId].name);

  const draggableCards = selectionStatus[playerId].characters.map((characterInfo, index) => (
		<Draggable draggableId={characterInfo.name} key={'key_char_' + characterInfo.name} index={index}>
      {(provided) => (
				<div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
					<CharacterCard charInfo={characterInfo} />
				</div>
			)}
		</Draggable>
	))

	const handleNameChange = (event) => {
		if (event.target.value) {
			selectionStatus[playerId].name = event.target.value;
			setNameValue(event.target.value);
		} 
		else {
			event.target.value = selectionStatus[playerId].name
			setNameValue(selectionStatus[playerId].name);
		}
	}

	return (
    <Droppable droppableId={playerId}>
      {(provided) => (
        <StyledPlayerPool ref={provided.innerRef} {...provided.droppableProps}>
					<div className={"player-pool__background player-pool__" + playerId}/>
					<div className="player-pool__content">
						<Editable className='player-pool__content__name' defaultValue={selectionStatus[playerId].name} value={nameValue}>
							<EditablePreview />
							<EditableInput maxLength="9" onChange={handleNameChange}/>
						</Editable>

						{draggableCards}
						{/* {provided.placeholder} */}
					</div>
        </StyledPlayerPool>
      )}
    </Droppable>
	)
}

export default PlayerPool;