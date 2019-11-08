# Giphy-Week-Six
This is the repo for week six homework of the webdev bootcamp, creating a website that utilizes giphy api to display gifs with pause/play functionality, custom gif categories, and ratings tagged to each gif.

## App Description
This website will load a button for each element of a premade array of gif topics, all of which being a topic in the art and design category in Giphy's database. When clicked, these buttons produce 10 gifs associated with the button name, that all appear paused. Clicking on a gif will pause or play it. There is also an option for user input to pick a new giphy topic, which will add a button like that of the ones above.

## File Infrastructure
### HTML
 * index.html: contains bootstrap framework to keep the userinput form near the top of the page and a few divs to contain dynamically added content. Bootstrap, style.css, AJAX, and logic.js are all linked to index.

 ### Javascript
 * logic.js: Contains all dynamic functions to website, as well as a preset topic array. Giphy key, ajax call, and user input values are all used in creating 10 img/gif elements with pause/play functionality and customizable buttons.
 
 ### CSS
 * style.css: two types of buttons are modified within the css
 * bootstrap: website is framed to keep user input at easy access with use of columns and rows

## References
 **Giphy API** was essential in creating this website, and you can go here: https://developers.giphy.com/ for more information or to try it yourself.

