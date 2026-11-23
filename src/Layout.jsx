import { Link, NavLink, Outlet } from "react-router-dom";
import schoolimg from "./assets/school.png"
function Layout(){
    return (
        <div className="realtive bg-amber-100 h-screen">
            <div className="">
                <nav className="p-3 m-5 absolute shadow-2xl bg-green-300 rounded-lg flex items-center
                 gap-5 font-mono font-semibold w-285">
                    <div className="w-10">
                        <img src={schoolimg} alt="School logo is not available" />
                    </div>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                </nav>
            </div>
            <div className="py-30 px-10">
                <Outlet/>
            </div>

        </div>
    )
}

export default Layout;