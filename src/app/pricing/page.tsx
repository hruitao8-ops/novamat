import { Suspense } from "react";
import PricingContent from "./pricing-content";

export default function PricingPage() {
  return (
    <Suspense fallback={
      <main className="min-h-screen bg-background flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-muted border-t-orange-500 rounded-full animate-spin" />
      </main>
    }>
      <PricingContent />
    </Suspense>
  );
}
