import { getCart } from "@/lib/db/cart";
import CartEntry from "./CartEntry";
import { setProductQuantity } from "./actions";


export const metadata ={
  title: "Your Cart - YouUoShop"
}
const Cartpage =async () => {

  const cart = await getCart()

  return (
    <div>
    <h1 className="text-3xl font-bold mb-6">Shpping Cart </h1> 
    {cart?.items.map(Cartitem=>
     <CartEntry cartItem={Cartitem} key={Cartitem.cartId} setProductQuantity={setProductQuantity} />
    )}
    {!cart?.items.length && <p className="font-semibold">Your Cart is Empty</p>}
    <div className="flex flex-col items-end sm:items-center ">
    <p className="mb-3 font-bold">Total: {(cart?.subtotal)} $</p>

    <button className="btn btn-primary sm:w-[200px]"> Check Out</button>
    </div>
    </div>
  )
};

export default Cartpage
