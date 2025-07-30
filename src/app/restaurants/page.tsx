"use client";

import { useState } from "react";
import { Eye, ShieldOff, ShieldCheck, Plus } from "lucide-react";

interface Restaurant {
    id: string;
    name: string;
    location: string;
    owner: string;
    status: "active" | "blocked";
}

const dummyRestaurants: Restaurant[] = [
    {
        id: "res001",
        name: "Pizza Nation",
        location: "Kanpur, UP",
        owner: "Manish Sinha",
        status: "active",
    },
    {
        id: "res002",
        name: "Burger Zone",
        location: "Lucknow",
        owner: "Amit Yadav",
        status: "blocked",
    },
];

export default function RestaurantsPage() {
    const [restaurants, setRestaurants] = useState<Restaurant[]>(dummyRestaurants);

    const toggleBlock = (id: string) => {
        setRestaurants((prev) =>
            prev.map((r) =>
                r.id === id ? { ...r, status: r.status === "active" ? "blocked" : "active" } : r
            )
        );
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-800">Restaurant Management</h2>
                <button className="flex items-center gap-2 px-4 py-2 text-sm bg-yellow-500 text-white rounded-lg hover:bg-yellow-600">
                    <Plus className="w-4 h-4" /> Add Restaurant
                </button>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
                <table className="min-w-full divide-y divide-gray-200 text-sm">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-4 py-2 text-left">Name</th>
                            <th className="px-4 py-2 text-left">Location</th>
                            <th className="px-4 py-2 text-left">Owner</th>
                            <th className="px-4 py-2 text-left">Status</th>
                            <th className="px-4 py-2 text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {restaurants.map((res) => (
                            <tr key={res.id}>
                                <td className="px-4 py-2 font-medium text-gray-800">{res.name}</td>
                                <td className="px-4 py-2 text-gray-600">{res.location}</td>
                                <td className="px-4 py-2 text-gray-600">{res.owner}</td>
                                <td className="px-4 py-2">
                                    <span
                                        className={`px-2 py-1 text-xs rounded font-medium ${res.status === "active"
                                                ? "bg-green-100 text-green-700"
                                                : "bg-red-100 text-red-700"
                                            }`}
                                    >
                                        {res.status}
                                    </span>
                                </td>
                                <td className="px-4 py-2 space-x-2">
                                    <button className="text-blue-600 hover:underline">
                                        <Eye className="inline-block w-4 h-4 mr-1" />
                                        View
                                    </button>
                                    <button
                                        className={`text-sm ${res.status === "active"
                                                ? "text-red-600 hover:underline"
                                                : "text-green-600 hover:underline"
                                            }`}
                                        onClick={() => toggleBlock(res.id)}
                                    >
                                        {res.status === "active" ? (
                                            <>
                                                <ShieldOff className="inline-block w-4 h-4 mr-1" />
                                                Block
                                            </>
                                        ) : (
                                            <>
                                                <ShieldCheck className="inline-block w-4 h-4 mr-1" />
                                                Unblock
                                            </>
                                        )}
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
