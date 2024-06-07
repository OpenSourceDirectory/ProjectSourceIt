const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

import { PageLayout } from './PageLayout';
import { AuthProvider } from './providers/AuthProvider';
import { ThemeProvider } from './providers/ThemeProvider';

// TODO get default theme from browser and apply that one.
export default function App() {
	return (
		<ThemeProvider>
			<AuthProvider>
				<PageLayout />
				{/* <PalletSelector pallet={theme} setPallet={handleSetTheme} /> */}
			</AuthProvider>
		</ThemeProvider>
	);
}