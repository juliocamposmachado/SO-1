import React from 'react';
import { ArrowRight, Heart, Users, ShieldCheck, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { LINKS, STATS } from '../constants';

const Home: React.FC = () => {
  // Imagem da Terra para o fundo principal (Hero Section)
  const heroBgImage = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80";
  
  // Imagem do Facebook para as seções internas
  const facebookImage = "https://scontent.fcgh64-1.fna.fbcdn.net/v/t39.30808-6/585899047_864052989476595_5759492698603508111_n.png?stp=dst-jpg_s720x720_tt6&_nc_cat=111&ccb=1-7&_nc_sid=2285d6&_nc_eui2=AeEXvTl3YHsKZdpFRqz5NTaaEfU3ECLkwm0R9TcQIuTCbfDrSZqNDtcwZ1CVDucvUwo2ZvQHM4z_LCF2YvhmIcb1&_nc_ohc=d5CVo5IOXKwQ7kNvwGfFj6G&_nc_oc=Adl7fCd88eHf-dBXgi6TmuacqFjkvbOTIHzBQoEw80ROoXQU7qk_2hjX6R11OqMuF41e47EpVQ7t9C4GHf-l69h5&_nc_zt=23&_nc_ht=scontent.fcgh64-1.fna&_nc_gid=w0ZZ9ARWJ-LPIoGNua3rTw&oh=00_AfjgtU3-Hgui7goXH49kB-kbLjZg3oZ85VkJh-cnPzvwVQ&oe=692329E2";

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-brand-dark h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background Image Overlay - AGORA COM A IMAGEM DA TERRA */}
        <div 
          className="absolute inset-0 z-0 opacity-60"
          style={{
            backgroundImage: `url('${heroBgImage}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-brand-dark via-brand-dark/60 to-transparent"></div>

        <div className="relative z-20 max-w-4xl mx-auto px-4 text-center space-y-8">
          <div className="inline-flex items-center space-x-2 bg-brand-gold/20 border border-brand-gold/50 rounded-full px-4 py-1 backdrop-blur-sm">
            <span className="flex h-2 w-2 bg-brand-gold rounded-full animate-pulse"></span>
            <span className="text-brand-gold font-semibold text-sm tracking-wide">PROJETO SÓ 1 — HUMANIDADE EM EXERCÍCIO</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight drop-shadow-2xl">
            A Força de <span className="text-brand-gold">Um Só</span> <br className="hidden md:block"/> Move Todos.
          </h1>
          
          <p className="text-xl text-gray-200 max-w-2xl mx-auto font-light drop-shadow-md">
            Organizamos visitas, documentamos histórias e conectamos você a quem precisa. Tudo auditado pelos próprios padrinhos.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a href={LINKS.WHATSAPP_GROUP} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button variant="whatsapp" fullWidth className="group">
                <MessageCircle className="mr-2 h-5 w-5" />
                Entrar no Grupo WhatsApp
              </Button>
            </a>
            <a href={LINKS.FACEBOOK_GROUP} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button variant="outline" fullWidth className="bg-brand-dark/30 backdrop-blur-sm border-white text-white hover:bg-white hover:text-brand-dark">
                Acessar Grupo de Adoção
              </Button>
            </a>
          </div>
          
          <p className="text-sm text-gray-300 pt-2">
            Junte-se a mais de <span className="text-white font-bold">{STATS.MEMBERS} membros</span> ativos na construção solidária.
          </p>
        </div>
      </section>

      {/* Impact Preview Stats */}
      <section className="bg-brand-gold py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Flexible layout to accommodate 7 items centered */}
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-10 text-center">
            
            <div className="space-y-2 w-32 md:w-40">
              <div className="text-4xl font-black text-white">{STATS.MEMBERS}</div>
              <div className="text-yellow-900 font-medium uppercase text-xs tracking-wider">Membros Engajados</div>
            </div>
            
            <div className="space-y-2 w-32 md:w-40">
              <div className="text-4xl font-black text-white">{STATS.FAMILIES}</div>
              <div className="text-yellow-900 font-medium uppercase text-xs tracking-wider">Famílias Apoiadas</div>
            </div>
            
            <div className="space-y-2 w-32 md:w-40">
              <div className="text-4xl font-black text-white">{STATS.CHILDREN}</div>
              <div className="text-yellow-900 font-medium uppercase text-xs tracking-wider">Crianças Atendidas</div>
            </div>
            
            <div className="space-y-2 w-32 md:w-40">
              <div className="text-4xl font-black text-white">{STATS.MEALS}</div>
              <div className="text-yellow-900 font-medium uppercase text-xs tracking-wider">Refeições Entregues</div>
            </div>

            <div className="space-y-2 w-32 md:w-40">
              <div className="text-4xl font-black text-white">{STATS.COURSES}</div>
              <div className="text-yellow-900 font-medium uppercase text-xs tracking-wider">Cursos Iniciados</div>
            </div>
            
            <div className="space-y-2 w-32 md:w-40">
              <div className="text-4xl font-black text-white">{STATS.VOLUNTEERS}</div>
              <div className="text-yellow-900 font-medium uppercase text-xs tracking-wider">Voluntários Ativos</div>
            </div>
            
            <div className="space-y-2 w-32 md:w-40">
              <div className="text-4xl font-black text-white">{STATS.COOPERATIVES}</div>
              <div className="text-yellow-900 font-medium uppercase text-xs tracking-wider">Cooperativas</div>
            </div>

          </div>
        </div>
      </section>

      {/* Introduction Snippet */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div className="mb-10 lg:mb-0 relative">
              <div className="absolute -inset-4 bg-brand-gold/20 rounded-xl transform -rotate-2"></div>
              {/* Imagem do Facebook Mantida Aqui */}
              <img 
                src={facebookImage}
                alt="Grupo do Facebook - Auditoria Social" 
                className="relative rounded-lg shadow-2xl w-full object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Auditoria pelos Padrinhos
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                O projeto nasce da urgente necessidade de agir com transparência total. Aqui, quem ajuda também fiscaliza. A <strong>Humanidade em Exercício</strong> acontece quando o padrinho visita, entrega e constata a transformação.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Acreditamos no poder do "Um". Uma pessoa pode transformar a vida de uma família inteira. "De 1 em 1, ajudamos todos", de forma organizada e auditada.
              </p>
              <div className="pt-4">
                <Link to="/como-funciona">
                  <Button variant="primary" className="group">
                    Entenda o Processo de Visita
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Blocks */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Como você pode transformar vidas hoje?</h2>
            <p className="mt-4 text-gray-600">Existem várias formas de fazer parte dessa corrente do bem, tudo público e organizado.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-brand-blue hover:-translate-y-2 transition-transform duration-300">
              <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6 text-brand-blue">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Veja no Facebook</h3>
              <p className="text-gray-600 mb-6">Tudo é público. Acesse o grupo, veja as fotos autorizadas e escolha quem ajudar.</p>
              <a href={LINKS.FACEBOOK_GROUP} target="_blank" rel="noopener noreferrer" className="text-brand-blue font-semibold hover:underline">Acessar Grupo &rarr;</a>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-brand-gold hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden">
              <div className="h-12 w-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-6 text-brand-gold">
                <Heart className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Desejo de Apadrinhamento</h3>
              <p className="text-gray-600 mb-6">Manifeste seu desejo de apadrinhar. Nós organizamos a visita com assistentes sociais.</p>
              <Link to="/como-funciona" className="text-brand-gold font-semibold hover:underline">Entenda o processo &rarr;</Link>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-brand-red hover:-translate-y-2 transition-transform duration-300">
              <div className="h-12 w-12 bg-red-100 rounded-lg flex items-center justify-center mb-6 text-brand-red">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Solicitar Publicação</h3>
              <p className="text-gray-600 mb-6">Conhece alguém? Peça a publicação do desejo de apadrinhamento. Nós auditamos e ajudamos.</p>
              <Link to="/contato" className="text-brand-red font-semibold hover:underline">Entrar em contato &rarr;</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;