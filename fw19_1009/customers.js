import {
    navbar,
    footer,
    company,
    resourse,
    solutions,
    salesReadinesPlatform,
    main,
  } from "../fw19_1035/componant/navbar.js";
  // console.log(navbar);
  
  document.getElementById("navbar").innerHTML = navbar();
  document.getElementById("footer").innerHTML = footer();
  let arr = document.querySelectorAll(".arr");
  main(arr);