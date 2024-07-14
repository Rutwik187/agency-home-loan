const CompanyProfile = () => {
  return (
    <section className=" bg-white ">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-x-12 xl:gap-x-24 gap-y-12">
          <div className="relative lg:mb-12">
            <img
              className="absolute -right-0 -bottom-8 xl:-bottom-12 xl:-right-4"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/content/3/dots-pattern.svg"
              alt=""
            />
            <div className="pl-12 pr-6">
              <img
                className="relative"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/content/3/girl-working-on-laptop.jpg"
                alt=""
              />
            </div>
            <div className="absolute left-0 pr-12 bottom-8 xl:bottom-20">
              <div className="max-w-xs bg-blue-600 rounded-lg sm:max-w-md xl:max-w-md">
                <div className="px-3 py-4 sm:px-5 sm:py-8">
                  <div className="flex items-start">
                    <p className="text-3xl sm:text-4xl">👋</p>
                    <blockquote className="ml-5">
                      <p className="text-sm font-medium text-white sm:text-lg">
                        “We make the loan acquisition process as seamless”
                      </p>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="2xl:pl-16">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">
              Who We Are
            </h2>
            <p className="text-xl leading-relaxed text-gray-900 mt-9">
              Welcome to S B FinWise Consulting, a premier name in the retail
              loan industry, renowned for our expertise and commitment to
              excellence. Founded on the principles of integrity and
              customer-centricity, we have emerged as a leading franchise
              specializing in mortgages, home loans, and a wide range of
              financial solutions.
            </p>
            <p className="mt-6 text-xl leading-relaxed text-gray-900">
              Our collaborations span across all major private and nationalized
              banks, allowing us to offer you a diverse array of loan products
              tailored to your unique needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyProfile;
