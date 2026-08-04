import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, Redirect } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import PageTransition from "./components/PageTransition";
import LogoPreloader from "./components/LogoPreloader";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import IndustriesPage from "./pages/IndustriesPage";
import BlogPage from "./pages/BlogPage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import GCCPage from "./pages/GCCPage";
import CulturePage from "./pages/CulturePage";
import CSRPage from "./pages/CSRPage";
import CareerPage from "./pages/CareerPage";
import PrivacyPage from "./pages/PrivacyPage";
import TermsPage from "./pages/TermsPage";
import AdminPage from "./pages/AdminPage";
import BlogDetailPage from "./pages/BlogDetailPage";
import PricingPage from "./pages/PricingPage";
import PortfolioPage from "./pages/PortfolioPage";
import TeamPage from "./pages/TeamPage";
import CookiePolicyPage from "./pages/CookiePolicyPage";
import MediaKitPage from "./pages/MediaKitPage";
import CandidateAwarenessPage from "./pages/CandidateAwarenessPage";
import CodeOfEthicsPage from "./pages/CodeOfEthicsPage";
import PublicationsPage from "./pages/PublicationsPage";
import ToolsPage from "./pages/ToolsPage";
import SiteMapPage from "./pages/SiteMapPage";

function Router() {
  return (
    <Switch>
      {/* Core Pages */}
      <Route path={"/"} component={Home} />
      <Route path={"/about"} component={AboutPage} />
      <Route path={"/services"} component={ServicesPage} />
      <Route path={"/contact-us"} component={ContactPage} />
      <Route path={"/industries"} component={IndustriesPage} />
      <Route path={"/blogs"} component={BlogPage} />
      <Route path={"/products"} component={ProductsPage} />
      <Route path={"/products/:id"} component={ProductDetailPage} />
      <Route path={"/global-capability-center"} component={GCCPage} />
      <Route path={"/pricing"} component={PricingPage} />
      <Route path={"/portfolio"} component={PortfolioPage} />

      {/* Company Pages */}
      <Route path={"/team"} component={TeamPage} />
      <Route path={"/our-culture"} component={CulturePage} />
      <Route path={"/philosophy"} component={CulturePage} />
      <Route path={"/csr"} component={CSRPage} />
      <Route path={"/career"} component={CareerPage} />
      <Route path={"/code-of-ethics"} component={CodeOfEthicsPage} />
      <Route path={"/media-kit"} component={MediaKitPage} />
      <Route path={"/candidate-awareness-notice"} component={CandidateAwarenessPage} />

      {/* Knowledge & Tools */}
      <Route path={"/publications"} component={PublicationsPage} />
      <Route path={"/tools"} component={ToolsPage} />
      <Route path={"/tools/:slug"} component={ToolsPage} />
      <Route path={"/site-map"} component={SiteMapPage} />

      {/* Legal */}
      <Route path={"/privacy-policy"} component={PrivacyPage} />
      <Route path={"/terms-and-conditions"} component={TermsPage} />
      <Route path={"/cookie-policy"} component={CookiePolicyPage} />

      {/* Blog Detail */}
      <Route path={"/blog/:slug"} component={BlogDetailPage} />
      <Route path={"/blogs/:slug"} component={BlogDetailPage} />

      {/* Redirects */}
      <Route path={"/case-studies"}>{() => <Redirect to="/portfolio" />}</Route>

      {/* Admin & Error */}
      <Route path={"/admin"} component={AdminPage} />
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}


function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <LogoPreloader />
          <Toaster />
          <PageTransition>
            <Router />
          </PageTransition>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
