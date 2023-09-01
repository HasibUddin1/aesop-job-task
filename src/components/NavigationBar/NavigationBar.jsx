import { FaSearch } from "react-icons/fa";

const NavigationBar = () => {
    return (
        <div className="px-10 py-8 flex justify-between">
            <div className="flex items-center gap-5 text-lg font-semibold">
                <a href="#">Skin Care</a>
                <a href="#">Body & Hand</a>
                <a href="#">Hair</a>
                <a href="#">Fragrance</a>
                <a href="#">Home</a>
                <a href="#">Kits & Travel</a>
                <a href="#">Gifts</a>
                <a href="#">Read</a>
                <a href="#">Stores</a>
                <a href="#">Facial Appointments</a>
                <a href="#"><FaSearch></FaSearch></a>
            </div>
            <div className="flex gap-5 text-lg font-semibold">
                <a href="#">Log in</a>
                <a href="#">Cabinet</a>
                <a href="#">Cart</a>
            </div>
        </div>
    );
};

export default NavigationBar;