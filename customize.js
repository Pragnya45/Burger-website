function order() {
    let toppings = document.getElementsByName("topping");
    let condiments = document.getElementsByName("condiment");
    let burger = "Burger with ";
    let hasToppings = false;
    let hasCondiments = false;
  
    for (let i = 0; i < toppings.length; i++) {
      if (toppings[i].checked) {
        burger += toppings[i].value + ", ";
        hasToppings = true;
      }
    }
  
    for (let i = 0; i < condiments.length; i++) {
      if (condiments[i].checked) {
        burger += condiments[i].value + ", ";
        hasCondiments = true;
      }
    }
  
    if (!hasToppings && !hasCondiments) {
      alert("Please select at least one topping or condiment.");
    } else {
      burger = burger.slice(0, -2);
      let result = confirm("You ordered: " + burger + ".\nClick OK to confirm your order and view your customized burger.");
  
      if (result == true) {
        let messageBox = document.createElement("div");
        messageBox.style.display = "flex";
        messageBox.style.flexDirection = "column";
        messageBox.style.alignItems = "center";
  
        let message = document.createElement("p");
        message.innerText = "Your customized burger: " + burger;
        message.style.fontSize = "20px";
        message.style.fontWeight = "bold";
        messageBox.appendChild(message);
  
        let img = document.createElement("img");
        img.src = "images/product-4.jpg";
        img.alt = burger;
        img.style.width = "300px";
        img.style.marginTop = "20px";
        messageBox.appendChild(img);
  
        document.body.appendChild(messageBox);
      }
    }
  }
  