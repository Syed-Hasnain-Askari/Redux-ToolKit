import { CloseButton, Flex, Link, Select, useColorModeValue, ButtonGroup, Button, IconButton } from '@chakra-ui/react';
import { PhoneIcon, AddIcon, MinusIcon } from '@chakra-ui/icons';
import { PriceTag } from './PriceTag';
import { CartProductMeta } from './CartProductMeta';
const QuantitySelect = (props) => {
	return (
		<Select
			maxW='64px'
			aria-label='Select quantity'
			focusBorderColor={useColorModeValue('blue.500', 'blue.200')}
			{...props}>
			<option value='1'>1</option>
			<option value='2'>2</option>
			<option value='3'>3</option>
			<option value='4'>4</option>
		</Select>
	);
};

export const CartItem = (props) => {
	const { name, description, quantity, image, currency, price } = props.products;
	console.log(price);
	return (
		<Flex
			direction={{
				base: 'column',
				md: 'row',
			}}
			justify='space-between'
			align='center'>
			<CartProductMeta
				name={name}
				description={description}
				image={image}
			/>

			{/* Desktop */}
			<Flex
				width='full'
				justify='space-between'
				display={{
					base: 'none',
					md: 'flex',
				}}>
				<ButtonGroup
					size='sm'
					isAttached
					ml={5}
					variant='outline'>
					<IconButton
						aria-label='Add to friends'
						height={10}
						width={10}
						colorScheme='blue'
						variant='outline'
						icon={<MinusIcon />}
						onClick={props.onDecrementQuantity}
					/>
					<Button
						height={10}
						width={20}
						colorScheme='blue'>
						{quantity}
					</Button>
					<IconButton
						height={10}
						width={10}
						aria-label='Add to friends'
						colorScheme='blue'
						variant='outline'
						icon={<AddIcon />}
						onClick={props.onIncrementQuantity}
					/>
				</ButtonGroup>
				<PriceTag price={price} />
				<CloseButton
					aria-label={`Delete ${name} from cart`}
					onClick={() => props.onClickDelete()}
				/>
			</Flex>

			{/* Mobile */}
			<Flex
				mt='4'
				align='center'
				width='full'
				justify='space-between'
				display={{
					base: 'flex',
					md: 'none',
				}}>
				<Link
					fontSize='sm'
					textDecor='underline'>
					Delete
				</Link>
				<QuantitySelect
					value={quantity}
					onChange={(e) => {
						onIncrementQuantity?.(+e.currentTarget.value);
					}}
				/>
				<PriceTag
					price={price}
					currency={currency}
				/>
			</Flex>
		</Flex>
	);
};
