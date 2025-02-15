

const CommonBanner = ({ title, description }) => {
    return (
        <div className="bg-[#9538E2] h-[300px] mx-4 rounded-lg banner-background relative mt-20  text-center text-white">
            <h2 className="pt-10 text-3xl font-light">{title}</h2>
            <p className="pt-7 font-thin text-wrap">{description}</p>
        </div>
    );
};

export default CommonBanner;