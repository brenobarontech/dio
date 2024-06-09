import { createContext } from "react";

interface IAppContext {
	user : string,
	logado : boolean,
}

export const AppContext = createContext({} as IAppContext)

export const AppContextProvider = ({children} : any) => {
	const user = 'Breno'
	const logado =  false
	return(
		<>
			<AppContext.Provider value={{user,logado}} >
				{children}
			</AppContext.Provider>
		</>
	)
}
