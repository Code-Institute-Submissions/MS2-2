

# Appalachian Trail Route Planner

project was created to help people plan their route along the Appalachian Trail via the shelters, towns, and points of interest.

# UX
## User stories

-----------------------------------------------------------------------------------------------------------

As a Hiker, i would like to organize the route i will take to ensure i get the most of my trip.

As a family member to the hiker, i would like to know their route in advance to keep track of their journey.

As a potential hiker, i would like to see my potential stops along the trail and determine if its something im capable of.

as a park ranger, i'd like to be able to see the sites my potential visitors will go to so i can more efficiently keep track of the most trafficed places.

as an employer, id like to review Datum's work and have a method that leads to his social media for contacting purposes.

-----------------------------------------------------------------------------------------------------------

## Design Notes: 

i wanted something simple and clean that showed some nature, the wireframes i used can be found below. 


![desktop wireframe](https://raw.githubusercontent.com/DatumEight/MS2/master/wireframes/desktop.PNG)



![tablet wireframe](https://raw.githubusercontent.com/DatumEight/MS2/master/wireframes/tablet_view.PNG)


![mobile wireframe](https://raw.githubusercontent.com/DatumEight/MS2/master/wireframes/Mobile.PNG)




### Features

The project implements the Google Maps API with an external waypoint list.



 
### Existing Features
- Each marker has an "add" button to append it to the list element and a "remove" button to clear it off of the list.
 For some/all of your features, you may choose to reference the specific project files that implement them, although this is entirely optional.



### Features Left to Implement
- I was working with a local storage version but couldnt get a working version going in time but it will be added in the future.

- An option to email the list to the user after they've created it along with lat and lng point for users with outdoors GPS units

## Technologies Used

In this section, you should mention all of the languages, frameworks, libraries, and any other tools that you have used to construct this project. For each, provide its name, a link to its official site and a short sentence of why it was used.

- [HTML](https://en.wikipedia.org/wiki/HTML)
    - The project uses **HTML** as the industry standard in markup languages.
- [CSS](https://en.wikipedia.org/wiki/Cascading_Style_Sheets#CSS)
    - The project uses **CSS** to style the markup.
- [JQuery](https://jquery.com)
    - The project uses **JQuery** to simplify DOM manipulation.
- [JavaScript](https://en.wikipedia.org/wiki/JavaScript)
    - The project uses **JavaScript** to add interactivity to the project.
- [Google Maps API](https://developers.google.com/maps/documentation)
    - The project uses the **Maps API** to incorporate Google's world famous maps utility.
- [Google Fonts](https://fonts.google.com/)
    - The project uses **Google Fonts** to add style to the text of the project.
- [FontAwesome](https://https://fontawesome.com/)
    - The project uses **FontAwesome** to add style to the links and general good looks to the project.
- [BootStrap](https://getbootstrap.com/)
    - The project uses **BootStrap** to add simple organization and mobile reactivity to the project.
- [JSON](https://en.wikipedia.org/wiki/JSON)
    - The project uses **JSON** to add standardized object storage for simple iteration.
- [GitHub](https://github.com/)
    - The project uses **GitHub** for storage and hosting purposes.
- [GitPod](https://gitpod.com/)
    - The project uses **Gitpod** for a streamlined streamable IDE.
 - [Git](https://git-scm.com/)
    - The project uses **Git** for version control.

## Testing

HTML and CSS were validated via W3C's free utility at https://validator.w3.org/.

The JavaScript file was validated via https://codebeautify.org/jsvalidate.

### list element 
- attempted to add the maximum number of elements to break the list on both mobile and desktop, it responds well on both.

### Maps iteration
- attempted to drag and drop markers as well as swap from satellite to terrain views and open as many markers as possible. While it can get cluttered it does not break.

### Responsivity
- used https://responsivetesttool.com, https://responsivedesignchecker.com, and the internal Chrome inspect tools to check for breakpoints on the mobile views. The project maintains its integrity from the smallest to largest resolutions available in the tools.

#### Interesting Bugs
- The first version of the "remove" function left the list number as an artifact on the #list element and it was solved via DOM traversal and a few hours with the console in chrome.
- it took a while to build the iteration loop due to the differences between let and var, leading to the same information on every marker. @everynet_mentor on slack told me about this in the past and thats what led to the solution.
- quite a lot of whitespace issues due to the way the 'height' attribute is calculated, took a lot of time in the computed elements section of the console in chrome to solve.

-----


## Deployment

the site is hosted by Github Pages:
- all media links were changed to reflect the correct filepaths for display purposes.
- navigate to the settings portion of the repository and request hosting, the site should be live in a few moments automatically and GitHub will supply a link where the hosting option was from there on out unless changes are made and the process will need to be repeated. 

### Running locally
- under the main portion of the repository click the clone/download button to get your own copy of the project.
- if running locally, download the package and be sure to maintain the original structure of the filetree as listed on the repository, once downloaded, open index.html in your preferred HTML viewer.

### Content
- the waypoint array was orginally dowloaded as a .csv file from SophiaKnows (http://www.sophiaknows.com/atdb/) and coverted via (https://csvjson.com/csv2json).

### Media
photos were obtained via https://www.unsplash.com

### Acknowledgements

special credit goes to Samantha at tutor support for helping me through the e.target functions. 