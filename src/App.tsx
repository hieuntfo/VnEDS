/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { OverviewView } from './components/views/OverviewView';
import { TokensView } from './components/views/TokensView';
import { AtomsView } from './components/views/AtomsView';
import { MoleculesView } from './components/views/MoleculesView';
import { OrganismsView } from './components/views/OrganismsView';
import { TemplatesView } from './components/views/TemplatesView';
import { AdsView } from './components/views/AdsView';
import { Palette, Box, Layers, Columns, LayoutTemplate, Target, Megaphone } from 'lucide-react';
import { NavItem } from './types';

const NAV_ITEMS: NavItem[] = [
  { id: 'overview', label: 'Chiến dịch & Mục tiêu', icon: Target },
  { id: 'tokens', label: 'Tokens', icon: Palette },
  { id: 'atoms', label: 'Atoms', icon: Box },
  { id: 'molecules', label: 'Molecules', icon: Layers },
  { id: 'organisms', label: 'Organisms', icon: Columns },
  { id: 'templates', label: 'Templates', icon: LayoutTemplate },
  { id: 'ads', label: 'Quảng cáo (Ads)', icon: Megaphone },
];

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('overview');

  return (
    <div className="h-screen bg-[#F8F9FA] flex flex-col font-sans text-[#1A1A1A] overflow-hidden">
      {/* Top Navigation Bar */}
      <header className="h-16 bg-[#9F224E] text-white flex items-center justify-between px-8 shrink-0">
        <div className="flex items-center gap-4">
          <div className="text-2xl font-black tracking-tighter uppercase">VnExpress <span className="font-light opacity-80">Design System</span></div>
          <span className="px-2 py-0.5 bg-white/20 text-[10px] rounded uppercase font-bold tracking-widest">v6.26</span>
        </div>
      </header>

      <div className="flex grow overflow-hidden">
        <Sidebar 
          items={NAV_ITEMS}
          activeId={activeTab}
          onNavigate={setActiveTab}
        />
        
        <main className="grow p-8 flex flex-col bg-[#FDFDFD] overflow-y-auto w-full">
          {activeTab === 'overview' && <OverviewView />}
          {activeTab === 'tokens' && <TokensView />}
          {activeTab === 'atoms' && <AtomsView />}
          {activeTab === 'molecules' && <MoleculesView />}
          {activeTab === 'organisms' && <OrganismsView />}
          {activeTab === 'templates' && <TemplatesView />}
          {activeTab === 'ads' && <AdsView />}
        </main>
      </div>

      <footer className="h-10 bg-black text-[10px] text-gray-500 px-8 flex items-center justify-between uppercase tracking-widest shrink-0">
        <div>Platform: Web Desktop / Mobile Responsive / App iOS & Android</div>
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-green-500"></span> All Systems Sync</span>
          <span>Global Brand Guidelines 2026 © VnExpress</span>
        </div>
      </footer>
    </div>
  );
}
