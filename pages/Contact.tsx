import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import Button from '../components/Button';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Info Column */}
          <div>
            <h1 className="text-4xl font-black text-gray-900 mb-6">Fale Conosco</h1>
            <p className="text-lg text-gray-600 mb-8">
              Estamos prontos para organizar sua visita ou receber sua indicação. A comunicação é direta e humana.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-brand-gold p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Telefones / WhatsApp</h3>
                  <div className="space-y-1 mt-1">
                    <p className="text-gray-600 font-medium">+55 11 3680-8030</p>
                    <p className="text-gray-600 font-medium">+55 11 99294-6628</p>
                    <p className="text-gray-600 font-medium">+55 11 97060-3441</p>
                  </div>
                  <span className="text-xs text-gray-400 block mt-1">Horário comercial</span>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-brand-dark p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">E-mail</h3>
                  <p className="text-gray-600">radiotatuapefm@gmail.com</p>
                  <p className="text-gray-600">juliocamposmachado@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-brand-blue p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Sede Rádio Tatuapé FM</h3>
                  <p className="text-gray-600">Tatuapé, São Paulo - SP</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-white rounded-xl shadow-md">
              <h4 className="font-bold text-brand-dark mb-2">Imprensa e Parcerias</h4>
              <p className="text-sm text-gray-600">
                Para solicitações de mídia ou parcerias corporativas, por favor envie um e-mail com o assunto "Parceria Institucional".
              </p>
            </div>
          </div>

          {/* Form Column */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Envie sua mensagem</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome Completo</label>
                <input 
                  type="text" 
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition"
                  placeholder="Seu nome"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
                  <input 
                    type="email" 
                    id="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefone</label>
                  <input 
                    type="tel" 
                    id="phone"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition"
                    placeholder="(11) 99294-6628"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Assunto</label>
                <select 
                  id="subject"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition bg-white"
                >
                  <option>Quero Apadrinhar (Vi no Facebook)</option>
                  <option>Pedido de Publicação de Desejo de Adoção</option>
                  <option>Quero ser voluntário</option>
                  <option>Indicar família</option>
                  <option>Quero doar</option>
                  <option>Outros assuntos</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensagem</label>
                <textarea 
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition resize-none"
                  placeholder="Conte-nos como quer ajudar ou quem precisa de ajuda..."
                ></textarea>
              </div>

              <Button fullWidth type="button">
                Enviar Mensagem e Preparar Visita
              </Button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;
