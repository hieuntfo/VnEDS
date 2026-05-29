import { CheckSquare, Square } from "lucide-react";

export function TemplatesView() {
  const checklist = [
    { name: "Topstory T1 - 6 tin", checked: true },
    { name: "Topstory T2 - 4 tin", checked: true },
    { name: "Topstory T3 - 5 tin", checked: true },
    { name: "Topstory T4 - 7 tin", checked: true },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-8 pb-32">
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

      <section className="bg-white border border-gray-100 rounded-2xl shadow-sm flex flex-col gap-6 overflow-hidden">
        <div className="flex justify-between items-center border-b border-gray-100 p-6 pb-4 bg-gray-50/50">
          <h3 className="font-bold uppercase tracking-widest text-xs text-gray-400">
            01 / Layout Templates: Cụm tin top
          </h3>
          <span className="text-xs text-gray-500 bg-white border border-gray-200 px-3 py-1 rounded shadow-sm">
            Áp dụng cho PC (Grid 1160px)
          </span>
        </div>

        {/* T1 */}
        <div className="flex flex-col gap-4 p-6 pt-2">
          <div>
            <h4 className="font-bold text-gray-900 border-l-3 border-[#9F224E] pl-3 uppercase tracking-wide mb-2 text-[15px]">
              Topstory T1 — 6 tin + Large 1
            </h4>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 relative overflow-hidden overflow-x-auto shadow-sm">
            <div className="bg-gray-100 px-4 py-2 border-b border-gray-200 text-[10px] uppercase font-bold text-gray-500 tracking-widest">
              Giao diện thực tế (Pixel Perfect)
            </div>
            <div className="p-8 min-w-[1000px]">
              <div className="flex gap-6 max-w-[1100px] mx-auto">
                <div className="flex-[3] flex flex-col gap-6">
                  {/* Top Part */}
                  <div className="flex gap-6">
                    {/* Big article */}
                    <div className="flex-[2] flex flex-col group cursor-pointer">
                      <div className="w-full aspect-[5/3.2] bg-[#F2F2F2] mb-3 transition-colors group-hover:bg-[#E5E5E5]"></div>
                      <h2 className="text-[22px] font-bold font-heading mb-2 leading-snug text-[#222] group-hover:text-[#9F224E] transition-colors">Nga thay tỉnh trưởng hai vùng giáp Ukraine</h2>
                      <p className="text-[14px] text-[#4F4F4F] mb-3 leading-[1.6]">Điện Kremlin cho biết tỉnh trưởng hai vùng Belgorod, Bryansk đã xin từ chức và được Tổng thống Putin bổ nhiệm người thay thế.</p>
                      <div className="text-[13px] text-[#757575] font-sans">9h trước &nbsp;&nbsp;&nbsp; Quốc tế</div>
                    </div>
                    
                    {/* Right 2 articles */}
                    <div className="flex-1 flex flex-col gap-6">
                      <div className="flex flex-col group cursor-pointer">
                        <div className="w-full aspect-[5/3.2] bg-[#F2F2F2] mb-3 transition-colors group-hover:bg-[#E5E5E5]"></div>
                        <h3 className="text-[16px] font-bold font-heading leading-snug text-[#222] group-hover:text-[#9F224E] transition-colors">Iran dọa đáp trả vụ Kuwait bắt 4 binh sĩ</h3>
                      </div>
                      <div className="flex flex-col group cursor-pointer">
                        <div className="w-full aspect-[5/3.2] bg-[#F2F2F2] mb-3 transition-colors group-hover:bg-[#E5E5E5]"></div>
                        <h3 className="text-[16px] font-bold font-heading leading-snug text-[#222] group-hover:text-[#9F224E] transition-colors">Vị thế thay đổi của Trung Quốc trong quan hệ với Mỹ sau 10 năm</h3>
                      </div>
                    </div>
                  </div>
                  
                  {/* Divider */}
                  <div className="w-full h-px bg-gray-200"></div>
                  
                  {/* Bottom 3 articles */}
                  <div className="grid grid-cols-3 gap-6">
                    <div className="flex flex-col group cursor-pointer">
                      <div className="w-full aspect-[5/3.2] bg-[#F2F2F2] mb-3 transition-colors group-hover:bg-[#E5E5E5]"></div>
                      <h3 className="text-[16px] font-bold font-heading leading-snug text-[#222] group-hover:text-[#9F224E] transition-colors">Sức mạnh tàu ngầm hạt nhân Mỹ dùng để 'dằn mặt Iran'</h3>
                    </div>
                    <div className="flex flex-col group cursor-pointer">
                      <div className="w-full aspect-[5/3.2] bg-[#F2F2F2] mb-3 transition-colors group-hover:bg-[#E5E5E5]"></div>
                      <h3 className="text-[16px] font-bold font-heading leading-snug text-[#222] group-hover:text-[#9F224E] transition-colors">Bình Nhưỡng tắc đường vì số lượng ôtô bùng nổ</h3>
                    </div>
                    <div className="flex flex-col group cursor-pointer">
                      <div className="w-full aspect-[5/3.2] bg-[#F2F2F2] mb-3 transition-colors group-hover:bg-[#E5E5E5]"></div>
                      <h3 className="text-[16px] font-bold font-heading leading-snug text-[#222] group-hover:text-[#9F224E] transition-colors">Cuộc đua bảo vệ 'chấm xanh giữa biển đỏ' của đảng Dân chủ</h3>
                    </div>
                  </div>
                </div>
                
                {/* Large 1 Ad */}
                <div className="w-[300px] shrink-0 bg-[#EFCB59] flex flex-col items-center justify-center relative min-h-[600px] hover:brightness-95 transition-all cursor-pointer">
                  <div className="text-center text-[#111]">
                    <div className="font-bold text-3xl mb-3 font-heading">Large 1</div>
                    <div className="text-[15px] font-medium mb-1">300x600</div>
                    <div className="w-12 h-[1px] bg-black/60 mx-auto mb-4"></div>
                    <div className="text-[14px]">Tối ưu khi sticky (dính) 5s</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* T2 */}
        <div className="flex flex-col gap-4 p-6 pt-8 border-t border-gray-100">
          <div>
            <h4 className="font-bold text-gray-900 border-l-3 border-[#9F224E] pl-3 uppercase tracking-wide mb-2 text-[15px]">
              Topstory T2 — 4 tin + Large 1
            </h4>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 relative overflow-hidden overflow-x-auto shadow-sm">
            <div className="bg-gray-100 px-4 py-2 border-b border-gray-200 text-[10px] uppercase font-bold text-gray-500 tracking-widest">
              Giao diện thực tế (Pixel Perfect)
            </div>
            <div className="p-8 min-w-[1000px]">
              <div className="flex gap-6 max-w-[1100px] mx-auto">
                <div className="flex-[3] flex flex-col gap-6">
                  {/* Top Part */}
                  <div className="flex gap-6">
                    {/* Big image */}
                    <div className="w-[52%] shrink-0 group cursor-pointer">
                      <div className="w-full aspect-[513/320] bg-[#F2F2F2] transition-colors group-hover:bg-[#E5E5E5]"></div>
                    </div>
                    
                    {/* Right Text */}
                    <div className="flex-1 flex flex-col justify-start pt-1 group cursor-pointer">
                      <h2 className="text-[24px] font-bold font-heading mb-3 leading-snug text-[#222] group-hover:text-[#9F224E] transition-colors">Chuyển đổi quỹ đất xây nhà xã hội sang thương mại tại dự án Vinhomes</h2>
                      <p className="text-[15px] text-[#4F4F4F] mb-4 leading-[1.6]">Khu đô thị nghỉ dưỡng Mỹ Lâm của Vinhomes được điều chỉnh quy hoạch, chuyển đổi gần 23 ha đất xây nhà xã hội sang nhà thương mại.</p>
                      <div className="text-[13px] text-[#757575] font-sans">9h trước &nbsp;&nbsp;&nbsp; Quốc tế</div>
                    </div>
                  </div>
                  
                  {/* Divider */}
                  <div className="w-full h-px bg-gray-200"></div>
                  
                  {/* Bottom 3 articles */}
                  <div className="grid grid-cols-3 gap-6">
                    <div className="flex flex-col group cursor-pointer">
                      <div className="w-full aspect-[5/3.2] bg-[#F2F2F2] mb-3 transition-colors group-hover:bg-[#E5E5E5]"></div>
                      <h3 className="text-[16px] font-bold font-heading leading-snug text-[#222] group-hover:text-[#9F224E] transition-colors">Sức mạnh tàu ngầm hạt nhân Mỹ dùng để 'dằn mặt Iran'</h3>
                    </div>
                    <div className="flex flex-col group cursor-pointer">
                      <div className="w-full aspect-[5/3.2] bg-[#F2F2F2] mb-3 transition-colors group-hover:bg-[#E5E5E5]"></div>
                      <h3 className="text-[16px] font-bold font-heading leading-snug text-[#222] group-hover:text-[#9F224E] transition-colors">Bình Nhưỡng tắc đường vì số lượng ôtô bùng nổ</h3>
                    </div>
                    <div className="flex flex-col group cursor-pointer">
                      <div className="w-full aspect-[5/3.2] bg-[#F2F2F2] mb-3 transition-colors group-hover:bg-[#E5E5E5]"></div>
                      <h3 className="text-[16px] font-bold font-heading leading-snug text-[#222] group-hover:text-[#9F224E] transition-colors">Cuộc đua bảo vệ 'chấm xanh giữa biển đỏ' của đảng Dân chủ</h3>
                    </div>
                  </div>
                </div>
                
                {/* Large 1 Ad */}
                <div className="w-[300px] shrink-0 bg-[#EFCB59] flex flex-col items-center justify-center relative min-h-[600px] hover:brightness-95 transition-all cursor-pointer">
                  <div className="text-center text-[#111]">
                    <div className="font-bold text-3xl mb-3 font-heading">Large 1</div>
                    <div className="text-[15px] font-medium mb-1">300x600</div>
                    <div className="w-12 h-[1px] bg-black/60 mx-auto mb-4"></div>
                    <div className="text-[14px]">Tối ưu khi sticky (dính) 5s</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* T3 */}
        <div className="flex flex-col gap-4 p-6 pt-8 border-t border-gray-100">
          <div>
            <h4 className="font-bold text-gray-900 border-l-3 border-[#9F224E] pl-3 uppercase tracking-wide mb-2 text-[15px]">
              Topstory T3 — 5 tin + Large 1
            </h4>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 relative overflow-hidden overflow-x-auto shadow-sm">
            <div className="bg-gray-100 px-4 py-2 border-b border-gray-200 text-[10px] uppercase font-bold text-gray-500 tracking-widest">
              Giao diện thực tế (Pixel Perfect)
            </div>
            <div className="p-8 min-w-[1000px]">
              <div className="flex gap-6 max-w-[1100px] mx-auto">
                <div className="flex-[3] flex flex-col gap-6">
                  {/* Top Part */}
                  <div className="flex flex-col group cursor-pointer">
                    <div className="w-full aspect-[760/420] bg-[#F2F2F2] mb-5 transition-colors group-hover:bg-[#E5E5E5]"></div>
                    <h2 className="text-[28px] font-bold font-heading mb-3 leading-snug text-[#222] group-hover:text-[#9F224E] transition-colors">Quốc hội dự kiến dành một tuần làm công tác nhân sự tại Kỳ họp thứ nhất</h2>
                    <p className="text-[16px] text-[#4F4F4F] leading-[1.6]">Chủ tịch Quốc hội Trần Thanh Mẫn cho biết Kỳ họp thứ nhất Quốc hội khóa 16 sẽ diễn ra 2 đợt, trong đó đợt 1 dự kiến dành khoảng một tuần để làm công tác nhân sự.</p>
                  </div>
                  
                  {/* Divider */}
                  <div className="w-full h-px bg-gray-200"></div>
                  
                  {/* Bottom 4 articles */}
                  <div className="grid grid-cols-4 gap-6">
                    <div className="flex flex-col group cursor-pointer">
                      <div className="w-full aspect-[5/3.2] bg-[#F2F2F2] mb-3 transition-colors group-hover:bg-[#E5E5E5]"></div>
                      <h3 className="text-[15px] font-bold font-heading leading-snug text-[#222] group-hover:text-[#9F224E] transition-colors">Bộ Chính trị định hình TP HCM thành đô thị toàn cầu vào 2075</h3>
                    </div>
                    <div className="flex flex-col group cursor-pointer">
                      <div className="w-full aspect-[5/3.2] bg-[#F2F2F2] mb-3 transition-colors group-hover:bg-[#E5E5E5]"></div>
                      <h3 className="text-[15px] font-bold font-heading leading-snug text-[#222] group-hover:text-[#9F224E] transition-colors">'Việt Nam cần chuyển sang nền kinh tế vận hành bằng công nghệ'</h3>
                    </div>
                    <div className="flex flex-col group cursor-pointer">
                      <div className="w-full aspect-[5/3.2] bg-[#F2F2F2] mb-3 transition-colors group-hover:bg-[#E5E5E5]"></div>
                      <h3 className="text-[15px] font-bold font-heading leading-snug text-[#222] group-hover:text-[#9F224E] transition-colors">Thủ tướng yêu cầu Hà Nội khởi công một số dự án nhà ở cho thuê trong tháng 6</h3>
                    </div>
                    <div className="flex flex-col group cursor-pointer">
                      <div className="w-full aspect-[5/3.2] bg-[#F2F2F2] mb-3 transition-colors group-hover:bg-[#E5E5E5]"></div>
                      <h3 className="text-[15px] font-bold font-heading leading-snug text-[#222] group-hover:text-[#9F224E] transition-colors">Lào Cai, Hải Phòng muốn thí điểm mô hình xã hội chủ nghĩa</h3>
                    </div>
                  </div>
                </div>
                
                {/* Large 1 Ad */}
                <div className="w-[300px] shrink-0 bg-[#EFCB59] flex flex-col items-center justify-center relative min-h-[600px] hover:brightness-95 transition-all cursor-pointer">
                  <div className="text-center text-[#111]">
                    <div className="font-bold text-3xl mb-3 font-heading">Large 1</div>
                    <div className="text-[15px] font-medium mb-1">300x600</div>
                    <div className="w-12 h-[1px] bg-black/60 mx-auto mb-4"></div>
                    <div className="text-[14px]">Tối ưu khi sticky (dính) 5s</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* T4 */}
        <div className="flex flex-col gap-4 p-6 pt-8 border-t border-gray-100">
          <div>
            <h4 className="font-bold text-gray-900 border-l-3 border-[#9F224E] pl-3 uppercase tracking-wide mb-2 text-[15px]">
              Topstory T4 — 7 tin + Breakpage 1
            </h4>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 relative overflow-hidden overflow-x-auto shadow-sm">
            <div className="bg-gray-100 px-4 py-2 border-b border-gray-200 text-[10px] uppercase font-bold text-gray-500 tracking-widest">
              Giao diện thực tế (Pixel Perfect)
            </div>
            <div className="p-8 min-w-[1000px]">
              <div className="w-full flex gap-6 max-w-[1100px] mx-auto">
                <div className="w-full flex flex-col gap-6">
                  {/* Top Part */}
                  <div className="flex gap-6">
                    {/* Big article */}
                    <div className="flex-[6] flex flex-col pr-2 group cursor-pointer">
                      <div className="w-full aspect-[2/1] bg-[#F2F2F2] mb-5 transition-colors group-hover:bg-[#E5E5E5]"></div>
                      <h2 className="text-[28px] font-bold font-heading mb-3 leading-snug text-[#222] group-hover:text-[#9F224E] transition-colors">Quốc hội dự kiến dành một tuần làm công tác nhân sự tại Kỳ họp thứ nhất</h2>
                      <p className="text-[16px] text-[#4F4F4F] leading-[1.6]">Chủ tịch Quốc hội Trần Thanh Mẫn cho biết Kỳ họp thứ nhất Quốc hội khóa 16 sẽ diễn ra 2 đợt, trong đó đợt 1 dự kiến dành khoảng một tuần để làm công tác nhân sự.</p>
                    </div>
                    
                    {/* Right 2 articles - stacked */}
                    <div className="flex-[3] flex flex-col gap-5">
                      <div className="flex flex-col gap-3 group cursor-pointer">
                        <div className="w-full aspect-[5/3] bg-[#F2F2F2] transition-colors group-hover:bg-[#E5E5E5]"></div>
                        <h3 className="text-[17px] font-bold font-heading leading-snug text-[#222] group-hover:text-[#9F224E] transition-colors">TP HCM sẽ rà soát lãnh đạo sau một năm vận hành chính quyền hai cấp</h3>
                      </div>
                      <div className="flex flex-col gap-3 group cursor-pointer">
                        <div className="w-full aspect-[5/3] bg-[#F2F2F2] transition-colors group-hover:bg-[#E5E5E5]"></div>
                        <h3 className="text-[17px] font-bold font-heading leading-snug text-[#222] group-hover:text-[#9F224E] transition-colors">Bộ Chính trị yêu cầu TP HCM hoàn thành 200 km metro vào năm 2030</h3>
                      </div>
                    </div>
                  </div>
                  
                  {/* Divider */}
                  <div className="w-full h-px bg-gray-200 mt-2 mb-2"></div>
                  
                  {/* Bottom 4 articles */}
                  <div className="grid grid-cols-4 gap-6">
                    <div className="flex flex-col group cursor-pointer">
                      <div className="w-full aspect-[5/3.2] bg-[#F2F2F2] mb-3 transition-colors group-hover:bg-[#E5E5E5]"></div>
                      <h3 className="text-[15px] font-bold font-heading leading-snug text-[#222] group-hover:text-[#9F224E] transition-colors">Bộ Chính trị định hình TP HCM thành đô thị toàn cầu vào 2075</h3>
                    </div>
                    <div className="flex flex-col group cursor-pointer">
                      <div className="w-full aspect-[5/3.2] bg-[#F2F2F2] mb-3 transition-colors group-hover:bg-[#E5E5E5]"></div>
                      <h3 className="text-[15px] font-bold font-heading leading-snug text-[#222] group-hover:text-[#9F224E] transition-colors">'Việt Nam cần chuyển sang nền kinh tế vận hành bằng công nghệ'</h3>
                    </div>
                    <div className="flex flex-col group cursor-pointer">
                      <div className="w-full aspect-[5/3.2] bg-[#F2F2F2] mb-3 transition-colors group-hover:bg-[#E5E5E5]"></div>
                      <h3 className="text-[15px] font-bold font-heading leading-snug text-[#222] group-hover:text-[#9F224E] transition-colors">Thủ tướng yêu cầu Hà Nội khởi công một số dự án nhà ở cho thuê trong tháng 6</h3>
                    </div>
                    <div className="flex flex-col group cursor-pointer">
                      <div className="w-full aspect-[5/3.2] bg-[#F2F2F2] mb-3 transition-colors group-hover:bg-[#E5E5E5]"></div>
                      <h3 className="text-[15px] font-bold font-heading leading-snug text-[#222] group-hover:text-[#9F224E] transition-colors">Lào Cai, Hải Phòng muốn thí điểm mô hình xã hội chủ nghĩa</h3>
                    </div>
                  </div>
                  
                  {/* Breakpage Ad */}
                  <div className="w-full h-[250px] bg-[#EFCB59] mt-8 flex flex-col items-center justify-center hover:brightness-95 transition-all cursor-pointer">
                     <div className="text-center text-[#111]">
                       <div className="font-bold text-[32px] mb-3 font-heading tracking-wide">Breakpage 1</div>
                       <div className="text-[15px] font-medium mb-2 font-sans">1100x250, 970x250, 970x90</div>
                       <div className="w-16 h-[1px] bg-black/60 mx-auto mb-4"></div>
                       <div className="text-[15px] font-sans"><strong>[OV]</strong> Chạy video Outstream cho đối tác, size có thể<br/>1100x450</div>
                     </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
