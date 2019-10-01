let searchButton = document.querySelector("button");
let searchField = document.querySelector("input");
const npsApiKey = "9qWimhDTY1nm3a4cAnyoCDi6KOOIDZZteaBJHCbZ";
const eventsField = document.querySelector("#events-div");
const siteBody = document.querySelector("body");

const events = (obj) => {
  let dataArr = obj.data.data;

  dataArr.forEach((element) => {
    let eventList = document.createElement("div");
    let datesStart = element.date;
    let dateEnd = element.dateend;
    let category = element.category;
    let contactName = element.contactname;
    let contactTelephoneNumber = element.contacttelephonenumber;
    let timeStart = element.times[0].timestart;
    let timeEnd = element.times[0].timeend;
    let title = element.title;
    let typeOfEvent = element.types[0];
    datesStart = element.date;
    dateEnd = element.dateend;
    category = element.category;
    contactName = element.contactname;
    contactTelephoneNumber = element.contacttelephonenumber;
    timeStart = element.times[0].timestart;
    timeEnd = element.times[0].timeend;
    title = element.title;
    typeOfEvent = element.types[0];
    eventList.innerHTML = `<p> Start date: ${datesStart}
  <br>End date: ${dateEnd}<br>It will be a: ${category}
  <br>Your contact for this event is: ${contactName}
  <br>The contact's phone number is: ${contactTelephoneNumber}<br>
  Event will start at: ${timeStart}<br> Event will end at: ${timeEnd}<br>
  The event is: ${title}<br> It is a: ${typeOfEvent}</p>`;
    eventsField.append(eventList);
  });
  console.log(dataArr);
}

const getData = async () => {
  // const response = await axios.get(`https://cors-anywhere.herokuapp.com/https://developer.nps.gov/api/v1/parks?api_key=${npsApiKey}&fields=images&statecode=MI`);
  // const secondResponse = await axios.get(`https://cors-anywhere.herokuapp.com/https://developer.nps.gov/api/v1/events?api_key=${npsApiKey}&stateCode=NY&limit=10`);
  console.log(secondResponse)
}

siteBody.onload = async () => {
  const secondResponse = await axios.get(`https://cors-anywhere.herokuapp.com/https://developer.nps.gov/api/v1/events?api_key=${npsApiKey}&stateCode=NY&limit=10`);
  events(secondResponse);
}

searchButton.addEventListener("click", getData)

//save array to a variable... create currentEvent variable and set to variable[0]...set inner