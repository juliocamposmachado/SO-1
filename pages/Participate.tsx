import React from 'react';
import { MessageCircle, Facebook, Briefcase, UserPlus, HeartHandshake } from 'lucide-react';
import Button from '../components/Button';
import { LINKS, STATS } from '../constants';

const Participate: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Participe do Projeto SÓ 1</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A sua ação é o combustível da nossa mudança. Praticamos a <strong>Humanidade em Exercício</strong>.
          </p>
        </div>

        {/* Digital Communities Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          {/* Facebook Card - MAIN FOCUS */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-t-8 border-blue-600 transform transition hover:scale-[1.02] relative">
            <div className="absolute top-0 right-0 bg-brand-gold text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
              PRINCIPAL CANAL
            </div>
            <div className="p-8 text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Facebook className="h-10 w-10 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Grupo Oficial de Adoção</h2>
              <p className="text-gray-600 mb-4">
                É aqui que tudo acontece. Tudo é público.
              </p>
              <ul className="text-sm text-gray-500 text-left space-y-2 mb-8 bg-gray-50 p-4 rounded-lg">
                <li className="flex items-start"><span className="mr-2">✅</span> Veja fotos e histórias (com autorização).</li>
                <li className="flex items-start"><span className="mr-2">✅</span> Faça pedido de publicação de desejo de apadrinhamento.</li>
                <li className="flex items-start"><span className="mr-2">✅</span> Organize visitas com nossa equipe.</li>
                <li className="flex items-start"><span className="mr-2">✅</span> Audite as ações você mesmo.</li>
              </ul>
              <a href={LINKS.FACEBOOK_GROUP} target="_blank" rel="noopener noreferrer">
                <Button variant="facebook" fullWidth className="py-4 text-lg">
                  Acessar Grupo Agora
                </Button>
              </a>
            </div>
          </div>

          {/* WhatsApp Card */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-t-8 border-green-500 transform transition hover:scale-[1.02]">
            <div className="p-8 text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="h-10 w-10 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Comunicação Rápida</h2>
              <p className="text-gray-600 mb-8">
                Receba atualizações urgentes e coordene ações rápidas. Ideal para quem quer se manter informado sobre as necessidades do dia a dia.
              </p>
              <a href={LINKS.WHATSAPP_GROUP} target="_blank" rel="noopener noreferrer">
                <Button variant="whatsapp" fullWidth className="py-4 text-lg">
                  Entrar no WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Other Ways to Help */}
        <div className="bg-brand-dark rounded-3xl p-8 md:p-12 text-white">
          <h3 className="text-3xl font-bold mb-8 text-center">Outras formas de atuar</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-colors">
              <UserPlus className="h-8 w-8 text-brand-gold mb-4" />
              <h4 className="text-xl font-bold mb-2">Seja Padrinho/Madrinha</h4>
              <p className="text-gray-400 mb-4">Escolha uma família no grupo, entre em contato e nós preparamos a visita para você.</p>
              <a href={LINKS.FACEBOOK_GROUP} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="w-full text-sm">Ver Famílias</Button>
              </a>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-colors">
              <HeartHandshake className="h-8 w-8 text-brand-red mb-4" />
              <h4 className="text-xl font-bold mb-2">Indique uma Família</h4>
              <p className="text-gray-400 mb-4">Conhece alguém? Nos avise. Tentaremos enviar assistentes sociais para entrevista.</p>
              <Button variant="outline" className="w-full text-sm">Indicar Agora</Button>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-colors">
              <Briefcase className="h-8 w-8 text-brand-blue mb-4" />
              <h4 className="text-xl font-bold mb-2">Assistência Social</h4>
              <p className="text-gray-400 mb-4">É assistente social? Ajude-nos a validar e documentar as entrevistas com profissionalismo.</p>
              <Button variant="outline" className="w-full text-sm">Oferecer Serviço</Button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Participate;