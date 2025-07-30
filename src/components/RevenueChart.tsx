"use client";

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
} from "recharts";

const data = [
    { date: "10 Mar", revenue: 500 },
    { date: "11 Mar", revenue: 800 },
    { date: "12 Mar", revenue: 1500 },
    { date: "13 Mar", revenue: 700 },
    { date: "14 Mar", revenue: 900 },
    { date: "15 Mar", revenue: 1200 },
    { date: "16 Mar", revenue: 1800 },
];

export default function RevenueChart() {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line
                    type="monotone"
                    dataKey="revenue"
                    stroke="#facc15"
                    strokeWidth={3}
                />
            </LineChart>
        </ResponsiveContainer>
    );
}
