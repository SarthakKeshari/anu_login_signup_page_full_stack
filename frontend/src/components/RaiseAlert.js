import { Alert, AlertIcon, AlertTitle, AlertDescription, useDisclosure, Box, CloseButton, Button } from '@chakra-ui/react'
import { useEffect } from 'react';

function RaiseAlert(props) {
    const {
        isOpen: isVisible,
        onClose,
        onOpen,
      } = useDisclosure({ defaultIsOpen: false })

    useEffect(() => {
        onOpen()
    },[props.alertDetails])

  return isVisible ? (
    <Alert status={props.alertDetails.alertStatus} >
      <AlertIcon />
      <Box w="100%">
        <AlertTitle>{props.alertDetails.alertTitle}</AlertTitle>
        <AlertDescription>
            {props.alertDetails.alertDescription}
        </AlertDescription>
      </Box>
      <CloseButton
        alignSelf='flex-start'
        position='relative'
        right={-1}
        top={-1}
        onClick={onClose}
      />
    </Alert>
  ) : (
    <></>
  )
}

export default RaiseAlert;