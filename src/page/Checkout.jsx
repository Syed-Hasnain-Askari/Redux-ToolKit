import {
	Container,
	Flex,
	Heading,
	VStack,
	Text,
	SimpleGrid,
	GridItem,
	FormControl,
	FormLabel,
	Input,
} from '@chakra-ui/react';
import React from 'react';
import Layout from '../components/layout/Layout';

export default function Checkout() {
	return (
		<Layout>
			<Flex
				h='100vh'
				padding={20}>
				<VStack
					w={'full'}
					h={'full'}
					spacing={20}
					alignItems={'flex-start'}
					bgColor={'green.600'}
					p={10}>
					<VStack
						alignItems={'flex-start'}
						padding={3}>
						<Heading>Heading</Heading>
						<Text>asdsdsdsd</Text>
						<SimpleGrid
							columns={2}
							columnGap={3}>
							<GridItem colSpan={1}>
								<FormControl>
									<FormLabel>First Name</FormLabel>
									<Input placeholder='Hasnain' />
								</FormControl>
							</GridItem>
							<GridItem colSpan={1}>
								<FormControl>
									<FormLabel>Last Name</FormLabel>
									<Input placeholder='Askari' />
								</FormControl>
							</GridItem>
						</SimpleGrid>
					</VStack>
				</VStack>
				<VStack
					w={'full'}
					h={'full'}
					bgColor={'red.600'}
					alignItems={'flex-start'}
					spacing={20}
					p={10}>
					<Heading>Heading</Heading>
				</VStack>
			</Flex>
		</Layout>
	);
}
