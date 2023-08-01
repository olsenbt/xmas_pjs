(function () {
    window.addEventListener("load", init);
  
    function init() {
      id("addUser").addEventListener("click", addUser);
      id("submit").addEventListener("click", () => {
        console.log("test");
        let results = calculateBalance();
        printResults(results);
        id("results").classList.remove("hidden");
      });
      // Update options for the first user
      updateOptions(id("choice1"));
      updateOptions(id("choice2"));
      updateOptions(id("choice3"));
    }
  
    function addUser() {
      const userContainer = id("people");
      const newUserDiv = gen("div");
      newUserDiv.classList.add("user");
  
      const userNameInput = gen("input");
      userNameInput.type = "text";
      userNameInput.placeholder = "Enter Name";
  
      const choice1 = gen("select");
      const choice2 = gen("select");
      const choice3 = gen("select");
      choice1.classList.add("choice");
      choice2.classList.add("choice");
      choice3.classList.add("choice");
      updateOptions(choice1);
      updateOptions(choice2);
      updateOptions(choice3);
  
      newUserDiv.appendChild(userNameInput);
      newUserDiv.appendChild(document.createElement("br"));
      newUserDiv.appendChild(document.createTextNode("Choice 1"));
      newUserDiv.appendChild(choice1);
      newUserDiv.appendChild(document.createElement("br"));
      newUserDiv.appendChild(document.createTextNode("Choice 2"));
      newUserDiv.appendChild(choice2);
      newUserDiv.appendChild(document.createElement("br"));
      newUserDiv.appendChild(document.createTextNode("Choice 3"));
      newUserDiv.appendChild(choice3);
  
      userContainer.appendChild(newUserDiv);
    }
  
    let optionNames = [];

    function updateOptions(selectElement) {
      // Options array is defined here
      optionNames = [
        "Santa's Sleigh",
        "Light the Menorah",
        "Letters to Santa",
        "Gingerbread Fair Isle",
        "Christmas Tree",
        "All Wrapped Up",
      ];

      for (let i = 0; i < optionNames.length; i++) {
        const option = gen("option");
        option.textContent = optionNames[i];
        selectElement.appendChild(option);
      }
    }

    function printResults(results) {
      console.log(results);
      let tags = document.getElementsByClassName("result");
    
      // Create an array of objects with option names and corresponding points
      const optionData = optionNames.map((name, index) => ({ name, points: results[index] }));
    
      // Sort the optionData array in descending order based on points
      optionData.sort((a, b) => b.points - a.points);
    
      // Update the result tags with the sorted option names and points
      for (let i = 0; i < tags.length; i++) {
        tags[i].textContent = `${optionData[i].name}: ${optionData[i].points} points`;
      }
    }
  
    function calculateBalance() {
      let results = [0, 0, 0, 0, 0, 0, 0, 0];

      const users = document.querySelectorAll(".user");
      for (const user of users) {
        const choices = user.querySelectorAll(".choice");
        for (let i = 0; i < choices.length; i++) {
          const index = getNum(choices[i].value);
          results[index] += choices.length - i;
        }
      }
      return results;
    }

    /*function calculateBalance() {
      let results = [0, 0, 0, 0, 0, 0, 0, 0];
      const users = document.querySelectorAll(".user");
      for (const user of users) {
        const choices = user.querySelectorAll(".choice");
        for (let i = 0; i < choices.length; i++) {
          const index = getNum(choices[i].value);
          results[index] += choices.length - i;
        }
      }
      return results;
    }*/


        /*function printResults(results) {
      console.log(results);
      let tags = document.getElementsByClassName("result");
      for (let i = 0; i < tags.length; i++) {
        tags[i].textContent = results[i];
      }
    }*/
  
    function getNum(choice) {
      if (choice === "Santa's Sleigh") {
        return 0;
      } else if (choice === "Light the Menorah") {
        return 1;
      } else if (choice === "Letters to Santa") {
        return 2;
      } else if (choice === "Gingerbread Fair Isle") {
        return 3;
      } else if (choice === "Christmas Tree") {
        return 4;
      } else if (choice === "All Wrapped Up") {
        return 5;
      } else {
        // Add more options here
        return -1;
      }
    }
  
    function id(id) {
      return document.getElementById(id);
    }
  
    function gen(el) {
      return document.createElement(el);
    }
  
  })();
