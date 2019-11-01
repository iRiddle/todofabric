import faker from "faker";
import { ADD_EMPLOYEE, EDIT_EMPLOYEE, REMOVE_EMPLOYEE } from "../actions";

const initialState = [
  {
    id: 1,
    name: faker.name.findName(),
    email: faker.internet.email(),
    img: faker.image.avatar(),
    created: new Date()
  },
  {
    id: 2,
    name: faker.name.findName(),
    email: faker.internet.email(),
    img: faker.image.avatar(),
    created: new Date()
  },
  {
    id: 3,
    name: faker.name.findName(),
    email: faker.internet.email(),
    img: faker.image.avatar(),
    created: new Date()
  },
  {
    id: 4,
    name: faker.name.findName(),
    email: faker.internet.email(),
    img: faker.image.avatar(),
    created: new Date()
  },
  {
    id: 5,
    name: faker.name.findName(),
    email: faker.internet.email(),
    img: faker.image.avatar(),
    created: new Date()
  }
];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EMPLOYEE:
      return [...state.employees, action.data];
    case EDIT_EMPLOYEE:
      return 0;
    case REMOVE_EMPLOYEE:
      console.log(state, action.id);
      return state.filter(employee => employee.id !== action.id);

    default:
      return state;
  }
};

export default reducer;
