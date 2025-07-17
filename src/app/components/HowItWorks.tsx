import Image from 'next/image';

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Tell us what you like (and what not)',
      description: 'Never again waste time thinking about what to eat! Omnifood AI will create a 100% personalized weekly meal plan just for you. It makes sure you get all the nutrients and vitamins you need, no matter what diet you follow!',
      img: '/img/app/app-screen-1.png',
      alt: 'iPhone app preferences selection screen',
    },
    {
      number: '02',
      title: 'Approve your weekly meal plan',
      description: 'Once per week, approve the meal plan generated for you by Omnifood AI. You can change ingredients, swap entire meals, or even add your own recipes.',
      img: '/img/app/app-screen-2.png',
      alt: 'iPhone app meal approving plan screen',
    },
    {
      number: '03',
      title: 'Receive meals at convenient time',
      description: 'Best chefs in town will cook your selected meal every day, and we will deliver it to your door whenever works best for you. You can change delivery schedule and address daily!',
      img: '/img/app/app-screen-3.png',
      alt: 'iPhone app delivery screen',
    },
  ];

  return (
    <section className="section-how py-[9.6rem] max-[1200px]:py-[9.6rem] max-[944px]:py-[9.6rem]" id="how">
      <div className="container max-w-[120rem] mx-auto px-[3.2rem]">
        <span className="subheading block text-[#cf711f] text-[1.6rem] font-medium uppercase tracking-[0.75px] mb-[1.6rem]">
          How it works
        </span>
        <h2 className="heading-secondary text-[4.4rem] font-bold text-[#333] leading-[1.2] mb-[9.6rem] max-[1200px]:text-[3.6rem] max-[704px]:mb-[4.8rem]">
          Your daily dose of health in 3 simple steps
        </h2>
      </div>
      <div className="container max-w-[120rem] mx-auto px-[3.2rem] grid grid-cols-1 md:grid-cols-2 gap-x-[6.4rem] gap-y-[9.6rem] items-center max-[1200px]:gap-x-[4.8rem] max-[1200px]:gap-y-[6.4rem] max-[544px]:gap-y-[4.8rem]">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col">
            <div className="step-text-box">
              <p className="step-number text-[8.6rem] font-semibold text-[#ddd] mb-[1.2rem] max-[944px]:text-[7.4rem]">
                {step.number}
              </p>
              <h3 className="heading-tertiary text-[3rem] font-bold text-[#333] leading-[1.2] mb-[3.2rem] max-[1200px]:text-[2.4rem]">
                {step.title}
              </h3>
              <p className="step-description text-[1.8rem] leading-[1.8] max-[944px]:text-[1.6rem]">
                {step.description}
              </p>
            </div>
            <div className="step-img-box relative flex justify-center items-center max-[544px]:translate-y-[2.4rem]">
              <Image
                src={step.img}
                alt={step.alt}
                width={200}
                height={400}
                className="step-img w-[35%]"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] aspect-square bg-[#fdf2e9] rounded-full z-[-2]"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[45%] aspect-square bg-[#fae5d3] rounded-full z-[-1]"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
