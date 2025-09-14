import Image from "next/image";

export default function About() {
  return (
    <div className="bg-accent py-24 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20">
      <div className="flex flex-col lg:flex-row justify-between gap-y-10 lg:gap-x-10 xl:gap-x-96">
          <div>
            <div className="flex items-center gap-1 mb-5">
              <span className="w-1 h-1 bg-primary rounded-full" />
              <h2 className="text-sm text-primary">About us</h2>
            </div>
    
            <h3 className="text-6xl text-primary mb-8 lg:mb-84">
              Where Spaces Inspire, and Design Comes Alive
            </h3>


            <p className="text-sm text-primary mb-7">
              At Troscán, we believe that every space has a story to tell. As a
              premier furniture design and room decorating agency.
              <br></br>
              Our expert team blends timeless craftsmanship with innovative designs,
              ensuring each piece and layout reflects your unique taste and
              lifestyle. Whether you're looking to reimagine your living room.
            </p>
    
            <button className="py-4 px-6 rounded-lg bg-primary text-accent text-sm duration-700 hover:bg-primary/80 hover:duration-700 cursor-pointer">
              More About us
            </button>
          </div>
    
          <figure className="w-full min-h-[200px] max-h-[800px] aspect-[9/16] relative">
            <Image src="/images/about.avif" alt="about us" fill className="absolute w-full h-full object-cover rounded-lg" />
          </figure>
      </div>
    </div>
  );
}
