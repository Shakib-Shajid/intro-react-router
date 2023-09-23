import { Link, NavLink } from "react-router-dom";
import "./Header.css"
const Header = () => {
    return (
        <div>
            <h2>navbar</h2>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                {/* <Link to="/posts">Posts</Link> */}
                <NavLink to="/posts">posts</NavLink>
                <NavLink to="/users">users</NavLink>
                {/* <Link to="/users">users</Link> */}
                <Link to="/contact">Contact</Link>
            </nav>
        </div>
    );
};

export default Header;