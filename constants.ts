import { Heart, Home, Info, Target, Layers, Users, Phone, FileText, Image } from 'lucide-react';

export const LINKS = {
  FACEBOOK_GROUP: "https://www.facebook.com/groups/Brasileirissimos.oficial",
  WHATSAPP_GROUP: "https://chat.whatsapp.com/DdPNSUmjrThFeJnWvfCyNg?mode=hqrt1",
  RADIO_TATUAPE: "#" // Placeholder
};

export const STATS = {
  MEMBERS: "6.400+",
  FAMILIES: "120+",
  CHILDREN: "350+",
  VOLUNTEERS: "85+",
  COOPERATIVES: "5+",
  MEALS: "15.000+",
  COURSES: "45+"
};

export const NAV_ITEMS = [
  { label: "Início", path: "/", icon: Home },
  { label: "Quem Somos", path: "/quem-somos", icon: Info },
  { label: "Nosso Propósito", path: "/proposito", icon: Target },
  { label: "Como Funciona", path: "/como-funciona", icon: Layers },
  { label: "Galeria", path: "/galeria", icon: Image },
  { label: "Transparência", path: "/transparencia", icon: FileText },
  { label: "Participe", path: "/participe", icon: Users },
  { label: "Contato", path: "/contato", icon: Phone },
];