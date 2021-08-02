import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  // TODO MODAL USEDISCLOSURE
  const { isOpen, onClose, onOpen } = useDisclosure()
  // TODO SELECTED IMAGE URL STATE
  const [selectedImageUrl, setSelectedImageUrl] = useState('')

  // TODO FUNCTION HANDLE VIEW IMAGE
  const handleViewImage = (url: string) => {
    setSelectedImageUrl(url)
    onOpen()
  }

  return (
    <>
      {/* TODO CARD GRID */}
      <SimpleGrid templateColumns='repeat(3, 1fr)' gridGap='40px'>
        {cards.map(card => {
          return (
            <Card data={card} key={card.id} viewImage={handleViewImage} />
          )
        })}
      </SimpleGrid>
      {/* TODO MODALVIEWIMAGE */}
      <ModalViewImage isOpen={isOpen} onClose={onClose} imgUrl={selectedImageUrl} />      
    </>
  );
}
