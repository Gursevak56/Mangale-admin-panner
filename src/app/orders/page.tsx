"use client";

import { useState } from "react";
import Modal from "@/components/Modal";

const dummyOrders = [
    { id: "#1234", customer: "Gursevak Singh", amount: 24.99, status: "Delivered", date: "30 Jul 2025", items: ["Burger", "Fries", "Coke"], address: "123 Main St, Kanpur" },
    { id: "#1235", customer: "Rahul Verma", amount: 15.50, status: "Pending", date: "29 Jul 2025", items: ["Pizza", "Lassi"], address: "45 Nehru Nagar" },
];

export default function OrdersPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedOrder, setSelectedOrder] = useState<any | null>(null);

    const filteredOrders = dummyOrders.filter(
        (order) =>
            order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
            order.id.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">All Orders</h2>

            <input
                type="text"
                placeholder="Search by ID or customer name..."
                className="w-full sm:w-80 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-yellow-300 text-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            <div className="bg-white shadow rounded-xl p-6 mt-4">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200 text-sm">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="text-left px-4 py-2">#ID</th>
                                <th className="text-left px-4 py-2">Customer</th>
                                <th className="text-left px-4 py-2">Amount</th>
                                <th className="text-left px-4 py-2">Status</th>
                                <th className="text-left px-4 py-2">Date</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {filteredOrders.map((order) => (
                                <tr
                                    key={order.id}
                                    className="hover:bg-yellow-50 cursor-pointer"
                                    onClick={() => setSelectedOrder(order)}
                                >
                                    <td className="px-4 py-2 text-gray-800">{order.id}</td>
                                    <td className="px-4 py-2 text-gray-800">{order.customer}</td>
                                    <td className="px-4 py-2 text-green-600 font-semibold">${order.amount}</td>
                                    <td className="px-4 py-2">
                                        <span
                                            className={`inline-block px-2 py-1 text-xs font-medium rounded
                        ${order.status === "Delivered"
                                                    ? "bg-green-100 text-green-700"
                                                    : order.status === "Pending"
                                                        ? "bg-yellow-100 text-yellow-700"
                                                        : "bg-red-100 text-red-700"
                                                }`}
                                        >
                                            {order.status}
                                        </span>
                                    </td>
                                    <td className="px-4 py-2 text-gray-500">{order.date}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Modal for order details */}
            {selectedOrder && (
                <Modal
                    isOpen={!!selectedOrder}
                    onClose={() => setSelectedOrder(null)}
                    title={`Order Details: ${selectedOrder.id}`}
                >
                    <p><strong>Customer:</strong> {selectedOrder.customer}</p>
                    <p><strong>Date:</strong> {selectedOrder.date}</p>
                    <p><strong>Amount:</strong> ${selectedOrder.amount}</p>
                    <p><strong>Status:</strong> {selectedOrder.status}</p>
                    <p><strong>Address:</strong> {selectedOrder.address}</p>
                    <p className="mt-2"><strong>Items:</strong></p>
                    <ul className="list-disc list-inside text-sm text-gray-700">
                        {selectedOrder.items.map((item: string, index: number) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </Modal>
            )}
        </div>
    );
}
