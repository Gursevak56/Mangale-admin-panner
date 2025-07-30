"use client";

import { useState } from "react";
import {
    Banknote,
    TrendingUp,
    TrendingDown,
    Wallet2,
    Truck,
    Utensils,
} from "lucide-react";
import RevenueChart from "@/components/RevenueChart";

export default function WalletPage() {
    const [metrics] = useState([
        {
            title: "Total Revenue",
            amount: "₹2,15,000",
            icon: <Banknote className="w-6 h-6 text-green-600" />,
            trend: "+12%",
        },
        {
            title: "Net Profit",
            amount: "₹48,000",
            icon: <TrendingUp className="w-6 h-6 text-blue-600" />,
            trend: "+6.5%",
        },
        {
            title: "Total Rider Payouts",
            amount: "₹42,500",
            icon: <Truck className="w-6 h-6 text-yellow-600" />,
            trend: "+2.1%",
        },
        {
            title: "Total Restaurant Payouts",
            amount: "₹1,12,000",
            icon: <Utensils className="w-6 h-6 text-purple-600" />,
            trend: "+8%",
        },
        {
            title: "Platform Commission",
            amount: "₹12,500",
            icon: <Wallet2 className="w-6 h-6 text-orange-600" />,
            trend: "+3.3%",
        },
    ]);

    const recentPayouts = [
        {
            id: "#PT98732",
            type: "Restaurant",
            to: "Pizza House",
            amount: "₹5,400",
            date: "2025-07-28",
            status: "Completed",
        },
        {
            id: "#PT98712",
            type: "Rider",
            to: "Ravi Singh",
            amount: "₹1,200",
            date: "2025-07-27",
            status: "Completed",
        },
        {
            id: "#PT98654",
            type: "Restaurant",
            to: "Spicy Grill",
            amount: "₹7,800",
            date: "2025-07-25",
            status: "Pending",
        },
    ];

    return (
        <div className="p-6 bg-white rounded-xl shadow">
            <div className="mb-6">
                <h2 className="text-2xl font-semibold text-gray-800">Wallet Overview</h2>
                <p className="text-sm text-gray-500">Track revenue, payouts and profits</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-6">
                {metrics.map((m) => (
                    <div key={m.title} className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium text-gray-500">{m.title}</span>
                            {m.icon}
                        </div>
                        <div className="text-xl font-bold text-gray-800">{m.amount}</div>
                        <span className="text-xs text-green-600">{m.trend} vs last week</span>
                    </div>
                ))}
            </div>

            {/* Revenue Trend Chart */}
            <div className="bg-white p-6 rounded-xl shadow h-80 mb-6">
                <h3 className="text-sm font-medium text-gray-600 mb-4">Revenue Trend</h3>
                <div className="h-full flex items-center justify-center text-gray-400">
                    {/* TODO: Replace with Chart.js or Recharts */}
                    <RevenueChart />
                </div>
            </div>

            {/* Recent Payouts */}
            <div className="bg-white p-6 rounded-xl shadow">
                <div className="flex justify-between mb-4">
                    <h3 className="text-sm font-medium text-gray-600">Recent Payouts</h3>
                </div>
                <table className="w-full text-sm text-left">
                    <thead className="text-gray-500 uppercase bg-gray-50 border-b">
                        <tr>
                            <th className="px-4 py-2">ID</th>
                            <th className="px-4 py-2">Type</th>
                            <th className="px-4 py-2">To</th>
                            <th className="px-4 py-2">Amount</th>
                            <th className="px-4 py-2">Date</th>
                            <th className="px-4 py-2">Status</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y">
                        {recentPayouts.map((p) => (
                            <tr key={p.id}>
                                <td className="px-4 py-3">{p.id}</td>
                                <td className="px-4 py-3">{p.type}</td>
                                <td className="px-4 py-3">{p.to}</td>
                                <td className="px-4 py-3">{p.amount}</td>
                                <td className="px-4 py-3">{p.date}</td>
                                <td className="px-4 py-3">
                                    <span
                                        className={`text-xs font-medium px-2 py-1 rounded-full ${p.status === "Completed"
                                            ? "bg-green-100 text-green-700"
                                            : "bg-yellow-100 text-yellow-700"
                                            }`}
                                    >
                                        {p.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
