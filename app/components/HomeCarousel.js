import Image from "next/image";

export default function HomeCarousel() {
    return (
        <div id="homeCarousel" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
     <Image src="/img/homeCarousel/1.jpg" className="d-block w-100" width={500} height={300} alt="..." />
    </div>
    <div className="carousel-item">
      <Image src="/img/homeCarousel/2.jpg" className="d-block w-100" width={500} height={300} alt="..." />
    </div>
    <div className="carousel-item">
      <Image src="/img/homeCarousel/3.jpg" className="d-block w-100" width={500} height={300} alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#homeCarousel" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#homeCarousel" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
       
    );
}