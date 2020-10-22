import React, {useState} from 'react';

export const TotalContext = React.createContext([]);

export const TotalProvider = (props) => {
    const [total, setTotal] = useState([]);

    return(
        <TotalContext.Provider value={[total, setTotal]}>
            {props.children}
        </TotalContext.Provider>
    )
}