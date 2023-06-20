fetch("object.json")
  .then((response) => response.json())
  .then((data) => {
    process(data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });



function process(_data_){
    document.querySelector("body").innerHTML = `<h3>${_data_['o']}</h3>`;

}



