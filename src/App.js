import './App.css';
import { Box, Button, ListItem, Stack, UnorderedList } from '@chakra-ui/react';
import Nav from './Nav';

function App() {
  return (
    <>
      <Nav/>
      <Box p={5}>
        <Stack spacing={5} direction='column' align='center'>
          <Button colorScheme='blue' size='xs'>
            Button
          </Button>
          <Button colorScheme='gray' size='sm'>
            Button
          </Button>
          <Button colorScheme='cyan' size='md'>
            Button
          </Button>
          <Button colorScheme='red' size='lg'>
            Button
          </Button>
        </Stack>
        <UnorderedList>
          <ListItem>Lorem ipsum dolor sit amet</ListItem>
          <ListItem>Consectetur adipiscing elit</ListItem>
          <ListItem>Integer molestie lorem at massa</ListItem>
          <ListItem>Facilisis in pretium nisl aliquet</ListItem>
        </UnorderedList>
      </Box>
    </>
  );
}

export default App;
