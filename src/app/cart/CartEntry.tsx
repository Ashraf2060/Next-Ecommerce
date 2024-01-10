"use client"

import { CartItemWithProduct } from "@/lib/db/cart";
import format from "@/lib/format";
import Image from "next/image";
import Link from "next/link";
import { useTransition } from "react";


interface cartEntryProps {
  cartItem : CartItemWithProduct,
  setProductQuantity : (productId:string , quantity:number)=>Promise<void>

}
const CartEntry = ({cartItem:{product,quantity},setProductQuantity}:cartEntryProps) => {
  const [isPending,startTransition]= useTransition()
  const quantityOptions : JSX.Element[]=[]

  for(let i=1; i<=99; i++){
  quantityOptions.push(
    <option value={i} key={i}>
    {i}
    </option>
  )
  }
  return (
    <div>
   <div className="flex flex-wrap items-center gap-3">
   <Image src={product.imageUrl} width={200} height={200}   alt={product.id} className="rounded-lg"/>
   <div className="">
   <Link href={"/products/" + product.id} className="font-bold">{product.name}</Link>
   <div>Price : {(product.price)/100}</div>
   <div className="my-1 flex items-center gap-2">
   Quantity :

   <select className="select select-bordered w-full max-w-[80px] " defaultValue={quantity}
   
   onChange={e=>{

    const currentQuantity = parseInt(e.currentTarget.value)
   startTransition(async()=>
   await setProductQuantity(product.id,currentQuantity)
   
   )

   }}>
   <option value={0}>0(remove)</option>
   {quantityOptions}
   </select>
   
   </div>
   <div className="flex items-center gap-3">Toatal : {(product.price * quantity)} $
   
   {isPending && <span className="loading loading-spinner loading-sm" />}
   </div>

   
   </div>
   
   </div>
   <div className="divider" />
    </div>
  )
};

export default CartEntry
