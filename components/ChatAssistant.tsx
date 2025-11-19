import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, Minus } from 'lucide-react';

const ChatAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([
    { text: "Olá! Sou a inteligência artificial do Projeto SÓ 1. Como posso ajudar você hoje? 💙", isUser: false }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Configuração da API Key com Fallback seguro
  // 1. Tenta usar a variável de ambiente (Vercel)
  // 2. Se não existir (ex: preview local sem env), usa a chave fornecida diretamente para garantir funcionamento
  const API_KEY = (typeof process !== 'undefined' && process.env && process.env.API_KEY) 
    ? process.env.API_KEY 
    : 'AIzaSyAlYoEBWnTiawEHC3UJ76bukWAWwjpFuYk';
    
  const MODEL = "gemini-2.0-flash";

  // Scroll to bottom of chat
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen, isMinimized]);

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = input;
    const newMessages = [...messages, { text: userMessage, isUser: true }];
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);

    try {
      if (!API_KEY) {
        throw new Error("Chave de API não configurada.");
      }

      // System Instruction
      const systemInstructionText = `
        Você é um assistente virtual oficial do Projeto SÓ 1, uma iniciativa da Rádio Tatuapé FM.
        Seu tom é acolhedor, empático, humanitário e educado. Use emojis ocasionalmente 💙.
        
        SEUS OBJETIVOS:
        1. Acolher quem quer ajudar ou precisa de ajuda.
        2. DIRECIONAR INSISTENTEMENTE para os canais oficiais, pois é lá que a auditoria e organização acontecem.
        
        INFORMAÇÕES CHAVE:
        - Tudo acontece no GRUPO DO FACEBOOK: https://www.facebook.com/groups/Brasileirissimos.oficial
          (Lá ocorrem: pedidos de apadrinhamento, fotos das visitas, auditoria dos padrinhos, transparência).
        - Comunicação Rápida no WHATSAPP: https://chat.whatsapp.com/DdPNSUmjrThFeJnWvfCyNg?mode=hqrt1
        
        REGRAS:
        - Se alguém quiser DOAR dinheiro/alimentos: Explique que organizamos tudo pelo Facebook para garantir transparência e que o próprio padrinho pode auditar. Mande o link do Facebook.
        - Se alguém quiser PEDIR AJUDA: Diga que o cadastro é feito solicitando a publicação no Grupo do Facebook.
        - Se perguntarem quem somos: Projeto humanitário da Rádio Tatuapé FM. "De 1 em 1, ajudamos todos".
        
        Sempre termine suas respostas incentivando a entrar no grupo do Facebook para ver a "Humanidade em Exercício".
      `;

      // Format history for Gemini REST API
      const contents = newMessages.map(msg => ({
        role: msg.isUser ? "user" : "model",
        parts: [{ text: msg.text }]
      }));

      // Direct Fetch Call (mimicking CURL)
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${API_KEY}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contents: contents,
            systemInstruction: {
              parts: [{ text: systemInstructionText }]
            }
          }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error("API Error Details:", errorData);
        throw new Error(`API Error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      const responseText = data.candidates?.[0]?.content?.parts?.[0]?.text || "Desculpe, não consegui processar sua resposta agora.";

      setMessages(prev => [...prev, { text: responseText, isUser: false }]);
    } catch (error) {
      console.error("Erro na IA:", error);
      setMessages(prev => [...prev, { 
        text: "Desculpe, tive um pequeno problema de conexão. Acesse nosso Grupo do Facebook para falar com humanos reais: https://www.facebook.com/groups/Brasileirissimos.oficial", 
        isUser: false 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSendMessage();
  };

  // Minimized State (Small bar at bottom)
  if (isOpen && isMinimized) {
    return (
      <div 
        className="fixed bottom-4 right-4 z-50 bg-brand-dark text-white px-4 py-2 rounded-t-lg shadow-lg cursor-pointer flex items-center space-x-2 border-t-4 border-brand-gold hover:bg-gray-800 transition-colors"
        onClick={() => setIsMinimized(false)}
      >
        <Bot className="h-5 w-5 text-brand-gold" />
        <span className="font-bold text-sm">Atendimento SÓ 1</span>
        <button onClick={(e) => { e.stopPropagation(); setIsOpen(false); }} className="ml-2 hover:text-brand-red">
          <X className="h-4 w-4" />
        </button>
      </div>
    );
  }

  // Closed State (Fab Button)
  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-brand-gold text-white p-4 rounded-full shadow-2xl hover:bg-yellow-600 hover:scale-110 transition-all duration-300 group"
        aria-label="Abrir chat de ajuda"
      >
        <MessageCircle className="h-8 w-8 animate-pulse group-hover:animate-none" />
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-sm border-2 border-white">
          Ajuda
        </span>
      </button>
    );
  }

  // Open State (Chat Window)
  return (
    <div className="fixed bottom-4 right-4 z-50 w-full max-w-sm bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200 flex flex-col h-[500px] animate-in slide-in-from-bottom-10 duration-300">
      {/* Header */}
      <div className="bg-brand-dark p-4 flex items-center justify-between text-white border-b-4 border-brand-gold">
        <div className="flex items-center space-x-2">
          <div className="bg-white/10 p-2 rounded-full">
            <Bot className="h-6 w-6 text-brand-gold" />
          </div>
          <div>
            <h3 className="font-bold text-sm">Assistente Virtual SÓ 1</h3>
            <span className="text-xs text-green-400 flex items-center gap-1">
              <span className="block h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
              Online
            </span>
          </div>
        </div>
        <div className="flex items-center space-x-1">
          <button onClick={() => setIsMinimized(true)} className="p-1 hover:bg-white/20 rounded transition">
            <Minus className="h-5 w-5" />
          </button>
          <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-red-500/80 rounded transition">
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 bg-gray-50 space-y-4">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}>
            <div 
              className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed shadow-sm ${
                msg.isUser 
                  ? 'bg-brand-blue text-white rounded-tr-none' 
                  : 'bg-white text-gray-800 border border-gray-200 rounded-tl-none'
              }`}
            >
              {/* Render basic links if present in text */}
              {msg.text.split(/(https?:\/\/[^\s]+)/g).map((part, i) => 
                part.match(/https?:\/\/[^\s]+/) ? (
                  <a key={i} href={part} target="_blank" rel="noopener noreferrer" className="underline font-bold hover:text-brand-gold break-all">
                    {part}
                  </a>
                ) : (
                  <span key={i}>{part}</span>
                )
              )}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white p-3 rounded-2xl rounded-tl-none border border-gray-200 shadow-sm">
              <div className="flex space-x-1">
                <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-3 bg-white border-t border-gray-100">
        <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 border border-gray-200 focus-within:ring-2 focus-within:ring-brand-gold focus-within:border-transparent transition-all">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Digite sua dúvida..."
            className="flex-1 bg-transparent outline-none text-sm text-gray-700 placeholder-gray-500"
            disabled={isLoading}
          />
          <button 
            onClick={handleSendMessage}
            disabled={isLoading || !input.trim()}
            className={`ml-2 p-2 rounded-full transition-colors ${
              input.trim() ? 'bg-brand-gold text-white hover:bg-yellow-600' : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            <Send className="h-4 w-4" />
          </button>
        </div>
        <div className="text-center mt-2">
           <span className="text-[10px] text-gray-400">IA do Projeto SÓ 1 - Rádio Tatuapé FM</span>
        </div>
      </div>
    </div>
  );
};

export default ChatAssistant;