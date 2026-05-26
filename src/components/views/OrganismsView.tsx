import { CheckSquare, Square } from "lucide-react";

export function OrganismsView() {
  const checklist = [
    { name: "Header (PC/Mobile)", checked: false },
    { name: "Footer", checked: false },
    { name: "Topstory", checked: false },
    { name: "List/Stream", checked: false },
    { name: "Box 300 (11 biến thể)", checked: false },
    { name: "Comment section", checked: false },
    { name: "Tin liên quan", checked: false },
    { name: "Theo dòng sự kiện", checked: false },
    { name: "Xem nhiều", checked: false },
    { name: "Native Ad (8 loại)", checked: false },
    { name: "Vote", checked: false },
    { name: "Popups (P01–P10)", checked: false },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <div className="flex justify-between items-end mb-4">
        <div>
          <h1 className="text-4xl font-heading italic text-gray-900 leading-none">
            Organisms
          </h1>
          <p className="text-gray-500 mt-2">
            Các vùng (zone) hoặc block lớn để tạo thành 1 layout hoàn chỉnh.
          </p>
        </div>
      </div>

      <section className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm mb-8">
        <h3 className="font-bold uppercase tracking-widest text-xs text-gray-400 mb-4 border-b border-gray-100 pb-2">
          Inventory Checklist
        </h3>
        <div className="flex flex-wrap gap-x-6 gap-y-3">
          {checklist.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-2 text-sm text-gray-700"
            >
              {item.checked ? (
                <CheckSquare className="w-4 h-4 text-[#1DB549]" />
              ) : (
                <Square className="w-4 h-4 text-gray-300" />
              )}
              <span className={item.checked ? "font-medium" : "text-gray-500"}>
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Further details for organisms can be placed here */}
    </div>
  );
}
