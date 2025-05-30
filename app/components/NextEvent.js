'use client'

import Image from "next/image";
import { tarrgetFont } from '../font/font';
import mapImage from '@/public/img/map.png';
import northernCave from '@/public/img/stages/northerncave.jpg';
import yoshisIsland from '@/public/img/stages/yoshisisland.jpg';
import mementos from '@/public/img/stages/mementos.jpg';
import dreamland from '@/public/img/stages/dreamland.jpg';
import mushroomKingdom from '@/public/img/stages/mushroomkingdom.jpg';
import unova from '@/public/img/stages/unova.jpg';
import fountain from '@/public/img/stages/fountain.jpg';

import { usePathname } from "next/navigation";


const nextEventData = {
    date: "6/20/25",
    time: "5:00pm",
    location:
    {
        name: "HenHouse Santa Rosa",
        address: [
            "322 Bellevue Ave,",
            "Santa Rosa, CA 95407",
        ] 
    },
    title: "When Bairs Attack #20"
}



export default function NextEvent() {
    const pathname = usePathname();
    return (
        
        <div className=" container-fluid p-0 darkCard nextEventContainer">
             <h2 className={`${tarrgetFont.className} sub ${pathname === '/events' ? 'text-start' : 'text-end'}`}>Next Event</h2>
            <div className="row m-0">
               
                <div className="col">
                
                    <div className="container-fluid text-center">
                        <div className="row">
                            <div className="col-12">
<span className={`${tarrgetFont.className} eventTitle`}>{nextEventData.title}</span>
                            </div>
                            <div className="col-6 d-flex flex-column ">
                                <h4 className="my-auto">{nextEventData.date} </h4> 
                            <h4 className="my-auto pb-2">{nextEventData.time}</h4>  
                            </div>
                            <div className="col-6">
                                <h3> {nextEventData.location.name}</h3>
                                <h4>{nextEventData.location.address[0]}<br/>{nextEventData.location.address[1]}</h4>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <Image
                                              src={mapImage}
                                              className='img-fluid'
                                              quality={100}
                                              alt="map placeholder"
                    />
                            </div>
</div>
                    </div>
                        
                    </div>

                {pathname === '/events' && ( 
                    <div className="col-12 col-md rulesCol">
                        <div className="w-md-75 mx-auto">
                            <p className="eventParagraph">If you like to play Super Smash Bros Ultimate for the Nintendo Switch, we encourage you to come play in our events! It doesn't matter your age nor skill level, you are welcome to come play and have a good time. If you have any questions you can ask any of our members at the event or you can reach out <u>here.</u> Our events are friendly to both the new and seasoned Smash player and use a Squad Strike format, where you can pick your 3 favorite characters to use in a single match! We use start.gg to register and score our events, but if you don't have an account or can't create one, let us know and we can manually sign you up. The most important part of our events is for you to have fun! </p>
                        </div>
                        <h2 className={`${tarrgetFont.className} ruleHeader `}>Ruleset</h2>
                        <div className="w-75 mx-auto rulesBox">
                        
                            <table className="rulesTable w-75 mx-auto">
                                <thead>
                                    <tr><th className='text-center' colSpan='2'>Squad Strike: 3 Characters</th></tr>
                                    </thead>
                                <tbody>
                                <tr><th>Bracket</th><td>Best of 3 / Double Elimination</td></tr>
                                <tr><th>Time</th><td>7 Minutes</td></tr>
                                <tr><th>Items</th><td>None</td></tr>
                                <tr><th>Final Smash</th><td>Off</td></tr>
                                <tr><th>Hazards</th><td>Off</td></tr>
                                </tbody>
                            </table>


                            <div className="accordion accordion-flush w-75  mx-auto" id="rulesAccordion">
                                <div  className="accodion-item">
                                <h2 className="accordion-header stageRulesButton">
      <button className="accordion-button stageRulesButton collapsed px-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="false" aria-controls="collapse1">
        Stage Selection Rules
      </button>
                                </h2>
                                <div id="collapse1" className="accordion-collapse collapse" data-bs-parent="#rulesAccordion">
                <div className="accordion-body p-0 p-md-2 lh-1 lh-md">
                            <p className="w-md-75 mx-auto">Both players play 1 game of Rock, Paper, Scissors (RPS). From the stages labeld "Starters," the winner of RPS bans 1 stage from the list. The loser of RPS bans 2 other stages from the list. The winner then picks a stage from the 2 left for Game 1.</p>

                            <p className="w-md-75 mx-auto">For Game 2, the winner of Game 1 bans 3 stages from the full stage list ("Starters" and "Counters") and the loser of Game 1 picks from the 4 left for Game 2.</p>

                                        <p className="w-md-75 mx-auto">If a Game 3 is needed, the winner of Game 2 bans 3 stages from the full stage list ("Starters" and "Counters") and the loser of Game 2 picks from the 4 left for Game 3.</p>
                                        </div>
                                    </div>
                                    </div>
                                
                            </div>  {/* accordian end */}
                            <div className="container text-center ">
                                <div className="row my-2 ">
                                    <h3>Starters</h3>
                                    <div className="col-4 ">
                                        <Image src={northernCave} className="img-fluid" />
                                        <h4>Northern Cave</h4>
                                    </div>
                                    <div className="col-4">
                                        <Image src={yoshisIsland} className="img-fluid" />
                                        <h4>Yoshi's Island</h4>
                                    </div>
                                        
                                    <div className="col-4">
                                        <Image src={mementos} className="img-fluid" />
                                        <h4>Mementos</h4>
                                    </div>
                            </div>
                            <div className="row my-2 justify-content-center">
                                    <div className="col-4">
                                        <Image src={dreamland} className="img-fluid" />
                                        <h4>Dreamland</h4></div>
                                    <div className="col-4">
                                        <Image src={mushroomKingdom} className="img-fluid" />
                                        <h4>Mushroom Kingdom U</h4></div>
                                </div>
                                <div className="row my-2 justify-content-center">
                                    <h3>Counters</h3>
                                    <div className="col-4">
                                        <Image src={unova} className="img-fluid" />
                                        <h4>Unova Pokémon League</h4></div>
                                    <div className="col-4">
                                        <Image src={fountain} className="img-fluid" />
                                        <h4>Fountain of Dreams</h4></div>
                            </div>

                        </div>
                        </div>
                        

                        </div>
            )}
                    </div>{/* row end */}
                      </div> 
       
    );
}