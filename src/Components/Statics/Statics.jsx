import { useLoaderData } from "react-router-dom";
import { Area, Bar, CartesianGrid, ComposedChart, Legend, Line, ResponsiveContainer, Scatter, Tooltip, XAxis, YAxis } from "recharts";
import CommonBanner from "../CommonBanner/CommonBanner";

const Statics = () => {
    const data = useLoaderData();
    console.log(data);

    return (
        <div>
            <CommonBanner title={"Statistics"} description={"Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"}></CommonBanner>
            <div className="mt-40 mx-auto container">
                <div className="bg-gray-200 py-12 text-sm mx-auto">
                    <ResponsiveContainer width="100%" height={600}>
                        <ComposedChart
                            data={data}
                            margin={{
                                top: 20,
                                right: 20,
                                bottom: 20,
                                left: 20,
                            }}
                        >
                            <CartesianGrid stroke="#f5f5f5" />
                            <XAxis dataKey="title" scale="band" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Area type="monotone" dataKey="rating" fill="#8884d8" stroke="#8884d8" />
                            <Bar dataKey="price" barSize={20} fill="#413ea0" />
                            <Line type="monotone" dataKey="rating" stroke="#ff7300" />
                            <Scatter dataKey="price" fill="red" />
                        </ComposedChart>
                    </ResponsiveContainer>

                </div>
            </div>
        </div>
    );
};

export default Statics;