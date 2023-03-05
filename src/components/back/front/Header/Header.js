import { useState } from "react"
import { Link } from "react-router-dom"
import './Header.css'
const Header = ({searchProduct,setsearchProduct})=>{
    const [openMenu, setOpenMenu] = useState(false)
    return (
        <div>
        <header className="header flex sticky top-0 w-full bg-slate-900 overflow-hidden items-center inset-0 justify-between my-0">
            <div className="header-links flex items-end pt-3 justify-center items-center">
                <ul>
                    <li className=" list-none block text-lg items-end">
                        <Link to="/" className=" decoration-clone uppercase text-white px-3 hover:text-red-500 items-end max-sm:hidden">Home</Link>
                    </li>
                </ul>
                <ul>
                <li className=" list-none block text-lg">
                        <Link to="sign-up" className=" decoration-clone uppercase text-white px-3 hover:text-red-500 max-sm:hidden">SignUp</Link>
                    </li>
                </ul>
                <ul>
                <li className=" list-none block text-lg">
                        <Link to="cart" className="cart decoration-clone uppercase text-white hover:text-green-500 max-sm:hidden">Cart{" "}<i className="fas fa-shopping-cart"/></Link>
                    </li>
                </ul>
                <ul>
                <li className=" list-none block text-lg">
                        <Link to="chatbot" className="cart decoration-clone uppercase text-white hover:text-red-500 max-sm:hidden pl-3">Chat Bot</Link>
                    </li>
                </ul>
                <i className="fa fa-bars text-white sm:hidden pl-4 pb-3" onClick={()=> {
                    if(openMenu){
                        setOpenMenu(false)
                    } else{
                        setOpenMenu(true)
                    }
                }
                    }></i>
                
                <li className=" list-none block text-lg  max-sm:pb-3">
               
                    <Link className="logo pl-5 justify-center decoration-clone text-white font-semibold">
                    iShopCart
                    </Link>
                
                </li>
            </div>
         <input className=" flex-row-reverse lg:m-4 lg:w-72 lg:h-10 md:m-4 max-sm:mr-4 rounded-md" value={searchProduct} onChange={(e)=>setsearchProduct(e.target.value)}/>
         
        </header>
        {openMenu ? 
            <div className="p-2 bg-white text-slate-700 font-semibold rounded-sm border sm:hidden relative transform-cpu">
            <ul>
                <li className=" list-none block text-xs">
                    <Link to="/" className=" decoration-clone uppercase px-2">Home</Link>
                </li>
            </ul>
            <ul>
            <li className=" list-none block text-xs">
                    <Link to="sign-up" className=" decoration-clone uppercase px-2">SignUp</Link>
                </li>
            </ul>
            <ul>
            <li className=" list-none block text-xs">
                    <Link to="cart" className="cart decoration-clone px-2">Cart</Link>
                </li>
            </ul>
            <ul>
            <li className=" list-none block text-xs">
                    <Link to="chatbot" className="cart decoration-clone px-2">Chat Bot</Link>
                </li>
            </ul>
            </div> : " "
            }
            </div>
    )
}
export default Header