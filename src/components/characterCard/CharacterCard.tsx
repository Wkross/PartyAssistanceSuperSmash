import React from 'react';
import { Text, Image } from '@chakra-ui/react';
import StyledCharacterCard from './styled.tsx';

function CharacterCard({ charInfo }) {
	if (!charInfo) return null;
	let charImage;
	try {
		charImage = require('../../assets/images/characters/' + charInfo.image)
	} 
	catch (error) {
		charImage = require('../../assets/images/characters/random.png')
	}

	return (
		<StyledCharacterCard>
			<Image className='char-card__image' src={charImage}></Image>
			<Text className='char-card__name'>{charInfo.name}</Text>
		</StyledCharacterCard>
	)
}

export default CharacterCard;