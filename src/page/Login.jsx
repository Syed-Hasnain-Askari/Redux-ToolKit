import React, { useState } from 'react';
import {
	Box,
	Button,
	Checkbox,
	Container,
	Divider,
	FormControl,
	FormLabel,
	Heading,
	HStack,
	Input,
	Stack,
	Text,
	Alert,
	AlertIcon,
} from '@chakra-ui/react';
import { PasswordField } from '../components/PasswordField';
import { OAuthButtonGroup } from '../components/OAuthButtonGroup';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginUser } from '../features/auth/loginAction';
import Layout from '../components/layout/Layout';
const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const { loading, userInfo, error, success } = useSelector((state) => state.auth);
	const dispatch = useDispatch();
	const handleChange = (setState) => (event) => {
		setState(event.target.value);
	};
	const onSubmit = async (event) => {
		event.preventDefault();
		if (!email || !password) {
			console.log('Fields can not be empty!');
		} else {
			dispatch(
				loginUser({
					employeeEmail: email,
					employeePassword: password,
				})
			);
		}
	};
	return (
		<Layout>
			<Container
				maxW='lg'
				py={{ base: '12', md: '24' }}
				px={{ base: '0', sm: '8' }}>
				<Stack spacing='8'>
					<Stack spacing='6'>
						<Stack
							spacing={{ base: '2', md: '3' }}
							textAlign='center'>
							{error && (
								<Alert status='error'>
									<AlertIcon />
									Somthing went wrong
								</Alert>
							)}
							{success && (
								<Alert status='success'>
									<AlertIcon />
									Login sucessful
								</Alert>
							)}
							<Heading size={{ base: 'xs', md: 'sm' }}>Log in to your account</Heading>
							<HStack
								spacing='1'
								justify='center'>
								<Text color='muted'>Don't have an account?</Text>
								<Link
									to={'/signup'}
									variant='link'
									colorScheme='blue'>
									Sign up
								</Link>
							</HStack>
						</Stack>
					</Stack>
					<Box
						py={{ base: '0', sm: '8' }}
						px={{ base: '4', sm: '10' }}
						bg={{ base: 'transparent', sm: 'bg-surface' }}
						boxShadow={{ base: 'none', sm: 'md' }}
						borderRadius={{ base: 'none', sm: 'xl' }}>
						<Stack spacing='6'>
							<Stack spacing='5'>
								<FormControl>
									<FormLabel htmlFor='email'>Email</FormLabel>
									<Input
										id='email'
										type='email'
										value={email}
										onChange={handleChange(setEmail)}
									/>
								</FormControl>
								<PasswordField
									onChange={handleChange(setPassword)}
									value={password}
								/>
							</Stack>
							<HStack justify='space-between'>
								<Checkbox defaultChecked>Remember me</Checkbox>
								<Button
									variant='link'
									colorScheme='blue'
									size='sm'>
									Forgot password?
								</Button>
							</HStack>
							<Stack spacing='6'>
								<Button
									variant='primary'
									onClick={onSubmit}>
									Sign in
								</Button>
								<HStack>
									<Divider />
									<Text
										fontSize='sm'
										whiteSpace='nowrap'
										color='muted'>
										or continue with
									</Text>
									<Divider />
								</HStack>
								<OAuthButtonGroup />
							</Stack>
						</Stack>
					</Box>
				</Stack>
			</Container>
		</Layout>
	);
};

export default Login;
