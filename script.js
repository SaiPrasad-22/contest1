/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
    arr.map((employee) => { if (employee.profession === "developer") console.log(employee) });
}


function PrintDeveloperbyForEach() {
    arr.forEach((employee) => { if (employee.profession === "developer") console.log(employee); });
}

function addData() {
    let employee = { id: 4, name: "susan", age: "20", profession: "intern" };
    arr.push(employee);
    console.log(arr);
}

function removeAdmin() {
    let newArr = arr.filter((employee) => { return employee.profession != "admin" });
    console.log(newArr);
}

function concatenateArray() {
    let newArr = [
        { id: 5, name: "johny", age: "19", profession: "Assistant developer" },
        { id: 6, name: "jacky", age: "21", profession: "Assistant developer" },
        { id: 7, name: "kareni", age: "20", profession: "HR admin" },
    ];
    let copyArr = arr.concat(newArr);
    console.log(copyArr);
}
