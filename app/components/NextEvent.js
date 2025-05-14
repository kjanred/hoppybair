import Image from "next/image";
import { tarrgetFont } from '../font/font';
import mapImage from '@/public/img/map.png';


const nextEventData = {date: "6/20/25", time: "5:00pm", location: "HenHouse SR", title: "When Bairs Attack #20"}

export default function NextEvent() {
    return (
        <>
            <div className="eventText text-end">
                <h2 className={`${tarrgetFont.className} sub text-end`}>Next Event</h2>
        <span className={`${tarrgetFont.className} eventTitle text-start`}>{nextEventData.title}</span><br />
            {nextEventData.date} {nextEventData.time}<br />{nextEventData.location}</div>
                        <Image
                                              src={mapImage}
                                              className='img-fluid'
                                              quality={100}
                                              alt="map placeholder"
                        />
                      </>
       
    );
}