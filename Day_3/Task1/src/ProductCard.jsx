
export default function ProductCard() {
    return (
        <div>
            <div className=" p-4 mx-auto border-2 border-blue-300 rounded-lg shadow-lg hover:shadow-2xl transition-all w-72 h-96 flex flex-col items-center gap-2">
                <img src="https://i.pinimg.com/736x/1a/b1/61/1ab1611bded891badcdca38f11111488.jpg" alt="pic" className="w-65 h-60 hover:scale-105 transition-all mx-auto"/>
                <h2 className="text-xl font-semibold text-cyan-500 hover:text-cyan-700">Shopping</h2>
                <span className="text-sm text-fuchsia-300 font-semibold">₦300,000</span>
                <button className="cursor-pointer bg-blue-300 hover:bg-blue-600 hover:text-white rounded-lg">Add to cart</button>
            </div>
        </div>
    )
}