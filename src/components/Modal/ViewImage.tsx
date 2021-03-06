import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({ isOpen, onClose, imgUrl }: ModalViewImageProps): JSX.Element {
  // TODO MODAL WITH IMAGE AND EXTERNAL LINK
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent bgColor="pGray.800" w='min-content' maxW='unset' >
        <ModalBody w='min-content' maxW='unset' p='0' >
          <Image maxW='900px' maxH='600px' src={imgUrl} align='center' fit='cover' />
        </ModalBody>
        <ModalFooter justifyContent='flex-start'>
          <Link href={imgUrl}>Abrir original</Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
