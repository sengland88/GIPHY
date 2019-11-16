# GIPHY


<h2>Project Name</h2>

Save the Avengers (GIPHY)

<h2>Concept</h2>

A web application that utilizes an AJAX call to pull GIFs from GIPHY (avengers themed)

<h2>Project Overview</h2>

A computer and mobile-friendly web application that pulls GIFs from GIPHY API and appends them to the page. The GIFs start out frozen and then once click become animated. The page is loaded with a few buttons already, but will take the user's input and append an JavaScript object (in the form of a button) to the page. Once click, an AJAX call will happen and new GIFs will show up. 

<h2>Process</h2>

i created my variables first and then created a for loop to iterate through (creating a variable to hold the value). i then created a function and passed the heroes variable into the function. that created the buttons, adding meta data to each one. 

i pulled the data from the text field and push it the array and then through the button function, first making sure that the userinput did not already exist or was it an empty string. If either of those did happen, a message would appear and alert the client. 

with the document on click event watcher, i made sure to grab the button's values name and fired off the getMetheGifs function, passing in the name. 

that function took the click button information and transformed it into a variable that was used in the URL. the function added a whole bunch of meta data and appended it to an empty div in my html. the div is emptied each time a new button is pressed. 
