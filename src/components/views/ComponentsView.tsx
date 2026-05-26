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
      <section className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm flex flex-col gap-8">
        <div className="flex justify-between items-center border-b border-gray-100 pb-4">
          <h3 className="font-bold uppercase tracking-widest text-xs text-gray-400">01 / Master Component: Block Tin (News Card)</h3>
          <span className="text-[#9F224E] text-[10px] uppercase font-bold tracking-widest bg-[#FFE7E9] px-2 py-1 rounded">Figma-Ready Spec</span>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Anatomy */}
          <div>
            <h3 className="font-bold text-gray-900 text-sm uppercase tracking-wider mb-4">Anatomy & Slots</h3>
            <div className="bg-[#1A1A1A] rounded-xl p-6 font-mono text-xs leading-relaxed text-[#1DB549] shadow-inner mb-4">
              <div className="text-gray-500 mb-2">// Block Tin Schematic</div>
              <div className="pl-4 border-l border-gray-700">
                <div className="text-[#F1F1F1] font-bold mb-1">[Tag/Live]🔌 <span className="text-gray-500 font-normal ml-2">← optional tag</span></div>
                <div className="border border-gray-700 border-dashed p-3 my-2 text-center text-gray-400 bg-gray-800/50 rounded flex flex-col gap-1 items-center justify-center">
                  <span>[Thumbnail]🔌 <span className="text-[#F1F1F1]">← over: type-icon</span></span>
                </div>
                <div className="text-white font-bold text-sm mb-1">[type-icon]🔌 Title 🔌</div>
                <div className="text-gray-400 mb-2">Lead / Sapo 🔌</div>
                <div className="text-gray-500 text-[10px]">
                  [Meta: timestamp🔌 · location🔌 · category🔌 · 💬count🔌]
                </div>
              </div>
            </div>
            <div className="mt-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
              <p className="text-xs text-gray-600 leading-relaxed italic font-serif">
                "Quy ước: Design đúng 1 master component với Property Variables. Sử dụng Instance Swap cho mọi thành phần có thể thay đổi (đánh dấu 🔌)."
              </p>
            </div>
          </div>
          
          {/* Properties */}
          <div>
            <h3 className="font-bold text-gray-900 text-sm uppercase tracking-wider mb-4">Component Properties</h3>
            <ul className="space-y-4 text-xs font-sans">
              <li className="flex flex-col border-b border-gray-100 pb-3">
                <span className="font-bold text-gray-900 mb-1 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#9F224E]"></span> Platform (Variant)
                </span>
                <span className="text-gray-600 font-mono text-[10px] bg-gray-100 px-2 py-1 rounded inline-table w-max">PC · Mobile (Radius 3px)</span>
              </li>
              <li className="flex flex-col border-b border-gray-100 pb-3">
                <span className="font-bold text-gray-900 mb-1 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#9F224E]"></span> Scale Size (Variant)
                </span>
                <span className="text-gray-600 font-mono text-[10px] bg-gray-100 px-2 py-1 rounded inline-table w-max">Topstory · Standard · Stream · Mini</span>
              </li>
              <li className="flex flex-col border-b border-gray-100 pb-3">
                <span className="font-bold text-gray-900 mb-1 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#9F224E]"></span> Thumbnail Position
                </span>
                <span className="text-gray-600 font-mono text-[10px] bg-gray-100 px-2 py-1 rounded inline-table w-max">Top · Bottom · Left · Right · Full · None</span>
              </li>
              <li className="flex flex-col border-b border-gray-100 pb-3">
                <span className="font-bold text-gray-900 mb-1 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Display Toggles (Boolean)
                </span>
                <span className="text-gray-600 text-[11px]">show-lead, show-meta, show-category, show-comment, show-tag</span>
              </li>
              <li className="flex flex-col pb-1">
                <span className="font-bold text-gray-900 mb-1 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> State (Variant)
                </span>
                <span className="text-gray-600 font-mono text-[10px] bg-gray-100 px-2 py-1 rounded inline-table w-max">Default · Hover · Visited · Loading</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Layout Matrix */}
        <div className="mt-4">
          <h3 className="font-bold text-gray-900 text-sm uppercase tracking-wider mb-4 border-t border-gray-100 pt-6">Platform Layout Constraints (CHỐT)</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left border border-gray-100 rounded-xl overflow-hidden">
              <thead className="bg-gray-50 border-b border-gray-100">
                <tr>
                  <th className="px-4 py-3 font-mono text-[10px] text-gray-400 uppercase tracking-widest w-1/4">Size Tier</th>
                  <th className="px-4 py-3 font-mono text-[10px] text-gray-400 uppercase tracking-widest w-1/3">PC Layout (Desktop)</th>
                  <th className="px-4 py-3 font-mono text-[10px] text-[#9F224E] font-bold uppercase tracking-widest">Mobile Layout (414px)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50 text-xs text-gray-600 font-sans">
                <tr className="hover:bg-gray-50/50">
                  <td className="px-4 py-4 font-bold text-gray-900">Topstory <span className="font-normal text-gray-400 ml-1">(Tin #1)</span></td>
                  <td className="px-4 py-4">Thumb <span className="font-mono text-[10px] bg-gray-100 px-1 rounded">Full/Top</span> lớn, title + lead bên dưới</td>
                  <td className="px-4 py-4">
                    <div className="bg-[#FFE7E9] text-[#9F224E] px-2 py-1 rounded-sm text-[11px] inline-block font-mono mb-1">Thumb Top (374px) &rarr; Title &rarr; Lead &rarr; Meta</div>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50/50">
                  <td className="px-4 py-4 font-bold text-gray-900">Standard <span className="font-normal text-gray-400 ml-1">(Tin 2+)</span></td>
                  <td className="px-4 py-4">Thumb <span className="font-mono text-[10px] bg-gray-100 px-1 rounded">Top</span> (grid) / <span className="font-mono text-[10px] bg-gray-100 px-1 rounded">Left</span></td>
                  <td className="px-4 py-4">
                    <div className="font-mono text-[11px] mb-1">Title &rarr; Lead &rarr; Meta &rarr; <strong className="text-gray-900 bg-gray-100 px-1 rounded">Thumb Bottom</strong></div>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50/50">
                  <td className="px-4 py-4 font-bold text-gray-900">Stream</td>
                  <td className="px-4 py-4">Thumb <span className="font-mono text-[10px] bg-gray-100 px-1 rounded">Left</span></td>
                  <td className="px-4 py-4 font-mono text-[11px]">Title &rarr; Lead &rarr; Meta &rarr; <strong className="text-gray-900 bg-gray-100 px-1 rounded">Thumb Bottom</strong></td>
                </tr>
                <tr className="hover:bg-gray-50/50">
                  <td className="px-4 py-4 font-bold text-gray-900">Mini</td>
                  <td className="px-4 py-4">Thumb <span className="font-mono text-[10px] bg-gray-100 px-1 rounded">Left / None</span></td>
                  <td className="px-4 py-4 font-mono text-[11px]">Title &rarr; Meta &rarr; <strong className="text-gray-900 bg-gray-100 px-1 rounded">Thumb Bottom / None</strong></td>
                </tr>
              </tbody>
            </table>
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
