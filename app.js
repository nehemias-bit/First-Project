let searchButton = document.querySelector("button");
let searchField = document.querySelector("input");
const npsApiKey = "9qWimhDTY1nm3a4cAnyoCDi6KOOIDZZteaBJHCbZ";
const eventsField = document.querySelector("#events-section");
const siteBody = document.querySelector("body");
const nextEventButton = document.querySelector("#next-event-button");
const previousEventButton = document.querySelector("#previous-event-button");
let parksDiv = document.querySelector("#parks");
let counter = 0;

//This function is what you use to populate all the events on the event piece of the page. you 
//call using the secondResponnse variable from the axios call.
const events = (obj) => {
  let dataArr = obj.data.data;

  dataArr.forEach((element, index) => {
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
    eventList.innerHTML = `<p id="event-title">${title}</p>
  <p id="start-date"><span>Start date</span>: ${datesStart}</p><p id="end-date"><span>End date</span>: ${dateEnd}</p>
  <p id="time-start"><span>Event will start at</span>: ${timeStart}</p>
  <p id="time-end"><span>Event will end at</span>: ${timeEnd}</p>
  <p id="contact-name"><span>Your contact for this event is</span>: ${contactName}</p> 
  <p id="contact-telephone"><span>The contact's phone number is</span>: ${contactTelephoneNumber}</p>
  <p id="event-type"><span>The event is</span>: ${typeOfEvent}</p><p id="category"><span> It will be a</span>: ${category}</p><p id="location"><span> Location</span>: ${location}</p>`;
    eventList.setAttribute('id', `event-${index}`);
    if (index === 0) {
      eventList.setAttribute("class", "show");
    }
    else {
      eventList.setAttribute("class", "hide");
    }
    eventsField.append(eventList);
  });
}


//This function loads all of the events as soon as the page loads
siteBody.onload = async () => {
  const secondResponse = await axios.get(`https://cors-anywhere.herokuapp.com/https://developer.nps.gov/api/v1/events?api_key=${npsApiKey}&stateCode=NY&limit=10`);
  events(secondResponse);
}

nextEventButton.addEventListener("click", function () {
  const currentEventDiv = document.querySelector(`#event-${counter}`)
  counter++
  const nextEventDiv = document.querySelector(`#event-${counter}`)
  currentEventDiv.setAttribute("class", "hide")
  nextEventDiv.setAttribute("class", "show")
})

previousEventButton.addEventListener("click", function () {
  const currentEventDiv = document.querySelector(`#event-${counter}`)
  counter--
  const previousEventDiv = document.querySelector(`#event-${counter}`)
  currentEventDiv.setAttribute("class", "hide")
  previousEventDiv.setAttribute("class", "show")
})


const allParks = (obj) => {
  parksDiv.innerHTML = '';
  let allInfo = obj.data.data;
  allInfo.forEach((element) => {
    let parkName = element.fullName;
    let description = element.description;
    let images = [];
    let parkUrl = element.url;
    console.log(parkUrl);
    element.images.forEach((image) => {
      images.push(image.url);
    });
    let individualPark = document.createElement('div');
    individualPark.innerHTML = `<h1>${parkName}</h1><p>${description}</p><img id='park-img' src='${images[0]}'>
    <img id='park-img' src='${images[1]}'><img id='park-img' src='${images[2]}'><img id='park-img' src='${images[3]}'><a href="${parkUrl}">${parkName}</a>`;
    parksDiv.append(individualPark);
  })
}





const getData = async () => {
  const response = await axios.get(`https://cors-anywhere.herokuapp.com/https://developer.nps.gov/api/v1/parks?api_key=${npsApiKey}&fields=images&statecode=${searchField.value}&limit=6`);
  console.log(response)
  allParks(response);
}

searchButton.addEventListener("click", getData);
