import Home from '../pages/Home';
import About from '../pages/About';
import Products from '../pages/Products';
import ProductionCapabilities from '../pages/ProductionCapabilities';
import QualityStandards from '../pages/QualityStandards';
import Contact from '../pages/Contact';
import RequestQuote from '../pages/RequestQuote';
import NotFound from '../pages/NotFound';

export const routes = {
  home: {
    id: 'home',
    label: 'Home',
    path: '/',
    component: Home
  },
  about: {
    id: 'about',
    label: 'About Us',
    path: '/about',
    component: About
  },
  products: {
    id: 'products',
    label: 'Products',
    path: '/products',
    component: Products
  },
  capabilities: {
    id: 'capabilities',
    label: 'Production Capabilities',
    path: '/capabilities',
    component: ProductionCapabilities
  },
  quality: {
    id: 'quality',
    label: 'Quality Standards',
    path: '/quality',
    component: QualityStandards
  },
  contact: {
    id: 'contact',
    label: 'Contact Us',
    path: '/contact',
    component: Contact
  },
  quote: {
    id: 'quote',
    label: 'Request Quote',
    path: '/quote',
    component: RequestQuote
  },
  notFound: {
    id: 'notFound',
    component: NotFound
  }
};

export const routeArray = Object.values(routes).filter(route => route.path);