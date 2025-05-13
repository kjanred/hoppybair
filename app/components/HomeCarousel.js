import Image from "next/image";
import img1 from "@/public/img/homeCarousel/1.jpg";
import img2 from "@/public/img/homeCarousel/2.jpg";
import img3 from "@/public/img/homeCarousel/3.jpg";

export default function HomeCarousel() {
    return (
        <div id="homeCarousel" className="carousel slide carousel-fade container-fluid" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
     <Image src={img1} className="d-block img-fluid" alt="..." />
    </div>
    <div className="carousel-item">
      <Image src={img2} className="d-block img-fluid" alt="..." />
    </div>
    <div className="carousel-item">
      <Image src={img3} className="d-block img-fluid" alt="..." />
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