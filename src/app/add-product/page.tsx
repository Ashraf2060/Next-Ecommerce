



import FormSubmitButton from "@/components/FormSubmitButton";
import { prisma } from "@/lib/db/prisma";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOption } from "@/app/api/auth/[...nextauth]/route";

export const metadata = {
  title: "Add Product - Flowmazon",
};

async function addProduct(formData: FormData) {
  "use server";

  const session = await getServerSession(authOption);

  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/add-product");
  }

  const name = formData.get("name")?.toString();
  const description = formData.get("description")?.toString();
  const imageUrl = formData.get("imageUrl")?.toString();
  const price = Number(formData.get("price") || 0);

  if (!name || !description || !imageUrl || !price) {
    throw Error("Missing required fields");
  }

  await prisma.product.create({
    data: { name, description, imageUrl, price },
  });

  redirect("/");
}

export default async function AddProductPage() {
  const session = await getServerSession(authOption);

  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/add-product");
  }

  return (
    <div>
      <h1 className="mb-3 text-lg font-bold">Add Product</h1>
      <form action={addProduct}>
        <input
          required
          name="name"
          placeholder="Name"
          className="input-bordered input mb-3 w-full"
        />
        <textarea
          required
          name="description"
          placeholder="Description"
          className="textarea-bordered textarea mb-3 w-full"
        />
        <input
          required
          name="imageUrl"
          placeholder="Image URL"
          type="url"
          className="input-bordered input mb-3 w-full"
        />
        <input
          required
          name="price"
          placeholder="Price"
          type="number"
          className="input-bordered input mb-3 w-full"
        />
        <FormSubmitButton className="btn-block">Add Product</FormSubmitButton>
      </form>
    </div>
  );
}









































































// import { prisma } from "@/lib/db/prisma";
// import { redirect } from "next/navigation";

// import FormSubmitButton from "@/components/FormSubmitButton";





// const AddProductpage = () => {


//  const addProduct =async (formData : FormData)=>{
// "use server"
// const name = formData.get("name")?.toString()
// const description = formData.get("description")?.toString()
// const price = Number( formData.get("price") || 0)
// const imageUrl = formData.get("imageUrl")?.toString()

// if(!name || !description ||!price || !imageUrl){
//   throw Error("{Missing required fields")
// }
//   await prisma.product.create({

// data:{name,description,price,imageUrl,}
//   })
//   redirect("/")
//  }




//   return (
//     <div>
//     <h1 className="text-lg font-bold mb-3">Add Product </h1> 
//     <form action={addProduct}>
//     <input className="mb-3 w-full input input-bordered " required name="name" placeholder="name"/>
  
//   <textarea required name="description" placeholder="Description"  className="textarea textarea-bordered mb-3 w-full "></textarea>
//   <input className="mb-3 w-full input input-bordered " required name="imageUrl" placeholder="imageUrl" type="url"/><input className="mb-3 w-full input input-bordered " required name="price" placeholder="Price" type="number"/>
//   <FormSubmitButton  className=" btn-block">
//   Add Product
//   </FormSubmitButton>
//     </form>
//     </div>
//   )
// };

// export default AddProductpage
