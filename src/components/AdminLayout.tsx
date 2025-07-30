"use client";
import { ReactNode, useState } from "react";
import AdminSidebar from "./AdminSidebar";
import { Menu, Search, Bell, Settings as Gear } from "lucide-react";

export default function AdminLayout({ children }: { children: ReactNode }) {
    const [open, setOpen] = useState(false);

    return (
        <div className="flex min-h-screen bg-gray-20">
            <AdminSidebar open={open} onClose={() => setOpen(false)} />
            <div className="flex-1 flex flex-col lg:pl-64">
                {/* Main Content */}
                <main className="p-6 space-y-6 overflow-auto">{children}</main>
            </div>
        </div>
    );
}
