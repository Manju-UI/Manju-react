import React, { useState } from "react";
import "./index.css";

function EmployeeList() {
  const [team, setTeam] = useState("Team-B");
  const [employee, seEmployee] = useState([
    {
      userName: "Frontend",
      jobTitleName: "Frontend Developer",
      employeeCode: "E1",
      techstack: ["React", "javascript", "html", "css"],
      emailAddress: "fe@gmail.com",
      teamName: "Team-B",
      image:
        "https://s3.studytonight.com/curious/uploads/pictures/1631204081-106730.png",
    },
    {
      userName: "Backend",
      jobTitleName: "Backend Developer",
      employeeCode: "E2",
      techstack: ["React", "Node", "php"],
      emailAddress: "be@gmail.com",
      teamName: "Team-A",
      image:
        "https://s3.studytonight.com/curious/uploads/pictures/1631204081-106730.png",
    },
    {
      userName: "Fullstack",
      jobTitleName: "Developer",
      employeeCode: "E3",
      techstack: ["React", "javascript", "node", "php", "html", "css"],
      emailAddress: "fs@gmail.com",
      teamName: "Team-B",
      image:
        "https://www.reachfirst.com/wp-content/uploads/2018/08/Web-Development.jpg",
    },
    {
      userName: "Frontend",
      jobTitleName: "Frontend Developer",
      employeeCode: "E4",
      techstack: ["React", "javascript", "html", "css"],
      emailAddress: "fe@gmail.com",
      teamName: "Team-A",
      image:
        "https://s3.studytonight.com/curious/uploads/pictures/1631204081-106730.png",
    },
    {
      userName: "Backend",
      jobTitleName: "Backend Developer",
      employeeCode: "E5",
      techstack: ["React", "Node", "php"],
      emailAddress: "be@gmail.com",
      teamName: "Team-B",
      image:
        "https://s3.studytonight.com/curious/uploads/pictures/1631204081-106730.png",
    },
    {
      userName: "Fullstack",
      jobTitleName: "Developer",
      employeeCode: "E6",
      techstack: ["React", "javascript", "node", "php", "html", "css"],
      emailAddress: "fs@gmail.com",
      teamName: "Team-A",
      image:
        "https://www.reachfirst.com/wp-content/uploads/2018/08/Web-Development.jpg",
    },
  ]);

  const changeHandler = (e) => {
    setTeam(e.target.value);
  };
  const handleClick = (index) => {
    const updatedEmployees = [...employee];
    updatedEmployees[index] = {
      ...updatedEmployees[index],
      teamName: updatedEmployees[index].teamName === team ? "" : team,
    };
    setEmployee(updatedEmployees);
  };
  return (
    <div>
      <div className="container">
        <div className="row ">
          <div className="col ">
            <select
              className="form-select form-select-lg"
              value={team}
              onChange={changeHandler}
            >
              <option value="Team-A">Team-A</option>
              <option value="Team-B">Team-B</option>
            </select>
          </div>
        </div>
        <div className="row ">
          <div className="col ">
            <div className="card-collection ">
            {employee
                .filter((emp) => emp.teamName === team)
                .map((item, index) => (
                  <div
                    key={index}
                    className="card m-2 px-5 py-3"
                    style={{ cursor: "pointer" }}
                  >
                    <div className="card-img-top">
                      <img
                        style={{ width: "100%" }}
                        className="rounded-5"
                        src={item.image}
                        alt={item.userName}
                      />
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">
                        Full Name : {item.userName}
                      </h5>
                      <p className="card-text">
                        Designation : {item.jobTitleName}
                      </p>
                      <div className="card-text">
                        Employee Code : {item.employeeCode}
                      </div>
                      <div className="card-text">
                        Techstack :{" "}
                        {item.techstack.map((tech, i) => (
                          <div key={i}>
                            <h6 className="mx-5">{tech}</h6>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeList;
