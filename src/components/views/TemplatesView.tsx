import { CheckSquare, Square } from "lucide-react";

export function TemplatesView() {
  const checklist = [
    { name: "Topstory T1 - 6 tin", checked: false },
    { name: "Topstory T2 - 4 tin", checked: false },
    { name: "Topstory T3 - 5 tin", checked: false },
    { name: "Topstory T4 - 7 tin", checked: false },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <div className="flex justify-between items-end mb-4">
        <div>
          <h1 className="text-4xl font-heading italic text-gray-900 leading-none">
            Templates
          </h1>
          <p className="text-gray-500 mt-2">
            Cấu trúc bộ khung hiển thị Layout Landingpage trên Grid PC và
            Mobile.
          </p>
        </div>
        <div className="flex gap-2 text-xs">
          <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full font-semibold">
            Status: Live
          </span>
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

      <section className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm flex flex-col gap-6">
        <div className="flex justify-between items-center border-b border-gray-100 pb-4">
          <h3 className="font-bold uppercase tracking-widest text-xs text-gray-400">
            01 / Layout Templates: Cụm tin top
          </h3>
          <span className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded">
            Áp dụng cho PC (có nhiều không gian bố trí)
          </span>
        </div>

        <div className="flex flex-col gap-4">
          <div>
            <h4 className="font-bold text-gray-900 border-l-2 border-[#9F224E] pl-2 uppercase tracking-wide mb-2 text-sm">
              Topstory T1 — 6 tin + Large 1
            </h4>
          </div>
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <h5 className="text-[10px] uppercase font-bold text-gray-400 mb-3 tracking-widest">
              Đặc tả chi tiết (Specs)
            </h5>
            <ul className="text-xs text-gray-700 space-y-3 font-sans">
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-[#FFE7E9] text-[#9F224E] flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">1</span>
                <p>Gồm tổng cộng <strong className="text-[#9F224E]">6 tin</strong>.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-[#FFE7E9] text-[#9F224E] flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">2</span>
                <p>Kích thước Thumbnail (Tin số 1): <strong className="font-mono bg-white border border-gray-200 px-1 rounded">500x300</strong> pixel.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-[#FFE7E9] text-[#9F224E] flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">3</span>
                <p>Quảng cáo: <strong className="text-[#1DB549]">Có Large 1</strong> trên màn hình.</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-8 border-t border-gray-100 mt-2">
          <div>
            <h4 className="font-bold text-gray-900 border-l-2 border-[#9F224E] pl-2 uppercase tracking-wide mb-2 text-sm">
              Topstory T2 — 4 tin + Large 1
            </h4>
          </div>
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <h5 className="text-[10px] uppercase font-bold text-gray-400 mb-3 tracking-widest">
              Đặc tả chi tiết (Specs)
            </h5>
            <ul className="text-xs text-gray-700 space-y-3 font-sans">
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-[#FFE7E9] text-[#9F224E] flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">1</span>
                <p>Gồm tổng cộng <strong className="text-[#9F224E]">4 tin</strong>.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-[#FFE7E9] text-[#9F224E] flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">2</span>
                <p>Kích thước Thumbnail (Tin số 1): <strong className="font-mono bg-white border border-gray-200 px-1 rounded">513x308</strong> pixel.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-[#FFE7E9] text-[#9F224E] flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">3</span>
                <p>Quảng cáo: <strong className="text-[#1DB549]">Có Large 1</strong> trên màn hình.</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-8 border-t border-gray-100 mt-2">
          <div>
            <h4 className="font-bold text-gray-900 border-l-2 border-[#9F224E] pl-2 uppercase tracking-wide mb-2 text-sm">
              Topstory T3 — 5 tin + Large 1
            </h4>
          </div>
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <h5 className="text-[10px] uppercase font-bold text-gray-400 mb-3 tracking-widest">
              Đặc tả chi tiết (Specs)
            </h5>
            <ul className="text-xs text-gray-700 space-y-3 font-sans">
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-[#FFE7E9] text-[#9F224E] flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">1</span>
                <p>Gồm tổng cộng <strong className="text-[#9F224E]">5 tin</strong>.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-[#FFE7E9] text-[#9F224E] flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">2</span>
                <p>Kích thước Thumbnail (Tin số 1): <strong className="font-mono bg-white border border-gray-200 px-1 rounded">760x456</strong> pixel.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-[#FFE7E9] text-[#9F224E] flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">3</span>
                <p>Quảng cáo: <strong className="text-[#1DB549]">Có Large 1</strong> trên màn hình.</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-8 border-t border-gray-100 mt-2">
          <div>
            <h4 className="font-bold text-gray-900 border-l-2 border-[#9F224E] pl-2 uppercase tracking-wide mb-2 text-sm">
              Topstory T4 — 7 tin
            </h4>
          </div>
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <h5 className="text-[10px] uppercase font-bold text-gray-400 mb-3 tracking-widest">
              Đặc tả chi tiết (Specs)
            </h5>
            <ul className="text-xs text-gray-700 space-y-3 font-sans">
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-[#FFE7E9] text-[#9F224E] flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">1</span>
                <p>Gồm tổng cộng <strong className="text-[#9F224E]">7 tin</strong>.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-[#FFE7E9] text-[#9F224E] flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">2</span>
                <p>Kích thước Thumbnail (Tin số 1): <strong className="font-mono bg-white border border-gray-200 px-1 rounded">760x456</strong> pixel.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-[#FFE7E9] text-[#9F224E] flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">3</span>
                <p>Quảng cáo: <strong className="text-[#9F224E]">KHÔNG Large 1</strong> trên mảng khối.</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
