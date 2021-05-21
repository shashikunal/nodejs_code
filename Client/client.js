window
  .fetch("http://localhost:5000/", { mode: "cors" })
  .then(data => {
    data
      .json()
      .then(employees => {
        let output = [];
        for (let emp of employees) {
          output += ` 
              <div>
                <h2>${emp.emp_name}</h2>
                <p>${emp.emp_salary}</p>
                <p>${emp.emp_designation}</p>
                <p>${emp.emp_education}</p>
                <p>${emp.emp_gender}</p>
              </div>
              `;
        }
        document.getElementById("template").innerHTML = output;
      })
      .catch(err => console.log(err));
  })
  .catch(err => console.log(err));
