class Employee {
    constructor(id, name, division){
        this.id = id;
        this.name = name;
        this.divison = division;
    }
    login = () => {
        console.log(this.name + "   has logged in")
    };
}

let emp = new Employee(1,"abc", "hr");
emp.login ();
