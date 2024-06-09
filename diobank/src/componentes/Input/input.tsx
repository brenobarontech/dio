import { InputContainer } from './style'
import { IInput } from './types'


export const Input = ({placeholder,onChange} :IInput) =>{
    return(<>
        <InputContainer>
            <input 
                placeholder={placeholder}
                onChange={onChange}
            />
        
        </InputContainer>
    
    </>)
}