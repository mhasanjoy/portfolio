import { createContext, useEffect, useState } from 'react';

export const AppContext = createContext({});

const AppProvider = ({ children }) => {
    const [portfolioData, setPortfolioData] = useState({});

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}data.json`)
            .then((response) => response.json())
            .then((data) => setPortfolioData(data))
            .catch((error) => console.log(error));
    }, []);

    return (
        <AppContext.Provider value={{ portfolioData }}>
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;
