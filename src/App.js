import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import formatDistanceToNow from "date-fns/formatDistanceToNow";

import { PrimaryButton, Stack } from "office-ui-fabric-react";

import { removeEmployee } from "./actions";
import { employeesSelector } from "./selectors";

import EmployeeCard from "./components/EmployeeCard";

class App extends Component {
  handleClick = () => {
    console.log("ll");
  };

  onDelete = id => {
    this.props.removeEmployee(id);
  };

  render() {
    const { employees } = this.props;
    console.log(employees);
    return (
      <Stack
        horizontalAlign="center"
        styles={{
          root: {
            width: "1200px",
            margin: "0 auto",
            color: "#605e5c"
          }
        }}
        gap={15}
      >
        <Stack horizontal verticalAlign="center" gap={15}>
          <h1>Todo list</h1>
          <PrimaryButton onClick={this.handleClick}>Add employee</PrimaryButton>
        </Stack>
        <Stack gap={15}>
          {!employees.length ? (
            <h3>List is empty</h3>
          ) : (
            employees.map(employee => (
              <EmployeeCard
                key={employee.id}
                id={employee.id}
                name={employee.name}
                email={employee.email}
                img={employee.img}
                created={formatDistanceToNow(employee.created)}
                onDelete={this.onDelete}
              />
            ))
          )}
        </Stack>
      </Stack>
    );
  }
}

const mapStateToProps = state => {
  return {
    employees: employeesSelector(state)
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ removeEmployee }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
