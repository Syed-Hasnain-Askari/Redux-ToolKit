import { Box, Stack, Heading, Text } from '@chakra-ui/react';
import { ProductCard } from './ProductCard';
import { products } from './_data';
import { ProductGrid } from './ProductGrid';
export const ProductContainer = () => (
	<Box
		maxW='7xl'
		mx='auto'
		px={{
			base: '4',
			md: '8',
			lg: '12',
		}}
		py={{
			base: '6',
			md: '8',
			lg: '12',
		}}>
		<Stack
			direction={{ base: 'column', md: 'row' }}
			py={5}>
			<Heading
				fontWeight={600}
				fontSize={{ base: '1xl', sm: '2xl', lg: '2xl' }}>
				<Text
					as={'span'}
					color={'black'}>
					Headphones For You!
				</Text>
			</Heading>
		</Stack>
		<ProductGrid>
			{products.map((item) => (
				<ProductCard
					key={item.id}
					product={item}
				/>
			))}
		</ProductGrid>
	</Box>
);
