

const NewItem = ({ product }) => {
    const { image, title, desc } = product;
    return (
        <div className=" pt-40 mx-auto gap-0">
            <div className="card bg-base-100 w-80 h-96 shadow-xl ">
                <figure>
                    <img className="h-60"
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{desc}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Pre-order now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewItem;