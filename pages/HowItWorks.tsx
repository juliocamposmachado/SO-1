import React from 'react';
import { CheckCircle, Search, HandHeart, FileText, Users, Camera, Calendar } from 'lucide-react';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import { LINKS } from '../constants';

const Step = ({ number, title, description, items, icon: Icon }: { number: string, title: string, description: string, items?: string[], icon: any }) => (
  <div className="flex flex-col md:flex-row gap-6 items-start">
    <div className="flex-shrink-0 flex flex-col items-center">
      <div className="w-16 h-16 rounded-full bg-brand-gold text-white flex items-center justify-center text-2xl font-bold shadow-lg z-10">
        {number}
      </div>
      <div className="h-full w-1 bg-gray-200 my-2 md:hidden"></div>
    </div>
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 flex-1 hover:border-brand-gold transition-colors w-full">
      <div className="flex items-center mb-4">
        <Icon className="h-6 w-6 text-brand-dark mr-3" />
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      </div>
      <p className="text-gray-600 leading-relaxed mb-4">{description}</p>
      {items && (
        <ul className="space-y-2 bg-gray-50 p-4 rounded-lg text-sm text-gray-700">
          {items.map((item, idx) => (
            <li key={idx} className="flex items-start">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  </div>
);

const HowItWorks: React.FC = () => {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-4xl font-black text-gray-900">Apadrinhamento e Protocolos</h1>
          <p className="mt-4 text-xl text-gray-600">
            Para garantir seriedade, transparência e organização, adotamos protocolos rígidos.
          </p>
        </div>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-8 before:w-0.5 before:-translate-x-1/2 before:bg-gray-200 before:hidden before:md:block">
          
          <Step 
            number="1" 
            title="Organização das Visitas" 
            description="Toda visita é um ato oficial. Não improvisamos."
            items={[
              "Agendamento prévio pela coordenação.",
              "Registro fotográfico/documental com autorização.",
              "Busca por acompanhamento de assistentes sociais nas entrevistas iniciais."
            ]}
            icon={Calendar}
          />

          <Step 
            number="2" 
            title="Publicidade e Transparência" 
            description="A transparência é nossa regra absoluta. Tudo acontece à luz do dia."
            items={[
              "Divulgação organizada na página oficial do Facebook.",
              "Fotos e informações apenas com autorização formal.",
              "Link oficial: facebook.com/groups/Brasileirissimos.oficial"
            ]}
            icon={Camera}
          />

          <Step 
            number="3" 
            title="Solicitação Pública de Apadrinhamento" 
            description="O acesso é democrático. Qualquer pessoa pode indicar uma necessidade."
            items={[
              "Qualquer pessoa pode solicitar inclusão de uma família.",
              "O pedido é analisado, registrado e aprovado.",
              "Publicação no grupo para escolha de um padrinho."
            ]}
            icon={Users}
          />

          <Step 
            number="4" 
            title="Auditoria Comunitária" 
            description="Quem ajuda também fiscaliza. O controle está nas mãos da sociedade."
            items={[
              "Processo público, verificável e auditável.",
              "Padrinhos acompanham a execução das ações.",
              "Nada feito às escondidas."
            ]}
            icon={Search}
          />

          <Step 
            number="5" 
            title="Documentação Obrigatória" 
            description="Essa organização garante proteção jurídica, ética e lisura no processo."
            items={[
              "Fichas de entrevista.",
              "Termos de consentimento.",
              "Registros de visitas e relatórios de evolução.",
              "Arquivamento digital auditável."
            ]}
            icon={FileText}
          />

        </div>

        <div className="mt-20 text-center bg-brand-dark text-white p-10 rounded-2xl">
          <h2 className="text-2xl font-bold mb-6">Faça parte dessa história agora</h2>
          <p className="mb-8 text-gray-300 max-w-2xl mx-auto">
            Entre no grupo, veja as histórias e manifeste seu desejo de ajudar. Nós cuidamos de todo o resto.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href={LINKS.FACEBOOK_GROUP} target="_blank" rel="noopener noreferrer">
              <Button variant="primary">Acessar Grupo Oficial</Button>
            </a>
            <Link to="/contato">
              <Button variant="outline" className="text-white border-white hover:bg-white hover:text-brand-dark">
                Falar com a Equipe
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;