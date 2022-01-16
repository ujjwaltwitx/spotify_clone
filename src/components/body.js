import Header from "./home"
import SideNav from "./side_nav";

const htm = (
    <div className="flex">
        <SideNav />
        <Header />
    </div>
)

const body = ()=>{
    return htm;
}

export default body;