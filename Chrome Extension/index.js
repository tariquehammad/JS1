let myLeads = [];

const inputBar = document.getElementById('input-bar');
let inputBtn = document.getElementById('input-btn');
const unLi = document.getElementById('un-li');
let deleteBtn = document.getElementById('delete-btn');
let tabBtn = document.getElementById('tab-btn');

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if(leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  render(myLeads);
}

function render(leads){
  let listItems = "";
  for(let i = 0; i < leads.length; i++) {
    listItems += `
      <li>
        <a href="${leads[i]}" target="_blank">
          ${leads[i]}
          </a>
      </li>
    `;
  }
  unLi.innerHTML = listItems;
}

tabBtn.addEventListener("click", () => {

  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
  });
});


deleteBtn.addEventListener("dblclick", () => {
  localStorage.clear();
  myLeads = [];
  render(myLeads);
});


inputBtn.addEventListener("click", () => {
  myLeads.push(inputBar.value);
  inputBar.value = "";

  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  render(myLeads);
  // console.log(localStorage.getItem("myLeads"));
});
