import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Gallery = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
    AOS.refresh();
  }, []);

  const images = [
    "https://i.ibb.co/XX3h01w/61u3t-RWRu-IL-SL1001.jpg",
    "https://i.ibb.co/tCvqNMp/ 100-X-400-X-1200-X-Microscope-Toys-Kit-for-Primary-School-Students-Children-Biology-Science-Experime.jpg",
    "https://i.ibb.co/DtYK7kr/engineering.jpg",
    "https://i.ibb.co/ZXhWGBD/H80ccc48692964297a253b468d7df97d5l.png",
    "https://i.ibb.co/4PVM99s/Hf96590e177e741e99783e9d91ad681980.jpg",
    "https://i.ibb.co/dJf41c9/math-toys-for-preschoolers-0.jpg",
    "https://i.ibb.co/VSZv7js/math-toys-for-preschoolers-4.jpg",
    "https://i.ibb.co/QNFWNSB/math-toys-for-preschoolers-8.jpg",
    "https://i.ibb.co/wJLgZjv/s-l1600.jpg",
    "https://i.ibb.co/wyTpzvH/s-l1600.png",
    "https://i.ibb.co/PGtQbZt/TBD0602196301-A.jpg",
    "https://i.ibb.co/wp9kgWs/telescope-61dd2b3.jpg",
  ];

  return (
    <div className="lg:mx-32 lg:my-10 m-5 rounded p-16 bg-[#63898C]">
      <h2
        className="text-5xl font-bold text-center mb-10 text-white"
        data-aos="fade-left"
        
      >
        Toy Gallery_
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {images.map((image, index) => (
          <div
            data-aos="fade-right"
            data-aos-delay="500"
            key={index}
            className="relative overflow-hidden rounded-md shadow-md "
          >
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
