import { useContext } from "react";
import { ThemeContext } from "../page";

export const Exit = ({
    height,
    width
}: {
    height?: number,
    width?: number
}) => {
	const theme = useContext(ThemeContext);
	return (
		<svg xmlns="http://www.w3.org/2000/svg" height={height ?? 24} width={width ?? 24} viewBox="80 -880 800 800" fill={theme.primary}>
            <path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144zM480-80q-83 0-156-31.5T197-197t-85.5-127T80-480t31.5-156T197-763t127-85.5T480-880t156 31.5T763-763t85.5 127T880-480t-31.5 156T763-197t-127 85.5T480-80m0-80q134 0 227-93t93-227-93-227-227-93-227 93-93 227 93 227 227 93m0-320"/>
        </svg>
	)
}

