'use client';
import { Menu, Search, Bell, Settings as Gear } from "lucide-react";
import { useState } from "react";
export default function Header() {
    const [open, setOpen] = useState(false);
    return (
        <header className="sticky top-0 z-10 bg-white border-b px-6 py-4 flex items-center justify-between">
            <div className="flex items-center">
                <button className="mr-4 lg:hidden text-gray-600" onClick={() => setOpen(true)}>
                    <Menu />
                </button>
                <div className="relative w-full max-w-md">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-300"
                    />
                </div>
            </div>
            <div className="flex items-center space-x-4">
                <button className="relative text-gray-600">
                    <Bell />
                    <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full px-1">3</span>
                </button>
                <button className="text-gray-600"><Gear /></button>
            </div>
        </header>
    )
};