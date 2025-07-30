"use client";

import { useState } from "react";
import { Eye, Lock, Unlock } from "lucide-react";

interface User {
    id: number;
    name: string;
    email: string;
    role: string;
    status: "active" | "blocked";
}

const dummyUsers: User[] = [
    { id: 1, name: "Gursevak Singh", email: "gursevak@example.com", role: "Customer", status: "active" },
    { id: 2, name: "Raj Malhotra", email: "raj@example.com", role: "Vendor", status: "blocked" },
    { id: 3, name: "Alisha Sharma", email: "alisha@example.com", role: "Customer", status: "active" },
];

export default function UsersPage() {
    const [users, setUsers] = useState<User[]>(dummyUsers);

    const toggleStatus = (id: number) => {
        setUsers((prev) =>
            prev.map((user) =>
                user.id === id ? { ...user, status: user.status === "active" ? "blocked" : "active" } : user
            )
        );
    };

    return (
        <div className="p-6 bg-white rounded-xl shadow">
            <div className="mb-4">
                <h2 className="text-xl font-semibold text-gray-800">User Management</h2>
                <p className="text-sm text-gray-500">Manage all platform users</p>
            </div>

            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-100">
                        {users.map((user) => (
                            <tr key={user.id}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">{user.name}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{user.email}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{user.role}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm">
                                    <span
                                        className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${user.status === "active"
                                                ? "bg-green-100 text-green-800"
                                                : "bg-red-100 text-red-800"
                                            }`}
                                    >
                                        {user.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm space-x-2">
                                    <button
                                        onClick={() => toggleStatus(user.id)}
                                        className={`px-2 py-1 rounded-full text-xs flex items-center gap-1 ${user.status === "active"
                                                ? "bg-red-100 text-red-600 hover:bg-red-200"
                                                : "bg-green-100 text-green-600 hover:bg-green-200"
                                            }`}
                                    >
                                        {user.status === "active" ? <Lock size={14} /> : <Unlock size={14} />}
                                        {user.status === "active" ? "Block" : "Unblock"}
                                    </button>
                                    <button className="px-2 py-1 bg-blue-100 text-blue-600 hover:bg-blue-200 rounded-full text-xs flex items-center gap-1">
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
    );
}
