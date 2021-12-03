import { ChevronDownIcon } from '@chakra-ui/icons';
import { GridItem, SimpleGrid } from '@chakra-ui/layout';
import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/menu';
import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import FieldItem from '../FieldItem';

// const Btn = ({ rightIcon, onClick }) => <Button

//   rightIcon={rightIcon}
//   onClick={onClick}
// >
//   Button
// </Button>

export type BaseOption = {
  data: {
    name: string;
    description: string
  }
  value: string
}

export type Props<Option> = {
  name: string;
  label: string;
  title?: string;
  options: Option[];
  optionToString?: (option: Option) => string;
  optionComponent?: React.ComponentType<{ option: Option }>;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  testId?: string
  error?: string;
}


const Dropdown = <T extends BaseOption>({ label, title, error, options, optionComponent: OptionComponent, optionToString }: Props<T>) => {
  return <FieldItem error={error}>
    <Menu >
      <MenuButton
        px={4}
        py={2}
        m={0}
        transition='all 0.2s'
        borderRadius='none'
        borderWidth='4px'
        w={'400px'}
        _hover={{ bg: 'gray.100' }}
        // _expanded={{ bg: 'blue.400' }}
        _focus={{ boxShadow: 'outline' }}
      >
        <Flex justifyContent="space-between" >
          {title}
          <ChevronDownIcon />
        </Flex>
      </MenuButton>
      <MenuList p={0} w={'100%'}>
        {options.map(option => <MenuItem key={option.data.name} p={5}>
          <SimpleGrid columns={3} columnGap={3} w="full">
            <GridItem rowSpan={2} colSpan={1}  >
              <Box bg='gray.400' p={4} color='white' display='flex' justifyContent='center' w='150px'>
                Image
              </Box>
            </GridItem>
            <GridItem colSpan={2}  >{option.data.name}</GridItem>
            <GridItem colSpan={2}  >{option.data.description}</GridItem>
            <GridItem colSpan={4} />
          </SimpleGrid>
        </MenuItem>)}
      </MenuList>
    </Menu>
  </FieldItem>
}

export default Dropdown

