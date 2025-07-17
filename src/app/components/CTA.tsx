export default function CTA() {
  return (
    <section className="section-cta py-[4.8rem] pb-[12.8rem] max-[544px]:pb-[12.8rem]" id="cta">
      <div className="container max-w-[120rem] mx-auto px-[3.2rem]">
        <div className="cta grid grid-cols-1 md:grid-cols-[2fr_1fr] bg-gradient-to-r from-[#eb984e] to-[#e67e22] shadow-[0_2.4rem_4.8rem_rgba(0,0,0,0.15)] rounded-[11px] overflow-hidden max-[944px]:grid-cols-1 max-[544px]:grid-cols-1">
          <div className="cta-text-box p-[4.8rem_6.4rem_6.4rem_6.4rem] text-[#45260a] max-[944px]:p-[3.2rem]">
            <h2 className="heading-secondary text-[4.4rem] font-bold text-[#45260a] leading-[1.2] mb-[3.2rem] max-[1200px]:text-[3.6rem]">
              Get your first meal for free!
            </h2>
            <p className="cta-text text-[1.8rem] leading-[1.8] mb-[4.8rem]">
              Healthy, tasty and hassle-free meals are waiting for you. Start eating well today. You can cancel or pause anytime. And the first meal is on us!
            </p>
            <p className="text-[1.8rem] text-[#45260a]">
              Sign-up form is disabled due to sandbox restrictions.
            </p>
          </div>
          <div
            className="cta-img bg-[url('/img/eating.jpg')] bg-cover bg-center h-[48rem] max-[944px]:h-[32rem] max-[944px]:order-[-1]"
            style={{ backgroundImage: `linear-gradient(to right bottom, rgba(235, 151, 78, 0.35), rgba(230, 125, 34, 0.35)), url('/img/eating.jpg')` }}
            role="img"
            aria-label="Women enjoying food"
          ></div>
        </div>
      </div>
    </section>
  );
}