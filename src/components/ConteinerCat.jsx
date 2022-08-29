import Catalogo from "./ItemCount"



const ConteinerCat = () =>{
    const catalogo =[
        {

            nombre: 'ACER',
            precio: '180000',
            info:'16 GB RAM,1 TB DD',
            
        },
        {
            nombre: 'LENOVO',
            precio: '120000',
            info:'4 GB RAM,1 TB DD',  
        }
    ]


    return (
        <div>
        <Catalogo produc={catalogo[0]}/>
        <Catalogo produc={catalogo[1]}/>
        </div>
        )
    }



export default ConteinerCat