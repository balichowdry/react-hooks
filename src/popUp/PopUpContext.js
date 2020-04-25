import React, {
    createContext,
    useState,
    useEffect,
    useRef,
    useCallback,
} from 'react';

const initialPopUp = {
    message: '',
    type: null,
    visible: false,
};

export const PopUpContext = createContext({});

export const PopUpProvider = ({children}) => {
    const [popUp, setPopUp] = useState(initialPopUp);
    const timeout = useRef();

    const show = useCallback(args => {
        setPopUp({...initialPopUp, visible: true, ...args});
    }, []);

    const hide = useCallback(() => {
        setPopUp({...popUp, visible: false});
    }, [popUp]);

    useEffect(() => {
        if (popUp.visible) {
            // timeout.current = setTimeout(hide, 1500);  //AutoHide Disable
            return () => {
                if (timeout.current) {
                    clearTimeout(timeout.current);
                }
            };
        }
    }, [popUp]);

    return (
        <PopUpContext.Provider
            value={{
                hide,
                show,
                popUp,
            }}>
            {children}
        </PopUpContext.Provider>
    );
};
