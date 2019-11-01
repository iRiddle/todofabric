export const ADD_EMPLOYEE = "EMPLOYEE::ADD_EMPLOYEE";
export const EDIT_EMPLOYEE = "EMPLOYEE::EDIT_EMPLOYEE";
export const REMOVE_EMPLOYEE = "EMPLOYEE::REMOVE_EMPLOYEE";

const addEmployee = data => ({
  type: ADD_EMPLOYEE,
  data
});

const editEmployee = id => ({
  type: EDIT_EMPLOYEE,
  id
});

export const removeEmployee = id => ({
  type: REMOVE_EMPLOYEE,
  id
});
