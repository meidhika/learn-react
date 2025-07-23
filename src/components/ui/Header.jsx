import React from "react";

function Header({ title, description }) {
  return (
    <section
      className="relative h-[85vh] bg-cover bg-center flex items-center justify-center text-white"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1519999482648-25049ddd37b1?auto=format&fit=crop&w=1950&q=80')",
      }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">{title}</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">{description}</p>
      </div>
    </section>
  );
}

export default Header;
