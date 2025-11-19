import React from 'react';
import { Facebook, Radio, Heart, Phone, Twitter, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LINKS } from '../constants';

const Footer: React.FC = () => {
  
  const handleShare = (platform: 'facebook' | 'twitter') => {
    const currentUrl = encodeURIComponent(window.location.href);
    const text = encodeURIComponent("Conheça o Projeto SÓ 1 - Rádio Tatuapé FM. Humanidade em exercício! De 1 em 1, ajudamos todos.");
    let shareUrl = '';

    if (platform === 'facebook') {
      shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`;
    } else if (platform === 'twitter') {
      shareUrl = `https://twitter.com/intent/tweet?url=${currentUrl}&text=${text}`;
    }

    window.open(shareUrl, '_blank', 'width=600,height=400');
  };

  return (
    <footer className="bg-brand-dark text-gray-300 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Radio className="h-8 w-8 text-brand-gold" />
              <h3 className="text-2xl font-bold text-white">Rádio Tatuapé FM</h3>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              O Projeto SÓ 1 é uma iniciativa oficial da Rádio Tatuapé FM. 
              Transformando comunidades, uma família de cada vez, fundamentados na dignidade da pessoa humana.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Links Úteis</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-brand-gold transition-colors">Sobre a Rádio</a></li>
              <li><a href={LINKS.FACEBOOK_GROUP} target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors">Grupo Oficial Facebook</a></li>
              <li><a href={LINKS.WHATSAPP_GROUP} target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors">Grupo WhatsApp</a></li>
              <li><Link to="/transparencia" className="hover:text-brand-gold transition-colors">Transparência</Link></li>
            </ul>
          </div>

          {/* Social & Share */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Nossas Redes</h4>
            <div className="flex space-x-4 mb-8">
              <a href={LINKS.FACEBOOK_GROUP} target="_blank" rel="noopener noreferrer" className="bg-blue-600 p-2 rounded-full text-white hover:bg-blue-700 transition-colors" title="Ir para o Grupo">
                <Facebook className="h-5 w-5" />
              </a>
              <a href={LINKS.WHATSAPP_GROUP} target="_blank" rel="noopener noreferrer" className="bg-green-600 p-2 rounded-full text-white hover:bg-green-700 transition-colors" title="Ir para o WhatsApp">
                <Phone className="h-5 w-5" />
              </a>
            </div>

            <h4 className="text-white font-bold text-lg mb-4 flex items-center">
              <Share2 className="h-5 w-5 mr-2 text-brand-gold" />
              Compartilhe esta página
            </h4>
            <div className="flex space-x-4">
              <button 
                onClick={() => handleShare('facebook')}
                className="bg-gray-800 border border-gray-700 p-2 rounded-lg text-blue-400 hover:bg-blue-900 hover:text-white transition-colors flex items-center space-x-2 text-sm"
              >
                <Facebook className="h-4 w-4" />
                <span>Facebook</span>
              </button>
              <button 
                onClick={() => handleShare('twitter')}
                className="bg-gray-800 border border-gray-700 p-2 rounded-lg text-sky-400 hover:bg-sky-900 hover:text-white transition-colors flex items-center space-x-2 text-sm"
              >
                <Twitter className="h-4 w-4" />
                <span>Twitter</span>
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-center md:text-left">
            © {new Date().getFullYear()} Projeto SÓ 1 - Rádio Tatuapé FM. Todos os direitos reservados.
          </p>
          <div className="flex items-center space-x-1 mt-4 md:mt-0 text-sm text-gray-500">
            <span>Feito com</span>
            <Heart className="h-4 w-4 text-brand-red fill-current" />
            <span>para a comunidade.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;