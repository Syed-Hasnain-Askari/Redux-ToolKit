import {
	AspectRatio,
	Box,
	Heading,
	Button,
	HStack,
	Image,
	Skeleton,
	Stack,
	Text,
	useToast,
	useColorModeValue,
	Flex,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Rating } from './Rating';
import { FavouriteButton } from './FavouriteButton';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../features/addToCart';
export const ProductCard = (props) => {
	const dispatch = useDispatch();
	const toast = useToast();
	const handleAddToCart = (id, name, description, image, price) => {
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
	const { product, rootProps } = props;
	const { id, name, image, price, description, rating } = product;
	return (
		<Stack
			spacing={{
				base: '4',
				md: '5',
			}}
			{...rootProps}>
			<Link to={'/productDetail'}>
				<Box position='relative'>
					<AspectRatio ratio={4 / 3}>
						<Image
							src={image}
							alt={name}
							draggable='false'
							fallback={<Skeleton />}
							borderRadius={{
								base: 'md',
								md: 'xl',
							}}
						/>
					</AspectRatio>
					<FavouriteButton
						position='absolute'
						top='4'
						right='4'
						aria-label={`Add ${name} to your favourites`}
					/>
				</Box>
			</Link>
			<Stack>
				<Flex spacing='1'>
					<Flex
						flex='1'
						gap='4'
						alignItems={'center'}
						justifyContent={'center'}>
						<Stack mt={5}>
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
						</Stack>
					</Flex>
					<Heading
						fontSize={'sm'}
						mt={5}>
						{price}
					</Heading>
				</Flex>
				<HStack>
					<Rating
						defaultValue={rating}
						size='sm'
					/>
					<Text
						fontSize='sm'
						color={useColorModeValue('gray.600', 'gray.400')}>
						12 Reviews
					</Text>
				</HStack>
			</Stack>
			<Stack align='center'>
				<Button
					colorScheme='blue'
					width='full'
					onClick={() => handleAddToCart(id, name, description, image, price)}>
					Add to cart
				</Button>
			</Stack>
		</Stack>
	);
};
