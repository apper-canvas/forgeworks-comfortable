import HomePage from '@/components/pages/HomePage';
import AboutPage from '@/components/pages/AboutPage';
import ProductsPage from '@/components/pages/ProductsPage';
import ProductionCapabilitiesPage from '@/components/pages/ProductionCapabilitiesPage';
import QualityStandardsPage from '@/components/pages/QualityStandardsPage';
import ContactPage from '@/components/pages/ContactPage';
import RequestQuotePage from '@/components/pages/RequestQuotePage';
import NotFoundPage from '@/components/pages/NotFoundPage';

export const routes = {
  home: {
    id: 'home',
    label: 'Home',
    path: '/',
    component: HomePage
  },
  about: {
    id: 'about',
    label: 'About Us',
    path: '/about',
    component: AboutPage
  },
  products: {
    id: 'products',
    label: 'Products',
    path: '/products',
    component: ProductsPage
  },
  capabilities: {
    id: 'capabilities',
    label: 'Production Capabilities',
    path: '/capabilities',
    component: ProductionCapabilitiesPage
  },
  quality: {
    id: 'quality',
    label: 'Quality Standards',
    path: '/quality',
    component: QualityStandardsPage
  },
  contact: {
    id: 'contact',
    label: 'Contact Us',
    path: '/contact',
    component: ContactPage
  },
  quote: {
    id: 'quote',
    label: 'Request Quote',
    path: '/quote',
    component: RequestQuotePage
  },
  notFound: {
    id: 'notFound',
    component: NotFoundPage
  }
};

export const routeArray = Object.values(routes).filter(route => route.path);