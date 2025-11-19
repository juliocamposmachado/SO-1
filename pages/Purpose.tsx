import React from 'react';
import { Baby, Home, MapPin } from 'lucide-react';
import { PillarProps } from '../types';

const PillarCard: React.FC<PillarProps> = ({ title, description, items, icon: Icon, color }) => (
  <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 flex flex-col h-full">
    <div className={`p-6 ${color} text-white`}>
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-bold">{title}</h3>
        <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm">
          <Icon className="h-8 w-8 text-white" />
        </div>
      </div>
    </div>
    <div className="p-8 flex-1 flex flex-col">
      <p className="text-gray-600 mb-6 text-lg">{description}</p>
      <div className="mt-auto">
        <h4 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wider">Ações Principais:</h4>
        <ul className="space-y-3">
          {items.map((item, idx) => (
            <li key={idx} className="flex items-start">
              <span className="h-2 w-2 mt-2 bg-gray-300 rounded-full mr-3 flex-shrink-0"></span>
              <span className="text-gray-700 font-medium">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

const Purpose: React.FC = () => {
  const sharedImage = "https://scontent.fcgh64-1.fna.fbcdn.net/v/t39.30808-6/585899047_864052989476595_5759492698603508111_n.png?stp=dst-jpg_s720x720_tt6&_nc_cat=111&ccb=1-7&_nc_sid=2285d6&_nc_eui2=AeEXvTl3YHsKZdpFRqz5NTaaEfU3ECLkwm0R9TcQIuTCbfDrSZqNDtcwZ1CVDucvUwo2ZvQHM4z_LCF2YvhmIcb1&_nc_ohc=d5CVo5IOXKwQ7kNvwGfFj6G&_nc_oc=Adl7fCd88eHf-dBXgi6TmuacqFjkvbOTIHzBQoEw80ROoXQU7qk_2hjX6R11OqMuF41e47EpVQ7t9C4GHf-l69h5&_nc_zt=23&_nc_ht=scontent.fcgh64-1.fna&_nc_gid=w0ZZ9ARWJ-LPIoGNua3rTw&oh=00_AfjgtU3-Hgui7goXH49kB-kbLjZg3oZ85VkJh-cnPzvwVQ&oe=692329E2";

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-black text-gray-900">Nosso Propósito</h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Atuamos em três frentes estratégicas para garantir não apenas o alívio imediato, mas a transformação estrutural de longo prazo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <PillarCard
            title="1. Crianças"
            description="Nossa prioridade máxima. Garantimos que a infância seja preservada com dignidade, saúde e segurança emocional."
            items={[
              "Erradicação da fome infantil",
              "Acompanhamento escolar e reforço",
              "Segurança emocional e lazer",
              "Apoio médico e odontológico básico"
            ]}
            icon={Baby}
            color="bg-brand-gold"
          />
          
          <PillarCard
            title="2. Famílias"
            description="O foco é a autonomia. Não queremos dependência, queremos dar as ferramentas para que os pais sustentem seus lares."
            items={[
              "Cursos profissionalizantes rápidos",
              "Núcleos de capacitação técnica",
              "Criação de cooperativas de trabalho",
              "Inclusão no mercado de trabalho local"
            ]}
            icon={Home}
            color="bg-brand-blue"
          />

          <PillarCard
            title="3. Comunidades"
            description="Transformar o ambiente. Quando a estrutura melhora, a violência diminui e a esperança renasce."
            items={[
              "Projetos de revitalização escolar",
              "Ambulatórios comunitários",
              "Oficinas de cultura e esporte",
              "Apoio psicológico coletivo"
            ]}
            icon={MapPin}
            color="bg-brand-dark"
          />
        </div>

        {/* Impact Section */}
        <div className="mt-24 bg-white rounded-3xl p-8 md:p-16 shadow-lg text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Cooperativas: O Caminho para a Liberdade</h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-10">
            Um dos maiores orgulhos do Projeto SÓ 1 é o fomento ao empreendedorismo social. Incentivamos a criação de cooperativas de costura, produção de alimentos e prestação de serviços, onde o lucro é dividido entre as famílias participantes, gerando renda real e digna.
          </p>
          <img 
            src={sharedImage}
            alt="Trabalho em equipe" 
            className="rounded-xl w-full object-cover h-64 md:h-80 grayscale hover:grayscale-0 transition-all duration-700"
          />
        </div>
      </div>
    </div>
  );
};

export default Purpose;