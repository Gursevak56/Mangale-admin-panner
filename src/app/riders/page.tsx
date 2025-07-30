"use client";

import { useState } from "react";
import { Lock, Unlock, Eye, X } from "lucide-react";
import classNames from "classnames";

interface Rider {
    id: number;
    name: string;
    contact: string;
    status: "active" | "blocked";
    joinedAt: string;
    totalDeliveries: number;
    rating: number;
}

const dummyRiders: Rider[] = [
    {
        id: 1,
        name: "Rohan Yadav",
        contact: "rohan@yadav.com",
        status: "active",
        joinedAt: "2023-05-01",
        totalDeliveries: 122,
        rating: 4.5,
    },
    {
        id: 2,
        name: "Kavita Rana",
        contact: "kavita@rider.com",
        status: "blocked",
        joinedAt: "2022-11-20",
        totalDeliveries: 204,
        rating: 4.7,
    },
    {
        id: 3,
        name: "Imran Ali",
        contact: "imran@ali.com",
        status: "active",
        joinedAt: "2023-01-10",
        totalDeliveries: 98,
        rating: 4.3,
    },
];

export default function RiderManagementPage() {
    const [riders, setRiders] = useState<Rider[]>(dummyRiders);
    const [selectedRider, setSelectedRider] = useState<Rider | null>(null);

    const toggleStatus = (id: number) => {
        setRiders((prev) =>
            prev.map((rider) =>
                rider.id === id
                    ? {
                        ...rider,
                        status: rider.status === "active" ? "blocked" : "active",
                    }
                    : rider
            )
        );
    };

    return (
        <>
            <div className="p-6 bg-white rounded-xl shadow">
                <div className="mb-4">
                    <h2 className="text-xl font-semibold text-gray-800">Rider Management</h2>
                    <p className="text-sm text-gray-500">Control and monitor all delivery riders</p>
                </div>

                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-100">
                            {riders.map((rider) => (
                                <tr key={rider.id}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">{rider.name}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{rider.contact}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                                        <span
                                            className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${rider.status === "active"
                                                ? "bg-green-100 text-green-800"
                                                : "bg-red-100 text-red-800"
                                                }`}
                                        >
                                            {rider.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm space-x-2">
                                        <button
                                            onClick={() => toggleStatus(rider.id)}
                                            className={`px-2 py-1 rounded-full text-xs flex items-center gap-1 ${rider.status === "active"
                                                ? "bg-red-100 text-red-600 hover:bg-red-200"
                                                : "bg-green-100 text-green-600 hover:bg-green-200"
                                                }`}
                                        >
                                            {rider.status === "active" ? <Lock size={14} /> : <Unlock size={14} />}
                                            {rider.status === "active" ? "Block" : "Unblock"}
                                        </button>
                                        <button
                                            onClick={() => setSelectedRider(rider)}
                                            className="px-2 py-1 bg-blue-100 text-blue-600 hover:bg-blue-200 rounded-full text-xs flex items-center gap-1"
                                        >
                                            <Eye size={14} />
                                            View
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Rider Details Modal */}
            {selectedRider && (
                <div className="fixed inset-0 z-50 bg-black bg-opacity-30 flex items-center justify-center">
                    <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 relative">
                        <button
                            className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
                            onClick={() => setSelectedRider(null)}
                        >
                            <X size={20} />
                        </button>
                        <h3 className="text-lg font-semibold mb-4 text-gray-800">Rider Details</h3>
                        <div className="space-y-2 text-sm text-gray-700">
                            <p><strong>Name:</strong> {selectedRider.name}</p>
                            <p><strong>Contact:</strong> {selectedRider.contact}</p>
                            <p><strong>Status:</strong>{" "}
                                <span className={classNames(
                                    "px-2 py-1 rounded-full text-xs font-medium",
                                    selectedRider.status === "active"
                                        ? "bg-green-100 text-green-800"
                                        : "bg-red-100 text-red-800"
                                )}>
                                    {selectedRider.status}
                                </span>
                            </p>
                            <p><strong>Joined:</strong> {selectedRider.joinedAt}</p>
                            <p><strong>Total Deliveries:</strong> {selectedRider.totalDeliveries}</p>
                            <p><strong>Rating:</strong> ⭐ {selectedRider.rating}</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

