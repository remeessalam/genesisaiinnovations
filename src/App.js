import { Route, Routes, useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { LandingPage } from "./pages/landingPages/LandingPage";
import LandingHeader from "./componets/landingPages/LandingHeader";
import LandingFooter from "./componets/landingPages/LandingFooter";
import WebsiteHeader from "./componets/website/WebsiteHeader";
import WebsiteFooter from "./componets/website/WebsiteFooter";
import { routes } from "./constant";
import { Suspense, useEffect } from "react";
import { LoadingSpinner } from "./componets/common/LoadingSpinner";
import SpinnerContextProvider, {
  LoadingSpinnerContext,
} from "./componets/SpinnerContext";
import ServicePageLayout from "./layout/ServicePageLayout";
import ArtificialIntelligence from "./componets/website/serivces/ArtificialIntelligence.jsx";
import ChatbotDevelopment from "./componets/website/serivces/ChatbotDevelopment.jsx";
import DataAnalytics from "./componets/website/serivces/DataAnalytics.jsx";
import GameDevelopment from "./componets/website/serivces/GameDevelopment.jsx";
import MachineLearning from "./componets/website/serivces/MachineLearning.jsx";
import CloudComputing from "./componets/website/serivces/CloudComputing.jsx";
import WhatsAppIcon from "./componets/common/Whatsapp.jsx";
import { Toaster } from "react-hot-toast";
import Thankyou from "./componets/common/ThankYou.jsx";
import CustomSoftware from "./componets/website/serivces/CustomSoftware.jsx";
import AppDevelopment from "./componets/website/serivces/AppDevelopment.jsx";
import WebDevelopment from "./componets/website/serivces/WebDevelopment.jsx";
import UIUXDevelopment from "./componets/website/serivces/UIUXDevelopment.jsx";
import IotDevelopment from "./componets/website/serivces/IotDevelopment.jsx";
import DataScience from "./componets/website/serivces/DataScience.jsx";
import DevopsServices from "./componets/website/serivces/DevopsServices.jsx";
import VRARDevelopment from "./componets/website/serivces/VRARDevelopment.jsx";
import CyberSecurity from "./componets/website/serivces/CyberSecurity.jsx";
import BigDataSolutions from "./componets/website/serivces/BigDataSolutions.jsx";
import NaturalLanguageProcessing from "./componets/website/serivces/NaturalLanguageProcessing.jsx";
import ComputerVisionSolutions from "./componets/website/serivces/ComputerVisionSolutions.jsx";

AOS.init({
  once: true,
  duration: 500,
  offset: 0,
});

export default function App() {
  return (
    <SpinnerContextProvider>
      <LoadingSpinnerContext />
      <Suspense fallback={<LoadingSpinner />}>
        <WhatsAppIcon />
        <Toaster
          position="top-bottom"
          toastOptions={{
            style: {
              background: "#010C2A",
              color: "#ffffff",
            },
          }}
        />
        <ScrollToTop />
        <Routes>
          {/* Website Pages */}
          {routes.map(({ component, name, path }, index) => (
            <Route
              key={index}
              path={path}
              element={
                <>
                  <WebsiteHeader name={name} />
                  {component}
                  <WebsiteFooter />
                </>
              }
            />
          ))}

          <Route path="/thank-you" element={<Thankyou />} />

          <Route path="/services" element={<ServicePageLayout />}>
            <Route
              path="custom-software-development"
              element={<CustomSoftware />}
            />
            <Route path="mobile-app-development" element={<AppDevelopment />} />
            <Route path="web-development" element={<WebDevelopment />} />
            <Route path="cloud-computing" element={<CloudComputing />} />
            <Route path="ai-development" element={<ArtificialIntelligence />} />
            <Route
              path="user-experience-design"
              element={<UIUXDevelopment />}
            />
            <Route
              path="machine-learning-solutions"
              element={<MachineLearning />}
            />
            <Route path="iot-development" element={<IotDevelopment />} />
            <Route path="data-science" element={<DataScience />} />
            <Route
              path="chatbot-development"
              element={<ChatbotDevelopment />}
            />
            <Route path="devops-services" element={<DevopsServices />} />
            <Route path="data-analytics-bi" element={<DataAnalytics />} />
            <Route path="game-development" element={<GameDevelopment />} />
            <Route path="vr-ar-development" element={<VRARDevelopment />} />
            <Route path="cybersecurity" element={<CyberSecurity />} />
            <Route path="big-data-solutions" element={<BigDataSolutions />} />
            <Route
              path="natural-language-processing"
              element={<NaturalLanguageProcessing />}
            />

            <Route
              path="computer-vision-solutions"
              element={<ComputerVisionSolutions />}
            />
          </Route>

          {/* Landing Pages */}
          <Route
            path="/web-development"
            element={
              <>
                <LandingHeader />
                <LandingPage page={"web-development"} />
                <LandingFooter />
              </>
            }
          />
          <Route
            path="/app-development"
            element={
              <>
                <LandingHeader />
                <LandingPage page={"app-development"} />
                <LandingFooter />
              </>
            }
          />
        </Routes>
      </Suspense>
    </SpinnerContextProvider>
  );
}

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);
  return null;
};
