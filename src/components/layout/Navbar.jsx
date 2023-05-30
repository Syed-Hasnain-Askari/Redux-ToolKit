import {
	Box,
	Flex,
	Text,
	IconButton,
	Stack,
	Collapse,
	Icon,
	Popover,
	PopoverTrigger,
	PopoverContent,
	useColorModeValue,
	useBreakpointValue,
	useDisclosure,
	Container,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, ChevronDownIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { AiOutlineLogin } from 'react-icons/ai';
import { Badge } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function Navbar() {
	const { isOpen, onToggle } = useDisclosure();
	const cart = useSelector((state) => state.cart);
	const getTotalQuantity = () => {
		let total = 0;
		const cartArray = Object.values(cart);
		cartArray.forEach((item) => {
			total += item.quantity;
		});
		return total;
	};
	return (
		<Container
			maxWidth='100%'
			right={0}
			left={0}
			top={0}
			padding={0}
			position={'fixed'}
			zIndex={200}>
			<Flex
				minH={'100px'}
				backgroundColor={'green.500'}
				align={'center'}
				paddingLeft={{ base: 5, md: 100 }}
				paddingRight={{ base: 5, md: 100 }}>
				<Flex
					flex={{ base: 1, md: 'auto' }}
					ml={{ base: -2 }}
					display={{ base: 'flex', md: 'none' }}>
					<IconButton
						right={0}
						top={0}
						onClick={onToggle}
						icon={
							isOpen ? (
								<CloseIcon
									w={3}
									h={3}
								/>
							) : (
								<HamburgerIcon
									w={5}
									h={5}
								/>
							)
						}
						variant={'ghost'}
						aria-label={'Toggle Navigation'}
					/>
				</Flex>
				<Flex
					flex={{ base: 1 }}
					justify={{ base: 'center', md: 'start' }}>
					<Link to={'/'}>
						<Text
							textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
							fontFamily={'heading'}
							color={useColorModeValue('gray.800', 'white')}>
							Logo
						</Text>
					</Link>

					<Flex
						display={{ base: 'none', md: 'flex' }}
						ml={10}>
						<DesktopNav />
					</Flex>
				</Flex>

				<Stack
					flex={{ base: 5, md: 0 }}
					justify={'flex-end'}
					direction={'row'}
					spacing={2}>
					<AiOutlineLogin size={20} />
					<Link to={'/login'}>
						<Text
							fontSize={'sm'}
							fontWeight={500}>
							Login
						</Text>
					</Link>
					<Stack position={'relative'}>
						<Link to={'/checkout'}>
							<AiOutlineShoppingCart size={20} />
							<Badge
								colorScheme='green'
								bg={'blue.200'}
								fontSize={'sm'}
								fontWeight={500}
								position={'absolute'}
								rounded={'full'}
								bottom={4}
								left={3}>
								{getTotalQuantity() || 0}
							</Badge>
						</Link>
					</Stack>
					<Text
						fontSize={'sm'}
						fontWeight={500}>
						Cart
					</Text>
					<Text></Text>
				</Stack>
			</Flex>

			<Collapse
				in={isOpen}
				animateOpacity>
				<MobileNav />
			</Collapse>
		</Container>
	);
}

const DesktopNav = () => {
	const linkColor = useColorModeValue('gray.600', 'gray.200');
	const linkHoverColor = useColorModeValue('gray.800', 'white');
	const popoverContentBgColor = useColorModeValue('white', 'gray.800');

	return (
		<Stack
			direction={'row'}
			spacing={4}>
			{NAV_ITEMS.map((navItem) => (
				<Box key={navItem.label}>
					<Popover
						trigger={'hover'}
						placement={'bottom-start'}>
						<PopoverTrigger>
							<Link
								p={2}
								href={navItem.href ?? '#'}
								fontSize={'sm'}
								fontWeight={500}
								color={linkColor}
								_hover={{
									textDecoration: 'none',
									color: linkHoverColor,
								}}>
								{navItem.label}
							</Link>
						</PopoverTrigger>

						{navItem.children && (
							<PopoverContent
								border={0}
								boxShadow={'xl'}
								bg={popoverContentBgColor}
								p={4}
								rounded={'xl'}
								minW={'sm'}>
								<Stack>
									{navItem.children.map((child) => (
										<DesktopSubNav
											key={child.label}
											{...child}
										/>
									))}
								</Stack>
							</PopoverContent>
						)}
					</Popover>
				</Box>
			))}
		</Stack>
	);
};

const DesktopSubNav = ({ label, href, subLabel }) => {
	return (
		<Link
			href={href}
			role={'group'}
			display={'block'}
			p={2}
			rounded={'md'}
			_hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
			<Stack
				direction={'row'}
				align={'center'}>
				<Box>
					<Text
						transition={'all .3s ease'}
						_groupHover={{ color: 'pink.400' }}
						fontWeight={500}>
						{label}
					</Text>
					<Text fontSize={'sm'}>{subLabel}</Text>
				</Box>
				<Flex
					transition={'all .3s ease'}
					transform={'translateX(-10px)'}
					opacity={0}
					_groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
					justify={'flex-end'}
					align={'center'}
					flex={1}>
					<Icon
						color={'pink.400'}
						w={5}
						h={5}
						as={ChevronRightIcon}
					/>
				</Flex>
			</Stack>
		</Link>
	);
};

const MobileNav = () => {
	return (
		<Stack
			bg={useColorModeValue('white', 'gray.800')}
			p={4}
			display={{ md: 'none' }}>
			{NAV_ITEMS.map((navItem) => (
				<MobileNavItem
					key={navItem.label}
					{...navItem}
				/>
			))}
		</Stack>
	);
};

const MobileNavItem = ({ label, children, href }) => {
	const { isOpen, onToggle } = useDisclosure();

	return (
		<Stack
			spacing={4}
			onClick={children && onToggle}>
			<Flex
				py={2}
				as={Link}
				href={href ?? '#'}
				justify={'space-between'}
				align={'center'}
				_hover={{
					textDecoration: 'none',
				}}>
				<Text
					fontWeight={600}
					color={useColorModeValue('gray.600', 'gray.200')}>
					{label}
				</Text>
				{children && (
					<Icon
						as={ChevronDownIcon}
						transition={'all .25s ease-in-out'}
						transform={isOpen ? 'rotate(180deg)' : ''}
						w={6}
						h={6}
					/>
				)}
			</Flex>

			<Collapse
				in={isOpen}
				animateOpacity
				style={{ marginTop: '0!important' }}>
				<Stack
					mt={2}
					pl={4}
					borderLeft={1}
					borderStyle={'solid'}
					borderColor={useColorModeValue('gray.200', 'gray.700')}
					align={'start'}>
					{children &&
						children.map((child) => (
							<Link
								key={child.label}
								py={2}
								href={child.href}>
								{child.label}
							</Link>
						))}
				</Stack>
			</Collapse>
		</Stack>
	);
};

const NAV_ITEMS = [
	{
		label: 'Categories',
		children: [
			{
				label: 'Mens',
				subLabel: 'Trending Design to inspire you',
				href: '#',
			},
			{
				label: 'Womens',
				subLabel: 'Up-and-coming Designers',
				href: '#',
			},
		],
	},
	{
		label: 'Find Work',
		children: [
			{
				label: 'Job Board',
				subLabel: 'Find your dream design job',
				href: '#',
			},
			{
				label: 'Freelance Projects',
				subLabel: 'An exclusive list for contract work',
				href: '#',
			},
		],
	},
	{
		label: 'Learn Design',
		href: '#',
	},
	{
		label: 'Hire Designers',
		href: '#',
	},
];
