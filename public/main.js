const result = document.querySelector(".text-area");
const submitBtn = document.querySelector(".submit");
const input = document.querySelector(".form-input");

// const getPeople = async () => {
//   try {
//     const response = await fetch("/api/people");
//     const data = await response.json();
//     const people = data.data;

//     const peopleElement = people.map((person) => `<h5>${person.name}</h5>`);
//     result.innerHTML = peopleElement.join("");
//   } catch (error) {
//     result.innerHTML = `<div>Cannot fetch data</div>`;
//   }
// };

// getPeople();

const sendPeople = async (e) => {
  e.preventDefault();
  result.innerHTML = " "
  try {
    const nameValue = input.value;
    const data = { text: nameValue };
    const response = await fetch("http://localhost:3800/api/text", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const x = await response.json();
    const text = x.textArray;
    console.log(text);
    text.forEach((element) => {
      const h5 = document.createElement("h5");
      h5.innerText = element;
      result.appendChild(h5);
    });
  } catch (error) {
    console.log(error);
  }
  input.value = "";
};

submitBtn.addEventListener("click", sendPeople);
