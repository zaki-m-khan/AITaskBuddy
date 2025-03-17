import React from "react";

function Footer() {
  return (
    <footer
      className="px-20 py-12 bg-indigo-900 max-md:px-10 max-sm:px-5"
      id="contact"
    >
      <div className="flex gap-8 justify-between mx-auto max-w-screen-xl max-md:flex-wrap">
        <div className="flex flex-col gap-6 max-w-[296px]">
          <h2 className="text-xl font-bold text-white">AI Task Buddy</h2>
          <p className="text-base text-indigo-200">
            Making work easier and more accessible for everyone.
          </p>
        </div>
        <div className="flex flex-col gap-5 max-w-[296px]">
          <h3 className="text-xl font-bold text-white">Quick Links</h3>
          <nav className="flex flex-col gap-2">
            <a
              href="#"
              className="text-base text-indigo-200 hover:text-white transition-colors"
            >
              About Us
            </a>
            <a
              href="#features"
              className="text-base text-indigo-200 hover:text-white transition-colors"
            >
              Features
            </a>
            <a
              href="#contact"
              className="text-base text-indigo-200 hover:text-white transition-colors"
            >
              Support
            </a>
          </nav>
        </div>
        <div className="flex flex-col gap-5 max-w-[296px]">
          <h3 className="text-xl font-bold text-white">Contact</h3>
          <address className="flex flex-col gap-2 not-italic">
            <p className="text-base text-indigo-200">
              Email:{" "}
              <a
                href="mailto:help@aitaskbuddy.com"
                className="hover:text-white transition-colors"
              >
                help@aitaskbuddy.com
              </a>
            </p>
            <p className="text-base text-indigo-200">
              Phone:{" "}
              <a
                href="tel:+15551234567"
                className="hover:text-white transition-colors"
              >
                (555) 123-4567
              </a>
            </p>
          </address>
        </div>
        <div className="flex flex-col gap-5 max-w-[296px]">
          <h3 className="text-xl font-bold text-white">Follow Us</h3>
          <div className="flex gap-4">
            <a
              href="#"
              aria-label="Twitter"
              className="hover:opacity-80 transition-opacity"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[24px] h-[24px]"
              >
                <path
                  d="M21.533 7.11163C21.5482 7.32482 21.5482 7.53805 21.5482 7.75124C21.5482 14.2537 16.599 21.7461 7.5533 21.7461C4.76648 21.7461 2.17767 20.939 0 19.538C0.395953 19.5837 0.776625 19.5989 1.18781 19.5989C3.48727 19.5989 5.60405 18.8223 7.29441 17.4974C5.13197 17.4517 3.31978 16.0355 2.69541 14.0863C3 14.1319 3.30455 14.1624 3.62437 14.1624C4.06598 14.1624 4.50764 14.1014 4.91878 13.9949C2.66498 13.538 0.974578 11.5583 0.974578 9.16747V9.10658C1.62937 9.47206 2.39086 9.70049 3.19791 9.73091C1.87303 8.84764 1.00505 7.34005 1.00505 5.63446C1.00505 4.72077 1.24866 3.88321 1.67508 3.15224C4.09641 6.137 7.73602 8.08621 11.8172 8.29944C11.7411 7.93396 11.6954 7.55328 11.6954 7.17257C11.6954 4.46188 13.8883 2.25378 16.6141 2.25378C18.0304 2.25378 19.3095 2.84769 20.208 3.80708C21.3197 3.59389 22.3857 3.18271 23.3299 2.61927C22.9643 3.76142 22.1877 4.72082 21.1674 5.32991C22.1573 5.22336 23.1167 4.94919 23.9999 4.56852C23.33 5.5431 22.4924 6.41108 21.533 7.11163Z"
                  fill="#C7D2FE"
                />
              </svg>
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="hover:opacity-80 transition-opacity"
            >
              <svg
                width="21"
                height="24"
                viewBox="0 0 21 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[21px] h-[24px]"
              >
                <path
                  d="M19.5 1.5H1.49531C0.670312 1.5 0 2.17969 0 3.01406V20.9859C0 21.8203 0.670312 22.5 1.49531 22.5H19.5C20.325 22.5 21 21.8203 21 20.9859V3.01406C21 2.17969 20.325 1.5 19.5 1.5ZM6.34687 19.5H3.23438V9.47812H6.35156V19.5H6.34687ZM4.79062 8.10938C3.79219 8.10938 2.98594 7.29844 2.98594 6.30469C2.98594 5.31094 3.79219 4.5 4.79062 4.5C5.78437 4.5 6.59531 5.31094 6.59531 6.30469C6.59531 7.30312 5.78906 8.10938 4.79062 8.10938ZM18.0141 19.5H14.9016V14.625C14.9016 13.4625 14.8781 11.9672 13.2844 11.9672C11.6625 11.9672 11.4141 13.2328 11.4141 14.5406V19.5H8.30156V9.47812H11.2875V10.8469H11.3297C11.7469 10.0594 12.7641 9.22969 14.2781 9.22969C17.4281 9.22969 18.0141 11.3062 18.0141 14.0062V19.5Z"
                  fill="#C7D2FE"
                />
              </svg>
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="hover:opacity-80 transition-opacity"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[24px] h-[24px]"
              >
                <g clipPath="url(#clip0_3_1718)">
                  <path
                    d="M23.625 12C23.625 5.57812 18.4219 0.375 12 0.375C5.57812 0.375 0.375 5.57812 0.375 12C0.375 17.8022 4.62609 22.6116 10.1836 23.4844V15.3605H7.23047V12H10.1836V9.43875C10.1836 6.52547 11.918 4.91625 14.5744 4.91625C15.8466 4.91625 17.1769 5.14313 17.1769 5.14313V8.0025H15.7106C14.2669 8.0025 13.8164 8.89875 13.8164 9.81797V12H17.0405L16.5248 15.3605H13.8164V23.4844C19.3739 22.6116 23.625 17.8022 23.625 12Z"
                    fill="#C7D2FE"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_3_1718">
                    <path d="M0 0H24V24H0V0Z" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
