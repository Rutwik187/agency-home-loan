import Script from "next/script";

const Testimonials = () => {
  return (
    <section className="py-10 bg-gray-100 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-4">
          <h2 className="text-3xl font-bold leading-tight text-gray-800 sm:text-4xl lg:text-5xl">
            What our <span className="text-primary">Clients</span> says
          </h2>
        </div>

        <div className="sk-ww-google-reviews" data-embed-id="25437213"></div>
        <Script
          src="https://widgets.sociablekit.com/google-reviews/widget.js"
          async
          defer
        ></Script>
      </div>
    </section>
  );
};

export default Testimonials;
