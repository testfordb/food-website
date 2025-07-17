import Image from 'next/image';

export default function Footer() {
  const navs = [
    {
      heading: 'Account',
      links: ['Create account', 'Sign in', 'IOS app', 'Android app'],
    },
    {
      heading: 'Company',
      links: ['About Omnifood', 'For Business', 'Cooking partners', 'Careers'],
    },
    {
      heading: 'Resources',
      links: ['Recipe directory', 'Help center', 'Privacy & terms'],
    },
  ];

  return (
    <footer className="footer pt-[12.8rem] pb-[12.8rem] border-t border-[#eee]">
      <div className="container max-w-[120rem] mx-auto px-[3.2rem] grid grid-cols-1 md:grid-cols-[1.5fr_1.5fr_1fr_1fr_1fr] gap-[6.4rem] max-[704px]:grid-cols-[repeat(6,1fr)] max-[544px]:grid-cols-1">
        <div className="logo-col flex flex-col max-[704px]:col-span-3">
          <a href="#" className="footer-logo mb-[3.2rem]">
            <Image src="/img/omnifood-logo.png" alt="Omnifood logo" width={88} height={22} className="logo h-[2.2rem]" />
          </a>
          <ul className="social-links flex gap-[2.4rem] list-none">
            {['logo-instagram', 'logo-facebook', 'logo-twitter'].map((icon, index) => (
              <li key={index}>
                <a href="#" className="footer-link">
                  <svg className="social-link h-[2.4rem] w-[2.4rem] text-[#767676]" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d={
                      icon === 'logo-instagram' ? 'M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.326 3.608 1.301.975.975 1.24 2.242 1.301 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.326 2.633-1.301 3.608-.975.975-2.242 1.24-3.608 1.301-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.326-3.608-1.301-.975-.975-1.24-2.242-1.301-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.326-2.633 1.301-3.608.975-.975 2.242-1.24 3.608-1.301 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.453.066-2.895.406-3.992 1.503-1.097 1.097-1.437 2.539-1.503 3.992-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.066 1.453.406 2.895 1.503 3.992 1.097 1.097 2.539 1.437 3.992 1.503 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.453-.066 2.895-.406 3.992-1.503 1.097-1.097 1.437-2.539 1.503-3.992.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.066-1.453-.406-2.895-1.503-3.992-1.097-1.097-2.539-1.437-3.992-1.503-1.28-.058-1.688-.072-4.947-.072zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z' :
                      icon === 'logo-facebook' ? 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z' :
                      'M23 4A1.996 1.996 0 0021 2H3a2 2 0 00-2 2v16a2 2 0 002 2h18a2 2 0 002-2V4zm-4.326 5.018c-.526 0-.984.205-1.146.29-.193.102-.354.188-.61.188-.407 0-.684-.188-1.002-.396-.318-.207-.616-.478-1.063-.478-.447 0-.745.271-1.063-.478-.318-.208-.595-.396-1.002-.396-.256 0-.417.086-.61-.188-.162-.085-.62-.29-1.146-.29-.767 0-1.326.502-1.326 1.263 0 .355.125.69.354.965.23.275.542.518.938.707.396.19.854.318 1.355.318.501 0 .959-.128 1.355-.318.396-.189.708-.432.938-.707.229-.275.354-.61.354-.965 0-.761-.559-1.263-1.326-1.263zm-5.674 5.263c-.501 0-.959.128-1.355.318-.396.189-.708.432-.938.707-.229.275-.354.61-.354.965 0 .761.559 1.263 1.326 1.263.526 0 .984-.205 1.146-.29.193-.102.354-.188.61-.188.407 0 .684.188 1.002.396.318.207.616.478 1.063.478.447 0 .745-.271 1.063-.478.318-.208.595-.396 1.002-.396.256 0 .417.086.61.188.162.085.62.29 1.146.29.767 0 1.326-.502 1.326-1.263 0-.355-.125-.69-.354-.965-.23-.275-.542-.518-.938-.707-.396-.19-.854-.318-1.355-.318-.501 0-.959.128-1.355.318-.396.189-.708.432-.938.707-.229.275-.354.61-.354.965 0 .761.559 1.263 1.326 1.263z'
                    }></path>
                  </svg>
                </a>
              </li>
            ))}
          </ul>
          <p className="copyright text-[1.4rem] text-[#767676] leading-[1.6] mt-auto">
            Copyright © <span>{new Date().getFullYear()}</span> by Omnifood, Inc. All rights reserved.
          </p>
        </div>
        <div className="address-col max-[704px]:col-span-3">
          <p className="footer-heading text-[1.8rem] font-medium mb-[4rem]">Address</p>
          <address className="contacts text-[1.6rem] leading-[1.6] not-italic">
            <p className="address mb-[2.4rem]">623 Harrison St., 2nd Floor, San Francisco, CA 94107</p>
            <p>
              <a href="tel:415-201-6370" className="footer-link text-[#767676] no-underline hover:text-[#555] transition-all">415-201-6370</a>
              <br />
              <a href="mailto:hello@omnifood.com" className="footer-link text-[#767676] no-underline hover:text-[#555] transition-all">hello@omnifood.com</a>
            </p>
          </address>
        </div>
        {navs.map((nav, index) => (
          <nav key={index} className="nav-col max-[704px]:row-start-1 max-[704px]:col-span-2 max-[704px]:mb-[3.2rem]">
            <p className="footer-heading text-[1.8rem] font-medium mb-[4rem]">{nav.heading}</p>
            <ul className="footer-nav flex flex-col gap-[2.4rem] list-none">
              {nav.links.map((link, i) => (
                <li key={i}>
                  <a href="#" className="footer-link text-[1.6rem] text-[#767676] no-underline hover:text-[#555] transition-all">{link}</a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
    </footer>
  );
}