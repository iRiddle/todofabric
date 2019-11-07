import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import formatDistanceToNow from "date-fns/formatDistanceToNow";

import { PrimaryButton, Stack } from "office-ui-fabric-react";
import {
  NotificationContainer,
  NotificationManager
} from "react-notifications";

import { removeEmployee, addEmployee, editEmployee } from "./actions";
import { employeesSelector } from "./selectors";

import EmployeeCard from "./components/EmployeeCard";
import Modal from "./components/Modal";

import { getUniqId, validateEmail } from "./utils";

class App extends Component {
  state = {
    hideDialog: true,
    name: "",
    email: "",
    office: "",
    phone: "",
    job: "",
    img: {},
    editId: -1
  };

  onDelete = id => {
    this.props.removeEmployee(id);
  };

  onSave = () => {
    const { name, email, office, phone, job, img, editId } = this.state;
    const isValidEmail = validateEmail(email);
    if (
      !name.length ||
      !email.length ||
      !office.length ||
      !phone.length ||
      !job.length
    ) {
      return NotificationManager.error("Not all fields are filled", "Error!");
    }
    if (!isValidEmail) {
      return NotificationManager.error("Email format is incorrect", "Error!");
    }
    editId !== -1
      ? this.props.editEmployee({
          name,
          email,
          office,
          phone,
          job,
          img,
          editId
        })
      : this.props.addEmployee({
          id: getUniqId(),
          name,
          email,
          job,
          phone,
          office,
          img,
          created: new Date()
        });
    this.setState(
      {
        editId: -1,
        name: "",
        email: "",
        office: "",
        phone: "",
        job: "",
        img: {}
      },
      () => this.closeDialog()
    );
  };

  showDialog = () => {
    this.setState({ hideDialog: false });
  };

  closeDialog = () => {
    this.setState({ hideDialog: true });
  };

  handleData = (e, field) => {
    this.setState({
      [field]: e.target.value
    });
  };

  onDropImg = picture => {
    this.setState({
      img: URL.createObjectURL(picture[0])
    });
  };

  onUpdate = id => {
    const { employees } = this.props;
    const userForUpdate = employees.filter(employee => employee.id === id)[0];
    const { email, img, job, name, office, phone } = userForUpdate;
    this.setState(
      {
        name,
        email,
        office,
        phone,
        job,
        img,
        editId: id
      },
      () => this.showDialog()
    );
  };

  render() {
    const { hideDialog, name, email, office, phone, job } = this.state;
    const { employees } = this.props;
    return (
      <Stack
        horizontalAlign="center"
        styles={{
          root: {
            width: "900px",
            margin: "0 auto",
            color: "#605e5c"
          }
        }}
        gap={15}
      >
        <Stack horizontal verticalAlign="center" gap={15}>
          <h1>Employees list</h1>
          <PrimaryButton onClick={this.showDialog}>Add employee</PrimaryButton>
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
                job={employee.job}
                phone={employee.phone}
                office={employee.office}
                created={formatDistanceToNow(employee.created)}
                onDelete={this.onDelete}
                onUpdate={this.onUpdate}
              />
            ))
          )}
        </Stack>
        <Modal
          hideDialog={hideDialog}
          showDialog={this.showDialog}
          closeDialog={this.closeDialog}
          handleData={this.handleData}
          onSave={this.onSave}
          onDropImg={this.onDropImg}
          name={name}
          office={office}
          email={email}
          phone={phone}
          job={job}
        />
        <NotificationContainer />
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
  return bindActionCreators(
    { removeEmployee, addEmployee, editEmployee },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
