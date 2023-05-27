import './App.css';
import Login from './page/Login';
import SignUp from './page/SignUp';
import Error from './page/Error';
import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Index from './page/Index';
import ProductDetail from './page/DetailProduct';
import Checkout from './page/Checkout';

export const router = createBrowserRouter(
	createRoutesFromElements(
		<Route>
			<Route
				path='/'
				element={<Index />}
			/>
			<Route
				path='/login'
				element={<Login />}
			/>
			<Route
				path='/signup'
				element={<SignUp />}
			/>
			<Route
				path='/productDetail'
				element={<ProductDetail />}
			/>
			<Route
				path='/checkout'
				element={<Checkout />}
			/>
			<Route
				path='*'
				element={<Error />}
			/>
		</Route>
	)
);
