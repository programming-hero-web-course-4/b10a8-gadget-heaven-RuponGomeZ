import { useLoaderData } from "react-router-dom";
import CommonBanner from "../CommonBanner/CommonBanner";
import NewItem from "./NewItem";


const UpcomingItems = () => {
    const data = useLoaderData();
    console.log(data);

    return (
        <div>
            <CommonBanner title={"Upcoming hot items"}></CommonBanner>
            <div className="grid lg:grid-cols-3 md:grid-cols-2">
                {
                    data.map(product => <NewItem product={product} key={product.id}></NewItem>)
                }
            </div>
        </div>
    );
};

export default UpcomingItems;