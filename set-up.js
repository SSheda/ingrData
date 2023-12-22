/*const fs = require('fs');
const data =[];
fs.readFile("test.json", 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading JSON file:', err);
      return;
    }
    try {
      const jsonData = JSON.parse(data);
      jsonData.forEach(element => {
        element.name = element.vegName;
        delete element.vegName
        console.log(element) 
      });
      const jsonString = JSON.stringify(jsonData, null, 2);
      fs.writeFileSync('vegData.json', jsonString, 'utf-8');
    } catch (parseError) {
      console.error('Error parsing JSON:', parseError);
    }
  });*/
//const example = ["ingredient1","ingredient2", "ingredient3"];
/*for (i = 0; i < example.length; i++) {
    const myObj = {
        "id" : i,
        "name": example[i],
        "serving": "100 g",
        "calories": `0 kcal`,
        "carbohydrate": "0 g",
        "sugar": "0 g",
        "fiber": "0 g",
        "fat": "0 g",
        "protein" : "0 g"
    }
    data.push(myObj)
}
const jsonString = JSON.stringify(data, null, 2);
fs.writeFileSync('testData.json', jsonString, 'utf-8');*/