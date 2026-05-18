export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <div className="inline-block bg-[#58a6ff]/10 border border-[#58a6ff]/30 text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Shipping Cost Optimizer
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
          Stop Overpaying on{" "}
          <span className="text-[#58a6ff]">Every Shipment</span>
        </h1>
        <p className="text-lg md:text-xl text-[#8b949e] max-w-2xl mx-auto mb-10">
          Compare real-time rates across UPS, FedEx, and USPS instantly. Our optimizer picks the cheapest carrier for every package — automatically.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-14">
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Start Saving — $17/mo
          </a>
          <span className="text-[#8b949e] text-sm">No contracts. Cancel anytime.</span>
        </div>
        <div className="grid grid-cols-3 gap-6 max-w-lg mx-auto">
          <div className="text-center">
            <div className="text-2xl font-bold text-[#58a6ff]">3</div>
            <div className="text-xs text-[#8b949e] mt-1">Carriers Compared</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-[#58a6ff]">40%</div>
            <div className="text-xs text-[#8b949e] mt-1">Avg. Savings</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-[#58a6ff]">Real-time</div>
            <div className="text-xs text-[#8b949e] mt-1">Rate Pulls</div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-8 text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-extrabold text-white mb-1">$17</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Real-time UPS, FedEx & USPS rates",
              "Package size optimization engine",
              "Carrier performance analytics",
              "Automated daily rate pulls",
              "Unlimited shipment history",
              "Email support"
            ].map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-6">
          <div className="border-b border-[#30363d] pb-6">
            <h3 className="font-semibold text-white mb-2">Which carriers are supported?</h3>
            <p className="text-[#8b949e] text-sm">We integrate with UPS, FedEx, and USPS via their official APIs, pulling live rates for every shipment you create.</p>
          </div>
          <div className="border-b border-[#30363d] pb-6">
            <h3 className="font-semibold text-white mb-2">How does the package optimizer work?</h3>
            <p className="text-[#8b949e] text-sm">Our algorithm analyzes your item dimensions and suggests the smallest box that fits, reducing dimensional weight charges — often the biggest hidden cost.</p>
          </div>
          <div className="pb-6">
            <h3 className="font-semibold text-white mb-2">Can I cancel anytime?</h3>
            <p className="text-[#8b949e] text-sm">Yes. Cancel with one click from your dashboard. No cancellation fees, no questions asked.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-8 text-[#8b949e] text-xs">
        © {new Date().getFullYear()} ShipSmart. All rights reserved.
      </footer>
    </main>
  );
}
