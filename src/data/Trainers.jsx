import fighter1 from "../assets/fighter1.png";
import fighter1Animation from "../assets/fighter1-animation.gif";
import fighter2 from "../assets/fighter2.png";
import fighter2Animation from "../assets/fighter2-animation.gif";
import fighter3 from "../assets/fighter3.png";
import fighter3Animation from "../assets/fighter3-animation.gif";
import michael from "../assets/fighters/Michael.png";
import michaelAnimation from "../assets/fighters/Michael.gif";

 
export const trainersData = {
  "trainers": [
    {
      "id": 1,
      "name": "Alex Johnson",
      "height": "5'10\"",
      "weight": "170 lbs",
      "fightingStyles": ["Boxing", "BJJ"],
      "age": 28,
      "yearsTraining": 5,
      "location": "San Diego, CA",
      "gym": "North Park MMA",
      "profileImage": fighter1,
      "profileGif": fighter1Animation,
      "contact": "(555) 555-5555"
    },
    {
      "id": 2,
      "name": "Steve Hoffman",
      "height": "5'7\"",
      "weight": "135 lbs",
      "fightingStyles": ["Muay Thai", "MMA"],
      "age": 44,
      "yearsTraining": 3,
      "location": "La Jolla, CA",
      "gym": "Shogun Combat Club",
      "profileImage": fighter2,
      "profileGif": fighter2Animation,
      "contact": "(555) 555-5555"
    },
    {
      "id": 3,
      "name": "Cambell Ownens",
      "height": "6'1\"",
      "weight": "200 lbs",
      "fightingStyles": ["Muay Thai", "MMA"],
      "age": 32,
      "yearsTraining": 5,
      "location": "La Jolla, CA",
      "gym": "Shogun Combat Club",
      "profileImage": fighter3,
      "profileGif": fighter3Animation,
      "contact": "(555) 555-5555"
    },
     {
      "id": 4,
      "name": "Michael",
      "height": "5'9\"",
      "weight": "135 lbs",
      "fightingStyles": ["Muay Thai", "BJJ"],
      "age": 24,
      "yearsTraining": 1,
      "location": "La Jolla, CA",
      "gym": "Victory MMA",
      "profileImage": michael,
      "profileGif": michaelAnimation,
      "contact": "(555) 555-5555"
    }
  ]
}
