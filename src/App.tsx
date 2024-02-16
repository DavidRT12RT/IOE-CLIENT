
import { Provider } from 'react-redux';

import AppRouter from './routers/AppRouter';
import store from './redux/store';

function App() {
	return (
		<Provider store={store}>
			<div className="font-roboto">
				<AppRouter/>
			</div>
		</Provider>
  	);

}

export default App
