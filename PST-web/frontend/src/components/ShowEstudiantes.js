import React, { Component } from "react";
import axios from "axios";
import { backend } from "../App";

export default class ShowEstudiantes extends Component {
  render() {
    return <div></div>;
  }
  state = {
    users: [],
    idEstudiante: "",
    nombreEstudiante: "",
    apellidoEstudiante: "",
  };
  async getEstudiantes() {
    const res = await axios.get(
      backend.host + ":" + backend.port + "/estudiantes"
    );
    this.setState({ users: res.data });
  }
  async componentDidMount() {
    await this.getEstudiantes();
    console.log(this.state.users);
  }
}
