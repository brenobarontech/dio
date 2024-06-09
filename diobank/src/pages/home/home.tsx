import React from 'react';
import { Header } from '../../componentes/Header/Header';
import { Footer } from '../../componentes/footer/footer';
import { Outlet } from 'react-router-dom';

function Home() {

	return (	
		<>
            <Header />



                <Outlet />
            <Footer/>

		
	
			

			
		
		
		</>
	
	);
}

export default Home;
