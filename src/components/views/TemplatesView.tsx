import { CheckSquare, Square } from "lucide-react";

export function TemplatesView() {
  const checklist = [
    { name: "Landingpage", checked: false },
    { name: "Mobile set", checked: false },
    { name: "Template 1 (7 tin)", checked: false },
    { name: "Template 2 (8 tin)", checked: false },
    { name: "Template 3 (3 tin)", checked: false },
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
            01 / Page Templates (Inventory)
          </h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left font-sans">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr>
                <th className="px-4 py-3 font-mono text-[10px] text-gray-400 uppercase tracking-widest w-24">
                  ID
                </th>
                <th className="px-4 py-3 font-mono text-[10px] text-gray-400 uppercase tracking-widest w-48">
                  Template
                </th>
                <th className="px-4 py-3 font-mono text-[10px] text-gray-400 uppercase tracking-widest">
                  Mô tả hiển thị
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50 text-xs text-gray-600">
              <tr className="hover:bg-gray-50/50">
                <td className="px-4 py-3 font-mono text-[10px]">T05</td>
                <td className="px-4 py-3 font-bold text-gray-900">
                  Landingpage / Sự kiện
                </td>
                <td className="px-4 py-3">Header custom + box chuyên đề</td>
              </tr>
              <tr className="hover:bg-gray-50/50">
                <td className="px-4 py-3 font-mono text-[10px]">T07</td>
                <td className="px-4 py-3 font-bold text-[#9F224E]">
                  Mobile Templates
                </td>
                <td className="px-4 py-3">
                  Bản Mobile tóm gọn lại của T05 (Vertical Stack).
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm flex flex-col gap-6">
        <div className="flex justify-between items-center border-b border-gray-100 pb-4">
          <h3 className="font-bold uppercase tracking-widest text-xs text-gray-400">
            02 / Layout Templates: Cụm tin top
          </h3>
        </div>

        <div className="flex flex-col gap-4">
          <div>
            <h4 className="font-bold text-gray-900 border-l-2 border-[#9F224E] pl-2 uppercase tracking-wide mb-2 text-sm">
              Template 1 (Cụm 7 tin Top)
            </h4>
            <p className="text-sm text-gray-600 mb-4">
              Layout chuyên dụng hiển thị nhiều tin bài, đặc biệt phù hợp cho
              các Landing Page sự kiện, tiêu điểm thời sự.
            </p>
          </div>

          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <h5 className="text-[10px] uppercase font-bold text-gray-400 mb-3 tracking-widest">
              Đặc tả chi tiết (Specs)
            </h5>
            <ul className="text-xs text-gray-700 space-y-3 font-sans">
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-[#FFE7E9] text-[#9F224E] flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                  1
                </span>
                <p>
                  <strong className="text-gray-900 block mb-0.5">
                    Cấu trúc Topstory (Cụm tin Top)
                  </strong>
                  Gồm tổng cộng{" "}
                  <strong className="text-[#9F224E]">7 tin</strong>. Thường đi
                  lồng ghép với 1 tin to (số 1), 2 tin nhỏ bên cạnh, và 4 tin
                  dàn ngang bên dưới.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-[#FFE7E9] text-[#9F224E] flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                  2
                </span>
                <p>
                  <strong className="text-gray-900 block mb-0.5">
                    Kích thước Thumbnail (Tin số 1)
                  </strong>
                  Sử dụng thumb kích thước lớn:{" "}
                  <strong className="font-mono bg-white border border-gray-200 px-1 rounded">
                    770x462
                  </strong>{" "}
                  pixel (Tỷ lệ 5:3).
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-[#FFE7E9] text-[#9F224E] flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                  3
                </span>
                <p>
                  <strong className="text-gray-900 block mb-0.5">
                    Quy định Quảng cáo
                  </strong>
                  Tại Template 1 này,{" "}
                  <strong className="text-red-600">
                    Tuyệt đối không khai thác banner quảng cáo Large 1
                  </strong>{" "}
                  trên mảng khối cụm tin top. (Thay vào đó có thể sử dụng banner
                  Breakpage như 970x250 hiển thị ngay bên dưới cụm này).
                </p>
              </li>
            </ul>
          </div>

          {/* Visual Schematic for Template 1 */}
          <div className="bg-[#1A1A1A] rounded-xl p-6 font-mono text-xs leading-relaxed text-[#1DB549] shadow-inner whitespace-pre overflow-x-auto mt-2">
            {`┌───────────────────────────────────────────────┐
│ [ Tin số 1 - Thumb 770x462 ]     [ Tin nhỏ 2 ]│
│ Title + Lead                     [ Tin nhỏ 3 ]│
├───────────┬───────────┬───────────┬───────────┤
│ [ Tin 4 ] │ [ Tin 5 ] │ [ Tin 6 ] │ [ Tin 7 ] │
├───────────┴───────────┴───────────┴───────────┤
│ [ BREAKPAGE BANNER (e.g., 970x250) ]          │
└───────────────────────────────────────────────┘`}
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-8 border-t border-gray-100 mt-2">
          <div>
            <h4 className="font-bold text-gray-900 border-l-2 border-[#9F224E] pl-2 uppercase tracking-wide mb-2 text-sm">
              Template 2 (Cụm 8 tin Top + Large 1)
            </h4>
            <p className="text-sm text-gray-600 mb-4">
              Layout chia cột có khoảng không gian bên phải để khai thác thêm
              vùng quảng cáo Large 1 (Dành cho trang thư mục loại 2 hoặc chuyên
              trang).
            </p>
          </div>

          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <h5 className="text-[10px] uppercase font-bold text-gray-400 mb-3 tracking-widest">
              Đặc tả chi tiết (Specs)
            </h5>
            <ul className="text-xs text-gray-700 space-y-3 font-sans">
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-[#FFE7E9] text-[#9F224E] flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                  1
                </span>
                <p>
                  <strong className="text-gray-900 block mb-0.5">
                    Cấu trúc Topstory (Cụm tin Top)
                  </strong>
                  Gồm tổng cộng{" "}
                  <strong className="text-[#9F224E]">8 tin</strong>. Bao gồm 1
                  tin kích thước to (số 1), 2 tin nhỏ ở cột giữa, và 5 tin ngang
                  nằm bên dưới bài to.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-[#FFE7E9] text-[#9F224E] flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                  2
                </span>
                <p>
                  <strong className="text-gray-900 block mb-0.5">
                    Kích thước Thumbnail (Tin số 1)
                  </strong>
                  Sử dụng thumb kích thước vừa:{" "}
                  <strong className="font-mono bg-white border border-gray-200 px-1 rounded">
                    536x322
                  </strong>{" "}
                  pixel.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-[#FFE7E9] text-[#9F224E] flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                  3
                </span>
                <p>
                  <strong className="text-gray-900 block mb-0.5">
                    Quy định Quảng cáo (Ads Large 1)
                  </strong>
                  Tại Template 2,{" "}
                  <strong className="text-[#1DB549]">
                    Có khai thác quảng cáo Large 1 (300x600)
                  </strong>{" "}
                  bố trí cố định ở cột phải, chạy dọc theo toàn bộ cụm tin top.
                </p>
              </li>
            </ul>
          </div>

          {/* Visual Schematic for Template 2 */}
          <div className="bg-[#1A1A1A] rounded-xl p-6 font-mono text-xs leading-relaxed text-[#1DB549] shadow-inner whitespace-pre overflow-x-auto mt-2">
            {`┌─────────────────────────┬─────────────┬─────────────┐
│ [ Tin số 1 - 536x322 ]  │ [ Tin nhỏ 2]│ [ Quảng cáo │
│ Title + Lead            │             │   Large 1   │
│ • Sublink 1 • Sublink 2 ├─────────────┤   300x600 ] │
│                         │ [ Tin nhỏ 3]│             │
├───────┬───────┬───────┬─┴─────┬───────┤             │
│[Tin 4]│[Tin 5]│[Tin 6]│[Tin 7]│[Tin 8]│             │
└───────┴───────┴───────┴───────┴───────┴─────────────┘`}
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-8 border-t border-gray-100 mt-2">
          <div>
            <h4 className="font-bold text-gray-900 border-l-2 border-[#9F224E] pl-2 uppercase tracking-wide mb-2 text-sm">
              Template 3 (Cụm 3 tin Top + Large 1)
            </h4>
            <p className="text-sm text-gray-600 mb-4">
              Layout chia cột có khoảng không gian bên phải để khai thác thêm
              vùng quảng cáo Large 1.
            </p>
          </div>

          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <h5 className="text-[10px] uppercase font-bold text-gray-400 mb-3 tracking-widest">
              Đặc tả chi tiết (Specs)
            </h5>
            <ul className="text-xs text-gray-700 space-y-3 font-sans">
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-[#FFE7E9] text-[#9F224E] flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                  1
                </span>
                <p>
                  <strong className="text-gray-900 block mb-0.5">
                    Cấu trúc Topstory (Cụm tin Top)
                  </strong>
                  Gồm tổng cộng{" "}
                  <strong className="text-[#9F224E]">3 tin</strong>. Bao gồm 1
                  tin kích thước to (số 1), 2 tin nhỏ ở cột giữa, sau đó đến
                  list stream tin luôn.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-[#FFE7E9] text-[#9F224E] flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                  2
                </span>
                <p>
                  <strong className="text-gray-900 block mb-0.5">
                    Kích thước Thumbnail (Tin số 1)
                  </strong>
                  Sử dụng thumb kích thước vừa:{" "}
                  <strong className="font-mono bg-white border border-gray-200 px-1 rounded">
                    498x299
                  </strong>{" "}
                  pixel.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-[#FFE7E9] text-[#9F224E] flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                  3
                </span>
                <p>
                  <strong className="text-gray-900 block mb-0.5">
                    Quy định Quảng cáo (Ads Large 1)
                  </strong>
                  Tại Template 3,{" "}
                  <strong className="text-[#1DB549]">
                    Có khai thác quảng cáo Large 1 (300x600)
                  </strong>{" "}
                  bố trí cố định ở cột phải, chạy dọc theo toàn bộ cụm tin top.
                </p>
              </li>
            </ul>
          </div>

          {/* Visual Schematic for Template 3 */}
          <div className="bg-[#1A1A1A] rounded-xl p-6 font-mono text-xs leading-relaxed text-[#1DB549] shadow-inner whitespace-pre overflow-x-auto mt-2">
            {`┌─────────────────────────┬─────────────┬─────────────┐
│ [ Tin số 1 - 498x299 ]  │ [ Tin nhỏ 2]│ [ Quảng cáo │
│ Title + Lead            │             │   Large 1   │
│                         ├─────────────┤   300x600 ] │
│                         │ [ Tin nhỏ 3]│             │
└─────────────────────────┴─────────────┴─────────────┘`}
          </div>
        </div>
      </section>
    </div>
  );
}
