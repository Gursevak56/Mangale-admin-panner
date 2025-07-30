import AdminLayout from "../components/AdminLayout";
import { BarChart3 } from "lucide-react";
import RevenueChart from "../components/RevenueChart";
import Header from "@/components/header";

export default function Dashboard() {
  return (
    <>
      <Header />
      <AdminLayout>
        {/* Top metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Daily revenue", delta: "↑ 2.5% Today", value: "$9854.00" },
            { title: "Total orders", delta: "↑ 2.9% Today", value: "152" },
            { title: "Average order value", delta: "↑ 3.6% Today", value: "$120" },
            { title: "Average daily orders", delta: "↓ 0.6% Today", value: "52" },
          ].map((m) => (
            <div key={m.title} className="p-4 bg-white rounded-xl shadow flex flex-col justify-between">
              <div className="flex justify-between text-sm text-gray-500">
                <span>{m.title}</span>
                <span className={m.delta.startsWith("↑") ? "text-green-500" : "text-red-500"}>
                  {m.delta}
                </span>
              </div>
              <p className="mt-2 text-2xl font-semibold">{m.value}</p>
            </div>
          ))}
        </div>

        {/* Chart & Top dishes */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="p-6 bg-white rounded-xl shadow h-80">
            <h3 className="text-gray-600 mb-4">Total revenue</h3>
            <div className="h-full flex items-center justify-center text-gray-300">
              <RevenueChart />
            </div>
          </div>
          <div className="p-6 bg-white rounded-xl shadow h-80 flex flex-col">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-gray-600">Top selling dishes</h3>
              <button className="text-yellow-500 text-sm">View all</button>
            </div>
            <ul className="flex-1 overflow-y-auto space-y-3">
              {[
                "Cheese & Corn Momos",
                "French Fry",
                "Cheese Burger",
              ].map((dish) => (
                <li key={dish} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-lg" />
                    <span className="text-gray-800">{dish}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-600">$125</span>
                    <span className="text-green-500 text-xs">↑ 32%</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Recent orders */}
        <div className="p-6 bg-white rounded-xl shadow">
          <h3 className="text-gray-600 mb-4">Recent order request</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="border-b">
                <tr>
                  <th className="py-2">Order</th>
                  <th className="py-2">Customer</th>
                  <th className="py-2">Amount</th>
                  <th className="py-2">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {[
                  { order: "Paneer Tikka Momos", cust: "Hannibal Smith", amt: "$125", status: "Pending" },
                  { order: "Black Forest Cake", cust: "Sledge Hammer", amt: "$142", status: "Delivered" },
                  { order: "Belgium Chocolate", cust: "Willie Tanner", amt: "$200", status: "Pending" },
                ].map((r) => (
                  <tr key={r.order}>
                    <td className="py-2">{r.order}</td>
                    <td className="py-2">{r.cust}</td>
                    <td className="py-2">{r.amt}</td>
                    <td className={`py-2 font-medium ${r.status === "Pending" ? "text-red-500" : "text-green-500"}`}>
                      {r.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </AdminLayout>
    </>
  );
}
