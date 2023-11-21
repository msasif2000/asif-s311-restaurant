

import useAuth from "../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { axiosSecure } from "../../Hooks/useAxiosSecure";


const FoodCard = ({ item }) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const { name, image, price, recipe } = item;


  const handleAddToCart = (item) => {
    if (user && user.email) {
      const cartItem = {
        menuId: item._id,
        email: user.email,
        name,
        image,
        price
      }
      axiosSecure.post('/carts', cartItem)
        .then(res => {
          console.log(res.data);
          if (res.data.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${name} added to cart`,
              showConfirmButton: false,
              timer: 1500
            });
          }
        })

    }
    else {
      Swal.fire({
        title: "You are not logged in",
        text: "Please login to add to cart!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login"
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });

    }
  }
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={image} alt="image" /></figure>
        <p className="bg-slate-900 text-white absolute right-0 p-2 mr-4 mt-2 rounded-xl">${price}</p>
        <div className="card-body flex flex-col items-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-end">
            <button onClick={() => handleAddToCart(item)} className="btn btn-sm border-b-2 border-b-slate-500 hover:border-b-red-500">ADD TO CART</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;