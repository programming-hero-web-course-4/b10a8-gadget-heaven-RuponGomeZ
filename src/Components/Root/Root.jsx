import Banner from "../Banner/Banner";
import NavBar from "../NavBar/NavBar";


const Root = () => {
    return (
        <div>
            <div className=" mx-auto ">
                <div className="absolute top-5 z-10 w-full mx-8 -ml-6 pl-6"><NavBar></NavBar></div>
                <div className="banner-background top-6 ">
                    <Banner></Banner>
                </div>
            </div>
        </div>
    );
};

export default Root;