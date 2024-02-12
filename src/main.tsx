import ReactDOM from 'react-dom/client'
import "./App.css";

import App from './App.tsx'

import { Provider } from "react-redux"
import store from "./redux/store.ts";

import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider} from "next-themes";



ReactDOM.createRoot(document.getElementById('root')!).render(
	<Provider store={store}>
		<NextUIProvider>
			<NextThemesProvider
				attribute="class"
				defaultTheme="light"
				themes={["light","dark"]}
			>
				<App />
			</NextThemesProvider>
		</NextUIProvider>
	</Provider>
)
