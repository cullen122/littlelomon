export default function Footer(){
    return(
        <footer className="sep">
            <div>
                <img width="250px" src="https://littlelemonrestaurantankitamwebsiteproject.netlify.app/static/media/Logo.6c132dfefa69396bba43f72aa595e62f.svg" alt="logo" />
            </div>

            {/* navigation sections */}
            <div>
                <h3>Navigation</h3>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Menu</a></li>
                    <li><a href="#">Reservations</a></li>
                    <li><a href="#">Order Online</a></li>
                </ul>
            </div>

            {/* contact sections */}
            <div>
                <h3>Contact</h3>
                <ul>
                    <li><a href="#">Phone Number</a></li>
                    <li><a href="#">Email</a></li>
                    <li><a href="#">Address</a></li>
                </ul>
            </div>

            {/* social media sections */}
            <div>
                <h3>Social Media</h3>
                <ul>
                    <li><a href="#">Instagram</a></li>
                    <li><a href="#">LinkedIn</a></li>
                    <li><a href="#">Pinterest</a></li>
                </ul>
            </div>
        </footer>
    )
}