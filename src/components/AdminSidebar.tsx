"use client";
import Link from "next/link";
import { Home, ShoppingBag, Store, Menu as MenuIcon, Eye, Calendar, Wallet, Settings, X, User, Bike } from "lucide-react";

export default function AdminSidebar({ open, onClose }: { open: boolean; onClose: () => void }) {
    const items = [
        { href: "/", label: "Dashboard", icon: <Home /> },
        { href: "/orders", label: "Orders", icon: <ShoppingBag /> },
        { href: "/restaurants", label: "Restaurants", icon: <Store /> },
        { href: "/users", label: "Users", icon: <User /> },
        { href: "/riders", label: "Riders", icon: <Bike /> },
        { href: "/menu", label: "Menu", icon: <MenuIcon /> },
        { href: "/history", label: "History", icon: <Eye /> },
        { href: "/wallet", label: "Wallet", icon: <Wallet /> },
        { href: "/calendar", label: "Calendar", icon: <Calendar /> },
        { href: "/settings", label: "Settings", icon: <Settings /> },
    ];

    return (
        <>
            {open && <div className="fixed inset-0 bg-black/20 z-20 lg:hidden" onClick={onClose} />}
            <aside className={`fixed left-0 top-0 h-full w-60 bg-white shadow-lg z-30 transform transition-transform lg:translate-x-0 ${open ? "translate-x-0" : "-translate-x-full"
                }`}>
                <div className="flex items-center justify-between p-4 border-b">
                    <h1 className="text-2xl font-bold text-yellow-600">Mangale</h1>
                    <button className="lg:hidden" onClick={onClose}><X /></button>
                </div>
                <nav className="mt-4 space-y-1">
                    {items.map((it) => (
                        <Link key={it.href} href={it.href} className="flex items-center px-4 py-2 hover:bg-gray-100">
                            <span className="text-gray-700">{it.icon}</span>
                            <span className="ml-3 text-gray-800 font-medium">{it.label}</span>
                        </Link>
                    ))}
                </nav>
                <div className="mt-auto p-4 border-t">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">A</div>
                            <div>
                                <p className="text-sm font-medium">Admin User</p>
                                <p className="text-xs text-gray-500">Super Admin</p>
                            </div>
                        </div>
                        <button><Settings className="text-gray-600" /></button>
                    </div>
                </div>
            </aside>
        </>
    );
}
