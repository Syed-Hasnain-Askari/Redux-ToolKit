import React from 'react';
import { Box, Flex, Heading, HStack, Link, Stack, useColorModeValue as mode, Image } from '@chakra-ui/react';
import { CartItem } from './CartItem';
import { CartOrderSummary } from './CartOrderSummary';
import { removeItem, incrementQuantity, decrementQuantity } from '../../features/addToCart';
import { useDispatch, useSelector } from 'react-redux';
export const App = () => {
	const cart = useSelector((state) => state.cart);
	console.log(cart, 'This is cart item');
	const dispatch = useDispatch();
	const onClickDelete = (id) => {
		dispatch(removeItem(id));
		console.log(id);
		console.log('DELETE');
	};
	const onIncrementQuantity = (id) => {
		dispatch(incrementQuantity(id));
	};
	const onDecrementQuantity = (id) => {
		dispatch(decrementQuantity(id));
	};
	return (
		<Box
			maxW={{
				base: '3xl',
				lg: '7xl',
			}}
			mx='auto'
			mt={100}
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
				direction={{
					base: 'column',
					lg: 'row',
				}}
				align={{
					lg: 'flex-start',
				}}
				spacing={{
					base: '8',
					md: '16',
				}}>
				<Stack
					spacing={{
						base: '8',
						md: '10',
					}}
					flex='2'>
					{cart.length > 0 ? (
						<Stack spacing='6'>
							<Heading fontSize='2xl'>Shopping Cart ({cart.length} items)</Heading>
							{cart.map((item) => (
								<CartItem
									onClickDelete={() => onClickDelete(item.id)}
									key={item.id}
									onIncrementQuantity={() => onIncrementQuantity(item.id)}
									onDecrementQuantity={() => onDecrementQuantity(item.id)}
									products={item}
								/>
							))}
						</Stack>
					) : (
						<Stack
							display={'flex'}
							justifyContent={'center'}
							alignItems={'center'}>
							<Box boxSize='sm'>
								<Image
									src='https://trolleymate.co.uk/assets/img/error_404.jpeg'
									alt='Dan Abramov'
								/>
							</Box>
						</Stack>
					)}
				</Stack>

				<Flex
					direction='column'
					align='center'
					flex='1'>
					<CartOrderSummary />
					<HStack
						mt='6'
						fontWeight='semibold'>
						<p>or</p>
						<Link color={mode('blue.500', 'blue.200')}>Continue shopping</Link>
					</HStack>
				</Flex>
			</Stack>
		</Box>
	);
};
