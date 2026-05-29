import { CheckSquare, Square, Smartphone, Monitor } from "lucide-react";

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
            <div className="grid md:grid-cols-2 gap-6">
              {/* PC Demo */}
              <div className="bg-gray-50 p-6 border border-gray-200 rounded-xl relative">
                <div className="absolute top-2 right-2 text-[10px] text-gray-400 font-mono flex items-center gap-1">
                  <Monitor className="w-3 h-3" /> Desktop
                </div>
                <div className="mt-4 border border-gray-200 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-default flex gap-5">
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

              {/* Mobile Demo */}
              <div className="bg-gray-50 p-6 border border-gray-200 rounded-xl relative flex justify-center">
                <div className="absolute top-2 right-2 text-[10px] text-gray-400 font-mono flex items-center gap-1">
                  <Smartphone className="w-3 h-3" /> Mobile
                </div>
                <div className="mt-4 w-[320px] bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow p-3 flex gap-3">
                   <div className="w-[100px] h-[75px] shrink-0 bg-gray-200 rounded-md"></div>
                   <div className="flex flex-col flex-1">
                      <div className="text-sm font-bold text-gray-900 leading-snug mb-2 font-heading line-clamp-3">
                         Nhiều tiềm năng cho bất động sản phía Nam nhờ hạ tầng
                      </div>
                      <div className="mt-auto">
                         <span className="text-[9px] uppercase font-bold text-gray-500 bg-gray-100 border border-gray-200 px-1.5 py-0.5 rounded tracking-wide">
                            Tài trợ
                         </span>
                      </div>
                   </div>
                </div>
              </div>
            </div>
        </div>

        <div className="pt-6 border-t border-gray-100">
            <h4 className="font-bold text-gray-900 border-l-2 border-[#9F224E] pl-2 uppercase tracking-wide mb-4 text-sm">
                ADS Non Tin tức (Display Banners)
            </h4>
            <div className="grid md:grid-cols-2 gap-6">
               {/* PC Demo */}
               <div className="bg-gray-50 p-6 border border-gray-200 rounded-xl relative">
                   <div className="absolute top-2 right-2 text-[10px] text-gray-400 font-mono flex items-center gap-1">
                     <Monitor className="w-3 h-3" /> Desktop
                   </div>
                   <div className="grid gap-4 mt-4">
                     <div className="w-full h-[90px] bg-green-50 border border-dashed border-green-300 rounded-lg flex flex-col items-center justify-center text-green-700 shadow-sm relative">
                         <span className="font-bold uppercase tracking-widest text-xs">Masthead</span>
                         <span className="font-mono text-[10px] opacity-75 mt-1">970 x 250</span>
                         <span className="absolute top-1 left-1 text-[8px] font-bold bg-green-200 px-1 py-0.5 rounded text-green-800">ADS</span>
                     </div>
                     <div className="flex gap-4">
                       <div className="w-1/2 h-[200px] bg-white border flex items-center justify-center text-gray-400 text-xs text-center border-gray-200 rounded-lg">Content Cột trái</div>
                       <div className="w-1/2 h-[200px] bg-green-50 border border-dashed border-green-300 rounded-lg flex flex-col items-center justify-center text-green-700 shadow-sm relative">
                           <span className="font-bold uppercase tracking-widest text-xs text-center">Large 1</span>
                           <span className="font-mono text-[10px] opacity-75 mt-2">300 x 600</span>
                           <span className="absolute top-1 left-1 text-[8px] font-bold bg-green-200 px-1 py-0.5 rounded text-green-800">ADS</span>
                       </div>
                     </div>
                   </div>
               </div>
               
               {/* Mobile Demo */}
               <div className="bg-gray-50 p-6 border border-gray-200 rounded-xl relative flex justify-center">
                   <div className="absolute top-2 right-2 text-[10px] text-gray-400 font-mono flex items-center gap-1">
                     <Smartphone className="w-3 h-3" /> Mobile
                   </div>
                   <div className="mt-4 w-[320px] bg-white border border-gray-200 rounded-lg shadow-sm p-3 flex flex-col gap-4">
                       <div className="w-full h-[150px] shrink-0 bg-green-50 border border-dashed border-green-300 rounded-lg flex flex-col items-center justify-center text-green-700 relative">
                           <span className="font-bold uppercase tracking-widest text-xs text-center leading-tight">Mobile Rectangle</span>
                           <span className="font-mono text-[10px] opacity-75 mt-2">300 x 250</span>
                           <span className="absolute top-1 left-1 text-[8px] font-bold bg-green-200 px-1 py-0.5 rounded text-green-800">ADS</span>
                       </div>
                       
                       <div className="h-[200px] bg-gray-100 rounded flex items-center justify-center text-gray-400 text-xs">Content Tin tức</div>

                       <div className="w-full h-[50px] shrink-0 bg-green-50 border border-dashed border-green-300 rounded-lg flex flex-col items-center justify-center text-green-700 relative">
                           <span className="font-bold uppercase tracking-widest text-xs text-center leading-tight">Sticky Banner</span>
                           <span className="absolute top-1 left-1 text-[8px] font-bold bg-green-200 px-1 py-0.5 rounded text-green-800">ADS</span>
                       </div>
                   </div>
               </div>
            </div>
        </div>
      </section>
    </div>
  );
}
