import React from 'react';
import Hero from '../components/Hero';
import Layout from '../components/layout/Layout';
import { ProductContainer } from '../components/productgrid/ProductContainer';
export default function Index() {
	return (
		<Layout>
			<Hero />
			<ProductContainer />
		</Layout>
	);
}
