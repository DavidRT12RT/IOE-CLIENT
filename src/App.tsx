
//Pages
import { BreadcrumbItem, Breadcrumbs } from '@nextui-org/react';
import LeftMenu from './components/leftMenu/LeftMenu';
import NavbarMenu from './components/navbar/Navbar';
import RegistrarProducto from './views/productos/RegistrarProducto';
import Producto from './views/productos/components/Producto';
import Login from './views/auth/login/Login';
import AppRouter from './routers/AppRouter';

// TODO: Make React routes


function App() {

	return (
		<div className="font-roboto">
			<AppRouter/>
		</div>
  	);

}

export default App
