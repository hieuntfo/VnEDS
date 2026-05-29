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

        <div className="pt-6 border-t border-gray-100">
            <h4 className="font-bold text-gray-900 border-l-2 border-[#9F224E] pl-2 uppercase tracking-wide mb-4 text-sm">
              ADS Tin tức
            </h4>
            <div className="bg-gray-50 p-6 border border-gray-200 rounded-xl relative">
              <div className="absolute top-2 right-2 text-[10px] text-gray-400 font-mono">Ví dụ luồng tin (Stream)</div>
              <div className="max-w-xl mx-auto border border-gray-200 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-default flex gap-5">
                 <div className="w-1/3 aspect-[4/3] bg-gray-200 rounded-md"></div>
                 <div className="w-2/3 flex flex-col">
                    <div className="text-lg font-bold text-gray-900 leading-snug mb-2 font-heading">
                       Nhiều tiềm năng cho bất động sản phía Nam nhờ hạ tầng
                    </div>
                    <div className="text-sm text-gray-600 line-clamp-2 mb-3">
                       Các dự án triển khai đón đầu hệ thống giao thông tại trung tâm, hứa hẹn gia tăng giá trị cho các nhà đầu tư trong bối cảnh thị trường đang hồi phục.
                    </div>
                    <div className="mt-auto flex items-center justify-between">
                       <span className="text-[10px] uppercase font-bold text-gray-500 bg-gray-100 border border-gray-200 px-2 py-0.5 rounded tracking-wide">
                          Tài trợ
                       </span>
                    </div>
                 </div>
              </div>
            </div>
        </div>

        <div className="pt-6 border-t border-gray-100">
            <h4 className="font-bold text-gray-900 border-l-2 border-[#9F224E] pl-2 uppercase tracking-wide mb-4 text-sm">
                ADS Non Tin tức (Display Banners)
            </h4>
            <div className="grid gap-6">
               <div className="bg-green-50/50 p-6 border border-green-100 rounded-xl">
                   <div className="w-full h-[120px] bg-green-100 border-2 border-dashed border-green-400 rounded-lg flex flex-col items-center justify-center text-green-700 shadow-sm relative">
                       <span className="font-bold uppercase tracking-widest">Masthead / Breakpage</span>
                       <span className="font-mono text-xs opacity-75 mt-1">970 x 250</span>
                       <span className="absolute top-2 left-2 text-[10px] font-bold bg-green-200 px-2 py-0.5 rounded text-green-800">ADS</span>
                   </div>
               </div>
               
               <div className="flex flex-wrap gap-6 bg-green-50/50 p-6 border border-green-100 rounded-xl">
                   <div className="w-[300px] h-[600px] shrink-0 bg-green-100 border-2 border-dashed border-green-400 rounded-lg flex flex-col items-center justify-center text-green-700 shadow-sm relative">
                       <span className="font-bold uppercase tracking-widest text-center">Large 1</span>
                       <span className="font-mono text-xs opacity-75 mt-2">300 x 600</span>
                       <span className="absolute top-2 left-2 text-[10px] font-bold bg-green-200 px-2 py-0.5 rounded text-green-800">ADS</span>
                   </div>
                   
                   <div className="w-[300px] h-[250px] shrink-0 bg-green-100 border-2 border-dashed border-green-400 rounded-lg flex flex-col items-center justify-center text-green-700 shadow-sm relative">
                       <span className="font-bold uppercase tracking-widest text-center leading-tight">Medium<br/>Rectangle</span>
                       <span className="font-mono text-xs opacity-75 mt-2">300 x 250</span>
                       <span className="absolute top-2 left-2 text-[10px] font-bold bg-green-200 px-2 py-0.5 rounded text-green-800">ADS</span>
                   </div>
               </div>
            </div>
        </div>
      </section>
    </div>
  );
}
