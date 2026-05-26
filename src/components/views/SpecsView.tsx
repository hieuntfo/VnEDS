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
                <div className="font-mono text-[10px] bg-gray-50 inline-block px-1 mt-1 rounded text-gray-500">Mobile: 374width | PC: ~680x408</div>
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

            <h4 className="text-sm font-bold text-gray-900 mt-2 border-l-2 border-[#9F224E] pl-2 uppercase tracking-wide">Định Dạng Media</h4>

            <div className="flex gap-4 items-center pb-4 border-b border-gray-100">
              <div className="w-10 h-12 bg-[#FFE7E9] rounded-lg flex items-center justify-center font-mono text-[10px] text-[#9F224E] font-bold border border-[#9F224E]/20">4:5</div>
              <div>
                <h4 className="text-xs font-bold uppercase text-gray-900">Short Video (4:5)</h4>
                <p className="text-[11px] text-gray-600 mt-0.5">Hiểu thị: <strong className="text-gray-900">Title, Play & Tên show</strong></p>
                <div className="font-mono text-[10px] bg-gray-50 inline-block px-1 mt-1 rounded text-[#9F224E] font-bold">Icon Video</div>
              </div>
            </div>

            <div className="flex gap-4 items-center pb-4 border-b border-gray-100">
              <div className="w-20 h-12 bg-[#FFE7E9] rounded-lg flex items-center justify-center font-mono text-[10px] text-[#9F224E] font-bold border border-[#9F224E]/20">5:3</div>
              <div>
                <h4 className="text-xs font-bold uppercase text-gray-900">Video (5:3)</h4>
                <p className="text-[11px] text-gray-600 mt-0.5">Hiển thị: <strong className="text-gray-900">Title, Tên show & Thời lượng</strong></p>
                <div className="font-mono text-[10px] bg-gray-50 inline-block px-1 mt-1 rounded text-[#9F224E] font-bold">Icon Video</div>
              </div>
            </div>
            
            <div className="flex gap-4 items-center">
              <div className="w-20 h-12 bg-[#E8E8FF] rounded-lg flex items-center justify-center font-mono text-[10px] text-[#04416D] font-bold border border-[#04416D]/20">5:3</div>
              <div>
                <h4 className="text-xs font-bold uppercase text-gray-900">Audio (5:3)</h4>
                <p className="text-[11px] text-gray-600 mt-0.5">Hiển thị: <strong className="text-gray-900">Title, Tên show & Thời lượng</strong></p>
                <div className="font-mono text-[10px] bg-gray-50 inline-block px-1 mt-1 rounded text-[#04416D] font-bold">Icon Audio</div>
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

      <div className="grid md:grid-cols-2 gap-6">
        <section className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm flex flex-col gap-6">
          <div className="flex justify-between items-center border-b border-gray-100 pb-4">
            <h3 className="font-bold uppercase tracking-widest text-xs text-gray-400">03 / Type-icon & Mapping</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-sans">
              <thead className="text-gray-400 border-b border-gray-100">
                <tr>
                  <th className="pb-3 font-mono font-bold uppercase tracking-wider text-[10px]">Type</th>
                  <th className="pb-3 font-mono font-bold uppercase tracking-wider text-[10px]">Icon Overlay/Position</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50 text-gray-600">
                <tr className="hover:bg-gray-50/50">
                  <td className="py-3 font-bold text-gray-900">Live</td>
                  <td className="py-3">Chấm đỏ <span className="font-mono text-[10px] bg-red-100 text-red-700 px-1 rounded">#AE2727</span> + "Live" trước Title.</td>
                </tr>
                <tr className="hover:bg-gray-50/50">
                  <td className="py-3 font-bold text-gray-900">Video</td>
                  <td className="py-3">▶ Play <strong className="text-gray-900">overlay giữa thumb</strong> (hoặc nhỏ trước title nếu no-thumb).</td>
                </tr>
                <tr className="hover:bg-gray-50/50">
                  <td className="py-3 font-bold text-gray-900">Ảnh</td>
                  <td className="py-3">📷 Camera <strong className="text-gray-900">badge góc thumb</strong>. Kèm số ảnh (tuỳ chọn).</td>
                </tr>
                <tr className="hover:bg-gray-50/50">
                  <td className="py-3 font-bold text-gray-400">Khác...</td>
                  <td className="py-3 italic text-gray-500">(Infographic, Review, Trắc nghiệm...) Đặt icon trước Title.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm flex flex-col gap-6">
          <div className="flex justify-between items-center border-b border-gray-100 pb-4">
            <h3 className="font-bold uppercase tracking-widest text-xs text-gray-400">04 / Data Binding & Rules</h3>
          </div>
          <div>
            <h4 className="text-xs font-bold text-gray-900 mb-2 uppercase tracking-wide">Data Fallback Empty State</h4>
            <ul className="text-xs text-gray-600 space-y-2 mb-6">
              <li className="flex justify-between border-b border-gray-50 pb-2">
                <span><span className="font-mono bg-gray-100 px-1 rounded">Thumbnail</span></span>
                <span>Thiếu &rarr; dùng placeholder cùng ratio</span>
              </li>
              <li className="flex justify-between border-b border-gray-50 pb-2">
                <span><span className="font-mono bg-gray-100 px-1 rounded">Location</span></span>
                <span>Null &rarr; Auto Layout ẩn slot</span>
              </li>
              <li className="flex justify-between pb-2">
                <span><span className="font-mono bg-gray-100 px-1 rounded">Lead</span></span>
                <span>Rỗng (hoặc ≠ Topstory) &rarr; ẩn slot</span>
              </li>
            </ul>

            <h4 className="text-xs font-bold text-gray-900 mb-2 uppercase tracking-wide">Clamp Constraints (Lines)</h4>
            <div className="flex flex-wrap gap-2">
              <span className="bg-gray-100 text-gray-600 py-1 px-3 rounded-full text-xs font-mono">Topstory = 2</span>
              <span className="bg-gray-100 text-[#9F224E] font-bold py-1 px-3 rounded-full text-xs font-mono">Standard = 3</span>
              <span className="bg-gray-100 text-gray-600 py-1 px-3 rounded-full text-xs font-mono">Stream = 2-3</span>
              <span className="bg-gray-100 text-gray-600 py-1 px-3 rounded-full text-xs font-mono">Mini = 2</span>
            </div>
            <p className="text-[11px] text-gray-400 mt-3 font-serif italic">*Mọi text dài đều phải clamp + ellipsis, tuyệt đối không đẩy layout dọc theo text thực tế.</p>
          </div>
        </section>
      </div>

      <section className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm flex flex-col gap-6">
        <div className="flex justify-between items-center border-b border-gray-100 pb-4">
          <h3 className="font-bold uppercase tracking-widest text-xs text-gray-400">05 / Detailed Typography Specs</h3>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Detail Page Specs */}
          <div>
            <h4 className="font-bold text-gray-900 border-l-2 border-[#9F224E] pl-2 uppercase tracking-wide mb-6 text-sm">Article Detail (Bài viết)</h4>
            
            <div className="mb-6">
              <h5 className="text-[10px] uppercase font-bold text-gray-400 mb-3 tracking-widest">PC (Desktop)</h5>
              <ul className="text-xs text-gray-600 space-y-3">
                <li className="flex flex-col border-b border-gray-50 pb-2">
                  <span className="font-bold text-gray-900 mb-1">Font Title Detail (#222)</span>
                  <span className="font-mono text-[10px] bg-gray-50 px-2 py-1 rounded w-max">32px / 150% / Bold / Merriweather*</span>
                </li>
                <li className="flex flex-col border-b border-gray-50 pb-2">
                  <span className="font-bold text-gray-900 mb-1">Font Body (#222)</span>
                  <span className="font-mono text-[10px] bg-gray-50 px-2 py-1 rounded w-max">18px / 160% / Regular / Arial</span>
                </li>
                <li className="flex flex-col pb-1">
                  <span className="font-bold text-gray-900 mb-1">Font Caption (#222)</span>
                  <span className="font-mono text-[10px] bg-gray-50 px-2 py-1 rounded w-max">14px / 160% / Regular / Arial</span>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="text-[10px] uppercase font-bold text-gray-400 mb-3 tracking-widest">Mobile</h5>
              <ul className="text-xs text-gray-600 space-y-3">
                <li className="flex flex-col border-b border-gray-50 pb-2">
                  <span className="font-bold text-gray-900 mb-1">Font Title Detail (#222)</span>
                  <span className="font-mono text-[10px] bg-[#FFE7E9] text-[#9F224E] font-bold px-2 py-1 rounded w-max">22px / 150% / Bold / Merriweather*</span>
                </li>
                <li className="flex flex-col border-b border-gray-50 pb-2">
                  <span className="font-bold text-gray-900 mb-1">Font Body (#222)</span>
                  <span className="font-mono text-[10px] bg-gray-50 px-2 py-1 rounded w-max">18px / 160% / Regular / Arial</span>
                </li>
                <li className="flex flex-col pb-1">
                  <span className="font-bold text-gray-900 mb-1">Font Caption (#222)</span>
                  <span className="font-mono text-[10px] bg-[#E8E8FF] text-[#04416D] font-bold px-2 py-1 rounded w-max">17px / 160% / Regular / Arial</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Block Tin Specs */}
          <div>
            <h4 className="font-bold text-gray-900 border-l-2 border-[#9F224E] pl-2 uppercase tracking-wide mb-6 text-sm">Block Stream (Luồng tin)</h4>
            
            <div className="mb-6">
              <h5 className="text-[10px] uppercase font-bold text-gray-400 mb-3 tracking-widest">PC (Desktop)</h5>
              <ul className="text-xs text-gray-600 space-y-3">
                <li className="flex flex-col border-b border-gray-50 pb-2">
                  <span className="font-bold text-gray-900 mb-1">Font Title (#222)</span>
                  <span className="font-mono text-[10px] bg-[#FFE7E9] text-[#9F224E] font-bold px-2 py-1 rounded w-max">20px / 160% / Bold / Merriweather*</span>
                </li>
                <li className="flex flex-col pb-1">
                  <span className="font-bold text-gray-900 mb-1">Font Lead (#4F4F4F)</span>
                  <span className="font-mono text-[10px] bg-gray-50 px-2 py-1 rounded w-max">16px / 160% / Regular / Arial</span>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="text-[10px] uppercase font-bold text-gray-400 mb-3 tracking-widest">Mobile</h5>
              <ul className="text-xs text-gray-600 space-y-3">
                <li className="flex flex-col border-b border-gray-50 pb-2">
                  <span className="font-bold text-gray-900 mb-1">Font Title (#222)</span>
                  <span className="font-mono text-[10px] bg-[#FFE7E9] text-[#9F224E] font-bold px-2 py-1 rounded w-max">18px / 150% / Bold / Merriweather*</span>
                </li>
                <li className="flex flex-col pb-1">
                  <span className="font-bold text-gray-900 mb-1">Font Lead (#4F4F4F)</span>
                  <span className="font-mono text-[10px] bg-gray-50 px-2 py-1 rounded w-max">17px / 160% / Regular / Arial</span>
                </li>
              </ul>
            </div>
            
            <div className="mt-8 p-4 bg-gray-50 rounded-xl border border-gray-100">
              <p className="text-xs text-gray-500 leading-relaxed italic font-serif">
                * Note: Font Title có thể sử dụng fallback "hoặc font của Landingpage" nếu quy định campaign yêu cầu font chữ thương hiệu riêng.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
