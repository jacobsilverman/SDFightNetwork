import fighter1 from "../assets/fighter1.png";
import fighter1Animation from "../assets/fighter1-animation.gif";
import fighter2 from "../assets/fighter2.png";
import fighter2Animation from "../assets/fighter2-animation.gif";
import iram from "../assets/fighters/Iram.png";
import iramAnimation from "../assets/fighters/Iram.gif";
import michael from "../assets/fighters/Michael.png";
import michaelAnimation from "../assets/fighters/Michael.gif";
import pablo from "../assets/fighters/Pablo.PNG";
import pabloAnimation from "../assets/fighters/Pablo.gif";
import ryan from "../assets/fighters/Ryan.PNG";
import ryanAnimation from "../assets/fighters/Ryan.gif";
import james from "../assets/fighters/James.PNG";
import jamesAnimation from "../assets/fighters/James.gif";
import { FIGHTING_STYLES } from "../constants/fightingStyles";

 
export const fightersData = {
  "fighters": [
    {
      "id": 1,
      "name": "Ryan Ownens",
      "height": "5'9\"",
      "weight": "180 lbs",
      "fightingStyles": [FIGHTING_STYLES.MUAY_THAI, FIGHTING_STYLES.MIXED_MARTIAL_ARTS],
      "age": 32,
      "yearsTraining": 5,
      "location": "La Jolla, CA",
      "gym": "Victory MMA",
      "record": "1-1",
      "profileImage": ryan,
      "profileGif": ryanAnimation,
      "contact": "@ryanprofighter"
    },
    {
      "id": 2,
      "name": "James Hoffman",
      "height": "6'0\"",
      "weight": "185 lbs",
      "fightingStyles": [FIGHTING_STYLES.MUAY_THAI],
      "age": 44,
      "yearsTraining": 3,
      "location": "La Jolla, CA",
      "gym": "Victory MMA",
      "record": "0-4",
      "profileImage": james,
      "profileGif": jamesAnimation,
      "contact": "(555) 555-5555"
    },
    {
      "id": 3,
      "name": "Michael Uchiha",
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
    {
      "id": 4,
      "name": "Iram Livingston",
      "height": "5'11\"",
      "weight": "170 lbs",
      "fightingStyles": [FIGHTING_STYLES.BOXING, FIGHTING_STYLES.JU_JITSU],
      "age": 28,
      "yearsTraining": 5,
      "location": "San Diego, CA",
      "gym": "North Park MMA",
      "record": "2-1",
      "profileImage": iram,
      "profileGif": iramAnimation,
      "contact": "(555) 555-5555"
    },
    {
      "id": 5,
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
