export default function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '399',
      text: 'per month. That’s just $13 per meal!',
      features: [
        '1 meal per day',
        'Order from 11am to 9pm',
        'Delivery is free',
      ],
      bg: 'border-2 border-[#fdf2e9]',
      justify: 'end',
    },
    {
      name: 'Complete',
      price: '649',
      text: 'per month. That’s just $11 per meal!',
      features: [
        '<strong>2 meals</strong> per day',
        'Order <strong>24/7</strong>',
        'Delivery is free',
        'Get access to latest recipes',
      ],
      bg: 'bg-[#fdf2e9]',
      bestValue: true,
    },
  ];

  const features = [
    {
      icon: 'infinite-outline',
      title: 'Never cook again!',
      text: 'Our subscriptions cover 365 days per year, even including major holidays.',
    },
    {
      icon: 'nutrition-outline',
      title: 'Local and organic',
      text: 'Our cooks only use local, fresh, and organic products to prepare your meals.',
    },
    {
      icon: 'leaf-outline',
      title: 'No waste',
      text: 'All our partners only use reusable containers to package all your meals.',
    },
    {
      icon: 'pause-outline',
      title: 'Pause anytime',
      text: 'Going on vacation? Just pause your subscription, and we refund unused days.',
    },
  ];

  return (
    <section className="section-pricing py-[9.6rem]" id="pricing">
      <div className="container max-w-[120rem] mx-auto px-[3.2rem] text-center">
        <span className="subheading block text-[#cf711f] text-[1.6rem] font-medium uppercase tracking-[0.75px] mb-[1.6rem]">
          Pricing
        </span>
        <h2 className="heading-secondary text-[4.4rem] font-bold text-[#333] leading-[1.2] mb-[9.6rem] max-[1200px]:text-[3.6rem] max-[704px]:mb-[4.8rem]">
          Eating well without breaking the bank
        </h2>
      </div>

      {/* Plans */}
      <div className="container max-w-[120rem] mx-auto px-[3.2rem] grid grid-cols-1 md:grid-cols-2 gap-[4.8rem] mb-[6.4rem]">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`pricing-plan ${plan.bg} rounded-[11px] p-[4.8rem] shadow-[0_2.4rem_4.8rem_rgba(0,0,0,0.075)] relative overflow-hidden w-full`}
          >
            {plan.bestValue && (
              <div className="absolute top-[6%] right-[-18%] text-[1.2rem] font-bold uppercase text-[#333] bg-[#fcc419] px-[3.2rem] py-[0.4rem] rotate-45">
                Best Value
              </div>
            )}
            <header className="plan-header text-center mb-[4.8rem]">
              <p className="plan-name text-[#cf711f] text-[1.8rem] font-semibold uppercase tracking-[0.75px] mb-[1.6rem]">
                {plan.name}
              </p>
              <p className="plan-price text-[5.2rem] font-bold text-[#333] mb-[1.2rem]">
                <span>$</span>{plan.price}
              </p>
              <p className="plan-text text-[1.6rem] text-[#6f6f6f]">{plan.text}</p>
            </header>
            <ul className="list flex flex-col gap-[2rem]">
  {plan.features.map((feature, i) => (
    <li
      key={i}
      className="list-item text-[1.8rem] text-[#555]"
    >
      <span className="flex items-start gap-[1rem]">
        
        <svg
          className="list-icon flex-shrink-0 h-[2.4rem] w-[2.4rem] text-[#51cf66] mt-[0.2rem]" // mt اضافه شده برای alignment
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 13l4 4L19 7"
          ></path>
        </svg>

        
        <span
          dangerouslySetInnerHTML={{ __html: feature }}
          className="inline-block leading-[1.4]"
        ></span>
      </span>
    </li>
  ))}
</ul>

            <div className="plan-sign-up text-center mt-[4.8rem]">
              <a
                href="#"
                className="btn btn-full bg-[#e67e22] text-white px-[2.4rem] py-[1.2rem] rounded-[9px] font-semibold text-[1.8rem] hover:bg-[#cf711f] transition-colors"
              >
                Start eating well
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Features */}
      <div className="container max-w-[120rem] mx-auto px-[3.2rem] grid grid-cols-1 md:grid-cols-4 gap-[4.8rem]">
        {features.map((feature, index) => (
          <div
            key={index}
            className="feature text-center flex flex-col items-center"
          >
            <svg
              className="feature-icon h-[4.8rem] w-[4.8rem] text-[#e67e22] bg-[#fdf2e9] rounded-full p-[1.2rem] mb-[2.4rem]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  feature.icon === 'infinite-outline'
                    ? 'M7 7h10v10H7z'
                    : feature.icon === 'nutrition-outline'
                    ? 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z'
                    : feature.icon === 'leaf-outline'
                    ? 'M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l5.66-5.66C13.44 16.87 17 13.88 17 8z'
                    : 'M6 5c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2H6zm10 6H8v2h8v-2z'
                }
              ></path>
            </svg>
            <p className="feature-title text-[2.2rem] font-bold text-[#333] mb-[1.2rem]">
              {feature.title}
            </p>
            <p className="feature-text text-[1.6rem] leading-[1.6] text-[#555]">
              {feature.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
