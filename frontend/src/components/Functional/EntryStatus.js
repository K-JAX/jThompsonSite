import { createContext, useContext } from "react";

export const EntryStatusContext = createContext();

export const EntryStatusProvider = (props) => {
	return (
		<EntryStatusContext.Provider value={{ status: props.status }}>
			{props.children}
		</EntryStatusContext.Provider>
	);
};
