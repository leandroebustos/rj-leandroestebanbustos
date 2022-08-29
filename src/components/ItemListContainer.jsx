import ItemCount from "./ItemCount"

export const ItemListContainer=(props)=>{
    return(
        <div>
            <h1>Hola {props.hola}</h1>
            <ItemCount stock = {5} initial={1}/>
        </div>
    )
}