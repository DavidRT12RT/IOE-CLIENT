
//Pages
import { BreadcrumbItem, Breadcrumbs } from '@nextui-org/react';
import LeftMenu from './components/leftMenu/LeftMenu';
import NavbarMenu from './components/navbar/Navbar';
import RegistrarProducto from './views/productos/RegistrarProducto';
import Producto from './views/productos/components/Producto';

// TODO: Make React routes


function App() {

	return (
		<div className="font-roboto">
			<nav><NavbarMenu/></nav>
			<main className="MainContainer">
				{/* <LeftMenu/> */}
				<div className="MainContent">
	            <Breadcrumbs>
                	<BreadcrumbItem>Home</BreadcrumbItem>
                	<BreadcrumbItem>Productos</BreadcrumbItem>
                	<BreadcrumbItem>
                	<p className="font-bold">
                    	406bd12a-08b1-4a02-b92d-5c395f259c3a
                	</p>
                	</BreadcrumbItem>
            	</Breadcrumbs>
					{/* <Inventarios/> */}
					{/* <RegistrarProducto/> */}
					<Producto/>
				</div>
			</main>
		</div>
  	);

}

export default App
