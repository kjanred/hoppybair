import Image from "next/image";
import { tarrgetFont } from '../font/font';
import henHouseSR from '@/public/img/venue/henhouse-sr.jpg';


export default function NextEvent() {
    return (
        <div className="container p-4">
            <div className="row d-flex align-items-center">
                <div className="col-12 col-md-6">
                <h1 className={`${tarrgetFont.className} text-start ps-2`}>Next Event: </h1>
                <p className='text-center'>Our next event is: <span className="fs-3">01/03/23 6:00pm</span><br />at <span className="fs-2">HenHouse Santa Rosa</span></p> 
                </div>
                <div className="col-12 col-md-6">
                    <Image
                        className="img-fluid"
                        src={henHouseSR}
                        quality={100}
                        />
                </div>
                
            </div>
        </div>
       
    );
}