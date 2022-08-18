import { useState, useEffect, useMemo } from 'react'
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { AppContext } from "./AppContext";
import { appFirebase } from '../firebase';


const db = getFirestore(appFirebase)


const AppProvider = ({ children }) => {

    const [isAuth, setIsAuth] = useState(false || localStorage.getItem('isAuth'))
    const [user, setUser] = useState([])
    const [allData, setAllData] = useState([])
    const [medicinesData, setMedicinesData] = useState([])

    const list = []

    useEffect(() => {


        const getData = async () => {
            const querySnapshot = await (await getDocs(collection(db, "products"))).docs;
            const data = querySnapshot.map(d => d.data())
            setAllData(data)
        }
        getData()

       

    }, [])



    ////////////////////fruncion para iniciar sesion
    const Login = (item) => {
        localStorage.setItem('isAuth', true)
        setIsAuth(true);
        setUser(item);

    }

    //////funcion para data medicamentos

    const dataMedicices = useMemo(() => {
        
        return allData && allData.filter(item => {
            
            return item.category === 'medicina'
        })
    }, [allData])


    //////////////DELETE ITEM

    const deleteItem = (id) =>{
        const array = allData.filter(item => {
            
            return item.id !== id
        })
        setAllData(array)
    }


    return (
        <AppContext.Provider
            value={{
                isAuth: isAuth,
                user: user,
                allData: allData,
                Login: Login,
                deleteItem: deleteItem



            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider