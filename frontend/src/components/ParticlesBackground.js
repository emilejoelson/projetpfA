import React from 'react';
import Particles from 'react-tsparticles';
import particlesConfig from './config/particlesconfig';

function ParticlesBackground() {
  return (
    
        <Particles params={particlesConfig} className="absolute z-50">
        </Particles>
     
  );
}

export default ParticlesBackground;
