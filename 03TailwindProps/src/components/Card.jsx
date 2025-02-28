function Card(props) {
    console.log(props)
    return (
        <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white">
        <img className="w-full h-48 object-cover" src="../public/car.jpg" alt="Card Image" />
        <div className="p-5">
            <h2 className="text-xl font-bold text-gray-800">Card Title: {props.title}</h2>
            <p className="text-gray-600 mt-2">This is a simple card component built with Tailwind CSS.</p>
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Learn More
            </button>
        </div>
    </div>
    )
}

export default Card