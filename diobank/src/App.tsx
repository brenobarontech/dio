/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useContext,createContext } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from './pages/Login/login';
import { Conta } from './pages/conta/conta';
import Home from './pages/home/home';
import { AppContextProvider } from "./componentes/AppContext"



function App() {

	return (	
		<>	
			<BrowserRouter>				
				
				<AppContextProvider>

					<Routes>
						<Route path='/' element={<Login />} />

						<Route path='/' element={<Home />} >
							<Route path='/conta/:id' element={<Conta />} />
						</Route>
					</Routes>			

				</AppContextProvider>			
				
			</BrowserRouter>		
		
		</>
	
	);
}

export default App;
