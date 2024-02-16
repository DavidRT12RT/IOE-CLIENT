import ReactDOM from 'react-dom/client'
import "./App.css";

import App from './App.tsx'


import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider} from "next-themes";



ReactDOM.createRoot(document.getElementById('root')!).render(
	<NextUIProvider>
		<NextThemesProvider
			attribute="class"
			defaultTheme="light"
			themes={["light","dark"]}
		>
			<App />
		</NextThemesProvider>
	</NextUIProvider>
)
