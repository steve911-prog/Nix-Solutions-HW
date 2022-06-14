//Table -> tr -> th(Headlines) or td(RegularBox)
//Multiply Table
/*let table = document.createElement("table");
let box = null;
let row = null;

let create_tml  = () => {
    let list = [];
    let num = ["one", "two", "three", "four", "five", "six", "seven", "eight",
"nine", "ten"];
    for(i = 1; i != 10; i++){
        list.push([i]);
        //console.log(Array.isArray(list[i]));
        console.log(list[i]);
        
        for
        
        
    }
    console.log(list);
    console.log(list[1])
};

create_tml();
*/


//Color box and column
/*let attr = 0;

document.addEventListener("mousemove", (eventor)=>{
    
    document.querySelector("table").style.color = "red";
});
*/


//Calc live

let body = document.querySelector("body");

let table = document.createElement("table");
console.log(body);
document.body.appendChild(table);

let tr = document.createElement("tr");
let td = document.createElement("td");


let btns = [["C","<","/","x^2"],["7","8","9","x"],
["4","5","6","-"],["1","2","3","+"],["+/-","0",".","="]];

/*for(i in btns){
    table.appendChild(tr);
    for(j in btns[i]){
        tr.appendChild(td)
        td.textContent = `${btns[i][j]}`;
    }
    
}

body.appendChild(table);
*/




for(i in btns){
    table.appendChild(tr);

    for(j in btns[i]){
        tr.appendChild(td);
    }
}





