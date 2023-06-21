import {Link} from "react-router-dom";

export default function Nav(){
    return (
      <nav>
        <a href="#">
          <img
            src="https://littlelemonrestaurantankitamwebsiteproject.netlify.app/static/media/Logo.370f832fad423c516d56.png"
            width="200px"
            alt="..."
          ></img>
        </a>
        <ul class="blockquote">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Menu</a>
          </li>
          <li>
            <a href="#">Reservation</a>
          </li>
          <li>
            <a href="#">Order Online</a>
          </li>
        </ul>
      </nav>
    );
}