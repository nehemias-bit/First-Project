let searchButton = document.querySelector("button");
let searchField = document.querySelector("input");
const npsApiKey = "9qWimhDTY1nm3a4cAnyoCDi6KOOIDZZteaBJHCbZ";
const eventsField = document.querySelector("#events-section");
const siteBody = document.querySelector("body");
const nextEventButton = document.querySelector("#next-event-button");
let counter = 0;


//This function is what you use to populate all the events on the event piece of the page. you 
//call using the secondResponnse variable from the axios call.
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
    let location = element.location;
    eventList.innerHTML = `<p> Start date: ${datesStart}
  <br>End date: ${dateEnd}<br>It will be a: ${category}
  <br>Your contact for this event is: ${contactName}
  <br>The contact's phone number is: ${contactTelephoneNumber}<br>
  Event will start at: ${timeStart}<br> Event will end at: ${timeEnd}<br>
  The event is: ${title}<br> It is a: ${typeOfEvent}<br> Location: ${location}</p>`;

    eventsField.append(eventList);
  });
  // console.log(dataArr);
}


//This function loads all of the events as soon as the page loads
siteBody.onload = async () => {
  const secondResponse = await axios.get(`https://cors-anywhere.herokuapp.com/https://developer.nps.gov/api/v1/events?api_key=${npsApiKey}&stateCode=NY&limit=10`);
  let individualEvents = events(secondResponse);
  // let events = secondResponse.data.data;
  // let eventDiv = document.createElement('div');
  nextEventButton.addEventListener("click", () => {
    let currentDiv = individualEvents[counter];
    eventsField.append(currentDiv);
    counter++;
  })
}

const getData = async () => {
  // const response = await axios.get(`https://cors-anywhere.herokuapp.com/https://developer.nps.gov/api/v1/parks?api_key=${npsApiKey}&fields=images&statecode=MI`);
  console.log(response)
}

// searchButton.addEventListener("click", getData)
