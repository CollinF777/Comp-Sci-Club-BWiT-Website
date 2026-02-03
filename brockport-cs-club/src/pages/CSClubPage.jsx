import { MessageSquare, Instagram } from "lucide-react";

function CSClubPage() {
    return (
        <main className="main-content">
            <div style={{ marginTop: '1rem', marginBottom: '2rem' }}>
                <h2 className="column-title cs-title">Computing Sciences Club</h2>
            </div>

            <section className="card cs-card" style={{ marginBottom: '2rem' }}>
                <h3 className="card-title">Who are we?</h3>
                { /* Like 90% of this text-wise is taken from Naya's presentation she made so judge her writing not mine */ } 
                { /* She also really likes exclamation points, although apparently that was also Ryan */ }
                <p className="card-text">
                    We are a group of Computer Science students who aim to bring likeminded 
                    individuals together to have fun and network in a friendly environment!!!
                </p>
            </section>

            <section className="card cs-card" style={{ marginBottom: '2rem' }}>
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

            <div className="event-highlights club-page-events" style={{ marginBottom: '2rem' }}>
                <div className="event-box gold-event">
                    <img src="/Images/CSClubFall25.jpg" alt="A picture of the members of the comp sci club" />
                    <h4>First pizza party of last semester!</h4>
                </div>
                <div className="event-box green-event">
                    <img src="/Images/CSClubGames.jpg" alt="A picture of the members of the comp sci club playing games" />
                    <h4>Games, Competitions, Prizes...Pizza!!!!!!!!!</h4>
                </div>
            </div>

            <section className="card cs-card" style={{ marginTop: '2rem' }}>
                <h3 className="card-title">Follow Us!</h3>
                <div className="social-links-plain">
                    <a href="https://discord.com/invite/6hUCrXdXvd" target="_blank" rel="noopener noreferrer" className="social-link-plain">
                        <MessageSquare className="social-icon" />
                        <span>Discord!</span>
                    </a>
                    <a href="https://instagram.com/bport.csc" target="_blank" rel="noopener noreferrer" className="social-link-plain">
                        <Instagram className="social-icon" />
                        <span>Instagram: bport.csc</span>
                    </a>
                </div>
            </section>
        </main>
    );
}

export default CSClubPage;