import { useState, useEffect } from 'react'
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { AppContext } from "./AppContext";
import { appFirebase } from '../firebase';


const db = getFirestore(appFirebase)


const AppProvider = ({children}) => {

    const [ isAuth, setIsAuth ] = useState(false || localStorage.getItem('isAuth') )
    const [ user, setUser ] = useState([])

    useEffect(() => {
        const getData = async () => {
            const querySnapshot = await getDocs(collection(db, "products"));
            querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            });
        }
        getData()
    }, [])

////////////////////fruncion para iniciar sesion
    const Login = (item) => {
        localStorage.setItem('isAuth', true)
        setIsAuth(true);
        setUser(item);

    }


    return (
        <AppContext.Provider
            value={{
                isAuth : isAuth,
                user: user,
                Login : Login,
                
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider