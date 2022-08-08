import React, { useState } from 'react'
import { collection, doc, setDoc, getFirestore} from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL, getStorage  } from 'firebase/storage';
import './NewProduct.css'
import { appFirebase } from '../../../firebase'

const db = getFirestore(appFirebase)
const storage = getStorage(appFirebase)



const NewProductoAdmin = () => {
    const [ name, setName ] = useState('')
    const [ price, setPrice ] = useState('')
    const [ category, setCategory ] = useState('')
    const [ info, setInfo ] = useState('')
    const [url, setUrl] = useState('')

    const hanledSubmit = async ( e ) => {
        e.preventDefault()
        console.log('cargando')

        // Add a new document with a generated id
        const refdoc = doc(collection(db, "products"));
        const id = refdoc.id;
        console.log(id)
        await setDoc(refdoc, {name, price, category, info, id, url });

    }

    const  handlerFilen = async (e) => {
        //detectar el archivo
        const archivoLocal = e.target.files[0]
    
        ///subir a la DB
        const archivoRef = ref(storage, `documentos/${archivoLocal.name}`)
         await uploadBytes(archivoRef, archivoLocal)
     
        ///url
        const getUrl = await getDownloadURL(archivoRef);
        setUrl(getUrl)
        

    }
  return (
    <form
        onSubmit={hanledSubmit}    
        className='container-form'>
        <input type='text' className=''  placeholder='Nombre del Producto' onChange={e => setName(e.target.value)} />
        <input type='text' className=''  placeholder='Precio' onChange={e => setPrice(e.target.value)}  />
        <select name="select" onChange={(e) => setCategory(e.target.value)}>
            <option value="">    Selecione una categoria</option>
            <option value="medicina">Medicina</option>
            <option value="belleza">Belleza</option>
        </select>
        <input type='text' className=''  placeholder='Caracteristicas' onChange={e => setInfo(e.target.value)}  />
        <input type='file'  placeholder="Añade archivo"onChange={handlerFilen}  />
        <input type='submit' className=''  value='Crear Producto' />
    </form>
  )
}

export default NewProductoAdmin