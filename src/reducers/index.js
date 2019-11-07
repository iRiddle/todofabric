import faker from "faker";
import { ADD_EMPLOYEE, EDIT_EMPLOYEE, REMOVE_EMPLOYEE } from "../actions";

const initialState = [
  {
    id: 1,
    name: faker.name.findName(),
    email: faker.internet.email(),
    img: faker.image.avatar(),
    job: faker.name.jobTitle(),
    phone: "+7 (999) 999-99-99",
    office: 5,
    created: new Date()
  },
  {
    id: 2,
    name: faker.name.findName(),
    email: faker.internet.email(),
    img: faker.image.avatar(),
    job: faker.name.jobTitle(),
    phone: "+7 (999) 999-99-88",
    office: 4,
    created: new Date()
  },
  {
    id: 3,
    name: faker.name.findName(),
    email: faker.internet.email(),
    img: faker.image.avatar(),
    job: faker.name.jobTitle(),
    phone: "+7 (999) 999-99-77",
    office: 32,
    created: new Date()
  },
  {
    id: 4,
    name: faker.name.findName(),
    email: faker.internet.email(),
    img: faker.image.avatar(),
    job: faker.name.jobTitle(),
    phone: "+7 (999) 999-99-66",
    office: 64,
    created: new Date()
  },
  {
    id: 5,
    name: faker.name.findName(),
    email: faker.internet.email(),
    img: faker.image.avatar(),
    job: faker.name.jobTitle(),
    phone: "+7 (999) 999-99-55",
    office: 22,
    created: new Date()
  }
];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EMPLOYEE:
      return [action.data, ...state];
    case EDIT_EMPLOYEE:
      const { email, img, job, name, office, phone, editId } = action.elem;
      return state.map(employee =>
        employee.id === editId
          ? { ...employee, email, img, job, name, office, phone }
          : { ...employee }
      );
    case REMOVE_EMPLOYEE:
      return state.filter(employee => employee.id !== action.id);

    default:
      return state;
  }
};

export default reducer;
