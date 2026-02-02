function ContactPage() {
    return (
        <main className="main-content">
            <section className="contact-section">
                <h2 className="contact-title">Contact Us</h2>
                <div className="contact-content">
                    <p className="contact-text">
                        Have questions or want to get involved? Reach out to us! (These both currently
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

            <section className="location-section">
                <h2 className="location-title">Visit Us!</h2>
                <div className="location-building">
                    <div className="location-details">
                        <p className="location-building">A.W. Brown Building (Academic Success Center)</p>
                        <p className="location-room">Comtec Student Lounge</p>
                        <p className="location-welcome">Everyone is welcome!</p>
                    </div>
                    <div className="location-image">
                        <img src="/Images/ASC.jpg" alt="A picture of the Academic Success Center"/>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default ContactPage;