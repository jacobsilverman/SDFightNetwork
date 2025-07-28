import fighter2 from "../assets/fighter2.png";
import fighter2Animation from "../assets/fighter2-animation.gif";
import fighter3Animation from "../assets/fighter3-animation.gif";
import michael from "../assets/fighters/Michael.png";
import michaelAnimation from "../assets/fighters/Michael.gif";
import xavier from "../assets/fighters/Xavier.png";
import xavierAnimation from "../assets/fighters/Xavier.gif";
import kabib from "../assets/fighters/kabib.png";
import evan from "../assets/fighters/Evan.jpg";
import pablo from "../assets/fighters/Pablo.PNG";
import pabloAnimation from "../assets/fighters/Pablo.gif";
import { FIGHTING_STYLES } from "../constants/fightingStyles";

 
export const trainersData = {
  "trainers": [
    {
      "id": 1,
      "name": "Michael Goodkill",
      "height": "5'7\"",
      "weight": "135 lbs",
      "fightingStyles": [FIGHTING_STYLES.MUAY_THAI, FIGHTING_STYLES.JU_JITSU],
      "age": 21,
      "yearsTraining": 1,
      "location": "La Jolla, CA",
      "gym": "Victory MMA",
      "record": "4-0",
      "profileImage": michael,
      "profileGif": michaelAnimation,
      "contact": "(555) 555-5555"
    },
    
    // {
    //   "id": 2,
    //   "name": "Connor Mcgregor",
    //   "height": "5'7\"",
    //   "weight": "135 lbs",
    //   "fightingStyles": [FIGHTING_STYLES.MUAY_THAI, FIGHTING_STYLES.MIXED_MARTIAL_ARTS],
    //   "age": 44,
    //   "yearsTraining": 3,
    //   "location": "La Jolla, CA",
    //   "gym": "Shogun Combat Club",
    //   "record": "0-2",
    //   "profileImage": evan,
    //   "profileGif": fighter2Animation,
    //   "contact": "(555) 555-5555"
    // },
    // {
    //   "id": 3,
    //   "name": "Roger Goodman",
    //   "height": "6'1\"",
    //   "weight": "200 lbs",
    //   "fightingStyles": [FIGHTING_STYLES.MUAY_THAI, FIGHTING_STYLES.MIXED_MARTIAL_ARTS],
    //   "age": 32,
    //   "yearsTraining": 5,
    //   "location": "La Jolla, CA",
    //   "gym": "Shogun Combat Club",
    //   "record": "1-0",
    //   "profileImage": kabib,
    //   "profileGif": fighter3Animation,
    //   "contact": "(555) 555-5555"
    // },
    // {
    //   "id": 4,
    //   "name": "Alex Johnson",
    //   "height": "5'10\"",
    //   "weight": "170 lbs",
    //   "fightingStyles": [FIGHTING_STYLES.BOXING, FIGHTING_STYLES.JU_JITSU],
    //   "age": 28,
    //   "yearsTraining": 5,
    //   "location": "San Diego, CA",
    //   "gym": "North Park MMA",
    //   "record": "2-0",
    //   "profileImage": xavier,
    //   "profileGif": xavierAnimation,
    //   "contact": "(555) 555-5555"
    // },
    {
      "id": 2,
      "name": "Pablo Escobar",
      "height": "6'0\"",
      "weight": "170 lbs",
      "fightingStyles": [FIGHTING_STYLES.BOXING, FIGHTING_STYLES.MUAY_THAI],
      "age": 25,
      "yearsTraining": 5,
      "location": "San Diego, CA",
      "gym": "Victory MMA",
      "record": "2-0",
      "profileImage": pablo,
      "profileGif": pabloAnimation,
      "contact": "(555) 555-5555"
    },
  ]
}
