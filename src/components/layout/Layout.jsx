import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import { Container } from '@chakra-ui/react';

function Layout({ children }) {
	return (
		<Container
			maxWidth='container.xl'
			padding={0}>
			<Navbar />
			{children}
			<Footer />
		</Container>
	);
}

export default Layout;
