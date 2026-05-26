import { PRIMARY_COLORS, SECONDARY_COLORS, FOLDER_COLORS, TYPOGRAPHY_PC, TYPOGRAPHY_MOBILE } from '../../data';
import { cn } from '../../utils';

function ColorCard({ name, hex, usage, status }: any) {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm flex flex-col gap-4">
      <div className="h-16 w-full rounded-lg" style={{ backgroundColor: hex }}>
        {status === 'unverified' && (
          <span className="absolute top-2 right-2 bg-black/60 text-white text-[10px] px-1.5 py-0.5 rounded uppercase tracking-wider backdrop-blur-sm">
            Verify Hex
          </span>
        )}
      </div>
      <div>
        <h4 className="text-xs font-bold uppercase text-gray-900 mb-1">{name}</h4>
        <div className="font-mono text-[10px] text-gray-400 mb-1">{hex.toUpperCase()}</div>
        {usage && <p className="text-[10px] text-gray-500">{usage}</p>}
      </div>
    </div>
  );
}

export function TokensView() {
  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <div className="flex justify-between items-end mb-4">
        <div>
          <h1 className="text-4xl font-heading italic text-gray-900 leading-none">Design Tokens</h1>
          <p className="text-gray-500 mt-2">Foundational variables for colors, typography, grid, and spacing.</p>
        </div>
        <div className="flex gap-2 text-xs">
          <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full font-semibold">Status: Live</span>
          <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full font-semibold">Ready for use</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Colors Section */}
        <section className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm flex flex-col gap-6 col-span-1 lg:col-span-2">
          <h3 className="font-bold uppercase tracking-widest text-xs text-gray-400">01 / Colors Palette</h3>

          <div className="space-y-8">
            <div>
              <span className="text-[10px] font-mono text-gray-400 mb-4 block">PRIMARY & BRAND</span>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {PRIMARY_COLORS.map(c => <ColorCard key={c.name} {...c} />)}
              </div>
            </div>
            
            <div>
              <span className="text-[10px] font-mono text-gray-400 mb-4 block">SEMANTIC LEVELS</span>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {SECONDARY_COLORS.map(c => <ColorCard key={c.name} {...c} />)}
              </div>
            </div>

            <div>
              <span className="text-[10px] font-mono text-gray-400 mb-4 block">FOLDER COLORS (MENU)</span>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                {FOLDER_COLORS.map(c => <ColorCard key={c.name} {...c} />)}
              </div>
            </div>
          </div>
        </section>

      {/* Typography Section */}
      <section className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm flex flex-col gap-6 col-span-1 lg:col-span-2">
        <h3 className="font-bold uppercase tracking-widest text-xs text-gray-400">02 / Typography Scale</h3>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="border-b border-gray-100">
              <tr>
                <th className="px-4 py-3 font-mono text-[10px] text-gray-400 uppercase tracking-widest w-32">Token</th>
                <th className="px-4 py-3 font-mono text-[10px] text-gray-400 uppercase tracking-widest w-96">Preview</th>
                <th className="px-4 py-3 font-mono text-[10px] text-gray-400 uppercase tracking-widest">Properties</th>
                <th className="px-4 py-3 font-mono text-[10px] text-gray-400 uppercase tracking-widest">Usage</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {TYPOGRAPHY_PC.map((t) => (
                <tr key={t.token} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-4 py-4">
                    <span className="font-mono text-[10px] bg-gray-100 text-gray-600 px-2 py-1 rounded">{t.token}</span>
                  </td>
                  <td className="px-4 py-4">
                    <span style={{ 
                      fontFamily: t.font === 'Merriweather' ? 'var(--font-heading)' : 'var(--font-body)',
                      fontSize: `${t.size}px`,
                      lineHeight: t.lineHeight,
                      fontWeight: t.weight === 'Bold' ? 700 : 400
                    }} className="text-gray-900 block truncate">
                      VnExpress Việt Nam
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex flex-col gap-0.5 text-[11px] text-gray-500 font-sans">
                      <span><b className="text-gray-900">Font:</b> {t.font} {t.weight}</span>
                      <span><b className="text-gray-900">Size:</b> {t.size}px</span>
                      <span><b className="text-gray-900">Height:</b> {t.lineHeight}</span>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-[11px] text-gray-600">{t.usage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Grid & Spacing */}
      <section className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm flex flex-col gap-6 col-span-1 lg:col-span-2">
        <h3 className="font-bold uppercase tracking-widest text-xs text-gray-400">03 / Grid System</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
            <h3 className="font-bold text-gray-900 text-sm uppercase tracking-wider mb-4">PC (Desktop)</h3>
            <ul className="space-y-3 font-sans text-xs text-gray-600">
              <li className="flex justify-between border-b border-gray-200 pb-2">
                <span>Max Width</span><span className="font-mono text-[#9F224E]">1140px</span>
              </li>
              <li className="flex justify-between border-b border-gray-200 pb-2">
                <span>Columns</span><span className="font-mono text-[#9F224E]">12</span>
              </li>
              <li className="flex justify-between border-b border-gray-200 pb-2">
                <span>Column Width</span><span className="font-mono text-[#9F224E]">66px</span>
              </li>
              <li className="flex justify-between border-b border-gray-200 pb-2">
                <span>Gutter Width</span><span className="font-mono text-[#9F224E]">28px</span>
              </li>
              <li className="flex justify-between">
                <span>Outer Margin</span><span className="font-mono text-[#9F224E]">20px</span>
              </li>
            </ul>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
            <h3 className="font-bold text-gray-900 text-sm uppercase tracking-wider mb-4">Mobile</h3>
            <ul className="space-y-3 font-sans text-xs text-gray-600">
              <li className="flex justify-between border-b border-gray-200 pb-2">
                <span>Frame Size</span><span className="font-mono text-[#9F224E]">414px</span>
              </li>
              <li className="flex justify-between border-b border-gray-200 pb-2">
                <span>Layout</span><span className="font-mono text-[#9F224E]">1 Column</span>
              </li>
              <li className="flex justify-between border-b border-gray-200 pb-2">
                <span>Content Max Width</span><span className="font-mono text-[#9F224E]">382px</span>
              </li>
              <li className="flex justify-between">
                <span>Outer Margin</span><span className="font-mono text-[#9F224E]">16px</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
}
