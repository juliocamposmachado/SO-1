import React from 'react';
import { Play, Heart } from 'lucide-react';

const GalleryItem = ({ type, src, alt, category }: { type: 'image' | 'video', src: string, alt: string, category: string }) => (
  <div className="group relative overflow-hidden rounded-xl shadow-lg aspect-[4/3] bg-gray-100 cursor-pointer">
    <img 
      src={src} 
      alt={alt} 
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
      {type === 'video' ? (
        <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full">
          <Play className="h-8 w-8 text-white fill-current" />
        </div>
      ) : (
        <div className="text-center p-4">
          <p className="text-white font-bold text-lg">{category}</p>
          <p className="text-gray-200 text-sm">{alt}</p>
        </div>
      )}
    </div>
    <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full">
      {category}
    </div>
  </div>
);

const Gallery: React.FC = () => {
  const galleryImage = "https://scontent.fcgh64-1.fna.fbcdn.net/v/t39.30808-6/585899047_864052989476595_5759492698603508111_n.png?stp=dst-jpg_s720x720_tt6&_nc_cat=111&ccb=1-7&_nc_sid=2285d6&_nc_eui2=AeEXvTl3YHsKZdpFRqz5NTaaEfU3ECLkwm0R9TcQIuTCbfDrSZqNDtcwZ1CVDucvUwo2ZvQHM4z_LCF2YvhmIcb1&_nc_ohc=d5CVo5IOXKwQ7kNvwGfFj6G&_nc_oc=Adl7fCd88eHf-dBXgi6TmuacqFjkvbOTIHzBQoEw80ROoXQU7qk_2hjX6R11OqMuF41e47EpVQ7t9C4GHf-l69h5&_nc_zt=23&_nc_ht=scontent.fcgh64-1.fna&_nc_gid=w0ZZ9ARWJ-LPIoGNua3rTw&oh=00_AfjgtU3-Hgui7goXH49kB-kbLjZg3oZ85VkJh-cnPzvwVQ&oe=692329E2";

  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-black text-gray-900">Galeria de Ações</h1>
          <p className="mt-4 text-xl text-gray-600">
            Imagens que falam mais que palavras. Veja o impacto real do Projeto SÓ 1.
          </p>
        </div>

        {/* Filters (Visual Only) */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button className="px-6 py-2 rounded-full bg-brand-gold text-white font-medium shadow-md">Todas</button>
          <button className="px-6 py-2 rounded-full bg-gray-100 text-gray-600 font-medium hover:bg-gray-200 transition">Entregas</button>
          <button className="px-6 py-2 rounded-full bg-gray-100 text-gray-600 font-medium hover:bg-gray-200 transition">Eventos</button>
          <button className="px-6 py-2 rounded-full bg-gray-100 text-gray-600 font-medium hover:bg-gray-200 transition">Depoimentos</button>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <GalleryItem 
            type="image"
            src={galleryImage}
            category="Entregas"
            alt="Entrega de cestas básicas Zona Leste"
          />
          <GalleryItem 
            type="image"
            src={galleryImage}
            category="Comunidade"
            alt="Atividade com crianças"
          />
          <GalleryItem 
            type="video"
            src={galleryImage}
            category="Depoimento"
            alt="Família Silva agradece"
          />
          <GalleryItem 
            type="image"
            src={galleryImage}
            category="Eventos"
            alt="Dia das Crianças 2023"
          />
          <GalleryItem 
            type="image"
            src={galleryImage}
            category="Voluntários"
            alt="Equipe reunida na sede"
          />
          <GalleryItem 
            type="image"
            src={galleryImage}
            category="Obras"
            alt="Reforma da casa da Dona Maria"
          />
        </div>

        {/* Video Highlight */}
        <div className="mt-24 bg-brand-dark rounded-2xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-12 flex flex-col justify-center">
              <div className="flex items-center space-x-2 mb-4">
                <Heart className="text-brand-red h-6 w-6 fill-current animate-pulse" />
                <span className="text-gray-400 font-bold uppercase tracking-wider text-sm">História em Destaque</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                A Transformação da Vila Esperança
              </h2>
              <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                Assista ao documentário curto sobre como a mobilização de apenas 5 voluntários mudou a realidade de saneamento de uma comunidade inteira em apenas 2 meses.
              </p>
              <button className="flex items-center space-x-3 text-white font-bold group">
                <div className="h-12 w-12 rounded-full bg-brand-gold flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="h-5 w-5 fill-current" />
                </div>
                <span>Assistir Vídeo Completo</span>
              </button>
            </div>
            <div className="relative h-96 lg:h-auto bg-gray-800">
               <img 
                src={galleryImage}
                className="absolute inset-0 w-full h-full object-cover opacity-60"
                alt="Video Thumbnail"
               />
               <div className="absolute inset-0 flex items-center justify-center">
                 <Play className="h-20 w-20 text-white/80" />
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;