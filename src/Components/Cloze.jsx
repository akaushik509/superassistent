import React, { useState } from 'react';
import { Box, Heading, Input, Button, Checkbox, VStack, HStack } from '@chakra-ui/react';

const Cloze = () => {
  const [sentence, setSentence] = useState('');
  const [blanks, setBlanks] = useState([]);
  const [options, setOptions] = useState({});

  const handleSentenceChange = (e) => {
    setSentence(e.target.value);
    const words = e.target.value.split(' ');
    const initialBlanks = words.filter((word) => word.startsWith('_'));
    setBlanks(initialBlanks);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, index) => {
    e.preventDefault();
    const draggedWord = e.dataTransfer.getData('text/plain');
    const updatedBlanks = [...blanks];
    updatedBlanks[index] = draggedWord;
    setBlanks(updatedBlanks);
    addOptionForBlank(draggedWord);
  };

  const handleOptionChange = (e, blank) => {
    setOptions((prevOptions) => ({
      ...prevOptions,
      [blank]: e.target.value,
    }));
  };

  const addOptionForBlank = (blank) => {
    setOptions((prevOptions) => ({
      ...prevOptions,
      [blank]: '',
    }));
  };

  return (
    <VStack align="stretch" spacing={4}>
      <Heading as="h2" size="lg" mb={4}>
        Create a Cloze Question
      </Heading>
      <Input
        type="text"
        placeholder="Type the sentence with underscores (_) for blanks..."
        value={sentence}
        onChange={handleSentenceChange}
        mb={4}
      />
      {blanks.map((blank, index) => (
        <Box key={index} onDragOver={handleDragOver} onDrop={(e) => handleDrop(e, index)}>
          <Button draggable="true">{blank}</Button>
          <HStack mt={2}>
            <Input
              placeholder="Option 1"
              value={options[blank]}
              onChange={(e) => handleOptionChange(e, blank)}
            />
            {/* Add more option inputs as needed */}
          </HStack>
        </Box>
      ))}
    </VStack>
  );
};

export default Cloze;
