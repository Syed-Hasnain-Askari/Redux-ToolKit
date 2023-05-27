import { useState } from 'react';
import {
	useColorMode,
	Switch,
	Flex,
	Button,
	IconButton,
	useColorModeValue,
	useBreakpointValue,
	useDisclosure,
	Container,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
export default function Navbar() {
	const { colorMode, toggleColorMode } = useColorMode();
	const isDark = colorMode === 'dark';
	const [display, changeDisplay] = useState('none');
	return (
		<Container>
			<Flex
				bg={useColorModeValue('white', 'gray.800')}
				color={useColorModeValue('gray.600', 'white')}
				borderBottom={1}
				borderStyle={'solid'}
				borderColor={useColorModeValue('gray.200', 'gray.900')}
				align={'center'}
				position={'fixed'}
				backgroundColor='rgba(255, 
					255, 255, 0.8)'
				backdropFilter='saturate(180%) blur(5px)'
				w='100%'
				zIndex={200}>
				{/* Desktop */}
				<Flex display={['none', 'none', 'flex', 'flex']}>
					<Link to='/'>
						<Button
							as='a'
							variant='ghost'
							aria-label='Home'
							my={5}
							w='100%'>
							Home
						</Button>
					</Link>

					<Link to='/about'>
						<Button
							as='a'
							variant='ghost'
							aria-label='About'
							my={5}
							w='100%'>
							About
						</Button>
					</Link>

					<Link to='/contact'>
						<Button
							as='a'
							variant='ghost'
							aria-label='Contact'
							my={5}
							w='100%'>
							Contact
						</Button>
					</Link>
				</Flex>

				{/* Mobile */}
				<IconButton
					aria-label='Open Menu'
					size='lg'
					mr={2}
					icon={<HamburgerIcon />}
					onClick={() => changeDisplay('flex')}
					display={['flex', 'flex', 'none', 'none']}
				/>
				<Switch
					color='green'
					isChecked={isDark}
					onChange={toggleColorMode}
				/>
			</Flex>

			{/* Mobile Content */}
			<Flex
				w='100vw'
				display={display}
				bgColor='gray.50'
				zIndex={20}
				h='100vh'
				pos='fixed'
				top='0'
				left='0'
				overflowY='auto'
				flexDir='column'>
				<Flex justify='flex-end'>
					<IconButton
						mt={2}
						mr={2}
						aria-label='Open Menu'
						size='lg'
						icon={<CloseIcon />}
						onClick={() => changeDisplay('none')}
					/>
				</Flex>

				<Flex
					flexDir='column'
					align='center'>
					<Link to='/'>
						<Button
							as='a'
							variant='ghost'
							aria-label='Home'
							my={5}
							w='100%'>
							Home
						</Button>
					</Link>

					<Link to='/about'>
						<Button
							as='a'
							variant='ghost'
							aria-label='About'
							my={5}
							w='100%'>
							About
						</Button>
					</Link>

					<Link to='/contact'>
						<Button
							as='a'
							variant='ghost'
							aria-label='Contact'
							my={5}
							w='100%'>
							Contact
						</Button>
					</Link>
				</Flex>
			</Flex>
		</Container>
	);
}
