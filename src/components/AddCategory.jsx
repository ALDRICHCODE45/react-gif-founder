
import {useState} from 'react'
    

export const AddCategory = ({onNewCategory}) => {
    
    
    const [inputValue, setInputValue] = useState('');

    const onInputChange = (evento) =>{
        // console.log(evento.target.value)
        setInputValue( evento.target.value )
    };

    const onSubmit = (event) => {
        event.preventDefault();
	
        if( inputValue.trim().length <=2 ) return;

        // setCategories( (categories)=>[  inputValue,...categories ] );
        onNewCategory( inputValue.trim() );

	    setInputValue('');

    };

    
    
    return (
        <form onSubmit={ (evento) => onSubmit(evento) }>
            <input
        
                type="text"
                placeholder="Buscar gifs" 
                value={ inputValue }
                onChange={  onInputChange }
        
            />

        </form>

  )
}





