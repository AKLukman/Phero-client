// import React from "react";
// import emailjs from "emailjs-com";
// import "./Contact.css";
// import { useHistory } from "react-router-dom";
// const Contact = ({ setLoginUser2 }) => {
//   function sendEmail(e) {
//     e.preventDefault();
//     emailjs
//       .sendForm(
//         "service_tj4jume",
//         "template_wxzz8bw",
//         e.target,
//         "user_JegwN2JYR03exvXsYURDN"
//       )
//       .then((res) => {
//         console.log(res);
//       })
//       .catch((error) => console.log(error));
//   }
//   const history = useHistory();

//   return (
//     <div>
//       <nav class="navbar navbar-expand-lg navbar-light bg-light">
//         <div class="container-fluid" className="container">
//           <a class="navbar-brand" onClick={() => history.push("/seller")}>
//             WEB service
//           </a>
//           <button
//             class="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarNav"
//             aria-controls="navbarNav"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span class="navbar-toggler-icon"></span>
//           </button>
//           <div class="collapse navbar-collapse" id="navbarNav">
//             <ul class="navbar-nav ms-auto">
//               <li class="nav-item">
//                 <a
//                   class="nav-link"
//                   // className="button"
//                   onClick={() => history.push("/seller")}
//                 >
//                   Home
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//       <div id="contact">
//         <form action="#" onSubmit={sendEmail}>
//           <ul className="ull">
//             <h1>Contact</h1>
//             <li>
//               <input
//                 type="text"
//                 name="name"
//                 id="name"
//                 placeholder="Full name"
//               />
//               <input type="email" name="email" id="email" placeholder="Email" />
//             </li>
//             <li>
//               <textarea
//                 name="message"
//                 id="message"
//                 placeholder="Your message"
//               ></textarea>
//             </li>
//             <li>
//               <input
//                 type="submit"
//                 value="Send message"
//                 class="btnn"
//                 id="submit"
//               />
//             </li>
//           </ul>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Contact;
