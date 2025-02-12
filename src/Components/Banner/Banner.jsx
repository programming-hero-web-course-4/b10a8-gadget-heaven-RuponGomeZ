

const Banner = () => {
    return (
        <div className=" bg-[#9538E2] h-[600px] mx-4 rounded-lg ">
            <div className="pt-28 text-white text-center">
                <h1 className=" font-bold text-4xl">Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories</h1>
                <p className="mt-7">Explore the latest gadgets that will take your experience to the next level. From smart devices <br /> to the coolest accessories, we have it all!</p>
                <button className="btn rounded-3xl mt-7">Shop Now</button>
            </div>
            <img className="w-[900px] h-[450px] mx-auto p-5 mt-20 rounded-2xl border " src="/src/assets/banner.jpg" alt="" />
        </div>
    );
};

export default Banner;