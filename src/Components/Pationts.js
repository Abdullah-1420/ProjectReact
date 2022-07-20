import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navs from './Navs';
import NavBar from './NavBar';
import { Table } from 'react-bootstrap';


export default function Pationts() {
  const [patients, setPatients] = useState([]);
  const navigate = useNavigate();

  let config = {
    method: "get",
    url: "http://127.0.0.1:8000/main/all_patients",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  };

  useEffect(() => {
    axios(config)
      .then((res) => {
        setPatients(res.data.Patients);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const AfterDeleteData = () => {
    axios(config)
      .then((res) => {
        setPatients(res.data.Patients);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const Delete = (id) => {
    axios
      .delete(`http://127.0.0.1:8000/main/delete_patient/${id}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then(() => {
        AfterDeleteData();
      });
  };
  return (
    <div >
      <Navs />
      <NavBar />
      <Table striped bordered hover size="sm" className='mt-3'>
      <thead>
        <tr>
          <th>#</th>
          <th>Full name </th>
          <th>National ID</th>
          <th>Birth date</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
      {patients.map((p) => {
            return (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.full_name}</td>
                <td>{p.NationalID}</td>
                <td>{p.birth_date}</td>
                <td>{p.phone}</td>
                <td>
                  <button
                    onClick={() => {
                      Delete(p.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
       
      </tbody>
    </Table>
    </div>
  )
}
