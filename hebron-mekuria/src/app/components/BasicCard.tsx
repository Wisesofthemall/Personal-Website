import React from "react";
import { Box, Text, Button, VStack, HStack } from "@chakra-ui/react";

export function BasicCard({ title = "Professional Experiences", subtitle = "Past internships and jobs", buttonUrl = "#" }) {
  return (
    <Box
      w="263px"
      h="328px"
      borderWidth="1px"
      borderRadius='40'
      borderColor='#9A5CCB'
      shadow="md"
      bg="white"
      ms='29px'
      color='#000000'
      mt='50px'
      border='gray.500'
      transition="transform 0.2s ease-out, shadow 0.2s ease-out"
      _hover={{
        transform: "scale(1.05)",
        shadow: "2xl"
      }}
    >
      <VStack align='center'>
        <Box
          mt='30px'
          borderWidth="1px"
          borderRadius='40'
          border='white'
          overflow="hidden"
          bg="#D9D9D9"
          opacity='0.85'
          w="215px"
          h="122px"
          shadow='lg'
          mb='12px'
          ms='24px'
          me='24px'
        ></Box>
        
        <VStack align='start' w='227px' ms='33px' overflow='hidden' >
        <Text fontSize="20px" fontWeight="medium"  me='10px' w='220px' textAlign="left"  overflowWrap="break-word" >
          {title} 
        </Text>
        <Text fontSize="20px" color="gray.500" opacity='0.44px' fontWeight='medium' w='220px' overflowWrap="break-word" >
          {subtitle} 
        </Text>
        </VStack>
        <Button
          textColor='white'
          as="a"
          href={buttonUrl}
          bg="#9A5CCB"
          borderRadius='3xl'
          w='94px'
          h='39px'
          ms='141px'
          target="_blank" // Optionally open in new tab
          position="absolute"
          bottom="12px" 
        >
          View
        </Button>
      </VStack>
    </Box>
  );
}
