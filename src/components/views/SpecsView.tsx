export function SpecsView() {
  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <div className="flex justify-between items-end mb-4">
        <div>
          <h1 className="text-4xl font-heading italic text-gray-900 leading-none">Data Contract / Build Specs</h1>
          <p className="text-gray-500 mt-2">Content rules, image ratios, and constraints for mapping CMS data to UI.</p>
        </div>
        <div className="flex gap-2 text-xs">
          <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full font-semibold">Status: Live</span>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <section className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm flex flex-col gap-6">
          <div className="flex justify-between items-center">
            <h3 className="font-bold uppercase tracking-widest text-xs text-gray-400">01 / Image Ratio Specs</h3>
          </div>
          <div className="space-y-6">
            <div className="flex gap-4 items-center pb-4 border-b border-gray-100">
              <div className="w-20 h-12 bg-gray-100 rounded-lg flex items-center justify-center font-mono text-[10px] text-gray-500 border border-gray-200">5:3</div>
              <div>
                <h4 className="text-xs font-bold uppercase text-gray-900">Mặc định (5:3)</h4>
                <p className="text-[11px] text-gray-600 mt-0.5">Đa số mọi block tin (Topstory, grid, list, sidebar).</p>
                <div className="font-mono text-[10px] bg-gray-50 inline-block px-1 mt-1 rounded text-gray-500">Mobile: 382x229 | PC: 680x408</div>
              </div>
            </div>

            <div className="flex gap-4 items-center pb-4 border-b border-gray-100">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center font-mono text-[10px] text-gray-500 border border-gray-200">1:1</div>
              <div>
                <h4 className="text-xs font-bold uppercase text-gray-900">Thumb Vuông (1:1)</h4>
                <p className="text-[11px] text-gray-600 mt-0.5">Thumbnail mini, List sidebar phụ.</p>
                <div className="font-mono text-[10px] bg-gray-50 inline-block px-1 mt-1 rounded text-gray-500">Mobile: 100x100 | PC: 200x200</div>
              </div>
            </div>

            <div className="flex gap-4 items-center pb-4 border-b border-gray-100">
              <div className="w-16 h-9 bg-gray-100 rounded-lg flex items-center justify-center font-mono text-[10px] text-gray-500 border border-gray-200">16:9</div>
              <div>
                <h4 className="text-xs font-bold uppercase text-gray-900">Video Ngang (16:9)</h4>
                <p className="text-[11px] text-gray-600 mt-0.5">Trình phát video mặc định ngang.</p>
                <div className="font-mono text-[10px] bg-gray-50 inline-block px-1 mt-1 rounded text-gray-500">PC: 680x383</div>
              </div>
            </div>
            
            <div className="flex gap-4 items-center">
              <div className="w-9 h-16 bg-gray-100 rounded-lg flex items-center justify-center font-mono text-[10px] text-gray-500 border border-gray-200">3:5</div>
              <div>
                <h4 className="text-xs font-bold uppercase text-gray-900">Video Dọc (3:5)</h4>
                <p className="text-[11px] text-gray-600 mt-0.5">Tương thích nền tảng Shorts / Reel.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm flex flex-col gap-6">
          <div className="flex justify-between items-center">
            <h3 className="font-bold uppercase tracking-widest text-xs text-gray-400">02 / Pagination Logic (Stream)</h3>
          </div>
          <div>
            <h4 className="text-sm font-bold text-gray-900 mb-4">Rule tải luồng tin:</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-gray-100 text-[#9F224E] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">01</span>
                <p className="text-xs text-gray-600"><strong className="text-gray-900">Khối lượng:</strong> Mặc định lấy ~30 tin cho một trang (1 lần trigger endpoint).</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-gray-100 text-[#9F224E] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">02</span>
                <p className="text-xs text-gray-600"><strong className="text-gray-900">Giới hạn List:</strong> Cho phép cuộn tối đa 3 trang luân phiên (tương ứng ≈ 90 tin stream).</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-gray-100 text-[#9F224E] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">03</span>
                <p className="text-xs text-gray-600"><strong className="text-gray-900">Kết thúc chu kỳ:</strong> Nếu user trượt hết trang số 3, hệ thống chốt hiển thị Action/Button <strong>"Xem theo ngày"</strong> (Calendar date picker).</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-gray-100 text-[#9F224E] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">PC</span>
                <p className="text-xs text-gray-600"><strong className="text-gray-900">PC Interaction:</strong> Dùng thanh số trang Pagination. Trang Active nền bordeaux #9F224E chữ trắng.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-gray-100 text-[#9F224E] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">MB</span>
                <p className="text-xs text-gray-600"><strong className="text-gray-900">Mobile Interaction:</strong> Tự động Infinite Scroll nối dài khi cọ sát ngưỡng màn hình dưới.</p>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
