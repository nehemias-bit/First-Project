#Park Vision
--------------------------------------
**Project Purpose**: This application will display event's happening in different parks within New York state according to the National Parks Service API. Additionally, it will allow you to search for parks in any state and the search will display six parks.

**Project Link:** [parkvision](http://parkvision.surge.sh)

**Built with:** 

* HTML
* CSS
* Javascript - The data presented in the event's section as well as the data presented in the parks section after the user searches a state using the respective two letter code.

**API's In Use:** 

* National Park Service


**Features:**

* Event's currently happening in different New York parks display automatically on page load.
* Gives user the ability to search for parks in any state. It provides the user with six parks with links to each parks page.

**Stretch Goals:**

* The app currently forces the api to give it four images for each park even if they only have three. I need to use javascript to prevent that from happening.
* I need to add animation to the event's section so that the 'next event' functionality performs more smoothly.  

**Problem solving approach:**
  
* With the javascript, I started by console logging the results of the api queries before writing the complete functions. Seeing the data in the console helped me figure out how to write my functions and how to target the data.
* With css, my general approach was to work on one piece of the page at a time working from top to bottom. This helped me avoid having to deal with css issues that spaned the entire page.

**Struggles:** 

I struggled with @media css for cellphone sized screens. I also had some issues with the javascript and how to tie it all together at first.

**Problems still pending:**

My "click left" button renders differently in an actual phone screen. Within the google web developer tools it looks fine in phone view but it changes in an actual phone.

**I am proud of** the javascript functionality in general. Being my first project, I feel I accomplished a decent amount of complexity.
