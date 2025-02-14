import { useLoaderData, useParams } from "react-router-dom";


const Details = () => {
    const { id } = useParams();
    // console.log(id);
    const products = useLoaderData();
    console.log(products);

    return (
        <div>
            this is details
        </div>
    );
};

export default Details;