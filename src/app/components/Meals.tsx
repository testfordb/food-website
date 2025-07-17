import Image from 'next/image';

export default function Meals() {
  const meals = [
    {
      img: '/img/meals/meal-1.jpg',
      tags: ['Vegetarian'],
      title: 'Japanese Gyozas',
      attributes: [
        { icon: 'flame-outline', text: '<strong>650</strong> calories' },
        { icon: 'restaurant-outline', text: 'NutriScore ® <strong>74</strong>' },
        { icon: 'star-outline', text: '<strong>4.9</strong> rating (537)' },
      ],
    },
    {
      img: '/img/meals/meal-2.jpg',
      tags: ['Vegan', 'Paleo'],
      title: 'Avocado Salad',
      attributes: [
        { icon: 'flame-outline', text: '<strong>400</strong> calories' },
        { icon: 'restaurant-outline', text: 'NutriScore ® <strong>92</strong>' },
        { icon: 'star-outline', text: '<strong>4.8</strong> rating (441)' },
      ],
    },
  ];

  const diets = [
    'Vegetarian', 'Vegan', 'Pescatarian', 'Gluten-free', 'Lactose-free', 'Keto Paleo', 'Low FODMAP', 'Kid-friendly',
  ];

  return (
    <section className="section-meals py-[9.6rem]" id="meals">
      <div className="container max-w-[120rem] mx-auto px-[3.2rem] text-center">
        <span className="subheading block text-[#cf711f] text-[1.6rem] font-medium uppercase tracking-[0.75px] mb-[1.6rem]">
          Meals
        </span>
        <h2 className="heading-secondary text-[4.4rem] font-bold text-[#333] leading-[1.2] mb-[9.6rem] max-[1200px]:text-[3.6rem] max-[704px]:mb-[4.8rem]">
          Omnifood AI chooses from 5,000+ recipes
        </h2>
      </div>
      <div className="container max-w-[120rem] mx-auto px-[3.2rem] grid grid-cols-1 md:grid-cols-3 gap-[6.4rem] mb-[4.8rem] max-[1200px]:gap-[4.8rem] max-[704px]:grid-cols-2 max-[544px]:grid-cols-1">
        {meals.map((meal, index) => (
          <div key={index} className="meals shadow-[0_2.4rem_4.8rem_rgba(0,0,0,0.075)] rounded-[11px] overflow-hidden hover:shadow-[0_4.8rem_6.4rem_rgba(0,0,0,0.06)] hover:-translate-y-[1.2rem] transition-all">
            <Image src={meal.img} alt={meal.title} width={300} height={200} className="meal-img w-full" />
            <div className="meal-content p-[3.2rem_4.8rem_4.8rem_4.8rem] max-[944px]:p-[2.4rem_3.2rem_3.2rem_3.2rem]">
              <div className="meal-tags flex gap-[0.4rem] mb-[1.2rem]">
                {meal.tags.map((tag, i) => (
                  <span
                    key={i}
                    className={`tag text-[1.2rem] font-semibold uppercase text-[#333] px-[0.8rem] py-[0.4rem] rounded-[100px] ${tag === 'Vegetarian' ? 'bg-[#51cf66]' : tag === 'Vegan' ? 'bg-[#94d82d]' : 'bg-[#fcc419]'}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="meal-title text-[2.4rem] font-semibold text-[#333] mb-[3.2rem]">{meal.title}</p>
              <ul className="meal-attributes flex flex-col gap-[2rem]">
                {meal.attributes.map((attr, i) => (
                  <li key={i} className="meal-attribute flex items-center gap-[1.6rem] text-[1.8rem]">
                    <svg className="meal-icon h-[2.4rem] w-[2.4rem] text-[#e67e22]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={attr.icon === 'flame-outline' ? 'M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A8 8 0 0117.657 18.657z' : attr.icon === 'restaurant-outline' ? 'M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7z' : 'M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11z'}></path>
                    </svg>
                    <span dangerouslySetInnerHTML={{ __html: attr.text }}></span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
        <div className="diets max-[704px]:col-span-2 max-[704px]:justify-self-center max-[544px]:col-span-1 flex flex-col justify-between h-full">
  <h3 className="heading-tertiary text-[3rem] font-bold text-[#333] leading-[1.2] mb-[3.2rem] max-[1200px]:text-[2.4rem]">
    Works with any diet:
  </h3>
  <ul className="list flex flex-col gap-[2.4rem]">
    {diets.map((diet, index) => (
      <li
        key={index}
        className="list-item flex items-center gap-[1.2rem] text-[2rem] text-[#555]"
      >
        <span className="flex items-center gap-[1rem]">
          <svg
            className="list-icon flex-shrink-0 h-[3rem] w-[3rem] text-[#e67e22]"
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
          {diet}
        </span>
      </li>
    ))}
  </ul>
  <div className="flex-grow"></div>
</div>
      </div>
      <div className="container max-w-[120rem] mx-auto px-[3.2rem] text-center">
        <a href="#" className="link text-[1.8rem] text-[#e67e22] no-underline border-b border-current hover:text-[#cf711f] hover:border-transparent transition-all">
          See all recipes →
        </a>
      </div>
    </section>
  );
}