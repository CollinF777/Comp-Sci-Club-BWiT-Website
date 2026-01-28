import React from "react";
import { MessageSquare, Instagram } from "lucide-react";

function ClubMainPage() {
    return (
        <div className="site-container">
            <header className="header">
                <div className="header-content">
                    {/* Like 90% of this text-wise is taken from Naya's presentation she made so judge her writing not mine */}
                    <h1 className="header-title">Brockport Computing Sciences Club & Brockport Women in Tech</h1>
                    <p className="header-subtitle"> Uniting Computer Science students through games, events, and workshops</p>
                </div>
            </header>
            {/* Anything in the left column is gonna be comp sci club while right is bwit */}
            <main className="main-content">
                <div className="two-column-grid">
                    <div className="left-column">
                        <h2 className="column-title cs-title">Computing Sciences Club</h2>

                        <section className="card cs-card">
                            <h3 className="card-title">Who are we?</h3>
                            {/* Notice how Naya really likes exclamation marks */}
                            <p className="card-text">
                                 We are a group of Computer Science students who aim to bring likeminded 
                                individuals together to have fun and network in a friendly environment!!!
                            </p>
                        </section>

                        <section className="card cs-card">
                            <h3 className="card-title">What do we do?</h3>
                            <p className="card-text">
                                 We do a variety of activities to destress from the Computer Science student workload, such as:
                            </p>
                            <ul className="activity-list">
                                <li>Icebreaker activities</li>
                                <li>Board Games</li>
                                <li>Skill-building workshops</li>
                                <li>Code Showcases</li>
                                <li>Video Game sessions</li>
                                <li>Movie/TV nights</li>
                                <li>Pizza parties</li>
                                <li>Alumni/Guest Talks</li>
                                <li>...And more!</li>
                            </ul>
                        </section>

                        <div className="event-highlights">
                            <div className="event-box gold-event">
                                <img src="/Images/CSClubFall25.jpg" alt="A picture of the members of the comp sci club" />
                                <h4>First pizza party of last semester!</h4>
                            </div>
                            <div className="event-box green-event">
                                <img src="/Images/CSClubGames.jpg" alt="A picture of the members of the comp sci club playing games" />
                                <h4>Games, Competitions, Prizes...Pizza!!!!!!!!!</h4>
                            </div>
                        </div>
                    </div>

                    {/* BWiT Starts here */ }
                    <div className="right-column">
                        <h2 className="column-title bwit-title">Brockport Women in Tech</h2>

                        <section className="card bwit-card">
                            <h3 className="card-title">Who are we?</h3>
                            <p className="card-text">
                                Celebrating and uniting the women of the Brockport Computer Science department, 
                                our goal is to provide a safe and welcoming space and open ear for women in a field 
                                where it can be difficult to feel seen or heard.
                            </p>
                        </section>

                        <section className="card bwit-card">
                            <h3 className="card-title">What do we do?</h3>
                            <ul className="activity-list">
                                <li>Arts & Crafts
                                    <ul className="sub-list">
                                        <li>Coloring Books</li>
                                        <li>Bracelet Making</li>
                                        <li>Making Nametags</li>
                                    </ul>
                                </li>
                                <li>Movie Nights</li>
                                <li>Skill-building Workshops</li>
                                <li>Talk Sessions</li>
                                <li>Study Groups</li>
                                <li>Pizza parties</li>
                                <li>Alumni/Guest Talks</li>
                                <li>...And more!</li>
                            </ul>
                        </section>

                        <div className="event-highlights">
                            <div className="event-box gold-event">
                                <img src="/Images/BWiTMembers.jpg" alt="A picture of the members of BWiT" />
                                <h4>First meeting!</h4>
                            </div>
                            <div className="event-box green-event">
                                <img src="/Images/BWiTColoring.jpg" alt="A picture of the members of BWiT coloring" />
                                <h4>Pizza & Bingo!</h4>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Anything below this point is past the two column layout*/}
                <div className="alumni-banner">
                    <div className="alumni-banner-images">
                        <img src="/Images/BWiTSpeaker.png" alt="A picture of a BWiT guest speaker event" />
                        <img src="/Images/CSClubSpeaker.png" alt="A picture of a CS Club guest speaker event" />
                    </div>
                    <h3>Club Sponsored Speakers!</h3>
                </div>

                <section className="location-section">
                    <h2 className="location-title">But where?!?!?!?!</h2>
                    <div className="location-building">
                        <div className="location-details">
                            <p className="location-building">A.W. Brown Building (Academic Success Center)</p>
                            <p className="location-room">Comtec Student Lounge</p>
                            <p className="location-welcome">Everyone is welcome!</p>
                        </div>
                        <div className="location-image">
                            <img src="/Images/ASC.jpg" alt="A picture of a CS Club guest speaker event"/>
                        </div>
                    </div>
                </section>

                <div className="social-grid">
                    <div className="social-card cs-social-card">
                        <h3 className="social-title">Computing Sciences Club</h3>
                        <div className="social-links">
                            <div className="social-link">
                                <MessageSquare className="social-icon" />
                                <span><a href="https://discord.com/invite/6hUCrXdXvd">Discord!</a></span>
                            </div>
                            <div className="social-link">
                                <Instagram className="social-icon" />
                                <span>Instagram: <a href="https://instagram.com/bport.csc">bport.csc</a></span>
                            </div>
                        </div>
                    </div>

                    <div className="social-card bwit-social-card">
                        <h3 className="social-title">BWiT</h3>
                        <div className="social-links">
                            <div className="social-link">
                                <MessageSquare className="social-icon" />
                                <span><a href="https://discord.gg/9tjUeAS5X">Discord!</a></span>
                            </div>
                            <div className="social-link">
                                <Instagram className="social-icon" />
                                <span>Instagram: <a href="https://instagram.com/brockportwomenintechnology">brockportwomenintechnology</a></span>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="contact-section">
                    <h2 className="contact-title">Contact Us</h2>
                    <div className="contact-content">
                        <p className="contact-text">Have questions or want to get involved? Reach out to us! (These both currently
                            link to my email since I made the website but I can change it out if this website actually wants to be used)
                        </p>
                        <div className="contact-info">
                            <div className="contact-item">
                                <h4>Computing Sciences Club</h4>
                                <p>For CS Club related inquiries, contact:</p>
                                <a href="mailto:cfair4@brockport.edu">cfair4@brockport.edu</a>
                            </div>
                            <div className="contact-item">
                                <h4>BWiT (Brockport Women in Technology)</h4>
                                <p>For BWiT related inquiries, contact:</p>
                                <a href="mailto:cfair4@brockport.edu">cfair4@brockport.edu</a>
                            </div>
                        </div>
                    </div>
                </section>
            </main> 

            <footer className="footer">
                <p>Join us in building a vibrant Computer Science community at Brockport!</p>
            </footer>
        </div>
    );
}

export default ClubMainPage;