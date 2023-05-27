import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './App.jsx';
import { Provider } from 'react-redux';
import { Store } from './store/Store';
// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store={Store}>
			<ChakraProvider>
				<RouterProvider router={router} />
			</ChakraProvider>
		</Provider>
	</React.StrictMode>
);
