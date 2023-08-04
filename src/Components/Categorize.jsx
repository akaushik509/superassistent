
import { Flex, Input, Select, Text, Box, IconButton, Button } from '@chakra-ui/react';
import React, { useState } from 'react';
import { CloseIcon } from '@chakra-ui/icons';

const Categorize = () => {
  const [inputData, setInputData] = useState(['']); // Initial state with one input field
  const [items, setItems] = useState([{ value: '', category: '' }]);

  const handleInputChange = (index, value) => {
    const updatedData = [...inputData];
    updatedData[index] = value;
    setInputData(updatedData);
  };

  const handleAddInput = () => {
    setInputData([...inputData, '']);
  };

  const handleRemoveInput = (index) => {
    const updatedData = [...inputData];
    updatedData.splice(index, 1);
    setInputData(updatedData);
  };

  const handleKeyPress = (event, index) => {
    if (event.key === 'Enter') {
      handleAddInput();
    }
  };

  const handleAddItem = () => {
    setItems([...items, { value: '', category: '' }]);
  };

  const handleRemoveItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  const handleItemInputChange = (index, value) => {
    const updatedItems = [...items];
    updatedItems[index].value = value;
    setItems(updatedItems);
  };

  const handleItemSelectChange = (index, value) => {
    const updatedItems = [...items];
    updatedItems[index].category = value;
    setItems(updatedItems);
    
  };

  return (
    <div>
      <Box>
        <Text textAlign="left">Category</Text>
        {inputData.map((value, index) => (
          <Flex key={index} alignItems="center" w="400px">
            <Input
              mr={2}
              mb={4}
              value={value}
              onChange={(e) => handleInputChange(index, e.target.value)}
              onKeyPress={(e) => handleKeyPress(e, index)}
              placeholder={`Enter data ${index + 1}`}
            />
            <IconButton
              icon={<CloseIcon />}
              aria-label="Delete input field"
              onClick={() => handleRemoveInput(index)}
            />
          </Flex>
        ))}
      </Box>
      <Flex gap="700px">
        <Box>
          <Text textAlign="left">Items</Text>
          {items.map((item, index) => (
            <Flex key={index} alignItems="center" w="400px">
              <Input
                mr={2}
                mb={4}
                value={item.value}
                onChange={(e) => handleItemInputChange(index, e.target.value)}
                placeholder={`Enter item ${index + 1}`}
              />
              <IconButton
                icon={<CloseIcon />}
                aria-label="Delete item field"
                onClick={() => handleRemoveItem(index)}
              />
            </Flex>
          ))}
          <Button
            icon={<CloseIcon />}
            aria-label="Add new item"
            onClick={handleAddItem}
            
          >Add Item</Button>
        </Box>
        <Box>
          <Text textAlign="left">Belongs To</Text>
          {items.map((item, index) => (
            <Select
              key={index}
              mb={4}
              value={item.category}
              onChange={(e) => handleItemSelectChange(index, e.target.value)}
              placeholder={`Select category for item ${index + 1}`}
            >
              {inputData.map((value, idx) => (
                <option key={idx} value={value}>
                  {value}
                </option>
              ))}
            </Select>
          ))}
        </Box>
      </Flex>
    </div>
  );
};

export default Categorize;

