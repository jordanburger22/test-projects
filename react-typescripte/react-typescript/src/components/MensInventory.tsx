import { Product } from "./types"


interface InventoryProp {
    inventory: Product[],
    user: string
}


function MensInventory( props: InventoryProp ){

    const { inventory } = props

    const mensInv = inventory.filter(item => item.category === "men's clothing")
    const jewleryInv = inventory.filter(item => item.category === "jewelery")
    const electronicInv = inventory.filter(item => item.category === "electronics")
    const womensInv = inventory.filter(item => item.category === "women's clothing")


    const mensMap = mensInv.map(item => {
        return (
            <div key={item.id} className="w-96 mb-20 border-solid border-2 border-black p-5 flex flex-col justify-between mr-2">
                <h1 className="text-lg">{item.title}</h1>
                <img className="w-44 self-center justify-self-center" src={item.image}/>    
            </div>
        )
    }
    )

    const jewleryMap = jewleryInv.map(item => {
        return (
            <div key={item.id} className="w-96 mb-20 border-solid border-2 border-black p-5 flex flex-col justify-between mr-2">
                <h1 className="text-lg">{item.title}</h1>
                <img className="w-44 self-center justify-self-center" src={item.image}/>    
            </div>
        )
    }
    )

    const electronicMap = electronicInv.map(item => {
        return (
            <div key={item.id} className="w-96 mb-20 border-solid border-2 border-black p-5 flex flex-col justify-between mr-2">
                <h1 className="text-lg">{item.title}</h1>
                <img className="w-44 self-center justify-self-center" src={item.image}/>    
            </div>
        )
    }
    )

    const womensMap = womensInv.map(item => {
        return (
            <div key={item.id} className="w-96 mb-2 border-solid border-2 border-black p-5 flex flex-col justify-between mr-2">
                <h1 className="text-lg">{item.title}</h1>
                <img className="w-44 self-center justify-self-center" src={item.image}/>    
            </div>
        )
    }
    )

    return(
        <div className="flex flex-col">
            <div className=" w-full flex overflow-x-scroll">
                {mensMap}
            </div>

            <div className="w-full flex overflow-x-scroll">
                {jewleryMap}
            </div>

            <div className="w-full flex overflow-x-scroll">
                {electronicMap}
            </div>

            <div className="w-full flex overflow-x-scroll">
                {womensMap}
            </div>
        </div>
    )
}

export default MensInventory