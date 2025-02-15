const Footer = () => {
  return (
    <div className="bg-primary-gradient flex w-full flex-col gap-4 pb-12 pt-12 xl:pb-16">
      <div className="container mx-auto flex flex-col items-center gap-24 px-[5%]">
        <div
          id="1-2"
          className="flex w-full flex-col items-center gap-6 xl:flex-row-reverse xl:items-start xl:justify-between"
        >
          <form
            id="1"
            className="text-sm font-inter text-white flex flex-col justify-center gap-6 text-center font-light md:w-[358px] xl:w-[408px] xl:text-start"
          >
            <div className="text-white flex flex-col gap-4">
              <h1 className="text-xl xl:text-3xl font-serif font-normal">
                Grow on the Green Loop
              </h1>
              <p className="text-sm xl:text-base text-normal font-inter font-normal italic">
                Join our newsletter for exclusive offers, early launch access,
                and more.
              </p>
            </div>

            <fieldset className="rounded-sm">
              <input
                id="substance-input"
                className=" bg-white h-11 px-3 rounded-sm outline-0 text-left text-base text-black font-inter placeholder:text-black/75 placeholder:opacity-50 w-full font-normal text-sm xl:text-base italic md:max-w-[336px]"
                type="email"
                placeholder="user.example@mail.com"
                required
              />
            </fieldset>
          </form>
          <div
            id="2"
            className="text-white flex w-full max-w-[684px] flex-col items-center justify-center gap-6 md:flex-row xl:justify-start"
          >
            <div className="text-sm xl:text-base font-inter t flex flex-col items-center gap-2 font-normal capitalize italic md:w-1/3 xl:items-start">
              <h1 className="text-xl xl:text-3xl font-serif font-normal not-italic mb-2">
                Resources
              </h1>
              <span>size guide</span>
              <span>care guide</span>
              <span>origin guide</span>
              <span>warranty</span>
            </div>
            <div className="text-sm xl:text-base font-inter flex flex-col items-center gap-2 text-center font-normal capitalize italic md:w-1/3 xl:items-start">
              <h1 className="text-xl xl:text-3xl font-serif font-normal not-italic mb-2">
                Services
              </h1>
              <span>Plant Profile</span>
              <span>track my order</span>
              <span>shipping & production</span>
              <span>return policy</span>
            </div>
            <div className="text-sm xl:text-base font-inter flex flex-col items-center gap-2 font-normal capitalize italic md:w-1/3 xl:items-start ">
              <h1 className="text-xl xl:text-3xl font-serif font-normal not-italic mb-2">
                About
              </h1>
              <span>terms of service</span>
              <span>privacy policy</span>
              <span>contact us</span>
              <span>general FAQs</span>
            </div>
          </div>
        </div>

        <div id="3" className="text-white flex w-full flex-col gap-4">
          <div className="flex justify-center xl:hidden">
            <h1 className="text-xl xl:text-3xl font-serif font-medium capitalize">
              Plant Parenthood
            </h1>
          </div>
          <div className="hidden justify-between xl:flex capitalize">
            <h1 className="text-xl xl:text-32md font-serif font-medium ">
              Plant
            </h1>
            <h1 className="text-xl xl:text-32md font-serif font-medium ">
              Parenthood
            </h1>
          </div>
          <div className="h-[1px] bg-white w-full"></div>
          <div className="flex justify-center xl:justify-between">
            <p className="font-inter text-sm font-normal uppercase">
              ©2024 global.plantparenthood.com
            </p>
            <ul className="text-sm font-inter hidden gap-4 font-normal uppercase xl:flex">
              <li>terms of services</li>
              <li>privacy policy</li>
              <li>contact us</li>
              <li>
                FAQ<span className="lowercase">s</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
