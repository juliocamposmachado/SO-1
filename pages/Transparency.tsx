import React from 'react';
import { FileText, Download, TrendingUp, ShieldCheck, PieChart, Users, Building } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { LINKS } from '../constants';

const ReportCard = ({ month, year, status }: { month: string, year: string, status: 'available' | 'pending' }) => (
  <div className="bg-white border border-gray-200 rounded-lg p-4 flex items-center justify-between hover:shadow-md transition-shadow">
    <div className="flex items-center space-x-4">
      <div className={`p-2 rounded-lg ${status === 'available' ? 'bg-blue-100 text-brand-blue' : 'bg-gray-100 text-gray-400'}`}>
        <FileText className="h-6 w-6" />
      </div>
      <div>
        <p className="font-bold text-gray-900">Relatório {month}</p>
        <p className="text-sm text-gray-500">{year}</p>
      </div>
    </div>
    {status === 'available' ? (
      <button className="text-brand-blue hover:text-blue-700 font-medium text-sm flex items-center">
        <Download className="h-4 w-4 mr-1" /> Baixar
      </button>
    ) : (
      <span className="text-xs font-semibold bg-gray-100 text-gray-500 px-2 py-1 rounded">Em breve</span>
    )}
  </div>
);

const Transparency: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-black text-gray-900">Transparência Total</h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Tudo documentado, válido e auditado. Nada pode atrapalhar nossa intenção de promover a construção social solidária.
          </p>
        </div>

        {/* Manifesto Section - New */}
        <div className="bg-white rounded-2xl shadow-xl border-t-8 border-brand-gold p-8 md:p-12 mb-16">
          <div className="flex items-center mb-6">
            <Building className="h-10 w-10 text-brand-gold mr-4" />
            <h2 className="text-3xl font-black text-gray-900 uppercase">Construção Social Solidária Regional</h2>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            O Projeto SÓ 1 afirma seu compromisso com uma nova forma de transformação. Não somos apenas benfeitores; somos agentes de uma construção maior:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <span className="block font-bold text-brand-dark text-lg">Organizada</span>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <span className="block font-bold text-brand-dark text-lg">Auditada</span>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <span className="block font-bold text-brand-dark text-lg">Pública</span>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <span className="block font-bold text-brand-dark text-lg">Transparente</span>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <span className="block font-bold text-brand-dark text-lg">Legal</span>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <span className="block font-bold text-brand-dark text-lg">Social</span>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 lg:col-span-2">
              <span className="block font-bold text-brand-gold text-lg">Centrada na Dignidade Humana</span>
            </div>
          </div>
          <p className="mt-8 text-xl font-medium text-center text-brand-dark italic">
            "É a humanidade em exercício, fortalecida pela união regional e pela ação direta das pessoas que desejam fazer diferença."
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Process Card */}
          <div className="bg-white p-8 rounded-2xl shadow-lg lg:col-span-2">
            <div className="flex items-center mb-6">
              <ShieldCheck className="h-8 w-8 text-brand-gold mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Auditoria e Processos</h2>
            </div>
            <div className="prose text-gray-600">
              <p className="mb-4">
                Acreditamos na <strong>"Humanidade em Exercício"</strong>. Nosso processo é desenhado para ser público e auditável pela própria comunidade.
              </p>
              <ul className="space-y-4 list-none pl-0">
                <li className="flex items-start">
                  <div className="bg-brand-gold/10 p-2 rounded-full mr-3 mt-1">
                    <Users className="h-4 w-4 text-brand-gold" />
                  </div>
                  <span><strong>Triagem Profissional:</strong> Buscamos sempre o acompanhamento de assistentes sociais nas entrevistas para validar e documentar a realidade das famílias.</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-brand-gold/10 p-2 rounded-full mr-3 mt-1">
                    <ShieldCheck className="h-4 w-4 text-brand-gold" />
                  </div>
                  <span><strong>Auditoria pelos Padrinhos:</strong> O próprio doador (padrinho) participa, visita e audita a ação. Não há "caixa preta". Tudo é postado no grupo.</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-brand-gold/10 p-2 rounded-full mr-3 mt-1">
                    <FileText className="h-4 w-4 text-brand-gold" />
                  </div>
                  <span><strong>Publicidade (Facebook):</strong> Fotos (autorizadas) e relatórios são públicos no nosso grupo oficial. Qualquer um pode verificar a veracidade.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Stats/Graphs Placeholder */}
          <div className="bg-brand-dark text-white p-8 rounded-2xl shadow-lg">
            <div className="flex items-center mb-6">
              <PieChart className="h-8 w-8 text-brand-blue mr-3" />
              <h2 className="text-2xl font-bold">Destinação</h2>
            </div>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2 text-sm">
                  <span>Cestas Básicas Diretas</span>
                  <span>60%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-brand-gold h-2 rounded-full" style={{ width: '60%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2 text-sm">
                  <span>Educação e Cursos</span>
                  <span>25%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-brand-blue h-2 rounded-full" style={{ width: '25%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2 text-sm">
                  <span>Logística das Visitas</span>
                  <span>15%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-brand-red h-2 rounded-full" style={{ width: '15%' }}></div>
                </div>
              </div>
            </div>
            <div className="mt-8">
                <a href={LINKS.FACEBOOK_GROUP} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" fullWidth className="text-sm">
                        Auditar no Facebook
                    </Button>
                </a>
            </div>
          </div>
        </div>

        {/* Reports Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
            <div className="flex items-center">
              <TrendingUp className="h-8 w-8 text-green-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Documentação Pública</h2>
            </div>
            <Button variant="outline">Ver Anos Anteriores</Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <ReportCard month="Janeiro" year="2024" status="available" />
            <ReportCard month="Fevereiro" year="2024" status="available" />
            <ReportCard month="Março" year="2024" status="available" />
            <ReportCard month="Abril" year="2024" status="pending" />
            <ReportCard month="Maio" year="2024" status="pending" />
            <ReportCard month="Junho" year="2024" status="pending" />
          </div>
        </div>

        {/* Donation CTA */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Quer contribuir financeiramente?</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Para doações em dinheiro, utilizamos uma conta exclusiva e auditável. Entre em contato para receber os dados bancários ou PIX oficial.
          </p>
          <Link to="/contato">
            <Button variant="primary">Solicitar Dados para Doação</Button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Transparency;