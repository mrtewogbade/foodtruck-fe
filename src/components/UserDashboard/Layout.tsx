// src/components/UserDashboard/Layout.tsx
import Sidebar from "./Sidebar";
import Searchbar from "./Searchbar";

type Props = { children: React.ReactNode };

export default function Layout({ children }: Props) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar on the left */}
      <Sidebar />

      {/* Content area */}
      <div className="flex-1 flex flex-col">
        {/* Top Searchbar */}
        <header className="bg-white border-b">
          <div className="px-6 py-4">
            <Searchbar />
          </div>
        </header>

        {/* Main body */}
        <main className="flex-1 px-6 py-6">{children}</main>
      </div>
    </div>
  );
}
