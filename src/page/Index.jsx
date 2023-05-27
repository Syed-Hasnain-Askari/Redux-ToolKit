import React from 'react';
import Hero from '../components/Hero';
import Layout from '../components/layout/Layout';
import ProductCard from '../components/Card';
export default function Index() {
	return (
		<Layout>
			<Hero />
			<ProductCard />
		</Layout>
	);
}
