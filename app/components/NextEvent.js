import Image from "next/image";
import { tarrgetFont } from '../font/font';
import mapImage from '@/public/img/map.png';


export default function NextEvent() {
    return (
        <>
        <h1 className={`${tarrgetFont.className} text-start ps-2`}>Next Event: </h1>
                        <p className='text-center'><span className="fs-3">01/03/23 6:00pm</span><br />at <span className="fs-2">HenHouse Santa Rosa</span></p>
                        <Image
                                              src={mapImage}
                                              className='img-fluid'
                                              quality={100}
                                              alt="map placeholder"
                        />
                      </>
       
    );
}