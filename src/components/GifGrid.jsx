import { GifItem } from './GifItem';
import {useFetchGifs} from '../hooks/useFetchGifs.js'

export const GifGrid = ({category}) => {

    const { Images,Isloading } = useFetchGifs( category );

    return (
        <>
    
	    <h3>{category}</h3>
	    {

		    Isloading && ( <h1>cargando...</h1> )

	    }
            <div className='card-grid' >
		        {

		            Images.map((image)=>(
		    
				        <GifItem 
				            key={image.id}
				            { ...image }
				        />

		            ))

		        }              
               
            </div>
            
    
        </>
    )
};
