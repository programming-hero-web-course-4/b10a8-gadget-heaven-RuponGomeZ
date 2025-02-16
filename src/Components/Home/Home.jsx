import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import Products from "../Products/Products";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="mt-96">
                <Products></Products>
            </div>
        </div>
    );
};

export default Home;