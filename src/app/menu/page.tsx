"use client";

import { useState } from "react";
import { Switch } from "./../../components/ui/switch"; // Optional: custom switch component
import { Input } from "./../../components/ui/input";   // Optional: custom input
import { Button } from "./../../components/ui/button"; // Optional: custom button
import { Pencil, Trash2, Plus, CheckCircle, XCircle } from "lucide-react";

interface MenuItem {
    id: number;
    name: string;
    price: number;
    category: string;
    restaurant: string;
    available: boolean;
}

const initialMenuItems: MenuItem[] = [
    { id: 1, name: "Margherita Pizza", price: 299, category: "Pizza", restaurant: "Pizza Place", available: true },
    { id: 2, name: "Veg Burger", price: 149, category: "Burger", restaurant: "Burger Joint", available: true },
    { id: 3, name: "Cold Coffee", price: 89, category: "Beverage", restaurant: "Cafe Goodies", available: false },
];

export default function MenuManagementPage() {
    const [menuItems, setMenuItems] = useState<MenuItem[]>(initialMenuItems);

    const toggleAvailability = (id: number) => {
        setMenuItems((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, available: !item.available } : item
            )
        );
    };

    return (
        <div className="p-6 bg-white rounded-xl shadow">
            <div className="flex justify-between items-center mb-4">
                <div>
                    <h2 className="text-xl font-semibold text-gray-800">Menu Management</h2>
                    <p className="text-sm text-gray-500">Manage food items, pricing, and availability</p>
                </div>
                <button className="flex items-center gap-2 px-3 py-2 bg-green-600 text-white text-sm rounded hover:bg-green-700">
                    <Plus size={16} />
                    Add New Item
                </button>
            </div>

            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase">
                        <tr>
                            <th className="px-6 py-3">Name</th>
                            <th className="px-6 py-3">Category</th>
                            <th className="px-6 py-3">Price</th>
                            <th className="px-6 py-3">Availability</th>
                            <th className="px-6 py-3">Restaurant</th>
                            <th className="px-6 py-3 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-100 text-sm">
                        {menuItems.map((item) => (
                            <tr key={item.id}>
                                <td className="px-6 py-4 font-medium text-gray-900">{item.name}</td>
                                <td className="px-6 py-4 text-gray-700">{item.category}</td>
                                <td className="px-6 py-4 text-gray-700">₹{item.price}</td>
                                <td className="px-6 py-4">
                                    {item.available ? (
                                        <span className="flex items-center text-green-600 gap-1">
                                            <CheckCircle size={16} /> Available
                                        </span>
                                    ) : (
                                        <span className="flex items-center text-red-500 gap-1">
                                            <XCircle size={16} /> Unavailable
                                        </span>
                                    )}
                                </td>
                                <td className="px-6 py-4 text-gray-700">{item.restaurant}</td>
                                <td className="px-6 py-4 text-right space-x-2">
                                    <button
                                        onClick={() => toggleAvailability(item.id)}
                                        className={`px-2 py-1 text-xs rounded ${item.available
                                            ? "bg-red-100 text-red-600 hover:bg-red-200"
                                            : "bg-green-100 text-green-600 hover:bg-green-200"
                                            }`}
                                    >
                                        {item.available ? "Hide" : "Show"}
                                    </button>
                                    <button className="px-2 py-1 bg-blue-100 text-blue-600 rounded text-xs hover:bg-blue-200">
                                        <Pencil size={14} />
                                    </button>
                                    <button className="px-2 py-1 bg-red-100 text-red-600 rounded text-xs hover:bg-red-200">
                                        <Trash2 size={14} />
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
