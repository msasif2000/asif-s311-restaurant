

const FoodCard = ({item}) => {
    const {name,image,price,recipe} = item;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={image} alt="image" /></figure>
  <p className="bg-slate-900 text-white absolute right-0 p-2 mr-4 mt-2 rounded-xl">${price}</p>
  <div className="card-body flex flex-col items-center">
    <h2 className="card-title">{name}</h2>
    <p>{recipe}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-sm border-b-2 border-b-slate-500 hover:border-b-red-500">ADD TO CART</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default FoodCard;