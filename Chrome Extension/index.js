let myLeads = [];

const inputBar = document.getElementById('input-bar');
let inputBtn = document.getElementById('input-btn');
const unLi = document.getElementById('un-li');

inputBtn.addEventListener("click", () => {
  myLeads.push(inputBar.value);
  inputBar.value = "";
  renderLeads();
});


function renderLeads(){
  let listItems = "";
  for(let i = 0; i < myLeads.length; i++) {
    listItems += `
      <li>
        <a href="${myLeads[i]}" target="_blank">
          ${myLeads[i]}
        </a>
      </li>
    `;
  }
  unLi.innerHTML = listItems;
}
