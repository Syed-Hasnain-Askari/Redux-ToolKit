import { Container, Stack, Flex, Box, Heading, Text, Button, Image } from '@chakra-ui/react';

export default function Hero() {
	return (
		<Container maxW={'7xl'}>
			<Stack
				align={'center'}
				spacing={{ base: 8, md: 10 }}
				py={{ base: 20, md: 28 }}
				direction={{ base: 'column', md: 'row' }}>
				<Stack
					flex={1}
					spacing={{ base: 5, md: 10 }}>
					<Heading
						fontWeight={500}
						fontSize={{ base: '3xl', sm: '4xl', lg: '5xl' }}>
						<Text
							as={'span'}
							color={'green.400'}>
							Grap upto 50% Off on Headphones
						</Text>
					</Heading>

					<Stack
						spacing={{ base: 4, sm: 6 }}
						direction={{ base: 'column', sm: 'row' }}
						justifyContent={'center'}
						justifyItems={'center'}>
						<Button
							rounded={'full'}
							size={'lg'}
							fontWeight={'normal'}
							px={6}
							colorScheme={'red'}
							bg={'green.500'}
							_hover={{ bg: 'green.400' }}>
							Buy Now
						</Button>
					</Stack>
				</Stack>
				<Flex
					flex={1}
					justify={'center'}
					align={'center'}
					position={'relative'}
					w={'full'}>
					<Box
						position={'relative'}
						height={'300px'}
						rounded={'2xl'}
						boxShadow={'2xl'}
						width={'full'}
						overflow={'hidden'}>
						<Image
							alt={'Hero Image'}
							fit={'cover'}
							align={'center'}
							w={'100%'}
							h={'100%'}
							src='
                            https://images.unsplash.com/photo-1593121925328-369cc8459c08?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80
                            '
						/>
					</Box>
				</Flex>
			</Stack>
		</Container>
	);
}
