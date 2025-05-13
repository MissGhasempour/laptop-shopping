//import ProductDefinition from "@/app/productInfo/productDefinition";

export default function Cart ({name, cost} : {
    name : string
    cost : number
}) {
    return (
        <div>
            {/* <ProductDefinition /> */}
            <h1>laptop name : {name} </h1>
            <p>cost : {cost} $</p>
            <button className="text-stone-100 border-solid  rounded-md p-2 w-30 bg-blue-700">paypal</button>
        </div>
    )
}