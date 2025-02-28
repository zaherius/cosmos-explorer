import * as React from 'react';

const MarsPage = () => {
  return (
    <div className="min-h-screen bg-[#121212] text-white">
      <header className="relative h-screen flex items-center justify-center text-center px-6">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?q=80&w=2048&auto=format&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.4)'
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Explorez Mars
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 animate-fade-in-delay-1">
            Découvrez les mystères de la planète rouge
          </p>
        </div>
      </header>
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">À Propos de Mars</h2>
          <p className="text-lg text-gray-300 mb-8">
            Mars est la quatrième planète du système solaire. Elle est souvent appelée la planète rouge en raison de sa couleur distinctive causée par l'oxyde de fer à sa surface.
          </p>
        </div>
      </section>
    </div>
  );
};

export default MarsPage;
