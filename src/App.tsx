
//Pages
import LeftMenu from './components/leftMenu/LeftMenu';
import NavbarMenu from './components/navbar/Navbar';
import Inventarios from './views/inventarios/Inventarios';
import RegistrarProducto from './views/productos/RegistrarProducto';

// TODO: Make React routes


function App() {

	return (
		<div className="font-roboto">
			<nav><NavbarMenu/></nav>
			<main className="MainContainer">
				<LeftMenu/>
				<div className="MainContent">
					{/* <Inventarios/> */}
					<RegistrarProducto/>
				</div>
			</main>
		</div>
  	);

}

export default App
