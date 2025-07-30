"use client";

import { useState } from "react";
import { CalendarDays, Plus, Clock, Bike, Store } from "lucide-react";
import AdminSidebar from "@/components/AdminSidebar";
import { format } from "date-fns";


type CalendarData = {
    orders: { id: string; time: string; customer: string }[];
    riders: string[];
    closedRestaurants: string[];
};

const MOCK_DATA: { [key: string]: CalendarData } = {
    "2025-07-29": {
        orders: [
            { id: "#ORD123", time: "12:30 PM", customer: "Anjali Sharma" },
            { id: "#ORD124", time: "2:00 PM", customer: "Ravi Kumar" },
        ],
        riders: ["Rider A", "Rider B"],
        closedRestaurants: [],
    },
    "2025-07-30": {
        orders: [],
        riders: ["Rider C"],
        closedRestaurants: ["Pizza Hut - Sector 14"],
    },
    "2025-07-31": {
        orders: [
            { id: "#ORD125", time: "9:30 AM", customer: "Priya Verma" },
        ],
        riders: [],
        closedRestaurants: [],
    },
};

export default function CalendarPage() {
    const [open, setOpen] = useState(false);
    const today = new Date(2025, 6, 30); // Jul 30, 2025
    const [selectedDate, setSelectedDate] = useState(today.toDateString());

    const formattedKey = new Date(selectedDate).toISOString().split("T")[0];
    const info = MOCK_DATA[formattedKey];

    return (
        <div className="p-6 bg-white rounded-xl shadow">
            <AdminSidebar open={open} onClose={() => setOpen(false)} />
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                    <CalendarDays className="w-5 h-5 text-yellow-500" />
                    Calendar
                </h2>
                <button className="flex items-center gap-1 text-sm px-3 py-2 rounded bg-yellow-500 text-white hover:bg-yellow-600">
                    <Plus className="w-4 h-4" />
                    Add Event
                </button>
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-2 text-center text-sm text-gray-600">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                    <div key={day} className="font-medium">{day}</div>
                ))}
                {Array.from({ length: 31 }).map((_, i) => {
                    const dateObj = new Date(2025, 6, i + 1);
                    const dateStr = dateObj.toDateString();
                    return (
                        <button
                            key={i}
                            onClick={() => setSelectedDate(dateStr)}
                            className={`py-3 rounded-lg border text-sm ${selectedDate === dateStr
                                ? "bg-yellow-500 text-white font-bold"
                                : "hover:bg-gray-100"
                                }`}
                        >
                            {i + 1}
                        </button>
                    );
                })}
            </div>

            {/* Info Section */}
            <div className="bg-white shadow rounded-lg p-4 mt-4 space-y-4">
                <h3 className="text-lg font-semibold text-gray-800">
                    Details for: {format(selectedDate, "EEE MMM dd yyyy")}
                </h3>

                <div>
                    <div className="flex items-center space-x-2 text-gray-700 font-medium mb-1">
                        <Clock className="w-5 h-5 text-yellow-500" />
                        <span>Scheduled Orders</span>
                    </div>
                    {info?.orders?.length > 0 ? (
                        <ul className="text-sm text-gray-600 list-disc pl-5">
                            {info.orders.map((order) => (
                                <li key={order.id}>
                                    {order.id} – {order.time} ({order.customer})
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-sm text-gray-400 pl-7">No orders scheduled.</p>
                    )}
                </div>

                <div>
                    <div className="flex items-center space-x-2 text-gray-700 font-medium mb-1">
                        <Bike className="w-5 h-5 text-green-500" />
                        <span>Rider Shifts</span>
                    </div>
                    {info?.riders?.length > 0 ? (
                        <ul className="text-sm text-gray-600 list-disc pl-5">
                            {info.riders.map((rider, idx) => (
                                <li key={idx}>{rider}</li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-sm text-gray-400 pl-7">No riders assigned.</p>
                    )}
                </div>

                <div>
                    <div className="flex items-center space-x-2 text-gray-700 font-medium mb-1">
                        <Store className="w-5 h-5 text-red-500" />
                        <span>Closed Restaurants</span>
                    </div>
                    {info?.closedRestaurants?.length > 0 ? (
                        <ul className="text-sm text-gray-600 list-disc pl-5">
                            {info.closedRestaurants.map((r, idx) => (
                                <li key={idx}>{r}</li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-sm text-gray-400 pl-7">No closures.</p>
                    )}
                </div>
            </div>

        </div>
    );
}
