import { ATOMS } from '../../data';

export function ComponentsView() {
  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <div className="flex justify-between items-end mb-4">
        <div>
          <h1 className="text-4xl font-heading italic text-gray-900 leading-none">Component Library</h1>
          <p className="text-gray-500 mt-2">Atoms, Molecules, and Organisms required for Landingpages.</p>
        </div>
        <div className="flex gap-2 text-xs">
          <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full font-semibold">Status: Live</span>
        </div>
      </div>

      {/* Focus on Block Tin */}
      <section className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <h3 className="font-bold uppercase tracking-widest text-xs text-gray-400">01 / Core Molecule: Block Tin (News Card)</h3>
          <span className="text-[#9F224E] text-xs font-bold">Edit Layout</span>
        </div>
        <div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-sans font-bold text-[#222] mb-4">Structure Diagram (Slot System)</h3>
              <div className="bg-[#17171A] rounded p-6 font-mono text-sm leading-relaxed text-[#1DB549]">
                <div className="text-[#a0a0a0] mb-2">// Anatomy of a Block Tin</div>
                <div>[type-icon]🔌 + [Tag/Live]🔌</div>
                <div className="border border-[#4F4F4F] border-dashed p-4 my-2 text-center text-[#BDBDBD]">
                  [Thumbnail]🔌 (ratio: 5:3 / 1:1)
                </div>
                <div className="text-white font-bold text-lg mb-1">[Title]🔌</div>
                <div className="text-[#BDBDBD] mb-2">[Lead/Sapo]🔌</div>
                <div className="text-[#757575] text-xs">
                  [Meta: timestamp🔌 + location🔌 + category🔌 + comments🔌]
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold text-gray-900 text-sm uppercase tracking-wider mb-4">Master Properties Matrix</h3>
              <ul className="space-y-4 text-xs font-sans">
                <li className="flex flex-col border-b border-gray-100 pb-3">
                  <span className="font-bold text-gray-600 mb-1">Thumbnail (thumb)</span>
                  <span className="text-gray-500">Có/Không · Top / Bottom / Left / Right / Full</span>
                </li>
                <li className="flex flex-col border-b border-gray-100 pb-3">
                  <span className="font-bold text-gray-600 mb-1">Scale Size (size)</span>
                  <span className="text-gray-500">Topstory (H2) · Standard (H3) · Stream (H6) · Mini (Caption)</span>
                </li>
                <li className="flex flex-col border-b border-gray-100 pb-3">
                  <span className="font-bold text-gray-600 mb-1">Display Toggles (Booleans)</span>
                  <span className="text-gray-500">show-lead, show-meta, show-category, show-comment, show-tag</span>
                </li>
              </ul>
              <div className="mt-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
                <p className="text-xs text-gray-600 leading-relaxed italic font-serif">
                  "Quy ước xây dựng: Design đúng 1 master component duy nhất với Property Variables. Tổ hợp này sẽ phủ kín mọi use-case mà KHÔNG cần Detach."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Atoms List */}
      <section className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <h3 className="font-bold uppercase tracking-widest text-xs text-gray-400">02 / Atoms Inventory</h3>
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
