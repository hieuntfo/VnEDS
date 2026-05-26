/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { TokensView } from './components/views/TokensView';
import { ComponentsView } from './components/views/ComponentsView';
import { SpecsView } from './components/views/SpecsView';
import { ChecklistView } from './components/views/ChecklistView';
import { Palette, LayoutGrid, FileJson, CheckSquare, Settings2 } from 'lucide-react';
import { NavItem } from './types';

const NAV_ITEMS: NavItem[] = [
  { id: 'tokens', label: 'Design Tokens', icon: Palette },
  { id: 'components', label: 'Component Library', icon: LayoutGrid },
  { id: 'specs', label: 'Data Spec / Layout', icon: FileJson },
  { id: 'checklist', label: 'Build Tracker', icon: CheckSquare },
];

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('tokens');

  return (
    <div className="h-screen bg-[#F8F9FA] flex flex-col font-sans text-[#1A1A1A] overflow-hidden">
      {/* Top Navigation Bar */}
      <header className="h-16 bg-[#9F224E] text-white flex items-center justify-between px-8 shrink-0">
        <div className="flex items-center gap-4">
          <div className="text-2xl font-black tracking-tighter uppercase">VnExpress <span className="font-light opacity-80">Design System</span></div>
          <span className="px-2 py-0.5 bg-white/20 text-[10px] rounded uppercase font-bold tracking-widest">v2.4.0</span>
        </div>
        <div className="flex items-center gap-6 text-sm font-medium uppercase tracking-wider">
          <a href="#" className="hover:opacity-70 transition-opacity">Guidelines</a>
          <a href="#" className="hover:opacity-70 transition-opacity">Library</a>
          <a href="#" className="hover:opacity-70 transition-opacity">Assets</a>
          <button className="bg-white text-[#9F224E] px-4 py-1.5 rounded-full text-xs font-bold">Export Style Guide</button>
        </div>
      </header>

      <div className="flex grow overflow-hidden">
        <Sidebar 
          items={NAV_ITEMS}
          activeId={activeTab}
          onNavigate={setActiveTab}
        />
        
        <main className="grow p-8 flex flex-col bg-[#FDFDFD] overflow-y-auto w-full">
          {activeTab === 'tokens' && <TokensView />}
          {activeTab === 'components' && <ComponentsView />}
          {activeTab === 'specs' && <SpecsView />}
          {activeTab === 'checklist' && <ChecklistView />}
        </main>
      </div>

      <footer className="h-10 bg-black text-[10px] text-gray-500 px-8 flex items-center justify-between uppercase tracking-widest shrink-0">
        <div>Platform: Web Desktop / Mobile Responsive / App iOS & Android</div>
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-green-500"></span> All Systems Sync</span>
          <span>Global Brand Guidelines 2024 © VnExpress</span>
        </div>
      </footer>
    </div>
  );
}
