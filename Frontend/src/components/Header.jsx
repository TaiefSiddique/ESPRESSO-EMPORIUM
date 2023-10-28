import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <Link to="/addCoffee">Add Coffee</Link>
            <Link to="/allCoffee">All Coffee</Link>
        </div>
    );
};

export default Header;