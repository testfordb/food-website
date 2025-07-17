import Image from 'next/image';

export default function Featured() {
  return (
    <section className="section-featured py-[4.8rem] pb-[3.2rem]">
      <div className="container max-w-[120rem] mx-auto px-[3.2rem]">
        <h2 className="heading-featured-in text-[1.4rem] font-medium uppercase text-[#888] text-center mb-[2.4rem] tracking-[0.75px]">
          As featured in
        </h2>
        <div className="logos flex justify-around items-center">
          {['techcrunch.png', 'business-insider.png', 'the-new-york-times.png', 'forbes.png', 'usa-today.png'].map((logo, index) => (
            <Image
              key={index}
              src={`/img/logos/${logo}`}
              alt={`${logo.split('.')[0]} logo`}
              width={128}
              height={32}
              className="h-[3.2rem] opacity-50 grayscale max-[944px]:h-[2.4rem] max-[544px]:h-[1.2rem]"
            />
          ))}
        </div>
      </div>
    </section>
  );
}