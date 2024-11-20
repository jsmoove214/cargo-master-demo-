import React from 'react';
import { Check, AlertCircle } from 'lucide-react';

const PricingPlans = () => {
  const plans = [
    {
      name: 'Base Plan',
      price: 49,
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Inventory tracking for 2 locations',
        'Up to 5 users',
        'Basic analytics and reporting',
        'Barcode/QR code scanning',
        'Email support',
      ],
      highlighted: false,
      ctaText: 'Start Free Trial',
    },
    {
      name: 'Pro Plan',
      price: 99,
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Inventory tracking for 10 locations',
        'Unlimited users',
        'Advanced analytics and forecasting',
        'ERP/accounting integrations',
        'Supplier management',
        'Priority support',
      ],
      highlighted: true,
      ctaText: 'Start Free Trial',
    },
    {
      name: 'Enterprise',
      price: 149,
      period: '/month',
      description: 'For large-scale operations',
      features: [
        'Unlimited locations',
        'Custom integrations',
        'Batch and expiry tracking',
        'Dedicated account manager',
        'Custom API access',
        '24/7 phone support',
      ],
      highlighted: false,
      ctaText: 'Contact Sales',
    },
  ];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-sky-600 bg-clip-text text-transparent mb-4">
          Choose Your Plan
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Start with a 14-day free trial. No credit card required.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`rounded-2xl p-8 ${
              plan.highlighted
                ? 'bg-gradient-to-b from-indigo-500 to-indigo-600 text-white ring-4 ring-indigo-500 ring-opacity-50 transform scale-105'
                : 'bg-white text-gray-900 border border-gray-200'
            }`}
          >
            <div className="mb-6">
              <h3 className={`text-2xl font-bold mb-2 ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                {plan.name}
              </h3>
              <p className={plan.highlighted ? 'text-indigo-100' : 'text-gray-500'}>
                {plan.description}
              </p>
            </div>

            <div className="mb-6">
              <span className="text-4xl font-bold">${plan.price}</span>
              <span className={`${plan.highlighted ? 'text-indigo-100' : 'text-gray-500'}`}>
                {plan.period}
              </span>
            </div>

            <ul className="mb-8 space-y-4">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <Check className={`w-5 h-5 ${plan.highlighted ? 'text-indigo-200' : 'text-indigo-500'}`} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <button
              className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-200 ${
                plan.highlighted
                  ? 'bg-white text-indigo-600 hover:bg-indigo-50'
                  : 'bg-indigo-600 text-white hover:bg-indigo-700'
              }`}
            >
              {plan.ctaText}
            </button>

            {plan.highlighted && (
              <div className="mt-4 flex items-center justify-center gap-2 text-sm text-indigo-100">
                <AlertCircle className="w-4 h-4" />
                <span>Most popular choice</span>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-500 mb-4">All plans include:</p>
        <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-600">
          <span className="flex items-center gap-2">
            <Check className="w-4 h-4 text-indigo-500" />
            14-day free trial
          </span>
          <span className="flex items-center gap-2">
            <Check className="w-4 h-4 text-indigo-500" />
            No credit card required
          </span>
          <span className="flex items-center gap-2">
            <Check className="w-4 h-4 text-indigo-500" />
            Cancel anytime
          </span>
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;