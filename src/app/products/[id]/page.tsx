

import PriceTag from "@/components/PriceTag";
import { prisma } from "@/lib/db/prisma";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { cache } from "react";
import AddToCartButton from "./AddToCartButton";
import { incrementProductQuantity } from "./actions";



 interface productidProps {
  params : {
    id :string
  }
}

const getProduct = cache(async(id:string)=>{
const currentProduct = await prisma.product.findUnique({where:{id}})

  if(!currentProduct) notFound()
  return currentProduct

})

export async function generateMetadata({params:{id}}: productidProps) : Promise<Metadata>{
const product =await getProduct(id)
return {
  title : product.name+"-YouUo",
  description:product.description,
  openGraph :{
  images : {url:product.imageUrl}
  }
}
}


const ProductPage =async ({params:{id}}: productidProps) => {
  
 const product =await getProduct(id)
  
  return (
    <div className="flex flex-col lg:flex-row gap-4 lg:items-center">
   
   <Image src={product.imageUrl} alt={product.name} width={500} height={500} className="rounded-lg"  priority/>

   <div>
   <h1 className="text-5xl font-bold">{product.name}</h1>
   <PriceTag price ={product.price} className="mt-4" />
   <p className="py-6">{product.description}</p>
   <AddToCartButton productId={product.id} incrementProductQuantity={incrementProductQuantity} />
   </div>
   
    </div>
  )
};

export default ProductPage
