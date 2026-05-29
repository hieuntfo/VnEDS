import { CheckSquare, Square, Smartphone, Monitor } from "lucide-react";

export function AdsView() {
  const checklist = [
    { name: "ADS Tin tức", checked: true },
    { name: "ADS non Tin tức", checked: true },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-8 pb-32">
      <div className="flex justify-between items-end mb-4">
        <div>
          <h1 className="text-4xl font-heading italic text-gray-900 leading-none">
            Quảng cáo (Ads)
          </h1>
          <p className="text-gray-500 mt-2">
            Các định dạng và vị trí quảng cáo Display Banners.
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

      <section className="bg-white border border-gray-100 rounded-2xl shadow-sm flex flex-col gap-6 overflow-hidden">
        <div className="flex justify-between items-center border-b border-gray-100 p-6 pb-4 bg-gray-50/50">
          <h3 className="font-bold uppercase tracking-widest text-xs text-gray-400">
            01 / ADS Non Tin tức (Display Banners)
          </h3>
        </div>

        <div className="p-6 pt-0">
          <div className="grid lg:grid-cols-2 gap-8">
            
            {/* PC Layout */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-gray-900 border-l-3 border-[#9F224E] pl-3 uppercase tracking-wide text-[15px]">
                  Bản PC
                </h4>
                <div className="text-[10px] text-gray-500 font-mono flex items-center gap-1.5 bg-gray-100 px-2 py-1 rounded">
                  <Monitor className="w-3.5 h-3.5" /> Desktop (1160px)
                </div>
              </div>
              
              <div className="bg-gray-100 border border-gray-200 rounded-lg h-[800px] overflow-y-auto no-scrollbar shadow-inner relative flex flex-col items-center">
                {/* Viewport content wrapper to simulate centered grid */}
                <div className="w-full flex flex-col items-center">
                    
                  {/* Masthead */}
                  <div className="w-full bg-[#EFCB59] flex flex-col items-center justify-center py-6 text-center shadow-sm relative">
                    <div className="font-bold text-xl font-heading mb-1 text-[#111]">Masthead</div>
                    <div className="text-[12px] font-sans font-medium mb-1 text-[#111]">1920x300 / 1920x270 / 1100x250 / 970x250</div>
                    <div className="text-[10px] font-sans text-black/70">Không hiển thị đồng thời với Background U</div>
                  </div>

                  {/* Header/Nav bar */}
                  <div className="w-full h-8 bg-white border-b border-gray-200 flex items-center justify-center gap-6 px-4">
                     <div className="w-[800px] flex items-center gap-4">
                         <div className="w-20 h-3 bg-gray-200 rounded"></div>
                         <div className="w-8 h-3 bg-gray-200 rounded"></div>
                         <div className="w-8 h-3 bg-gray-200 rounded"></div>
                     </div>
                  </div>

                  {/* Content Start */}
                  <div className="w-full max-w-[800px] mt-4 flex flex-col gap-4 px-4 pb-16 relative">
                    
                    {/* Content Block */}
                    <div className="w-full h-40 bg-[#EFEFEF] rounded border border-gray-200/50"></div>

                    {/* Breakpage 1 */}
                    <div className="w-full bg-[#EFCB59] flex flex-col items-center justify-center py-6 text-center my-2 shadow-sm rounded-sm">
                      <div className="font-bold text-lg font-heading mb-1 text-[#111]">Breakpage 1</div>
                      <div className="text-[12px] font-sans font-medium mb-2 text-[#111]">1100x250, 970x250, 970x90</div>
                      <div className="text-[10px] font-sans text-black/70"><strong>[OV]</strong> Chạy video Outstream cho đối tác, size có thể<br/>1100x450</div>
                    </div>

                    {/* Content Block */}
                    <div className="w-full h-64 bg-[#EFEFEF] rounded border border-gray-200/50"></div>

                    {/* Row with Large 1 */}
                    <div className="flex gap-4 w-full">
                       <div className="flex-1 flex flex-col gap-2">
                           <div className="w-full h-40 bg-[#EFEFEF] rounded border border-gray-200/50"></div>
                           <div className="grid grid-cols-2 gap-2 mt-2">
                               <div className="h-24 bg-[#EFEFEF] rounded border border-gray-200/50"></div>
                               <div className="h-24 bg-[#EFEFEF] rounded border border-gray-200/50"></div>
                           </div>
                       </div>
                       
                       {/* Large 1 */}
                       <div className="w-[300px] bg-[#EFCB59] shrink-0 flex flex-col items-center justify-center py-10 text-center shadow-sm rounded-sm">
                          <div className="font-bold text-lg font-heading mb-1 text-[#111]">Large 1</div>
                          <div className="text-[12px] font-sans font-medium mb-2 text-[#111]">300x600</div>
                          <div className="w-8 h-[1px] bg-black/60 mx-auto mb-2"></div>
                          <div className="text-[10px] font-sans text-black/70">Tối ưu khi sticky (dính) 5s</div>
                       </div>
                    </div>

                    {/* Content Block */}
                    <div className="w-full h-32 bg-[#EFEFEF] rounded border border-gray-200/50"></div>

                    {/* Breakpage 2 */}
                    <div className="w-full bg-[#EFCB59] flex flex-col items-center justify-center py-6 text-center my-2 shadow-sm rounded-sm">
                      <div className="font-bold text-lg font-heading mb-1 text-[#111]">Breakpage 2</div>
                      <div className="text-[12px] font-sans font-medium mb-2 text-[#111]">1100x250, 970x250, 970x90</div>
                      <div className="text-[10px] font-sans text-black/70"><strong>[OV]</strong> Chạy video Outstream cho đối tác, size có thể<br/>1100x450</div>
                    </div>

                    {/* Content Block */}
                    <div className="w-full h-64 bg-[#EFEFEF] rounded border border-gray-200/50"></div>

                    {/* Bottom Banner */}
                    <div className="w-full bg-[#EFCB59] flex flex-col items-center justify-center py-6 text-center my-2 shadow-sm rounded-sm">
                      <div className="font-bold text-lg font-heading mb-1 text-[#111]">Bottom Banner</div>
                      <div className="text-[12px] font-sans font-medium text-[#111]">1100x250, 970x250, 970x90</div>
                    </div>

                    {/* Content Block */}
                    <div className="w-full h-40 bg-[#EFEFEF] rounded border border-gray-200/50"></div>

                  </div>
                </div>

                {/* Sticky elements simulated inside the viewport */}
                <div className="sticky bottom-0 w-full flex flex-col items-center pointer-events-none mt-auto z-10 p-4">
                  <div className="w-full max-w-[800px] flex gap-4 justify-between items-end">
                    
                    {/* Bottom Sticky */}
                    <div className="w-full max-w-[600px] bg-[#EFCB59] flex flex-col items-center justify-center py-3 text-center shadow-lg border border-black/10 rounded-sm pointer-events-auto self-end">
                       <div className="font-bold text-[13px] font-heading mb-0.5 text-[#111]">Bottom Sticky <span className="font-normal text-[10px]">(970x90, 728x90)</span></div>
                       <div className="text-[9px] font-sans text-black/70">Hiển thị sau khi scroll 450px. <strong>[OV]</strong> Hiển thị ngay màn hình cơ sở (above the fold)</div>
                    </div>

                    {/* Right Conner Balloon */}
                    <div className="w-[180px] h-[140px] bg-[#EFCB59] shrink-0 flex flex-col items-center justify-center text-center p-3 shadow-xl border border-black/10 border-dashed rounded-sm pointer-events-auto">
                       <div className="font-bold text-[13px] font-heading mb-1 text-[#111] leading-tight">Right Conner Balloon</div>
                       <div className="text-[10px] font-sans font-medium mb-2 text-[#111]">370x270, 300x250</div>
                       <div className="text-[8px] font-sans text-black/70 leading-snug">Hiển thị sau khi scroll 600px. Không hiển thị khi có Background U, Skyscraper, Bottom Sticky</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Mobile Layout */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-gray-900 border-l-3 border-[#9F224E] pl-3 uppercase tracking-wide text-[15px]">
                  Bản Mobile
                </h4>
                <div className="text-[10px] text-gray-500 font-mono flex items-center gap-1.5 bg-gray-100 px-2 py-1 rounded">
                  <Smartphone className="w-3.5 h-3.5" /> Mobile App/Web
                </div>
              </div>
              
              <div className="bg-gray-100 border border-gray-200 rounded-lg h-[800px] overflow-y-auto no-scrollbar shadow-inner flex justify-center py-6">
                
                {/* Mobile Device Mockup */}
                <div className="w-[375px] shrink-0 bg-white shadow-md border border-gray-200/50 flex flex-col relative h-fit overflow-hidden pb-10">
                   {/* Mobile Masthead */}
                   <div className="w-full aspect-[2/1] bg-[#EFCB59] flex flex-col items-center justify-center text-center">
                      <div className="font-bold text-lg font-heading mb-1 text-[#111]">Masthead</div>
                      <div className="text-[12px] font-sans font-medium text-[#111]">414x207, 360x207</div>
                      <div className="text-xl mt-1">...</div>
                   </div>

                   {/* Header/Nav Bar */}
                   <div className="w-full h-10 border-b border-gray-100 flex items-center justify-between px-4">
                      <div className="flex gap-2">
                        <div className="w-8 h-4 bg-gray-200 rounded"></div>
                        <div className="w-16 h-4 bg-gray-200 rounded"></div>
                      </div>
                      <div className="flex gap-1.5">
                        <div className="w-6 h-3 bg-gray-200 rounded"></div>
                        <div className="w-6 h-3 bg-gray-200 rounded"></div>
                      </div>
                   </div>

                   <div className="flex flex-col px-3 py-4 gap-4">
                     {/* Content Block */}
                     <div className="w-full h-[250px] bg-[#EFEFEF] rounded"></div>

                     {/* Breakpage */}
                     <div className="w-full bg-[#EFCB59] flex flex-col items-center justify-center py-6 text-center my-1 rounded-sm shadow-[0_1px_3px_rgba(0,0,0,0.1)]">
                        <div className="font-bold text-[16px] font-heading mb-1 text-[#111]">Breakpage</div>
                        <div className="text-[11px] font-sans font-medium mb-1 text-[#111]">300x250, 414x345, 480x960</div>
                        <div className="text-lg">...</div>
                     </div>

                     {/* Content Block */}
                     <div className="w-full h-[180px] bg-[#EFEFEF] rounded"></div>

                     {/* Large 1 */}
                     <div className="w-full bg-[#EFCB59] flex flex-col items-center justify-center py-10 text-center my-1 rounded-sm shadow-[0_1px_3px_rgba(0,0,0,0.1)]">
                        <div className="font-bold text-[16px] font-heading mb-1 text-[#111]">Large 1</div>
                        <div className="text-[11px] font-sans font-medium mb-1 text-[#111]">300x250, 300x600, 480x960</div>
                        <div className="text-lg">...</div>
                     </div>

                     {/* Content Block */}
                     <div className="w-full h-[200px] bg-[#EFEFEF] rounded"></div>

                     {/* Large 2 */}
                     <div className="w-full bg-[#EFCB59] flex flex-col items-center justify-center py-10 text-center my-1 rounded-sm shadow-[0_1px_3px_rgba(0,0,0,0.1)]">
                        <div className="font-bold text-[16px] font-heading mb-1 text-[#111]">Large 2</div>
                        <div className="text-[11px] font-sans font-medium mb-1 text-[#111]">300x250, 300x600, 480x960</div>
                        <div className="text-lg">...</div>
                     </div>

                     {/* Content Block */}
                     <div className="w-full h-[160px] bg-[#EFEFEF] rounded"></div>
                     <div className="w-full h-[160px] bg-[#EFEFEF] rounded"></div>

                     {/* Bottom Banner */}
                     <div className="w-full bg-[#EFCB59] flex flex-col items-center justify-center py-6 text-center my-1 rounded-sm shadow-[0_1px_3px_rgba(0,0,0,0.1)]">
                        <div className="font-bold text-[16px] font-heading mb-1 text-[#111]">Bottom Banner</div>
                        <div className="text-[11px] font-sans font-medium mb-2 text-[#111]">300x250 / 300x600</div>
                        <div className="text-[9px] font-sans font-bold text-[#111] uppercase tracking-wide"><strong>[OV]:</strong> InActive</div>
                     </div>

                     {/* Content Block */}
                     <div className="w-full h-[300px] bg-[#EFEFEF] rounded"></div>
                   </div>

                   {/* Bottom Sticky */}
                   <div className="sticky bottom-0 w-full mt-auto bg-[#EFCB59] border-t border-black/10 py-3 flex flex-col items-center text-center shadow-[0_-5px_15px_rgba(0,0,0,0.1)] z-10">
                      <div className="font-bold text-[14px] font-heading mb-0.5 text-[#111]">Bottom Sticky</div>
                      <div className="text-[10px] font-sans font-medium text-[#111] mb-1">300x50/320x50/320x100</div>
                      <div className="text-[9px] font-sans text-black/70">Overlay: 300x168</div>
                   </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ADS Tin tức section */}
      <section className="bg-white border border-gray-100 rounded-2xl shadow-sm flex flex-col gap-6 overflow-hidden">
        <div className="flex justify-between items-center border-b border-gray-100 p-6 pb-4 bg-gray-50/50">
          <h3 className="font-bold uppercase tracking-widest text-xs text-gray-400">
            02 / ADS Tin tức (Native Ads)
          </h3>
        </div>
        <div className="p-6 pt-0">
          <div className="grid lg:grid-cols-2 gap-8">
            
            {/* PC Layout */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-gray-900 border-l-3 border-[#9F224E] pl-3 uppercase tracking-wide text-[15px]">
                  Bản PC
                </h4>
                <div className="text-[10px] text-gray-500 font-mono flex items-center gap-1.5 bg-gray-100 px-2 py-1 rounded">
                  <Monitor className="w-3.5 h-3.5" /> Desktop (1160px)
                </div>
              </div>
              
              <div className="bg-gray-100 border border-gray-200 rounded-lg h-[800px] overflow-y-auto no-scrollbar shadow-inner relative flex flex-col items-center">
                
                {/* Background U visualization wrapper */}
                <div className="w-full bg-[#EFCB59] bg-opacity-70 flex flex-col items-center pt-8 pb-32">
                  <div className="text-center mb-6">
                    <div className="font-bold text-lg font-heading mb-1 text-[#111]">Background U</div>
                    <div className="text-[12px] font-sans font-medium mb-1 text-[#111]">2000x1080</div>
                    <div className="text-[10px] font-sans text-black/70">Không hiển thị đồng thời với Masthead</div>
                  </div>

                  {/* Main webpage wrapper to simulate 1160px container */}
                  <div className="w-full max-w-[900px] bg-white shadow-2xl relative flex flex-col">
                    
                    {/* Header/Nav bar */}
                    <div className="w-full h-10 border-b border-gray-200 flex items-center justify-between px-4 text-[10px] text-gray-400 font-medium">
                       <div className="flex gap-4">
                         <span>VnExpress</span>
                         <span>Folder</span>
                       </div>
                       <div className="flex gap-4 items-center">
                         <span>Đăng nhập</span>
                       </div>
                    </div>
                    {/* Menu links placeholder */}
                    <div className="w-full h-8 bg-gray-50 border-b border-gray-200 flex items-center justify-start gap-4 px-4 overflow-hidden">
                       <div className="w-12 h-3 bg-gray-200 rounded"></div>
                       <div className="w-16 h-3 bg-gray-200 rounded"></div>
                       <div className="w-14 h-3 bg-gray-200 rounded"></div>
                       <div className="w-16 h-3 bg-gray-200 rounded"></div>
                       <div className="w-12 h-3 bg-gray-200 rounded"></div>
                       <div className="w-16 h-3 bg-gray-200 rounded"></div>
                       <div className="w-14 h-3 bg-gray-200 rounded"></div>
                    </div>

                    {/* Content Area - 2 Columns */}
                    <div className="flex w-full p-4 gap-4">
                       
                       {/* Left Column (Main Content) */}
                       <div className="flex-1 flex flex-col gap-4">
                          <div className="w-full h-[200px] bg-[#EFEFEF] rounded"></div>
                          
                          <div className="grid grid-cols-2 gap-4">
                             <div className="h-[150px] bg-[#EFEFEF] rounded"></div>
                             <div className="h-[150px] bg-[#EFEFEF] rounded"></div>
                          </div>
                          <div className="w-full h-12 bg-[#EFEFEF] rounded"></div>

                          {/* Native Ads 1 */}
                          <div className="w-full bg-[#FEF0B2] flex flex-col items-center justify-center py-6 text-center shadow-sm rounded-sm my-2">
                             <div className="font-bold text-[15px] font-heading mb-1 text-[#111]">Native Ads 1</div>
                             <div className="text-[11px] font-sans font-medium text-[#111]">760x200</div>
                             <div className="text-[12px] mt-1 tracking-[4px]">---</div>
                          </div>
                          
                          {/* Breakpage 1 */}
                          <div className="w-full bg-[#EFCB59] flex flex-col items-center justify-center py-8 text-center shadow-sm rounded-sm">
                             <div className="font-bold text-[16px] font-heading mb-1 text-[#111]">Breakpage 1</div>
                             <div className="text-[11px] font-sans font-medium mb-2 text-[#111]">1100x250, 970x250, 970x90</div>
                             <div className="text-[9px] font-sans text-black/70 leading-snug"><strong>[OV]</strong> Chạy video Outstream cho đối tác, size có thể<br/>1100x450</div>
                          </div>

                          <div className="w-full h-[250px] bg-[#EFEFEF] rounded mt-2"></div>
                          <div className="w-full h-[40px] bg-[#EFEFEF] rounded"></div>
                          <div className="w-full h-[40px] bg-[#EFEFEF] rounded"></div>
                          <div className="w-full h-[40px] bg-[#EFEFEF] rounded"></div>
                          <div className="w-full h-[40px] bg-[#EFEFEF] rounded"></div>

                          {/* Native Ads 2 */}
                          <div className="w-full bg-[#FEF0B2] flex flex-col items-center justify-center py-6 text-center shadow-sm rounded-sm my-2">
                             <div className="font-bold text-[15px] font-heading mb-1 text-[#111]">Native Ads 2</div>
                             <div className="text-[11px] font-sans font-medium text-[#111]">760x200</div>
                             <div className="text-[12px] mt-1 tracking-[4px]">---</div>
                          </div>

                          {/* Breakpage 2 */}
                          <div className="w-full bg-[#EFCB59] flex flex-col items-center justify-center py-8 text-center shadow-sm rounded-sm border-t border-black/5">
                             <div className="font-bold text-[16px] font-heading mb-1 text-[#111]">Breakpage 2</div>
                             <div className="text-[11px] font-sans font-medium mb-2 text-[#111]">1100x250, 970x250, 970x90</div>
                             <div className="text-[9px] font-sans text-black/70 leading-snug"><strong>[OV]</strong> Chạy video Outstream cho đối tác, size có thể<br/>1100x450</div>
                          </div>

                          <div className="w-full h-[60px] bg-[#EFEFEF] rounded mt-2"></div>
                          <div className="w-full h-[60px] bg-[#EFEFEF] rounded"></div>
                          <div className="w-full h-[60px] bg-[#EFEFEF] rounded"></div>
                          <div className="w-full h-[60px] bg-[#EFEFEF] rounded"></div>
                          <div className="w-full h-[60px] bg-[#EFEFEF] rounded"></div>
                          <div className="w-full h-[60px] bg-[#EFEFEF] rounded"></div>

                          {/* Native Ads 3 */}
                          <div className="w-full bg-[#FEF0B2] flex flex-col items-center justify-center py-6 text-center shadow-sm rounded-sm my-2">
                             <div className="font-bold text-[15px] font-heading mb-1 text-[#111]">Native Ads 3</div>
                             <div className="text-[11px] font-sans font-medium text-[#111]">760x200</div>
                             <div className="text-[12px] mt-1 tracking-[4px]">---</div>
                          </div>

                          <div className="w-full h-[60px] bg-[#EFEFEF] rounded mt-2"></div>
                          <div className="w-full h-[60px] bg-[#EFEFEF] rounded"></div>
                          <div className="w-full h-[60px] bg-[#EFEFEF] rounded"></div>
                          <div className="w-full h-[60px] bg-[#EFEFEF] rounded"></div>
                          <div className="w-full h-[60px] bg-[#EFEFEF] rounded"></div>

                          {/* Native Ads 4 */}
                          <div className="w-full bg-[#FEF0B2] flex flex-col items-center justify-center py-6 text-center shadow-sm rounded-sm my-2">
                             <div className="font-bold text-[15px] font-heading mb-1 text-[#111]">Native Ads 4</div>
                             <div className="text-[11px] font-sans font-medium text-[#111]">760x200</div>
                             <div className="text-[12px] mt-1 tracking-[4px]">---</div>
                          </div>

                          {/* Bottom Banner */}
                          <div className="w-full bg-[#EFCB59] flex flex-col items-center justify-center py-10 text-center shadow-sm rounded-sm my-2">
                             <div className="font-bold text-[16px] font-heading mb-1 text-[#111]">Bottom Banner</div>
                             <div className="text-[11px] font-sans font-medium text-[#111]">1100x250, 970x250, 970x90</div>
                          </div>
                          
                          <div className="w-full h-[300px] bg-[#EFEFEF] rounded mt-2"></div>
                       </div>
                       
                       {/* Right Column */}
                       <div className="w-[300px] shrink-0 flex flex-col gap-4">
                          {/* Large 1 */}
                          <div className="w-full h-[400px] bg-[#EFCB59] flex flex-col items-center justify-center text-center shadow-sm rounded-sm">
                             <div className="font-bold text-[16px] font-heading mb-1 text-[#111]">Large 1</div>
                             <div className="text-[11px] font-sans font-medium mb-2 text-[#111]">300x600</div>
                             <div className="text-[10px] font-sans text-black/70">Tối ưu khi sticky (dính) 5s</div>
                          </div>
                          
                          <div className="w-full h-[150px] bg-[#EFEFEF] rounded"></div>
                          <div className="w-full h-[100px] bg-[#EFEFEF] rounded"></div>
                          
                          {/* Large 2 */}
                          <div className="w-full h-[400px] bg-[#EFCB59] flex flex-col items-center justify-center text-center shadow-sm rounded-sm">
                             <div className="font-bold text-[16px] font-heading mb-1 text-[#111]">Large 2</div>
                             <div className="text-[11px] font-sans font-medium mb-2 text-[#111]">300x600</div>
                             <div className="text-[10px] font-sans text-black/70">Tối ưu khi sticky (dính) 5s</div>
                          </div>

                          <div className="w-full h-[150px] bg-[#EFEFEF] rounded"></div>
                          <div className="w-full h-[250px] bg-[#EFEFEF] rounded"></div>

                          {/* Large 2 (Duplicate/Bottom) */}
                          <div className="w-full h-[400px] bg-[#EFCB59] flex flex-col items-center justify-center text-center shadow-sm rounded-sm">
                             <div className="font-bold text-[16px] font-heading mb-1 text-[#111]">Large 2</div>
                             <div className="text-[11px] font-sans font-medium mb-2 text-[#111]">300x600</div>
                             <div className="text-[10px] font-sans text-black/70">Tối ưu khi sticky (dính) 5s</div>
                          </div>
                       </div>

                    </div>
                  </div>
                </div>

                {/* Bottom Sticky wrapper */}
                <div className="sticky bottom-0 w-full flex flex-col items-center pointer-events-none mt-auto z-10 p-4">
                  <div className="w-full max-w-[900px] flex gap-4 justify-center items-end">
                    
                    {/* Bottom Sticky */}
                    <div className="w-[800px] bg-[#EFCB59] flex flex-col items-center justify-center py-4 text-center shadow-lg border border-black/10 rounded-sm pointer-events-auto">
                       <div className="font-bold text-[14px] font-heading mb-1 text-[#111]">Bottom Sticky <span className="font-normal text-[11px]">(970x90, 728x90)</span></div>
                       <div className="text-[10px] font-sans text-black/70">Hiển thị sau khi scroll 450px. <strong>[OV]</strong> Hiển thị ngay màn hình cơ sở (above the fold)</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Mobile Layout */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-gray-900 border-l-3 border-[#9F224E] pl-3 uppercase tracking-wide text-[15px]">
                  Bản Mobile
                </h4>
                <div className="text-[10px] text-gray-500 font-mono flex items-center gap-1.5 bg-gray-100 px-2 py-1 rounded">
                  <Smartphone className="w-3.5 h-3.5" /> Mobile App/Web
                </div>
              </div>
              
              <div className="bg-gray-100 border border-gray-200 rounded-lg h-[800px] overflow-y-auto no-scrollbar shadow-inner flex justify-center py-6">
                
                {/* Mobile Device Mockup */}
                <div className="w-[375px] shrink-0 bg-white shadow-md border border-gray-200/50 flex flex-col relative h-fit overflow-hidden pb-10">
                   
                   {/* Mobile Masthead */}
                   <div className="w-full aspect-[2/1] bg-[#EFCB59] flex flex-col items-center justify-center text-center">
                      <div className="font-bold text-[18px] font-heading mb-1 text-[#111]">Masthead</div>
                      <div className="text-[12px] font-sans font-medium text-[#111]">414x207, 360x207</div>
                      <div className="text-[14px] mt-1 tracking-[4px]">...</div>
                   </div>

                   {/* Header/Nav Bar */}
                   <div className="w-full h-10 border-b border-gray-100 flex items-center justify-between px-4">
                      <div className="w-16 h-4 bg-gray-200 rounded"></div>
                      <div className="flex gap-1.5">
                        <div className="w-12 h-3 bg-gray-200 rounded"></div>
                        <div className="w-12 h-3 bg-gray-200 rounded"></div>
                        <div className="w-12 h-3 bg-gray-200 rounded"></div>
                        <div className="w-12 h-3 bg-gray-200 rounded"></div>
                        <div className="w-12 h-3 bg-gray-200 rounded"></div>
                      </div>
                   </div>

                   <div className="flex flex-col gap-4">
                     {/* Content Block */}
                     <div className="w-full h-[250px] bg-[#EFEFEF]"></div>
                     <div className="w-full h-[250px] bg-[#EFEFEF]"></div>
                     
                     <div className="px-3">
                         {/* Breakpage */}
                         <div className="w-full bg-[#EFCB59] flex flex-col items-center justify-center py-10 text-center rounded-sm">
                            <div className="font-bold text-[16px] font-heading mb-1 text-[#111]">Breakpage</div>
                            <div className="text-[11px] font-sans font-medium mb-1 text-[#111]">300x250, 414x345, 480x960</div>
                            <div className="text-[10px] font-sans font-bold text-[#111] uppercase tracking-wide"><strong>[OV]:</strong> InActive</div>
                            <div className="text-lg mt-2 tracking-[4px]">...</div>
                         </div>
                     </div>

                     {/* Content Block */}
                     <div className="w-full h-[180px] bg-[#EFEFEF]"></div>
                     <div className="w-full h-[180px] bg-[#EFEFEF]"></div>
                     <div className="w-full h-[180px] bg-[#EFEFEF]"></div>
                     <div className="w-full h-[180px] bg-[#EFEFEF]"></div>
                     
                     <div className="px-3">
                         {/* Large 1 */}
                         <div className="w-full bg-[#EFCB59] flex flex-col items-center justify-center py-10 text-center rounded-sm text-[#111]">
                            <div className="font-bold text-[16px] font-heading mb-1">Large 1</div>
                            <div className="text-[11px] font-sans font-medium mb-1">300x250, 300x600, 480x960</div>
                            <div className="text-lg mt-1 tracking-[4px]">...</div>
                         </div>
                     </div>

                     {/* Video placeholder (not an ad, content) */}
                     <div className="w-full h-[200px] bg-[#EFEFEF] flex items-center justify-center">
                         <span className="font-bold text-[14px]">Video</span>
                     </div>

                     <div className="w-full h-[180px] bg-[#EFEFEF]"></div>
                     <div className="w-full h-[180px] bg-[#EFEFEF]"></div>
                     
                     <div className="px-3">
                         {/* Native Ad 1 */}
                         <div className="w-full bg-[#FEF0B2] flex flex-col items-center justify-center py-8 text-center rounded-sm text-[#111]">
                            <div className="font-bold text-[16px] font-heading mb-1">Native Ad 1</div>
                            <div className="text-xs tracking-[4px]">...</div>
                            <div className="text-xs tracking-[4px] mt-1">...</div>
                         </div>
                     </div>

                     {/* Ảnh (Image placeholder) */}
                     <div className="w-full h-[200px] bg-[#EFEFEF] flex items-center justify-center">
                         <span className="font-bold text-[14px]">Ảnh</span>
                     </div>

                     <div className="w-full h-[180px] bg-[#EFEFEF]"></div>
                     <div className="w-full h-[180px] bg-[#EFEFEF]"></div>
                     
                     <div className="px-3">
                         {/* Large 2 */}
                         <div className="w-full bg-[#EFCB59] flex flex-col items-center justify-center py-10 text-center rounded-sm text-[#111]">
                            <div className="font-bold text-[16px] font-heading mb-1">Large 2</div>
                            <div className="text-[11px] font-sans font-medium mb-1">300x250, 300x600, 480x960</div>
                            <div className="text-lg mt-1 tracking-[4px]">...</div>
                         </div>
                     </div>

                     <div className="w-full h-[180px] bg-[#EFEFEF]"></div>
                     <div className="w-full h-[180px] bg-[#EFEFEF]"></div>
                     
                     <div className="px-3">
                         {/* Large 3 */}
                         <div className="w-full bg-[#EFCB59] flex flex-col items-center justify-center py-10 text-center rounded-sm text-[#111]">
                            <div className="font-bold text-[16px] font-heading mb-1">Large 3</div>
                            <div className="text-[11px] font-sans font-medium mb-1">300x250, 300x600, 480x960</div>
                            <div className="text-lg mt-1 tracking-[4px]">...</div>
                         </div>
                     </div>

                     <div className="w-full h-[180px] bg-[#EFEFEF]"></div>
                     <div className="w-full h-[180px] bg-[#EFEFEF]"></div>
                     
                     <div className="px-3">
                         {/* Native Ad 2 */}
                         <div className="w-full bg-[#FEF0B2] flex flex-col items-center justify-center py-8 text-center rounded-sm text-[#111]">
                            <div className="font-bold text-[16px] font-heading mb-1">Native Ad 2</div>
                            <div className="text-[11px] mb-1">...</div>
                            <div className="text-[11px]">...</div>
                         </div>
                     </div>

                     <div className="w-full h-[180px] bg-[#EFEFEF]"></div>
                     <div className="w-full h-[180px] bg-[#EFEFEF]"></div>
                     
                     <div className="px-3">
                         {/* Bottom Banner */}
                         <div className="w-full bg-[#EFCB59] flex flex-col items-center justify-center py-10 text-center rounded-sm text-[#111]">
                            <div className="font-bold text-[16px] font-heading mb-1">Bottom Banner</div>
                            <div className="text-[11px] font-sans font-medium mb-2">300x250 / 300x600</div>
                            <div className="text-[10px] font-sans font-bold uppercase tracking-wide"><strong>[OV]:</strong> InActive</div>
                         </div>
                     </div>

                     <div className="w-full h-[300px] bg-[#EFEFEF]"></div>
                   </div>

                   {/* Bottom Sticky */}
                   <div className="sticky bottom-0 w-full mt-auto bg-[#EFCB59] border-t border-black/10 py-3 flex flex-col items-center text-center shadow-[0_-5px_15px_rgba(0,0,0,0.1)] z-10">
                      <div className="font-bold text-[15px] font-heading mb-0.5 text-[#111]">Bottom Sticky</div>
                      <div className="text-[11px] font-sans font-medium text-[#111] mb-1">300x50/320x50/320x100</div>
                      <div className="text-[10px] font-sans text-black/70">Overlay: 300x168</div>
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
