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
          
          <div className="p-6 bg-gray-50 rounded-xl border border-gray-200 relative overflow-hidden hidden md:block">
            <div className="text-[10px] uppercase font-bold text-gray-400 mb-4 tracking-widest">Demo Layout (Structural Wireframe) - PC</div>
            <div className="flex gap-6 max-w-5xl mx-auto">
              <div className="flex-[3] flex flex-col gap-4">
                <div className="flex gap-4">
                  <div className="flex-[2] bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden flex flex-col relative group cursor-pointer hover:border-[#9F224E]/50 transition-colors">
                     <div className="aspect-[5/3] bg-gray-200 w-full relative">
                       <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                       <div className="absolute bottom-2 left-2 text-[10px] text-white bg-black/50 px-2 py-0.5 rounded font-mono">500x300</div>
                     </div>
                     <div className="p-4">
                       <div className="h-5 w-[90%] bg-gray-800 rounded mb-3 group-hover:bg-[#9F224E] transition-colors"></div>
                       <div className="h-3 w-full bg-gray-300 rounded mb-2"></div>
                       <div className="h-3 w-4/5 bg-gray-300 rounded"></div>
                     </div>
                  </div>
                  <div className="flex-1 flex flex-col gap-4">
                    <div className="flex-1 bg-white border border-gray-200 rounded-lg shadow-sm p-4 hover:border-[#9F224E]/50 transition-colors cursor-pointer group">
                      <div className="h-4 w-[95%] bg-gray-800 rounded mb-3 group-hover:text-[#9F224E]"></div>
                      <div className="h-3 w-5/6 bg-gray-400/50 rounded mb-2"></div>
                      <div className="h-3 w-1/2 bg-gray-400/50 rounded"></div>
                    </div>
                    <div className="flex-1 bg-white border border-gray-200 rounded-lg shadow-sm p-4 hover:border-[#9F224E]/50 transition-colors cursor-pointer group">
                      <div className="h-4 w-[90%] bg-gray-800 rounded mb-3 group-hover:text-[#9F224E]"></div>
                      <div className="h-3 w-5/6 bg-gray-400/50 rounded mb-2"></div>
                      <div className="h-3 w-1/2 bg-gray-400/50 rounded"></div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 border-t border-gray-200 pt-4">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="bg-white border border-transparent hover:border-gray-200 rounded p-2 -mx-2 transition-colors cursor-pointer group">
                      <div className="h-4 w-full bg-gray-800 rounded mb-2 group-hover:bg-[#9F224E]"></div>
                      <div className="h-3 w-[80%] bg-gray-400/50 rounded"></div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-[300px] shrink-0 bg-green-50 border border-green-200 border-dashed text-green-700 rounded-lg flex flex-col items-center justify-center font-mono text-[10px] text-center shadow-sm relative">
                <span className="absolute top-2 left-2 bg-green-200 text-green-800 px-1.5 py-0.5 rounded font-bold">ADS</span>
                <strong className="text-sm tracking-widest uppercase">Large 1</strong><br/>300x600<br/>(Cột phải)
              </div>
            </div>
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

          <div className="p-6 bg-gray-50 rounded-xl border border-gray-200 relative overflow-hidden hidden md:block">
            <div className="text-[10px] uppercase font-bold text-gray-400 mb-4 tracking-widest">Demo Layout (Structural Wireframe) - PC</div>
            <div className="flex gap-6 max-w-5xl mx-auto">
              <div className="flex-[3] flex flex-col gap-4">
                  <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden flex flex-col relative w-full lg:w-[65%] group cursor-pointer hover:border-[#9F224E]/50 transition-colors">
                     <div className="aspect-[513/308] bg-gray-200 w-full relative">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        <div className="absolute bottom-2 left-2 text-[10px] text-white bg-black/50 px-2 py-0.5 rounded font-mono">513x308</div>
                     </div>
                     <div className="p-4">
                       <div className="h-5 w-[90%] bg-gray-800 rounded mb-3 group-hover:bg-[#9F224E] transition-colors"></div>
                       <div className="h-3 w-full bg-gray-300 rounded mb-2"></div>
                       <div className="h-3 w-2/3 bg-gray-300 rounded"></div>
                     </div>
                  </div>
                <div className="grid grid-cols-3 gap-4 border-t border-gray-200 pt-4">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="bg-white border border-transparent hover:border-gray-200 rounded p-2 -mx-2 transition-colors cursor-pointer group">
                      <div className="h-4 w-full bg-gray-800 rounded mb-2 group-hover:bg-[#9F224E]"></div>
                      <div className="h-3 w-[80%] bg-gray-400/50 rounded"></div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-[300px] shrink-0 bg-green-50 border border-green-200 border-dashed text-green-700 rounded-lg flex flex-col items-center justify-center font-mono text-[10px] text-center shadow-sm relative">
                <span className="absolute top-2 left-2 bg-green-200 text-green-800 px-1.5 py-0.5 rounded font-bold">ADS</span>
                <strong className="text-sm tracking-widest uppercase">Large 1</strong><br/>300x600<br/>(Cột phải)
              </div>
            </div>
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

          <div className="p-6 bg-gray-50 rounded-xl border border-gray-200 relative overflow-hidden hidden md:block">
            <div className="text-[10px] uppercase font-bold text-gray-400 mb-4 tracking-widest">Demo Layout (Structural Wireframe) - PC</div>
            <div className="flex gap-6 max-w-5xl mx-auto">
              <div className="flex-[3] flex flex-col gap-4">
                  <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden flex flex-col relative w-full group cursor-pointer hover:border-[#9F224E]/50 transition-colors">
                     <div className="aspect-[760/456] bg-gray-200 w-full relative">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        <div className="absolute bottom-3 left-3 text-[12px] text-white bg-black/50 px-2 py-1 rounded font-mono">760x456</div>
                     </div>
                     <div className="p-5">
                       <div className="h-6 w-[95%] bg-gray-800 rounded mb-3 group-hover:bg-[#9F224E] transition-colors"></div>
                       <div className="h-4 w-full bg-gray-300 rounded mb-2"></div>
                       <div className="h-4 w-4/5 bg-gray-300 rounded"></div>
                     </div>
                  </div>
                <div className="grid grid-cols-4 gap-4 border-t border-gray-200 pt-4">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="bg-white border border-transparent hover:border-gray-200 rounded p-2 -mx-2 transition-colors cursor-pointer group">
                      <div className="h-4 w-full bg-gray-800 rounded mb-2 group-hover:bg-[#9F224E]"></div>
                      <div className="h-3 w-[85%] bg-gray-400/50 rounded"></div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-[300px] shrink-0 bg-green-50 border border-green-200 border-dashed text-green-700 rounded-lg flex flex-col items-center justify-center font-mono text-[10px] text-center shadow-sm relative">
                <span className="absolute top-2 left-2 bg-green-200 text-green-800 px-1.5 py-0.5 rounded font-bold">ADS</span>
                <strong className="text-sm tracking-widest uppercase">Large 1</strong><br/>300x600<br/>(Cột phải)
              </div>
            </div>
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
          
          <div className="p-6 bg-gray-50 rounded-xl border border-gray-200 relative overflow-hidden hidden md:block">
            <div className="text-[10px] uppercase font-bold text-gray-400 mb-4 tracking-widest">Demo Layout (Structural Wireframe) - PC</div>
            <div className="w-full flex gap-6 max-w-5xl mx-auto">
              <div className="w-full flex flex-col gap-4">
                <div className="flex gap-6">
                  <div className="flex-[5] bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden flex flex-col relative w-full group cursor-pointer hover:border-[#9F224E]/50 transition-colors">
                     <div className="aspect-[760/456] bg-gray-200 w-full relative">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        <div className="absolute bottom-3 left-3 text-[12px] text-white bg-black/50 px-2 py-1 rounded font-mono">760x456</div>
                     </div>
                     <div className="p-5">
                       <div className="h-6 w-[95%] bg-gray-800 rounded mb-3 group-hover:bg-[#9F224E] transition-colors"></div>
                       <div className="h-4 w-full bg-gray-300 rounded mb-2"></div>
                       <div className="h-4 w-5/6 bg-gray-300 rounded border-b border-gray-100 pb-4"></div>
                     </div>
                  </div>
                  <div className="flex-[2] flex flex-col gap-4 border-l border-gray-200 pl-6">
                    <div className="flex-1 border-b border-gray-200 pb-4 cursor-pointer group">
                      <div className="h-5 w-full bg-gray-800 rounded mb-3 group-hover:bg-[#9F224E] transition-colors"></div>
                      <div className="h-3 w-5/6 bg-gray-400/50 rounded mb-2"></div>
                      <div className="h-3 w-1/2 bg-gray-400/50 rounded"></div>
                    </div>
                    <div className="flex-1 pt-2 cursor-pointer group">
                      <div className="h-5 w-full bg-gray-800 rounded mb-3 group-hover:bg-[#9F224E] transition-colors"></div>
                      <div className="h-3 w-5/6 bg-gray-400/50 rounded mb-2"></div>
                      <div className="h-3 w-1/2 bg-gray-400/50 rounded"></div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-6 border-t border-gray-200 pt-4">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="cursor-pointer group">
                      <div className="h-5 w-full bg-gray-800 rounded mb-2 group-hover:bg-[#9F224E] transition-colors"></div>
                      <div className="h-3 w-[85%] bg-gray-400/50 rounded"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
