const HowItWorks = () => {
  return (
    <section>
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            How does it work?
          </h2>
        </div>

        <div className="relative mt-12 lg:mt-20">
          <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
            <img
              className="w-full"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg"
              alt=""
            />
          </div>

          <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">
            <div>
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                <span className="text-xl font-semibold text-gray-700"> 1 </span>
              </div>
              <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">
                Customer-Centric Service
              </h3>
              <p className="mt-4 text-base text-gray-600">
                Our team of trained sales counselors provides door-step service,
                ensuring convenience and personalized attention for each client.
                We believe in building long-term relationships based on trust
                and transparency.
              </p>
            </div>

            <div>
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                <span className="text-xl font-semibold text-gray-700"> 2 </span>
              </div>
              <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">
                Advanced Loan Evaluation System
              </h3>
              <p className="mt-4 text-base text-gray-600">
                We utilize a sophisticated loan evaluation system to accurately
                calculate your loan eligibility as per prevailing bank norms.
                This enables us to offer precise advice, helping you select the
                right bank and plan your finances effectively.
              </p>
            </div>

            <div>
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                <span className="text-xl font-semibold text-gray-700"> 3 </span>
              </div>
              <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">
                Integrity and Transparency
              </h3>
              <p className="mt-4 text-base text-gray-600">
                At S B FinWise Consulting, integrity is at the heart of
                everything we do. We provide authentic information and advice,
                ensuring that you are fully informed at every step of the loan
                process.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
