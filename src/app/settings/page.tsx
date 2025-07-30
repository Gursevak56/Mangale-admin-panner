"use client";

import { useState } from "react";
import { Switch } from "./../../components/ui/switch"; // Optional: custom switch component
import { Input } from "./../../components/ui/input";   // Optional: custom input
import { Button } from "./../../components/ui/button"; // Optional: custom button

export default function SettingsPage() {
    const [darkMode, setDarkMode] = useState(false);
    const [emailNotifications, setEmailNotifications] = useState(true);
    const [smsAlerts, setSmsAlerts] = useState(false);

    return (
        <div className="p-6 bg-white rounded-xl shadow space-y-8">
            <h2 className="text-xl font-semibold text-gray-800">Settings</h2>

            {/* Admin Profile Settings */}
            <div>
                <h3 className="text-sm font-medium text-gray-600 mb-2">Profile</h3>
                <div className="grid gap-4 sm:grid-cols-2">
                    <Input placeholder="Full Name" />
                    <Input type="email" placeholder="Email Address" />
                    <Input type="password" placeholder="New Password" />
                    <Input type="password" placeholder="Confirm Password" />
                </div>
                <Button className="mt-4 bg-yellow-500 text-white hover:bg-yellow-600">Update Profile</Button>
            </div>

            {/* System Preferences */}
            <div>
                <h3 className="text-sm font-medium text-gray-600 mb-2">Preferences</h3>
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <span className="text-gray-700">Dark Mode</span>
                        <Switch checked={darkMode} onChange={setDarkMode} />
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-gray-700">Language</span>
                        <select className="border border-gray-300 rounded px-2 py-1 text-sm">
                            <option>English</option>
                            <option>Hindi</option>
                            <option>Punjabi</option>
                        </select>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-gray-700">Timezone</span>
                        <select className="border border-gray-300 rounded px-2 py-1 text-sm">
                            <option>Asia/Kolkata</option>
                            <option>UTC</option>
                            <option>America/New_York</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Notification Settings */}
            <div>
                <h3 className="text-sm font-medium text-gray-600 mb-2">Notifications</h3>
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <span className="text-gray-700">Email Notifications</span>
                        <Switch checked={emailNotifications} onChange={setEmailNotifications} />
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-gray-700">SMS Alerts</span>
                        <Switch checked={smsAlerts} onChange={setSmsAlerts} />
                    </div>
                </div>
            </div>

            {/* Security Settings */}
            <div>
                <h3 className="text-sm font-medium text-gray-600 mb-2">Security</h3>
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <span className="text-gray-700">Enable Two-Factor Authentication</span>
                        <Switch />
                    </div>
                    <Button className="bg-red-500 text-white hover:bg-red-600">Reset All Sessions</Button>
                </div>
            </div>
        </div>
    );
}
