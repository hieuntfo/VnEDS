import { CheckSquare, Square } from "lucide-react";
import { ATOMS } from '../../data';

export function AtomsView() {
  const checklist = [
    { name: "Button", checked: true },
    { name: "Hyperlink (Light/Dark)", checked: false },
    { name: "Tag", checked: false },
    { name: "Type-icon", checked: false },
    { name: "Timestamp", checked: false },
    { name: "Location", checked: false },
    { name: "Comment count", checked: false },
    { name: "Divider", checked: false },
    { name: "Avatar", checked: false },
    { name: "Logo", checked: false },
    { name: "Input (5 states)", checked: false },
    { name: "Dropdown", checked: false },
    { name: "Checkbox/Radio", checked: false },
    { name: "Star rating", checked: false },
    { name: "Pagination", checked: false },
    { name: "Badge", checked: false },
    { name: "Skeleton", checked: false },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <div className="flex justify-between items-end mb-4">
        <div>
          <h1 className="text-4xl font-heading italic text-gray-900 leading-none">Atoms</h1>
          <p className="text-gray-500 mt-2">Các thành tố cấu tạo nhỏ nhất không thể chia nhỏ hơn.</p>
        </div>
      </div>

      <section className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm mb-8">
        <h3 className="font-bold uppercase tracking-widest text-xs text-gray-400 mb-4 border-b border-gray-100 pb-2">Inventory Checklist (A01 - A17)</h3>
        <div className="flex flex-wrap gap-x-6 gap-y-3">
          {checklist.map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
              {item.checked ? <CheckSquare className="w-4 h-4 text-[#1DB549]" /> : <Square className="w-4 h-4 text-gray-300" />}
              <span className={item.checked ? "font-medium" : "text-gray-500"}>{item.name}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm flex flex-col gap-6">
        <div className="flex justify-between items-center border-b border-gray-100 pb-4">
          <h3 className="font-bold uppercase tracking-widest text-xs text-gray-400">Specs / Type-icon & Mapping</h3>
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
        <div className="flex justify-between items-center">
          <h3 className="font-bold uppercase tracking-widest text-xs text-gray-400">Specs / Pagination Logic (Stream)</h3>
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

      {/* Atoms List */}
      <section className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <h3 className="font-bold uppercase tracking-widest text-xs text-gray-400">Atoms Inventory Specs</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="border-b border-gray-100">
              <tr>
                <th className="px-4 py-3 font-mono text-[10px] text-gray-400 uppercase tracking-widest w-20">ID</th>
                <th className="px-4 py-3 font-mono text-[10px] text-gray-400 uppercase tracking-widest">Component Name</th>
                <th className="px-4 py-3 font-mono text-[10px] text-gray-400 uppercase tracking-widest">Variants</th>
                <th className="px-4 py-3 font-mono text-[10px] text-gray-400 uppercase tracking-widest">Slots</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {ATOMS.map((a) => (
                <tr key={a.id} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-4 py-4 font-mono text-[10px] text-gray-400">{a.id}</td>
                  <td className="px-4 py-4 text-xs font-bold text-gray-900">{a.name}</td>
                  <td className="px-4 py-4 text-xs font-sans text-gray-600">
                    <div>{a.variants}</div>
                    <div className="text-[10px] text-gray-400 mt-1">{a.states}</div>
                  </td>
                  <td className="px-4 py-4 font-mono text-[10px] text-[#9F224E]">{a.slots}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

    </div>
  );
}
