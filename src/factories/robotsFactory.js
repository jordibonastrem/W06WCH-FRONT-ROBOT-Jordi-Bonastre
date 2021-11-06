import { datatype } from "faker";
import { lorem } from "faker/locale/es";
import { Factory } from "fishery";

const factory = Factory.define(({ sequence }) => ({
  _id: sequence,
  name: lorem.sentence(5),
  img: lorem.sentence(20),
  caracteristics: {
    velocity: 10,
    resistence: 9,
    dateOfCreation: lorem.sentence(10),
  },
}));

export const getRandomRobot = () => factory.build();
export const getRandomRobots = (count = 3) => factory.buildList(count);
