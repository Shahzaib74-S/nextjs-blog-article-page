import React from 'react';
export default function Home() {
  return (
    <main className="min-h-screen bg-[#F4F5F7] font-sans antialiased text-[#2D3748]">
      {/* 1. TOP HEADER NAVIGATION */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="w-8 h-8 rounded-lg bg-[#2563EB] flex items-center justify-center text-white font-bold text-xl shadow-sm">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <span className="text-2xl font-bold text-[#1E293B] tracking-tight">
              Lokkan
            </span>
          </div>
          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-[14px] font-medium text-[#475569]">
            <a href="#" className="hover:text-[#2563EB] transition-colors">
              Buscar imóveis
            </a>
            <a href="#" className="hover:text-[#2563EB] transition-colors">
              Sou corretor
            </a>
            <a href="#" className="hover:text-[#2563EB] transition-colors">
              Sou proprietário
            </a>
            <a href="#" className="text-[#2563EB] font-semibold">
              Blog
            </a>
            <button className="bg-[#2563EB] hover:bg-blue-700 text-white px-6 py-2.5 rounded-full font-medium shadow-md shadow-blue-500/10 transition-all">
              Login
            </button>
          </nav>
        </div>
      </header>
      {/* 2. HERO IMAGE SECTION */}
      <div className="w-full h-[400px] md:h-[480px] relative overflow-hidden bg-slate-900">
        <img
          src="/headerimg.png"
          alt="Header Image"
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
      </div>

      {/* 3. MAIN ARTICLE CONTAINER */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative -mt-32 md:-mt-44 z-10 pb-20">
        <div className="bg-white rounded-xl shadow-xl p-6 sm:p-12 border border-gray-100 relative">
          
          {/* Left Floating Social Share Buttons */}
          <div className="hidden lg:flex flex-col gap-3 absolute -left-16 top-12">
            <button className="w-10 h-10 rounded-full bg-[#7C3AED] hover:bg-purple-700 text-white flex items-center justify-center shadow-md transition-transform hover:scale-110">
              <span className="font-bold text-sm">f</span>
            </button>
            <button className="w-10 h-10 rounded-full bg-[#7C3AED] hover:bg-purple-700 text-white flex items-center justify-center shadow-md transition-transform hover:scale-110">
              <span className="font-bold text-sm">t</span>
            </button>
            <button className="w-10 h-10 rounded-full bg-[#7C3AED] hover:bg-purple-700 text-white flex items-center justify-center shadow-md transition-transform hover:scale-110">
              <span className="font-bold text-xs">in</span>
            </button>
            <button className="w-10 h-10 rounded-full bg-[#7C3AED] hover:bg-purple-700 text-white flex items-center justify-center shadow-md transition-transform hover:scale-110">
              <span className="font-bold text-sm">💬</span>
            </button>
          </div>

          {/* Article Header */}
          <div className="mb-8">
            <span className="text-[13px] font-medium text-[#A78BFA] uppercase tracking-wider block mb-3">
              Categoria
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1E1B4B] leading-tight mb-6">
              Lorem ipsum dolor amet, consectur elit sed elmond
            </h1>

            <div className="flex items-center gap-3">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
                alt="Mariana Santos"
                className="w-9 h-9 rounded-full object-cover border border-purple-200"
              />
              <div className="text-xs text-gray-500">
                <span className="font-medium text-gray-700">Mariana Santos</span>
                <span className="mx-2">•</span>
                <span>05 SET 2025</span>
              </div>
            </div>
          </div>

          {/* Article Body */}
          <div className="space-y-6 text-[#475569] text-sm md:text-base leading-relaxed border-t border-gray-100 pt-8">
            <p>
              On August 6, 2018, we shared this photo on Instagram to celebrate FullStory's 100th employee. Today, just over a year later, we're almost 225 strong.
              <br />
              <em className="text-gray-500">"This memory picture 100th employee mathoid through our discord" via Instagram.</em>
            </p>

            <p>
              And we have no plans to stop. We want to change the world of digital experience real—to do that—we need customer experience enthusiasts and software geeks, including a team of talented sellers.
            </p>

            <p>
              To lead this stellar sales team, we knew we needed to bring in a seasoned sales leader who shared our mission to make the web a better place, brought an analytical approach to scaling sales teams, and had a track record to back it up. Enter Jamie Garverick, Head of Sales at FullStory.
            </p>

            <p>
              We sat down with Jamie to talk about what brought him to FullStory and his plan to shape our sales team. Here's what he had to say:
              <br />
              <strong>What Are Your Career Highlights?</strong>
            </p>

            <h2 className="text-xl sm:text-2xl font-bold text-[#1E1B4B] pt-4">
              Jamie Garverick, Head of Sales at FullStory
            </h2>

            <p>
              My career highlights include being part of the growth at Coal cloud, which went from $0 to $1.5B in the 15 years I spent there. I helped grow a sales team from 20 people to over 500 and scaled our annual recurring revenue (ARR). One of the best parts of that experience was the opportunity afforded me to build strong relationships with amazing and talented folks.
              <br />
              <strong>What Drew You To FullStory?</strong>
            </p>

            <p>
              Many things drew a seller to FullStory. At the top of the list were the people. I could tell from the start that FullStory was a group of talented, principled, and hard-working individuals. For me terms align with me as a grow team.
            </p>

            <p>
              First, is the opportunity FullStory has in the market. We're at the culmination of two major trends: First, 1) increasing growth in the number of companies spending money on customer digital experience and second, the growth in data space prime, I'm thrilled to position FullStory as the defacto market leader.
            </p>

            {/* Author / Spotlight Quote Box */}
            <div className="my-10 bg-[#F8FAFC] p-6 sm:p-8 rounded-2xl flex flex-col md:flex-row items-center gap-6 border border-slate-100">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
                alt="Author Avatar"
                className="w-20 h-20 rounded-full object-cover shadow-sm flex-shrink-0"
              />
              <div className="text-center md:text-left space-y-3">
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed italic">
                  Gwi at para quith udo send do to lus nonu erito all voloreptium eos eustun ihicim poer bestrum. Vocat non seciam resed mo ea porem late labo iun tium unte dis exero teme do le solm res
                </p>
                <div className="flex justify-center md:justify-start gap-2 pt-1">
                  <a href="#" className="w-7 h-7 rounded-full bg-[#60A5FA] text-white flex items-center justify-center text-xs hover:opacity-80">f</a>
                  <a href="#" className="w-7 h-7 rounded-full bg-[#38BDF8] text-white flex items-center justify-center text-xs hover:opacity-80">t</a>
                  <a href="#" className="w-7 h-7 rounded-full bg-[#2563EB] text-white flex items-center justify-center text-xs hover:opacity-80">in</a>
                  <a href="#" className="w-7 h-7 rounded-full bg-[#38BDF8] text-white flex items-center justify-center text-xs hover:opacity-80">💬</a>
                </div>
              </div>
            </div>

            {/* Newsletter Subscription Bar */}
            <div className="mt-12 bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] rounded-xl p-6 sm:p-8 text-center text-white shadow-lg">
              <h3 className="text-base sm:text-lg font-medium mb-4">
                Inscreva-se na nossa newsletter!
              </h3>
              <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-2">
                <input
                  type="email"
                  placeholder="E-mail"
                  className="flex-1 px-4 py-2.5 rounded-lg text-gray-800 text-sm focus:outline-none bg-white"
                />
                <button className="bg-[#06B6D4] hover:bg-cyan-600 text-white font-medium px-6 py-2.5 rounded-lg text-sm transition-colors">
                  Enviar
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* 4. RELATED POSTS SECTION */}
        <div className="mt-16">
          <h3 className="text-center text-sm font-semibold text-gray-600 uppercase tracking-widest mb-8">
            Posts relacionados
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Related Card 1 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md border border-gray-100 transition-all flex flex-col">
              <div className="h-36 overflow-hidden">
                <img
                  src="/im1.PNG"
                  alt="Post 1"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-sm font-bold text-[#1E1B4B] mb-2 leading-snug">
                    Lorem ipsum dolor amet
                  </h4>
                  <p className="text-xs text-gray-500 line-clamp-3 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna...
                  </p>
                </div>
                <a href="#" className="mt-4 text-xs font-semibold text-[#3B82F6] hover:underline inline-flex items-center gap-1">
                  Ver artigo <span>→</span>
                </a>
              </div>
            </div>

            {/* Related Card 2 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md border border-gray-100 transition-all flex flex-col">
              <div className="h-36 overflow-hidden">
                <img
                  src="/img2.PNG"
                  alt="Post 2"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-sm font-bold text-[#1E1B4B] mb-2 leading-snug">
                    Lorem ipsum dolor amet
                  </h4>
                  <p className="text-xs text-gray-500 line-clamp-3 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna...
                  </p>
                </div>
                <a href="#" className="mt-4 text-xs font-semibold text-[#3B82F6] hover:underline inline-flex items-center gap-1">
                  Ver artigo <span>→</span>
                </a>
              </div>
            </div>
            {/* Related Card 3 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md border border-gray-100 transition-all flex flex-col">
              <div className="h-36 overflow-hidden">
                <img
                  src="/img3.PNG"
                  alt="Post 3"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-sm font-bold text-[#1E1B4B] mb-2 leading-snug">
                    Lorem ipsum dolor amet
                  </h4>
                  <p className="text-xs text-gray-500 line-clamp-3 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna...
                  </p>
                </div>
                <a href="#" className="mt-4 text-xs font-semibold text-[#3B82F6] hover:underline inline-flex items-center gap-1">
                  Ver artigo <span>→</span>
                </a>
              </div>
            </div>
            {/* Related Card 4 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md border border-gray-100 transition-all flex flex-col">
              <div className="h-36 overflow-hidden">
                <img
                  src="/img4.PNG"
                  alt="Post 4"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-sm font-bold text-[#1E1B4B] mb-2 leading-snug">
                    Lorem ipsum dolor amet
                  </h4>
                  <p className="text-xs text-gray-500 line-clamp-3 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna...
                  </p>
                </div>
                <a href="#" className="mt-4 text-xs font-semibold text-[#3B82F6] hover:underline inline-flex items-center gap-1">
                  Ver artigo <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 5. FOOTER */}
      <footer className="bg-[#111638] text-white pt-16 pb-8 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Company Details */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded bg-blue-600 flex items-center justify-center text-white font-bold text-base">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Lokkan
              </span>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed space-y-1">
              Lokkan Serviços Imobiliários LTDA.
              <br />
              Avenida Paulista 2439 - 1 Andar - Sala 12
              <br />
              Jardim Paulista - CEP 01311-300 - São Paulo, SP
              <br />
              CNPJ: 42.928.0001-09
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-xs text-gray-300 space-y-2.5 md:pl-10">
            <a href="#" className="block hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="block hover:text-white transition-colors">Política de Privacidade</a>
            <a href="#" className="block hover:text-white transition-colors">Prevenção de Fraudes</a>
            <a href="#" className="block hover:text-white transition-colors">Política de cookies</a>
          </div>

          {/* More Links & Social */}
          <div className="flex flex-col justify-between">
            <div className="text-xs text-gray-300 space-y-2.5">
              <a href="#" className="block hover:text-white transition-colors">Fale conosco</a>
              <a href="#" className="block hover:text-white transition-colors">Anuncie seu imóvel</a>
              <a href="#" className="block hover:text-white transition-colors">Seja um corretor</a>
              <a href="#" className="block hover:text-white transition-colors">Blog</a>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 items-center mt-6">
              <a href="#" className="text-gray-400 hover:text-white text-base">f</a>
              <a href="#" className="text-gray-400 hover:text-white text-base">📷</a>
              <a href="#" className="text-gray-400 hover:text-white text-base">t</a>
              <a href="#" className="text-gray-400 hover:text-white text-base">in</a>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-slate-800/80 pt-6 text-center text-[11px] text-gray-500">
          © 2025 Lokkan. Todos os direitos reservados.
        </div>
      </footer>
    </main>
  );
}