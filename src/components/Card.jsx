import {
	Box,
	Center,
	Card,
	VStack,
	ButtonGroup,
	Button,
	Divider,
	Flex,
	Avatar,
	IconButton,
	CardBody,
	CardFooter,
	Heading,
	Text,
	Stack,
	Image,
	Container,
	useToast,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/addToCart';
import SimpleDrawer from './Drawer';
const data = [
	{
		id: 1,
		quantity: 0,
		name: 'Product 1',
		description: 'High-quality wireless headphones with noise cancellation',
		price: '$149.99',
		image:
			'https://images.unsplash.com/photo-1674658556545-f18d4080ab6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
	},
	{
		id: 2,
		quantity: 0,
		name: 'Product 2',
		description: 'Over-ear headphones with exceptional audio clarity',
		price: '$99.99',
		image:
			'https://images.unsplash.com/photo-1646500366920-b4c5ce29237d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
	},
	{
		id: 3,
		quantity: 0,
		name: 'Product 3',
		description: 'Sports headphones with sweat resistance and secure fit',
		price: '$79.99',
		image:
			'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
	},
	{
		id: 4,
		quantity: 0,
		name: 'Product 4',
		description: 'Wireless earbuds with long battery life and compact design',
		price: '$129.99',
		image:
			'https://images.unsplash.com/photo-1487215078519-e21cc028cb29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
	},
];
export default function ProductCard() {
	const dispatch = useDispatch();
	const toast = useToast();
	const handleAddToCart = (id, name, image, description, price) => {
		dispatch(
			addToCart({
				id,
				name,
				image,
				description,
				price,
			})
		);
		toast({
			title: 'Product Add',
			description: 'Your product has been added',
			status: 'info',
			duration: 5000,
			isClosable: true,
		});
	};
	return (
		<Container maxW={'9xl'}>
			<Stack direction={{ base: 'column', md: 'row' }}>
				<Heading
					fontWeight={600}
					fontSize={{ base: '1xl', sm: '2xl', lg: '2xl' }}>
					<Text
						as={'span'}
						color={'black'}>
						Headphones For You
					</Text>
				</Heading>
			</Stack>
			<Stack
				mt={10}
				pb={10}
				direction={{ base: 'column', md: 'row' }}>
				{data.map((item, index) => {
					const { id, name, image, description, price } = item;
					return (
						<Card
							maxW='sm'
							maxH={'sm'}
							boxShadow={'2xl'}
							rounded={'lg'}
							key={id}>
							<CardBody>
								<Link to='/productDetail'>
									<Image
										src={image}
										alt='Green double couch with wooden legs'
										borderRadius='lg'
									/>
								</Link>
								<Flex spacing='4'>
									<Flex
										flex='1'
										gap='4'
										alignItems={'center'}
										justifyContent={'center'}>
										<VStack
											spacing={1}
											alignItems={'flex-start'}>
											<Heading
												size='sm'
												textAlign={'left'}
												fontSize='lg'
												lineHeight='tall'>
												{name}
											</Heading>
											<Text
												fontSize={'sm'}
												textAlign={'left'}>
												{description}
											</Text>
										</VStack>
									</Flex>
									<Flex>
										<Heading
											fontSize={'sm'}
											mt={2}>
											{price}
										</Heading>
									</Flex>
								</Flex>
							</CardBody>
							<CardFooter>
								<ButtonGroup spacing='2'>
									<Button
										rounded={'full'}
										size={'sm'}
										fontWeight={'normal'}
										colorScheme={'red'}
										bg={'green.500'}
										_hover={{ bg: 'green.400' }}
										onClick={() => handleAddToCart(id, name, image, description, price)}>
										Add to cart
									</Button>
								</ButtonGroup>
							</CardFooter>
						</Card>
					);
				})}
				{/* <SimpleDrawer /> */}
			</Stack>
		</Container>
	);
}
