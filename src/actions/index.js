export const ADD_EMPLOYEE = "EMPLOYEE::ADD_EMPLOYEE";
export const EDIT_EMPLOYEE = "EMPLOYEE::EDIT_EMPLOYEE";
export const REMOVE_EMPLOYEE = "EMPLOYEE::REMOVE_EMPLOYEE";

export const addEmployee = data => ({
  type: ADD_EMPLOYEE,
  data
});

export const editEmployee = elem => ({
  type: EDIT_EMPLOYEE,
  elem
});

export const removeEmployee = id => ({
  type: REMOVE_EMPLOYEE,
  id
});
