import Image from "next/image";
import Link from "next/link";
import logo from "@/app/assets/logo.png"
import { redirect } from "next/navigation";
import { getCart } from "@/lib/db/cart";
import ShoppingCartButton from "./ShoppingCartButton";
import UserMenuButton from "./UserMenuButton";
import { getServerSession } from "next-auth";
import { authoption } from "../api/auth/[...nextauth]/route";



const searchProducts = async (formaData:FormData) => {
  "use server"
  const searchQuery = formaData.get("searchQuery")?.toString()


  if(searchQuery){

    redirect("/search?query=" + searchQuery)
  }



}



const NavBar =async () => {

  const session =await getServerSession(authoption)

const cart = await getCart()


  return (
    <div className="bg-base-100">
   <div className="navbar max-w-7xl  m-auto flex-col sm:flex-row gap-2">
        <div className="flex-1 ">
        <Link href="/"  className="btn btn-ghost text-xl">
        <Image src={logo } height={40} width={40} alt="YouUo"/>
         YouUo Shopping
        </Link>
        </div>
        <div className="flex-none gap-2">
        <form action={searchProducts}>
        <div className="form-control">
        <input name="searchQuery" placeholder="Search"  className="input input-bordered w-full m-w-[200px] "/>
        </div>
        </form>

        <ShoppingCartButton cart={cart} />
        <UserMenuButton session={session} />
        </div>

   </div>
    </div>
  )
};

export default NavBar
