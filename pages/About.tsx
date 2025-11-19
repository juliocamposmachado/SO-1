import React from 'react';
import { Scale, Radio, Users, BookOpen, Shield } from 'lucide-react';

const About: React.FC = () => {
  const sharedImage = "https://scontent.fcgh64-1.fna.fbcdn.net/v/t39.30808-6/585899047_864052989476595_5759492698603508111_n.png?stp=dst-jpg_s720x720_tt6&_nc_cat=111&ccb=1-7&_nc_sid=2285d6&_nc_eui2=AeEXvTl3YHsKZdpFRqz5NTaaEfU3ECLkwm0R9TcQIuTCbfDrSZqNDtcwZ1CVDucvUwo2ZvQHM4z_LCF2YvhmIcb1&_nc_ohc=d5CVo5IOXKwQ7kNvwGfFj6G&_nc_oc=Adl7fCd88eHf-dBXgi6TmuacqFjkvbOTIHzBQoEw80ROoXQU7qk_2hjX6R11OqMuF41e47EpVQ7t9C4GHf-l69h5&_nc_zt=23&_nc_ht=scontent.fcgh64-1.fna&_nc_gid=w0ZZ9ARWJ-LPIoGNua3rTw&oh=00_AfjgtU3-Hgui7goXH49kB-kbLjZg3oZ85VkJh-cnPzvwVQ&oe=692329E2";

  return (
    <div className="bg-white min-h-screen py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Quem Somos</h1>
          <div className="h-1 w-24 bg-brand-gold mx-auto rounded-full"></div>
          <p className="mt-6 text-xl text-gray-600">
            Mais que um projeto social, um compromisso ético, jurídico e humanitário da Rádio Tatuapé FM.
          </p>
        </div>

        {/* Institutional Strengthening Intro */}
        <div className="bg-brand-dark text-white rounded-2xl p-8 mb-16 shadow-xl">
          <h2 className="text-2xl font-bold mb-4">Nova Etapa: Fortalecimento Institucional</h2>
          <p className="text-gray-300 leading-relaxed">
            O Projeto SÓ 1, idealizado pela Rádio Tatuapé FM, avança agora para uma nova fase, incorporando <strong>apoio jurídico, processos organizados de apadrinhamento, auditoria comunitária e protocolos de transparência</strong>. Tudo isso fundamentado na legislação brasileira que incentiva a solidariedade, a proteção familiar e o desenvolvimento comunitário.
          </p>
        </div>

        <div className="prose prose-lg text-gray-700 mx-auto max-w-none">
          
          {/* 1. Legal Basis */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center border-b pb-2">
              <BookOpen className="mr-3 h-6 w-6 text-brand-blue" />
              1. Base Jurídica e Fundamentos Constitucionais
            </h3>
            <p>
              A atuação do Projeto SÓ 1 não é apenas uma benfeitoria moral, mas encontra respaldo direto na ordem jurídica nacional:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-brand-gold">
                <h4 className="font-bold text-gray-900 mb-2">Constituição Federal</h4>
                <ul className="text-sm space-y-2">
                  <li><strong>Art. 1º, III:</strong> Dignidade da pessoa humana como fundamento da República.</li>
                  <li><strong>Art. 3º:</strong> Construir sociedade livre, justa e solidária; erradicar pobreza.</li>
                  <li><strong>Art. 5º:</strong> Direitos fundamentais com aplicação imediata.</li>
                  <li><strong>Art. 6º:</strong> Direitos sociais (saúde, alimentação, moradia).</li>
                  <li><strong>Art. 227:</strong> Prioridade absoluta às crianças e adolescentes.</li>
                  <li><strong>Art. 204:</strong> Incentivo à participação da sociedade civil.</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-brand-blue">
                <h4 className="font-bold text-gray-900 mb-2">Estatuto da Criança (ECA)</h4>
                <ul className="text-sm space-y-2">
                  <li><strong>Art. 4º:</strong> Dever da sociedade e Estado de assegurar desenvolvimento.</li>
                  <li><strong>Art. 17:</strong> Direito à dignidade e inviolabilidade.</li>
                  <li><strong>Art. 70 & 71:</strong> Proteção integral e direito à profissionalização.</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-green-500">
                <h4 className="font-bold text-gray-900 mb-2">LOAS & Marco Regulatório</h4>
                <ul className="text-sm space-y-2">
                  <li><strong>Lei nº 8.742/93 (LOAS):</strong> Proteção à família e integração ao mercado de trabalho.</li>
                  <li><strong>Lei 13.019/2014:</strong> Cooperação entre sociedade civil e iniciativas sociais.</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-gray-800">
                <h4 className="font-bold text-gray-900 mb-2">Código Civil</h4>
                <ul className="text-sm space-y-2">
                  <li><strong>Art. 50 e 53:</strong> Atividades associativas com finalidade solidária e organização autônoma.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 2. Legal Support */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center border-b pb-2">
              <Shield className="mr-3 h-6 w-6 text-brand-red" />
              2. Apoio Jurídico Integrado
            </h3>
            <p>
              Para garantir segurança e ética, o projeto conta com suporte jurídico dedicado. Nossa função é:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none pl-0 mt-4">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✔</span> Elaborar termos de consentimento e autorização de imagem.
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✔</span> Orientar sobre limites éticos e legais do apadrinhamento.
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✔</span> Garantir conformidade com a proteção infantil.
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✔</span> Organizar documentação auditável de entregas e visitas.
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✔</span> Resguardar voluntários, padrinhos e a equipe.
              </li>
            </ul>
            <p className="mt-4 text-sm text-gray-500 italic">
              A atuação jurídica assegura que o projeto avance com integridade, segurança e legitimidade.
            </p>
          </div>

          {/* Original Content - Rádio and Philosophy */}
          <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-4 flex items-center">
            <Radio className="mr-3 h-6 w-6 text-brand-dark" />
            O Papel da Rádio Tatuapé FM
          </h3>
          <p>
            A Rádio Tatuapé FM decidiu usar sua voz e alcance não apenas para informar ou entreter, mas para mobilizar. Somos o elo entre quem pode ajudar e quem precisa desesperadamente de ajuda.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-4 flex items-center">
            <Users className="mr-3 h-6 w-6 text-brand-blue" />
            Nossa Filosofia
          </h3>
          <p>
            Acreditamos na força do indivíduo. Muitas vezes, as pessoas deixam de ajudar por acharem que sua contribuição é pequena demais diante da imensidão dos problemas sociais.
          </p>
          <p>
            O <strong>SÓ 1</strong> quebra essa barreira.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Só 1 pessoa pode adotar uma família.</li>
            <li>Só 1 cesta básica mata a fome de hoje.</li>
            <li>Só 1 curso profissionalizante muda o destino de um pai de família.</li>
          </ul>
          <p className="mt-4 font-bold text-brand-dark">
            De um em um, nós transformamos o todo.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-16">
          <img src={sharedImage} alt="Ação comunitária" className="rounded-lg shadow-lg w-full object-cover h-64 hover:scale-105 transition-transform duration-500" />
          <img src={sharedImage} alt="Equipe reunida" className="rounded-lg shadow-lg w-full object-cover h-64 hover:scale-105 transition-transform duration-500" />
        </div>
      </div>
    </div>
  );
};

export default About;