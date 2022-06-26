import {useState, useEffect} from 'react'
import {getGifts} from '../helpers/getgifts'

export const useFetchGifs = (category) =>{

    const [Images, setImages] = useState([]);
    const [Isloading, setIsloading] = useState(true);

    

    const getImages = async() =>{
        const newImages = await getGifts( category );
	    setImages(newImages);
        setIsloading(false);
	    
    };
    
    useEffect( () => {
        getImages();
    },[])

    return{

	    Images,
        Isloading 
    }
}



