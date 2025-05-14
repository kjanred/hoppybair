import Image from 'next/image';
import img1 from '@/public/img/carousel/1.jpg';
import img2 from '@/public/img/carousel/2.jpg';
import img3 from '@/public/img/carousel/3.jpg';
import img4 from '@/public/img/carousel/4.jpg';




export default function PhotoCarousel() {
    return (
       
<div id="photoCarousel" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#photoCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1" ></button>
    <button type="button" data-bs-target="#photoCarousel" data-bs-slide-to="1" aria-label="Slide 2" ></button>
                <button type="button" data-bs-target="#photoCarousel" data-bs-slide-to="2" aria-label="Slide 3" ></button>
                <button type="button" data-bs-target="#photoCarousel" data-bs-slide-to="3" aria-label="Slide 4" ></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <Image src={img1} quality={100} className="d-block" alt="place holder 1" />
    </div>
    <div className="carousel-item">
      <Image src={img2} quality={100} className="d-block" alt="place holder 2" />
    </div>
    <div className="carousel-item">
      <Image src={img3} quality={100} className="d-block" alt="place holder 3" />
                </div>
    <div className="carousel-item">
      <Image src={img4} quality={100} className="d-block" alt="place holder 4" />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#photoCarousel" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#photoCarousel" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>


    );
}