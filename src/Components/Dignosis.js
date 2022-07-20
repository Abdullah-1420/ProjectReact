import React from "react";
import NavBar from "./NavBar";
import Navs from "./Navs";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Table } from 'react-bootstrap';


export default function Dignosis() {
  const [Diagnosis, setDiagnosis] = useState([]);
  const navigate = useNavigate();

  let config = {
    method: "get",
    url: "http://127.0.0.1:8000/main/all_diagnosis",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  };

  useEffect(() => {
    axios(config)
      .then((res) => {
        console.log(res.data.Diagnosis);
        setDiagnosis(res.data.Diagnosis);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Navs />
      <NavBar />
      <Table striped bordered hover size="sm" className='mt-3'>
      <thead>
        <tr>
          <th>#</th>
          <th>Temperature </th>
          <th>Pressure</th>
          <th>sitDescription</th>
          <th>drDiagnosis</th>
          <th>iscompleted</th>
          <th>patients</th>
          <th>nurce</th>
          <th>doctor</th>
        </tr>
      </thead>
      <tbody>
      {Diagnosis.map((d) => {
            return (
              <tr key={d.id}>
                <td>{d.id}</td>
                <td>{d.Temperature}</td>
                <td>{d.Pressure}</td>
                <td>{d.sitDescription}</td>
                <td>{d.drDiagnosis}</td>
                <td>{d.iscompleted?'true':'false'}</td>
                <td>{d.patients}</td>
                <td>{d.nurce}</td>
                <td>{d.doctor}</td>
                {/* <td>
                  <button>Update</button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      Delete(d.id);
                    }}
                  >
                    Delete
                  </button>
                </td> */}
              </tr>
            );
          })}
       
      </tbody>
    </Table>
    </div>
  );
}
