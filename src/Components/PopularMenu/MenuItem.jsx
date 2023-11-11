
const MenuItem = ({ item }) => {
    const { name, image, price, recipe } = item;
    return (
        <div className="flex gap-2">
            <img src={image} alt="" className="rounded-r-full rounded-bl-full h-24 w-24"/>
            <div className="px-8">
                <h3 className="text-xl">{name}.................</h3>
                <p>{recipe}</p>
            </div>
            <h3 className="text-yellow-500">${price}</h3>
        </div>
    );
};

export default MenuItem;