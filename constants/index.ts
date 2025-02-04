import { FaHome, FaHistory, FaTrophy, FaChartLine, FaHandshake, FaStore, FaEnvelope, FaBook, FaBookOpen } from "react-icons/fa";

export const NAV_LINKS = [
  { href: '/', key: 'home', label: 'PÁGINA PRINCIPAL', icon: FaHome },
  { href: '/historia', key: 'history', label: 'NUESTRA HISTORIA', icon: FaBookOpen },
  { href: '/liga-valenciana', key: 'ligavalenciana', label: 'S. VALENCIANA', icon: FaTrophy },
  { href: '/resultados', key: 'resultados', label: 'RESULTADOS', icon: FaChartLine },
  { href: '/patrocinadores', key: 'sponsorship', label: 'PATROCINADORES', icon: FaHandshake },
  { href: '/tienda', key: 'store', label: 'TIENDA', icon: FaStore },
  { href: '/contacto', key: 'contactus', label: 'CONTACTO', icon: FaEnvelope }
];
