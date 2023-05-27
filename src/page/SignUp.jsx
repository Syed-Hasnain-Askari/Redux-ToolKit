import React, { useState, useEffect } from 'react';
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
import { useDispatch, useSelector } from 'react-redux';
import { PasswordField } from '../components/PasswordField';
import { registerUser } from '../features/auth/signupAction';
import { Link, useNavigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
const SignUp = () => {
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
				registerUser({
					email: email,
					password: password,
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
							<Heading size={{ base: 'xs', md: 'sm' }}>SignUp your account</Heading>
							<HStack
								spacing='1'
								justify='center'>
								<Text color='muted'>Already have an account?</Text>
								<Link
									to={'/login'}
									variant='link'
									colorScheme='blue'>
									Login
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
									Sign Up
								</Button>
							</Stack>
							{error && (
								<Alert status='error'>
									<AlertIcon />
									Somthing went wrong
								</Alert>
							)}
							{success && (
								<Alert status='success'>
									<AlertIcon />
									SignUp sucessful
								</Alert>
							)}
						</Stack>
					</Box>
				</Stack>
			</Container>
		</Layout>
	);
};

export default SignUp;
