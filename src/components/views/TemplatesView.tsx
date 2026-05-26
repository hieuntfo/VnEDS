export function TemplatesView() {
  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <div className="flex justify-between items-end mb-4">
        <div>
          <h1 className="text-4xl font-heading italic text-gray-900 leading-none">Templates</h1>
          <p className="text-gray-500 mt-2">Cấu trúc bộ khung hiển thị Layout trên Grid PC và Mobile.</p>
        </div>
        <div className="flex gap-2 text-xs">
          <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full font-semibold">Status: Live</span>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <section className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm flex flex-col gap-6">
          <div className="flex justify-between items-center border-b border-gray-100 pb-4">
            <h3 className="font-bold uppercase tracking-widest text-xs text-gray-400">01 / Home / Folder (PC)</h3>
          </div>
          <div className="bg-[#1A1A1A] rounded-xl p-6 font-mono text-xs leading-relaxed text-[#1DB549] shadow-inner whitespace-pre overflow-x-auto">
{`┌─────────────────────────────────────────────┐
│ HEADER (full-bleed, sticky)                 │
├──────────────────────────────┬──────────────┤
│ MAIN (≈ 8 col)               │ SIDEBAR (≈4) │
│ ┌─ Topstory block ─────────┐ │ ┌ Box 300 ─┐ │
│ │ tin chủ + 4–8 tin phụ    │ │ │ Ad/Video │ │
│ └──────────────────────────┘ │ │ Xem nhiều│ │
│ [Box title] ── Stream ───    │ │ Tin ads  │ │
│ [Native Ad row]              │ └──────────┘ │
│ [Box title] ── Stream ───    │              │
├──────────────────────────────┴──────────────┤
│ FOOTER                                      │
└─────────────────────────────────────────────┘`}
          </div>
        </section>

        <section className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm flex flex-col gap-6">
          <div className="flex justify-between items-center border-b border-gray-100 pb-4">
            <h3 className="font-bold uppercase tracking-widest text-xs text-gray-400">02 / Detail / Bài viết (PC)</h3>
          </div>
          <div className="bg-[#1A1A1A] rounded-xl p-6 font-mono text-xs leading-relaxed text-[#1DB549] shadow-inner whitespace-pre overflow-x-auto">
{`┌─ HEADER ────────────────────────────────────┐
│ [Share]  │ TITLE (H1 32)               │ SB │
│ FB/TW    │ Sapo (Arial)                │ Xem│
│ Mail     │ Author + Timestamp          │ Nh-│
│          │ BODY (H5 body 18)           │ iều│
│          │ + Ảnh + caption (16)        │ LQ │
│          │ + In-read hyperlink         │ Ads│
│          │ [Share row]                 │    │
│          │ Tin liên quan / Theo dòng   │    │
│          │ Ý kiến bạn đọc (comment)    │    │
└─ FOOTER ────────────────────────────────────┘`}
          </div>
        </section>
      </div>
      
      <section className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm flex flex-col gap-6">
          <div className="flex justify-between items-center border-b border-gray-100 pb-4">
            <h3 className="font-bold uppercase tracking-widest text-xs text-gray-400">03 / Page Templates (Inventory)</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left font-sans">
              <thead className="bg-gray-50 border-b border-gray-100">
                <tr>
                  <th className="px-4 py-3 font-mono text-[10px] text-gray-400 uppercase tracking-widest w-24">ID</th>
                  <th className="px-4 py-3 font-mono text-[10px] text-gray-400 uppercase tracking-widest w-48">Template</th>
                  <th className="px-4 py-3 font-mono text-[10px] text-gray-400 uppercase tracking-widest">Mô tả hiển thị</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50 text-xs text-gray-600">
                <tr className="hover:bg-gray-50/50">
                  <td className="px-4 py-3 font-mono text-[10px]">T01</td>
                  <td className="px-4 py-3 font-bold text-gray-900">Home</td>
                  <td className="px-4 py-3">Topstory + Nhiều box folder + Ad + Sidebar</td>
                </tr>
                <tr className="hover:bg-gray-50/50">
                  <td className="px-4 py-3 font-mono text-[10px]">T02</td>
                  <td className="px-4 py-3 font-bold text-gray-900">Folder (Chuyên mục)</td>
                  <td className="px-4 py-3">Topstory folder + Stream + Box 300 sidebar</td>
                </tr>
                <tr className="hover:bg-gray-50/50">
                  <td className="px-4 py-3 font-mono text-[10px]">T03</td>
                  <td className="px-4 py-3 font-bold text-gray-900">Detail (Bài viết)</td>
                  <td className="px-4 py-3">Title + sapo + body + ảnh + share + tin L.Quan + comment + SB "Xem nhiều"</td>
                </tr>
                <tr className="hover:bg-gray-50/50">
                  <td className="px-4 py-3 font-mono text-[10px]">T04</td>
                  <td className="px-4 py-3 font-bold text-gray-900">Detail — Dark theme</td>
                  <td className="px-4 py-3">Bản tối (Longform/Special)</td>
                </tr>
                <tr className="hover:bg-gray-50/50">
                  <td className="px-4 py-3 font-mono text-[10px]">T05</td>
                  <td className="px-4 py-3 font-bold text-gray-900">Landingpage / Sự kiện</td>
                  <td className="px-4 py-3">Header custom + box chuyên đề</td>
                </tr>
                <tr className="hover:bg-gray-50/50">
                  <td className="px-4 py-3 font-mono text-[10px]">T06</td>
                  <td className="px-4 py-3 font-bold text-gray-900">Print bài viết</td>
                  <td className="px-4 py-3">Layout in nội dung</td>
                </tr>
                <tr className="hover:bg-gray-50/50">
                  <td className="px-4 py-3 font-mono text-[10px]">T07</td>
                  <td className="px-4 py-3 font-bold text-[#9F224E]">Mobile Templates</td>
                  <td className="px-4 py-3">Bản Mobile tóm gọn lại của T01 - T05 (Vertical Stack).</td>
                </tr>
              </tbody>
            </table>
          </div>
      </section>

    </div>
  );
}
