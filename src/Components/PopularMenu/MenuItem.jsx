
const MenuItem = ({ item }) => {
    const { name, image, price, recipe } = item;
    return (
        <div className="flex gap-2 w-full">
            <div className="w-1/5 flex justify-center">
                <img src={image} alt="" className="rounded-r-full rounded-bl-full h-24 w-24" />
            </div>
            <div className="px-8 w-4/5">
                <h3 className="text-xl">{name}.................</h3>
                <p>{recipe}</p>
            </div>
            <h3 className="text-yellow-500 w-1/5 text-left">${price}</h3>
        </div>
    );
};

export default MenuItem;