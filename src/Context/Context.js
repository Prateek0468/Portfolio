import foodfiesta from "../assets/ProductImages/foodfiesta.png";
import covinfo from "../assets/ProductImages/covinfo.png";
import Netflix from "../assets/ProductImages/Netflix.jpg";
import happyhomes from "../assets/ProductImages/happyhomes.png";
import flagow from "../assets/ProductImages/flagow.png";
import amazon from "../assets/ProductImages/amazon.png";
import cash from "../assets/ProductImages/cash.jpg";
import spyisland from "../assets/ProductImages/spyisland.png";

export const states = {
  projects: [
    {
      title: "Netflix-replica",
      img: Netflix,
      description: `This was my personal project. In which I made an exact replica of Netflix front-end. It also uses
      Youtube-api from google to help play the trailers of the given movies.`,
      url: "https://netflix-clone-e2130.web.app/",
    },
    {
      title: "Covid Tracker",
      img: covinfo,
      description: `This web app tracks worldwide covid cases and can even separate them country-
wise. This also shows the number of people recovered and deaths. Also, it shows
a line graph to better visualize the data and a sorted list of countries by covid
cases.`,
      url: "https://covid-tracker-c523c.web.app/",
    },

    {
      title: "Expense-Tracker",
      img: cash,
      description: `This is a small project made for learning purposes which uses states, event handlers and props
      to create a basic expense tracker. `,
      url: "https://myexpensetrackerr.web.app",
    },
    //     {
    //       title: "Flagow",
    //       img: flagow,
    //       description: `It's again my original design. It's an interactive fun quiz game that tests your
    // knowledge of ags, capitals, and currencies. This is just the rst version and a lot
    // more functionality will be coming to this.`,
    //       url: "https://itsflagow.web.app/",
    //     },
    {
      title: "FoodFiesta",
      img: foodfiesta,
      description: `FoodFiesta is your go-to app to statisfy your cravings. It uses spoonacular API to fetch the data. You
can search recipes, and a random recipe, nd food facts and jokes. I will be
integrating it with tomato API to get info about local food places`,
      url: "https://thisisfoodfiesta.web.app",
    },
    {
      title: "Amazon Clone",
      img: amazon,
      description: `This was my personal project. In which I made an exact replica of Amazon. Which
even had user authentication provided by rebase and complete payment
processing using stripe api. It had all the features like cart and ratings of the
product.`,
      url: "https://fullstack-clone-388b8.web.app/",
    },
  ],
};
