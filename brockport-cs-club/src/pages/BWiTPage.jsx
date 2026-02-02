import { MessageSquare, Instagram } from "lucide-react";

function BWiTPage() {
    return (
        <main className="main-content">
            <div style={{ marginTop: '1rem', marginBottom: '2rem' }}>
                <h2 className="column-title bwit-title">Brockport Women in Tech</h2>
            </div>

            <section className="card bwit-card" style={{ marginBottom: '2rem' }}>
                <h3 className="card-title">Who are we?</h3>
                <p className="card-text">
                    Celebrating and uniting the women of the Brockport Computer Science department, 
                    our goal is to provide a safe and welcoming space and open ear for women in a field 
                    where it can be difficult to feel seen or heard.
                </p>
            </section>

            <section className="card bwit-card" style={{ marginBottom: '2rem' }}>
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

            <div className="event-highlights club-page-events" style={{ marginBottom: '2rem' }}>
                <div className="event-box gold-event">
                    <img src="/Images/BWiTMembers.jpg" alt="A picture of the members of BWiT" />
                    { /* Does anyone call exclamation marks bang or is that just Mullins */ }
                    <h4>First meeting!</h4>
                </div>
                <div className="event-box green-event">
                    <img src="/Images/BWiTColoring.jpg" alt="A picture of the members of BWiT coloring" />
                    <h4>Pizza & Bingo!</h4>
                </div>
            </div>

            <section className="card bwit-card" style={{ marginTop: '2rem' }}>
                <h3 className="card-title">Follow Us!</h3>
                <div className="social-links-plain">
                    <a href="https://discord.gg/9tjUeAS5X" target="_blank" rel="noopener noreferrer" className="social-link-plain">
                        <MessageSquare className="social-icon" />
                        <span>Discord!</span>
                    </a>
                    <a href="https://instagram.com/brockportwomenintechnology" target="_blank" rel="noopener noreferrer" className="social-link-plain">
                        <Instagram className="social-icon" />
                        <span>Instagram: brockportwomenintechnology</span>
                    </a>
                </div>
            </section>
        </main>
    );
}

export default BWiTPage;