  function updateHeading(newHeading) {
    let heading = document.querySelector("h1");
    heading.innerHTML = newHeading;
    }

  function buy() {
    let h1Hiking = prompt("Do you prefer to go hiking?")
    .toLowerCase();
    let name = prompt("What is you name?");
    let email = prompt("What is your email adress?");

    if (h1Hiking === "yes") {
      updateHeading(`Welcome to our team ${name}. <br />We'll be in touch by email.`);
    } else {
      alert("Sorry to hear that " + name + " 😔");
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  let buttonTry = document.querySelector("button");
buttonTry.addEventListener("click", buy);