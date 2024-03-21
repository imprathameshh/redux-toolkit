/* THIS FILE ONLY FETCHING A DATA  */
import Chance from "chance";

const chance = Chance();

export const fakeUserDate = () => {
  return chance.name({ middle: true });
};
fakeUserDate();
