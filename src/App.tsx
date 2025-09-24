import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import SUVs from "./pages/SUVs";
import Sedans from "./pages/Sedans";
import Trucks from "./pages/Trucks";
import EVs from "./pages/EVs";
import Hybrids from "./pages/Hybrids";
import Rankings from "./pages/Rankings";
import Compare from "./pages/Compare";
import Deals from "./pages/Deals";
import Guides from "./pages/Guides";
import Methodology from "./pages/Methodology";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Subscribe from "./pages/Subscribe";
import PricingDeals from "./pages/PricingDeals";
import RankingDetail from "./pages/RankingDetail";
import CarDetail from "./pages/CarDetail";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/suvs" element={<SUVs />} />
          <Route path="/sedans" element={<Sedans />} />
          <Route path="/trucks" element={<Trucks />} />
          <Route path="/evs" element={<EVs />} />
          <Route path="/hybrids" element={<Hybrids />} />
          <Route path="/rankings" element={<Rankings />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="/deals" element={<Deals />} />
          <Route path="/guides" element={<Guides />} />
          <Route path="/methodology" element={<Methodology />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/subscribe" element={<Subscribe />} />
          <Route path="/pricing-deals" element={<PricingDeals />} />
          <Route path="/rankings/:slug" element={<RankingDetail />} />
          <Route path="/cars/:make/:model" element={<CarDetail />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
