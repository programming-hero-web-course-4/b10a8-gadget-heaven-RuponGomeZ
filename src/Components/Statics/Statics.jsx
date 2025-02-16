import { useLoaderData } from "react-router-dom";
import { Bar, BarChart, XAxis, YAxis } from "recharts";
import CommonBanner from "../CommonBanner/CommonBanner";



const Statics = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div>
            <CommonBanner title={"Statistics"} description={"Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"}></CommonBanner>
            <div className="mt-40 mx-auto container ">
                <div className="bg-gray-200 py-12 text-sm mx-auto container ml-20">
                    <BarChart width={1500} height={400} data={data}>
                        <XAxis dataKey="title"></XAxis>
                        <YAxis dataKey="price"></YAxis>
                        <Bar dataKey="price" fill="#9538E2"></Bar>
                        <Bar dataKey="rating" fill="red"></Bar>
                    </BarChart>
                    <div className="flex justify-center gap-3">
                        <div className="bg-[#9538E2] rounded-sm h-4 w-4"></div>
                        <p>Price</p>
                        <div className="bg-[red] rounded-sm h-4 w-4"></div>
                        <p>rating</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Statics;