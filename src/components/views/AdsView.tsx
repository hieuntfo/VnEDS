import { CheckSquare, Square } from "lucide-react";

export function AdsView() {
  const checklist = [
    { name: "ADS Tin tức", checked: false },
    { name: "ADS non Tin tức", checked: false },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <div className="flex justify-between items-end mb-4">
        <div>
          <h1 className="text-4xl font-heading italic text-gray-900 leading-none">
            Quảng cáo (Ads)
          </h1>
          <p className="text-gray-500 mt-2">
            Các định dạng và luồng quảng cáo.
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
          Phân loại Quảng cáo
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
        <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
          <h5 className="text-[10px] uppercase font-bold text-gray-400 mb-3 tracking-widest">
            Loại hình ADS
          </h5>
          <ul className="text-xs text-gray-700 space-y-3 font-sans">
            <li className="flex items-start gap-3">
              <span className="w-5 h-5 rounded-full bg-[#FFE7E9] text-[#9F224E] flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                1
              </span>
              <p>
                <strong className="text-gray-900 block mb-0.5">
                  ADS Tin tức
                </strong>
                Quảng cáo hiển thị dưới dạng nội dung tin tức, hòa nhập với luồng bài viết.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-5 h-5 rounded-full bg-[#FFE7E9] text-[#9F224E] flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                2
              </span>
              <p>
                <strong className="text-gray-900 block mb-0.5">
                  ADS non Tin tức
                </strong>
                Quảng cáo hiển thị thuần túy (e.g. banner, masthead, breakpage, large 1) không giả lập hình thức tin tức.
              </p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
