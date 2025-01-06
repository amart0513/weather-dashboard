import { ForecastData } from "@/api/types";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Line, LineChart, ResponsiveContainer} from "recharts";


interface HourlyTemperatureProps {
    data: ForecastData;
}

const HourlyTemperature = ({data}: HourlyTemperatureProps) => {

    const chartData = data.list;




    return (
        <Card className="flex-1">
            <CardHeader>
                <CardTitle>Today's Temperature</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="h-[200px] w-full">
                    <ResponsiveContainer width={"100%"} height={"100%"}>
                    <LineChart data={chartData}>
                        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                    </LineChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>

    );
};

export default HourlyTemperature;