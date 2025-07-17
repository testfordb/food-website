import Image from 'next/image';

export default function Hero() {
  return (
    <section className="section-hero bg-[#fdf2e9] pt-[4.8rem] pb-[9.6rem]">
      <div className="hero max-w-[130rem] mx-auto px-[3.2rem] grid grid-cols-1 md:grid-cols-2 gap-[9.6rem] items-center max-[1200px]:gap-[6.4rem] max-[944px]:px-[8rem] max-[544px]:px-[3.2rem]">
        <div className="hero-text-box text-center md:text-left">
          <h1 className="heading-primary text-[5.2rem] font-bold text-[#333] leading-[1.05] mb-[3.2rem] max-[1344px]:text-[4.4rem] max-[944px]:text-[3.6rem]">
            A healthy meal delivered to your door, every single day
          </h1>
          <p className="hero-description text-[2rem] leading-[1.6] mb-[4.8rem] max-[944px]:text-[1.8rem]">
            The smart 365-days-per-year food subscription that will make you eat healthy again. Tailored to your personal tastes and nutritional needs.
          </p>
          <div className="flex flex-col md:flex-row gap-[1.6rem] justify-center md:justify-start">
            <a
              href="#cta"
              className="btn btn-full bg-[#e67e22] text-white px-[3.2rem] py-[1.6rem] rounded-[9px] font-semibold text-[2rem] hover:bg-[#cf711f] transition-all mr-[1.6rem] max-[544px]:px-[1.6rem] max-[544px]:py-[2.4rem]"
            >
              Start eating well
            </a>
            <a
              href="#how"
              className="btn btn-outline bg-white text-[#555] px-[3.2rem] py-[1.6rem] rounded-[9px] font-semibold text-[2rem] hover:bg-[#fdf2e9] hover:shadow-[0_0_0_3px_#fff] transition-all max-[544px]:px-[1.6rem] max-[544px]:py-[2.4rem]"
            >
              Learn more ↓
            </a>
          </div>
          <div className="delivered-meals flex flex-col md:flex-row items-center gap-[1.6rem] mt-[8rem] justify-center md:justify-start max-[944px]:mt-[3.2rem]">
            <div className="delivered-imgs flex">
              {['customer-1.jpg', 'customer-2.jpg', 'customer-3.jpg', 'customer-4.jpg', 'customer-5.jpg', 'customer-6.jpg'].map((img, index) => (
                <Image
                  key={index}
                  src={`/img/customers/${img}`}
                  alt="Customer photo"
                  width={48}
                  height={48}
                  className="h-[4.8rem] w-[4.8rem] rounded-full border-[3px] border-[#fdf2e9] -mr-[1.6rem] last:mr-0"
                />
              ))}
            </div>
            <p className="delivered-text text-[1.8rem] font-semibold">
              <span className="text-[#cf711f] font-bold">250,000+</span> delivered meals last year!
            </p>
          </div>
        </div>
        <div className="hero-img-box flex justify-center">
          <Image
            src="/img/hero.png"
            alt="Woman enjoying food, meals in a storage container and food bowls on a table"
            width={600}
            height={600}
            className="hero-img w-full max-[944px]:w-[60%] max-[544px]:w-[80%]"
          />
        </div>
      </div>
    </section>
  );
}