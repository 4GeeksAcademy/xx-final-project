// import React from "react";
// import { Link } from "react-router-dom";
// import '../../styles/footer.css';

// export function Footer() {
//   return (
//     <footer >
//     <Link to={"/ContactUsPage/"}>
//       <p className="contactUsLink">Contact Us</p>
//     </Link>
//   </footer>
//   )

// };

import React from "react";
import { Link, useLocation } from "react-router-dom";
import '../../styles/footer.css';

export function Footer() {
  const location = useLocation();

  // Check if the current pathname is the contact page
  const isContactPage = location.pathname === "/ContactUsPage/";

  // Render the link only if not on the contact page
  return (
    <footer>
      {!isContactPage && (
        <Link to={"/ContactUsPage/"}>
          <p className="contactUsLink">Contact Us</p>
        </Link>
      )}
    </footer>
  );
};
