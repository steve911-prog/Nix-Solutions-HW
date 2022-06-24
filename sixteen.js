//sort
let persons = [
    {name: "Иван", age: 17},
    {name: "Мария", age: 35},
    {name: "Алексей", age: 73},
    {name: "Яков", age: 12},
];

let sort = (list, argument) => {
    list.filter(()=>{
        return list[argument];
    });
};
let l = sort(persons, "name")
console.log(l);