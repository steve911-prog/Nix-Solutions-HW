fetch("object.json")
  .then((response) => response.json())
  .then((data) => {
    process(data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });



function process(_data_){
    dataNamesArray = Object.keys(_data_)
    console.log(dataNamesArray)

    document.querySelector("body").innerHTML = `<h3>${_data_['o']}</h3>`;

}


// https://www.javascripttutorial.net/object/convert-an-object-to-an-array-in-javascript/
