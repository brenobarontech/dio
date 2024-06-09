interface ICard{
    id : number
}



export const Card = ({id} : ICard) =>{
    return (
        <div>
           <p>{id === 1 ? 'Heloooooooooooooo' :  'efe'}</p>
        </div>
    )
}