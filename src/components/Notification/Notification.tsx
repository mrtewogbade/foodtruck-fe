import { Bell } from "lucide-react";

export default function Notification() {
  return (
    <div className="relative cursor-pointer">
      <Bell className="w-6 h-6 text-gray-600" />
      <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full px-1.5 py-0.5">
        2
      </span>
    </div>
  );
}

