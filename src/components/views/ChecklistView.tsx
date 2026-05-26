import { useState } from 'react';
import { INITIAL_CHECKLIST } from '../../data';
import { CheckCircle2, Circle } from 'lucide-react';
import { cn } from '../../utils';

export function ChecklistView() {
  const [checklist, setChecklist] = useState(INITIAL_CHECKLIST);

  const toggleItem = (id: string) => {
    setChecklist(prev => prev.map(item => 
      item.id === id ? { ...item, completed: !item.completed } : item
    ));
  };

  const sections = ['Tokens', 'Atoms', 'Molecules', 'Organisms', 'Templates'];

  const progress = Math.round((checklist.filter(i => i.completed).length / checklist.length) * 100);

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-12">
      <div className="flex justify-between items-end mb-4">
        <div>
          <h1 className="text-4xl font-heading italic text-gray-900 leading-none">Build Tracker</h1>
          <p className="text-gray-500 mt-2">Theo dõi tiến độ design & cut HTML các block/module chính.</p>
        </div>
        <div className="text-right">
          <div className="text-4xl font-heading italic text-[#9F224E]">{progress}%</div>
          <div className="text-[10px] font-mono text-gray-400 uppercase tracking-widest mt-1">Overall Progress</div>
        </div>
      </div>

      <div className="bg-gray-100 rounded-full h-1 w-full overflow-hidden mb-8">
        <div className="bg-[#9F224E] h-full transition-all duration-500 ease-out" style={{ width: `${progress}%` }} />
      </div>

      <div className="space-y-6">
        {sections.map((section, index) => {
          const items = checklist.filter(i => i.section === section);
          const completedCount = items.filter(i => i.completed).length;
          
          return (
            <section key={section} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm flex flex-col gap-4">
              <div className="flex justify-between items-center border-b border-gray-100 pb-4">
                <h3 className="font-bold uppercase tracking-widest text-xs text-gray-400">0{index + 1} / {section}</h3>
                <span className="text-[10px] font-mono text-gray-400 bg-gray-50 px-2 py-0.5 rounded border border-gray-100">
                  {completedCount}/{items.length}
                </span>
              </div>
              <div className="divide-y divide-gray-50">
                {items.map(item => (
                  <div 
                    key={item.id} 
                    className={cn(
                      "flex items-center py-3 cursor-pointer transition-colors hover:bg-gray-50/50 -mx-6 px-6",
                      item.completed ? "opacity-60" : ""
                    )}
                    onClick={() => toggleItem(item.id)}
                  >
                    <button className="mr-4 text-[#9F224E] focus:outline-none rounded-full">
                      {item.completed ? (
                        <CheckCircle2 className="w-5 h-5" />
                      ) : (
                        <Circle className="w-5 h-5 text-gray-300" />
                      )}
                    </button>
                    <span className={cn(
                      "text-xs transition-all",
                      item.completed ? "text-gray-500 line-through decoration-gray-300" : "text-gray-900 font-bold"
                    )}>
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
