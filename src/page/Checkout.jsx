import { Container, Flex } from '@chakra-ui/react';
import React from 'react';
import Cart from '../components/checkout/Cart';
import Details from '../components/checkout/Detail';
import Layout from '../components/layout/Layout';
export default function Checkout() {
	return (
		<Layout>
			<Container
				maxW='container.xl'
				p={0}>
				<Flex
					h='full'
					py={[0, 10, 20]}
					direction={{ base: 'column-reverse', md: 'row' }}>
					<Details />
					<Cart />
				</Flex>
			</Container>
		</Layout>
	);
}
