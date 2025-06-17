
import fighter2 from "../assets/fighter2.png";
import fighter2Animation from "../assets/fighter2-animation.gif";
import fighter3Animation from "../assets/fighter3-animation.gif";
import michael from "../assets/fighters/Michael.png";
import michaelAnimation from "../assets/fighters/Michael.gif";
import xavier from "../assets/fighters/Xavier.png";
import xavierAnimation from "../assets/fighters/Xavier.gif";
import kabib from "../assets/fighters/kabib.png";
import evan from "../assets/fighters/Evan.jpg";

 
export const trainersData = {
  "trainers": [
    {
      "id": 1,
      "name": "Michael",
      "height": "5'7\"",
      "weight": "135 lbs",
      "fightingStyles": ["Muay Thai", "BJJ"],
      "age": 21,
      "yearsTraining": 1,
      "location": "La Jolla, CA",
      "gym": "Victory MMA",
      "profileImage": michael,
      "profileGif": michaelAnimation,
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
      "profileImage": evan,
      "profileGif": fighter2Animation,
      "contact": "(555) 555-5555"
    },
    {
      "id": 3,
      "name": "Roger Goodman",
      "height": "6'1\"",
      "weight": "200 lbs",
      "fightingStyles": ["Muay Thai", "MMA"],
      "age": 32,
      "yearsTraining": 5,
      "location": "La Jolla, CA",
      "gym": "Shogun Combat Club",
      "profileImage": kabib,
      "profileGif": fighter3Animation,
      "contact": "(555) 555-5555"
    },
    {
      "id": 4,
      "name": "Alex Johnson",
      "height": "5'10\"",
      "weight": "170 lbs",
      "fightingStyles": ["Boxing", "BJJ"],
      "age": 28,
      "yearsTraining": 5,
      "location": "San Diego, CA",
      "gym": "North Park MMA",
      "profileImage": xavier,
      "profileGif": xavierAnimation,
      "contact": "(555) 555-5555"
    },
  ]
}
