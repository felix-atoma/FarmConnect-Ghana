

import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../../pages/Home'
import AboutFarmConnectGhana from './About';
import Careers from './Careers';
import TermsAndConditions from './TermsAndConditions';
import PrivacyPolicy from './PrivacyPolicy';
import BillingPolicy from './pages/BillingPolicy';
import CopyrightInfringementPolicy from './CopyRightInfringmentPolicy';
import SafetyTips from './SafetyTips';
import ContactUs from './ContactUs';
import FAQ from './FAQ';
import FarmConnectGhana from './FarmConnectGhana';
import Support from './Support';
import OurApps from './OurApps';
import OurResources from './Ressources';
import HotLinks from './Hotlinks';
import NotFound from './pages/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about-farm-connect-ghana',
    element: <AboutFarmConnectGhana />,
  },
  {
    path: '/we-are-hiring',
    element: <Careers />,
  },
  {
    path: '/terms-and-conditions',
    element: <TermsAndConditions />,
  },
  {
    path: '/privacy-policy',
    element: <PrivacyPolicy />,
  },
  {
    path: '/billing-policy',
    element: <BillingPolicy />,
  },
  {
    path: '/copyright-infringement-policy',
    element: <CopyrightInfringementPolicy />,
  },
  {
    path: '/safety-tips',
    element: <SafetyTips />,
  },
  {
    path: '/contact-us',
    element: <ContactUs />,
  },
  {
    path: '/faq',
    element: <FAQ />,
  },
  {
    path: '/farm-connect-ghana',
    element: <FarmConnectGhana />,
  },
  {
    path: '/support',
    element: <Support />,
  },
  {
    path: '/our-apps',
    element: <OurApps />,
  },
  {
    path: '/our-resources',
    element: <OurResources />,
  },
  {
    path: '/hot-links',
    element: <HotLinks />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

const Index = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default Index;
