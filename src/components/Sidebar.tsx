import { NavItem } from "../types";
import { cn } from "../utils";

interface SidebarProps {
  items: NavItem[];
  activeId: string;
  onNavigate: (id: string) => void;
}

export function Sidebar({ items, activeId, onNavigate }: SidebarProps) {
  return (
    <aside className="w-64 bg-white border-r border-gray-200 p-6 flex flex-col gap-8 shrink-0 overflow-y-auto h-full">
      <nav className="flex flex-col gap-4">
        <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">
          Navigation
        </div>
        {items.map((item) => {
          const isActive = item.id === activeId;
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={cn(
                "flex items-center gap-3 font-bold text-sm text-left pl-4 -ml-6 transition-colors",
                isActive
                  ? "text-[#9F224E] border-l-2 border-[#9F224E]"
                  : "text-gray-600 hover:text-black border-l-2 border-transparent",
              )}
            >
              <Icon className="w-4 h-4" />
              {item.label}
            </button>
          );
        })}
      </nav>

      <div className="mt-auto p-4 bg-gray-50 rounded-xl">
        <p className="text-[11px] text-gray-500 leading-relaxed italic font-heading block">
          "Cần duy trì tính nhất quán tuyệt đối giữa báo điện tử và các
          Landingpage chiến dịch."
        </p>
        <p className="text-[10px] font-bold mt-2 text-[#9F224E]">
          — Phòng Sản phẩm
        </p>
      </div>
    </aside>
  );
}
