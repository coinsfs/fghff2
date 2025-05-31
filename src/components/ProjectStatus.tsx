import React from 'react';
import { Sparkles, Rocket, Target } from 'lucide-react';

const ProjectStatus: React.FC = () => {
  const completedMissions = 3;
  const totalMissions = 7;
  const recruitedAllies = 2;

  const badges = [
    {
      id: 'observer',
      name: 'Observer Elite',
      image: '/assets/badges/observer_badge.png',
      rarity: 'Legendary',
      description: 'Master of Quantum Surveillance'
    },
    {
      id: 'ally',
      name: 'Trusted Ally',
      image: '/assets/badges/ally_badge.png',
      rarity: 'Epic',
      description: 'Pillar of the Community'
    },
    {
      id: 'field',
      name: 'Field Agent',
      image: '/assets/badges/field_agent_badge.png',
      rarity: 'Rare',
      description: 'Operative Excellence'
    }
  ];

  return (
    <div className="relative rounded-lg overflow-hidden bg-gradient-to-br from-gray-900 via-gray-900 to-gray-900/80 border border-purple-500/20 backdrop-blur-sm p-5 mb-6">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-cyan-400 to-green-400"></div>
      
      <div className="flex justify-between items-center gap-6">
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

        <div className="flex gap-4">
          {badges.map((badge) => (
            <div 
              key={badge.id}
              className="group relative flex flex-col items-center"
            >
              <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-purple-500/30 bg-gray-800/50 transition-all duration-300 group-hover:border-cyan-400/50 group-hover:scale-105">
                <img 
                  src={badge.image} 
                  alt={badge.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Animated ring effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-cyan-400 to-green-400 rounded-full opacity-0 group-hover:opacity-30 blur-sm transition-opacity duration-300"></div>
              </div>
              
              {/* Enhanced tooltip */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap z-10">
                <div className="bg-gray-900/90 backdrop-blur-sm px-3 py-2 rounded-lg border border-purple-500/30">
                  <div className="text-sm font-orbitron text-cyan-400">{badge.name}</div>
                  <div className="text-xs font-mono text-purple-400">{badge.rarity}</div>
                  <div className="text-[10px] font-mono text-gray-400 mt-1">{badge.description}</div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -inset-px bg-gradient-to-r from-purple-500/20 via-cyan-400/20 to-green-400/20 rounded-lg blur-sm -z-10"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced background effects */}
      <div className="absolute bottom-0 right-0 w-full h-40 pointer-events-none opacity-10">
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-purple-500 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-cyan-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-20 h-20 bg-green-500 rounded-full filter blur-3xl animate-pulse"></div>
      </div>
    </div>
  );
};

export default ProjectStatus;