import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    tagline: "Perfect for getting started",
    price: 0,
    period: "Month",
    features: [
      "Access to 10 free tools",
      "Basic templates",
      "Community support",
      "1 project per month",
    ],
    cta: "Get Started Free",
    highlighted: false,
  },
  {
    name: "Pro",
    tagline: "Ideal for professionals",
    price: 29,
    period: "Month",
    features: [
      "Access to all premium tools",
      "Unlimited templates",
      "Priority support",
      "Unlimited projects",
      "Cloud Sync",
      "Advanced analytics",
    ],
    cta: "Start Pro Trial",
    highlighted: true,
    badge: "Most Popular",
  },
  {
    name: "Enterprise",
    tagline: "For teams and businesses",
    price: 99,
    period: "Month",
    features: [
      "Everything in Pro",
      "Team collaboration",
      "Custom integrations",
      "Dedicated support",
      "We guarantee",
      "Custom branding",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-30 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-3">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-400 text-sm md:text-base">
            Choose the plan that fits your needs. Upgrade or downgrade any time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative rounded-2xl p-7 flex flex-col gap-5 transition-all duration-300 ${
                plan.highlighted
                  ? "text-white shadow-2xl shadow-purple-200"
                  : "border border-gray-100 shadow-sm text-gray-900"
              }`}
              style={{
                background: plan.highlighted
                  ? "linear-gradient(to right, #4F39F6, #9514FA)"
                  : "#F9FAFC",
              }}
            >
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="bg-[#FEF3C6] text-[#BB4D00] text-xs font-bold px-4 py-1.5 rounded-full shadow">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div>
                <h3 className="text-lg font-extrabold mb-1">{plan.name}</h3>
                <p
                  className={`text-xs ${plan.highlighted ? "text-purple-200" : "text-gray-400"}`}
                >
                  {plan.tagline}
                </p>
              </div>

              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-extrabold">${plan.price}</span>
                <span
                  className={`text-sm ${plan.highlighted ? "text-purple-200" : "text-gray-400"}`}
                >
                  /{plan.period}
                </span>
              </div>

              <ul className="flex flex-col gap-2 flex-1">
                {plan.features.map((f, j) => (
                  <li
                    key={j}
                    className={`text-sm flex items-center gap-2 ${plan.highlighted ? "text-purple-100" : "text-gray-500"}`}
                  >
                    <Check
                      className="w-4 h-4 shrink-0"
                      style={{ color: "#30B868" }}
                    />
                    {f}
                  </li>
                ))}
              </ul>

              <button
                className="w-full py-3 rounded-full font-semibold text-sm transition-colors mt-auto cursor-pointer"
                style={
                  plan.highlighted
                    ? { background: "#ffffff", color: "#4F39F6" }
                    : {
                        background:
                          "linear-gradient(to right, #4F39F6, #9514FA)",
                        color: "#ffffff",
                      }
                }
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
