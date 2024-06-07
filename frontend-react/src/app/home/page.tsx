"use client"

import { useContext } from "react";
import { PageLayout } from "../PageLayout"
import { AuthProvider } from "../providers/AuthProvider"
import { ThemeContext } from "../page";

// Pretty much a duplication of src\app\page.tsx
export default function HomePage() {
    const theme = useContext(ThemeContext);
    
    console.log('On home page now');
    
    return (
		<ThemeContext.Provider value={theme}>
			<AuthProvider>
				<PageLayout theme={theme} toggleTheme={() => void 0} />
				{/* <PalletSelector pallet={theme} setPallet={handleSetTheme} /> */}
			</AuthProvider>
		</ThemeContext.Provider>
	);
}