import { Link } from "react-router-dom";

const Nav = () =>{
    return <div className="nav">
        <Link to="/">
            <div>THE CRYTO PRICE APP</div>
        </Link>
        <Link to="/currencies">
            <div>CURRENCIES</div>
        </Link>
    </div>
}
export default Nav