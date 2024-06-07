import { PageLayout } from "../PageLayout"
import { AuthProvider } from "../providers/AuthProvider"
import { ThemeProvider } from "../providers/ThemeProvider";

// Pretty much a duplication of src\app\page.tsx
export default function HomePage() {    
    console.log('On home page now');
    
    return (
		<ThemeProvider>
			<AuthProvider>
				<PageLayout />
				{/* <PalletSelector pallet={theme} setPallet={handleSetTheme} /> */}
			</AuthProvider>
		</ThemeProvider>
	);
}