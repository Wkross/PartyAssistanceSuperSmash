import React, { useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import CharactersSetup from './views/CharactersSetup.tsx';
import { CharacterContext } from "./context/CharacterContext.js";
import characterList from './utils/charactersList.json';
import { DragDropContext } from 'react-beautiful-dnd';

function App() {
  const [characterListSelected, setCharacterListSelected] = useState(characterList.characters);
  const [selectionStatus, setSelectionStatus] = useState(
    {
      player0: {
        name: 'PLAYER 1',
        characters: [],
      },
      player1: {
        name: 'PLAYER 2',
        characters: [],
      },
      player2: {
        name: 'PLAYER 3',
        characters: [],
      },
      player3: {
        name: 'PLAYER 4',
        characters: [],
      },
      player4: {
        name: 'PLAYER 5',
        characters: [],
      },
      player5: {
        name: 'PLAYER 6',
        characters: [],
      },
      player6: {
        name: 'PLAYER 7',
        characters: [],
      },
      player7: {
        name: 'PLAYER 8',
        characters: [],
      },
      unselectedCharactersList: {
        characters: characterListSelected,
      }
    }
  );

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    // Create a copy object to mutate its values
    const copystatus = {...selectionStatus};
    
    // Remove value from its source list
    const draggedElementObject = copystatus[result.source.droppableId].characters.filter((item) => item.name === result.draggableId)[0];
    copystatus[result.source.droppableId].characters.splice(copystatus[result.source.droppableId].characters.findIndex((item) => item.name === result.draggableId), 1)
    
    // Add value in its destination list
    copystatus[result.destination.droppableId].characters.splice(result.destination.index, 0 ,draggedElementObject);

    // Set the updated value in the original object
    setSelectionStatus(copystatus)
  }

  return (
    <ChakraProvider>
      <CharacterContext.Provider value={{ characterListSelected, setCharacterListSelected, selectionStatus, setSelectionStatus }}>
        <DragDropContext onDragEnd={onDragEnd}>
          <div className="App">
            <header className="App-header">
              <CharactersSetup />
            </header>
          </div>
        </DragDropContext>
      </CharacterContext.Provider>
    </ChakraProvider>
  );
}

export default App;
