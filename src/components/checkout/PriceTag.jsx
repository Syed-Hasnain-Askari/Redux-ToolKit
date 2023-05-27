import { HStack, Text, useColorModeValue as mode } from '@chakra-ui/react';
export function formatPrice(value, opts = {}) {
	const { locale = 'en-US', currency = 'USD' } = opts;
	const formatter = new Intl.NumberFormat(locale, {
		currency,
		style: 'currency',
		maximumFractionDigits: 2,
	});
	return formatter.format(value);
}
export const PriceTag = (props) => {
	const { price } = props;
	console.log(price, 'price Tag');
	return (
		<HStack>
			<Text>{price}</Text>
		</HStack>
	);
};
