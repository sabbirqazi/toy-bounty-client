

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://img.freepik.com/free-photo/close-up-boy-touching-digital-tablet-screen-white-desk_23-2148039919.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://img.freepik.com/free-photo/front-view-kid-playing-with-wooden-toyds_23-2149357210.jpg?w=1380&t=st=1684425312~exp=1684425912~hmac=5d7102518247ff13faf69838331d861bb1b0a9d2c42512120898c98b5bbf9531" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://img.freepik.com/free-photo/lovely-asian-girl-is-play-colorful-wood-block-toy_1150-6272.jpg?w=1380&t=st=1684425357~exp=1684425957~hmac=951b3cb7d09b16e68387c5b4981ee8c5f6a1e783b35675d7a3a420586ea6cfa2" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://img.freepik.com/free-photo/lovely-asian-boy-is-play-colorful-wood-block-toy_1150-6262.jpg?w=1380&t=st=1684425646~exp=1684426246~hmac=6689fc507bda3b7fd1b993dcc214882bad61bfd900a3dcd38ffb8abde6798e6b" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;