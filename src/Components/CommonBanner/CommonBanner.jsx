

const CommonBanner = ({ title, description }) => {
    return (
        <div className="">
            <h2 className="pt-10 text-3xl font-light">{title}</h2>
            <p className="pt-7 font-thin text-wrap">{description}</p>
        </div>
    );
};

export default CommonBanner;