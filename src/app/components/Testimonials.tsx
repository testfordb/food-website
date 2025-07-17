import Image from 'next/image';

export default function Testimonials() {
  const testimonials = [
    {
      img: '/img/customers/dave.jpg',
      text: 'Inexpensive, healthy and great-tasting meals, without even having to order manually! It feels truly magical.',
      name: 'Dave Bryson',
    },
    {
      img: '/img/customers/steve.jpg',
      text: 'The AI algorithm is crazy good, it chooses the right meals for me every time. It\'s amazing not to worry about food anymore!',
      name: 'Ben Hadley',
    },
    {
      img: '/img/customers/hannah.jpg',
      text: 'Omnifood is a life saver! I just started a company, so there\'s no time for cooking. I couldn\'t live without my daily meals now!',
      name: 'Steve Miller',
    },
    {
      img: '/img/customers/ben.jpg',
      text: 'I got Omnifood for the whole family, and it frees up so much time! Plus, everything is organic and vegan and without plastic.',
      name: 'Hannah Smith',
    },
  ];

  return (
    <section className="section-testimonials bg-[#fdf2e9] grid grid-cols-1 md:grid-cols-[55fr_45fr] items-center max-[944px]:grid-cols-1" id="testimonials">
      <div className="testimonials-container py-[9.6rem] px-[9.6rem] max-[1200px]:px-[3.2rem]">
        <span className="subheading block text-[#cf711f] text-[1.6rem] font-medium uppercase tracking-[0.75px] mb-[1.6rem]">
          Testimonials
        </span>
        <h2 className="heading-secondary text-[4.4rem] font-bold text-[#333] leading-[1.2] mb-[4.8rem] max-[1200px]:text-[3.6rem] max-[704px]:mb-[4.8rem]">
          Once you try it, you can’t go back
        </h2>
        <div className="testimonials grid grid-cols-2 gap-x-[8rem] gap-y-[4.8rem] max-[704px]:grid-cols-1 max-[544px]:grid-cols-1">
          {testimonials.map((testimonial, index) => (
            <figure key={index} className="testimonial">
              <Image
                src={testimonial.img}
                alt={`Photo of ${testimonial.name}`}
                width={64}
                height={64}
                className="testimonial-img w-[6.4rem] rounded-full mb-[1.2rem]"
              />
              <blockquote className="testimonial-text text-[1.8rem] leading-[1.8] mb-[1.6rem]">{testimonial.text}</blockquote>
              <p className="testimonial-name text-[1.6rem] text-[#6f6f6f]">— {testimonial.name}</p>
            </figure>
          ))}
        </div>
      </div>
      <div className="gallery grid grid-cols-3 gap-[1.6rem] p-[1.6rem] max-[1344px]:grid-cols-2 max-[944px]:grid-cols-6 max-[544px]:grid-cols-4 max-[544px]:gap-[1.2rem]">
        {Array.from({ length: 12 }, (_, i) => (
          <figure key={i} className="gallery-item overflow-hidden">
            <Image
              src={`/img/gallery/gallery-${i + 1}.jpg`}
              alt="Photo of beautifully arranged food"
              width={200}
              height={200}
              className="w-full hover:scale-[1.1] transition-all"
            />
          </figure>
        ))}
      </div>
    </section>
  );
}