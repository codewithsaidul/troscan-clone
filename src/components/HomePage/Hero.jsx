

export default function Hero() {
  return (
    <div
      style={{
        background: `url("/images/hero.avif")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="w-full min-h-screen flex items-center justify-center relative filter saturate-130 contrast-100 px-4"
    >
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="max-w-4xl w-full text-center relative z-10">
        <h1 className="text-4xl sm:text-5xl lg:text-8xl text-white">
          Timeless Comfort & Endless Luxury
        </h1>

        <div className="mt-8 flex max-md:flex-col flex-row justify-center gap-4">
          <button className="py-4 px-6 rounded-lg bg-accent text-primary text-sm duration-700 hover:bg-accent/60 hover:duration-700 cursor-pointer">
            Our Vission
          </button>
          <button className="py-4 px-6 rounded-lg bg-transparent border border-accent text-accent text-sm duration-700 hover:bg-accent hover:text-primary hover:duration-700 cursor-pointer">
            Explore Expertise
          </button>
        </div>
      </div>
    </div>
  );
}
