import React from 'react';
import { Sparkles, Rocket, Target } from 'lucide-react';

interface Phase {
  id: number;
  title: string;
  status: 'completed' | 'current' | 'upcoming';
}

const phases: Phase[] = [
  { id: 1, title: 'Genesis Protocol Ignition', status: 'completed' },
  { id: 2, title: 'Airdrop Mission', status: 'current' },
  { id: 3, title: 'Staking & DAO Evolution', status: 'upcoming' },
  { id: 4, title: 'NFT Marketplace Deployment', status: 'upcoming' },
  { id: 5, title: 'Smoketron Mainframe Launch', status: 'upcoming' },
];

const ProjectStatus: React.FC = () => {
  const completedMissions = 3;
  const totalMissions = 7;
  const recruitedAllies = 2;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-6">
      {/* Dynamic Greeting Section */}
      <div className="lg:col-span-3">
        <div className="relative rounded-lg overflow-hidden bg-gradient-to-br from-gray-900 via-gray-900 to-gray-900/80 border border-purple-500/20 backdrop-blur-sm p-5 h-full">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-cyan-400 to-green-400"></div>
          
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Sparkles size={24} className="text-purple-400" />
              <h2 className="text-xl font-orbitron font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-300 to-green-400">
                Welcome back, Commander Vega
              </h2>
            </div>

            <div className="space-y-2 font-mono">
              <div className="flex items-center gap-2 text-cyan-400">
                <Target size={16} />
                <span>Status: Phase 2 — Airdrop Initiated</span>
              </div>
              
              <div className="flex items-center gap-4 text-gray-400">
                <div className="flex items-center gap-2">
                  <Rocket size={16} className="text-purple-400" />
                  <span>Missions: {completedMissions}/{totalMissions}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span>Allies: {recruitedAllies}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 right-0 w-full h-40 pointer-events-none opacity-10">
            <div className="absolute bottom-0 right-0 w-60 h-60 bg-purple-500 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-cyan-500 rounded-full filter blur-3xl"></div>
          </div>
        </div>
      </div>

      {/* Project Progress Section */}
      <div className="lg:col-span-2">
        <div className="relative rounded-lg overflow-hidden bg-gradient-to-br from-gray-900 via-gray-900 to-gray-900/80 border border-purple-500/20 backdrop-blur-sm p-5 h-full">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-cyan-400 to-green-400"></div>
          
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Target size={18} className="text-cyan-400" />
              <h3 className="font-orbitron font-bold text-white">Project Phases</h3>
            </div>

            <div className="space-y-3">
              {phases.map((phase) => (
                <div 
                  key={phase.id}
                  className="relative flex items-center gap-3 pl-12 pr-4 py-2 rounded-lg bg-gray-800/30 border border-purple-900/30"
                >
                  <div className="absolute left-4">
                    {phase.status === 'completed' && (
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    )}
                    {phase.status === 'current' && (
                      <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse"></div>
                    )}
                    {phase.status === 'upcoming' && (
                      <div className="w-3 h-3 rounded-full bg-gray-600"></div>
                    )}
                  </div>
                  
                  <span className={`font-mono text-sm ${
                    phase.status === 'completed' ? 'text-green-400' :
                    phase.status === 'current' ? 'text-cyan-400' :
                    'text-gray-500'
                  }`}>
                    Phase {phase.id} — {phase.title}
                    {phase.status === 'current' && (
                      <span className="ml-2 text-[10px] bg-cyan-500/20 px-2 py-0.5 rounded-full">
                        CURRENT
                      </span>
                    )}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute bottom-0 right-0 w-full h-40 pointer-events-none opacity-10">
            <div className="absolute bottom-0 right-0 w-60 h-60 bg-cyan-500 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-500 rounded-full filter blur-3xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectStatus;