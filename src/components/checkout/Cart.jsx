import {
	Heading,
	HStack,
	VStack,
	Image,
	AspectRatio,
	Text,
	Divider,
	Stack,
	Button,
	Flex,
	useColorMode,
	useColorModeValue,
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';
const Cart = () => {
	const { toggleColorMode } = useColorMode();
	const bgColor = useColorModeValue('gray.50', 'whiteAlpha.50');
	const secondaryTextColor = useColorModeValue('gray.600', 'gray.400');
	const cart = useSelector((state) => state.cart);
	return (
		<VStack
			w='full'
			h='full'
			p={10}
			spacing={6}
			align='flex-start'
			bg={bgColor}>
			<VStack
				alignItems='flex-start'
				spacing={3}>
				<Heading size='2xl'>Your cart</Heading>
				<Text>
					If the price is too hard on your eyes,{' '}
					<Button
						onClick={toggleColorMode}
						variant='link'
						colorScheme='black'>
						try changing the theme.
					</Button>
				</Text>
			</VStack>
			<VStack
				spacing={6}
				alignItems='flex-start'
				direction={'column'}
				w='full'>
				{cart.map((item, index) => {
					return (
						<>
							<Flex
								justifyContent='space-between'
								w='full'>
								<AspectRatio
									w={24}
									ratio={1}>
									<Image
										src={item.image}
										alt={item.name}
									/>
								</AspectRatio>
								<Stack
									spacing={0}
									alignItems='center'>
									<VStack
										w='full'
										spacing={0}
										alignItems='flex-start'>
										<Heading
											size='sm'
											textAlign='end'
											color={secondaryTextColor}>
											{item.name}
										</Heading>
									</VStack>
									<Heading
										size='sm'
										textAlign='end'>
										{item.price}
									</Heading>
								</Stack>
							</Flex>
							<Divider />
						</>
					);
				})}
			</VStack>
			<VStack
				spacing={4}
				alignItems='stretch'
				w='full'>
				<HStack justifyContent='space-between'>
					<Text color={secondaryTextColor}>Subtotal</Text>
					<Heading size='sm'>$119.00</Heading>
				</HStack>
				<HStack justifyContent='space-between'>
					<Text color={secondaryTextColor}>Shipping</Text>
					<Heading size='sm'>$19.99</Heading>
				</HStack>
				<HStack justifyContent='space-between'>
					<Text color={secondaryTextColor}>Taxes (estimated)</Text>
					<Heading size='sm'>$23.80</Heading>
				</HStack>
			</VStack>
			<Divider />
			<HStack
				justifyContent='space-between'
				w='full'>
				<Text color={secondaryTextColor}>Total</Text>
				<Heading size='lg'>$162.79</Heading>
			</HStack>
		</VStack>
	);
};

export default Cart;
