## **MR. Robogers Neighborhood**

## Built to allow user to input a number and display a string of numbers 

#### *By: _Alan Call_*

## Technologies Used

* HTML
* CSS
* JavaScript
* BootStrap
* Jquery
* Markdown

## Description

This website will ask a user to input a number and will return a string of numbers changing 1 to Beep 2 to Boop and 3 to Won't you be my neighbor?

## Tests

```
Describe: numberMatch()
  Test: "It will take a firstEnteredNumber and return a string of numbers from 1 up to the users inputted number"
  Expect(numberMatch(3)).toEqual("0","1","2","3");

  Test: "It will take a users inputted value and look for a "1"
  Expect: (numberMatch(1)).toEqual("0","Beep");
 
  Test: "It will take a users inputted value and look for a "2"
  Expect: (numberMatch(2)).toEqual("0","Beep","Boop");

  Test: "It will take a users inputted value and look for a "3"
  Expect: (numberMatch(3)).toEqual("0","Beep","Boop","Won't you be my neighbor");

```

## Setup

- Clone this repository to your desktop.

- Navigate to the top level of the directory.

- Open file index.html in your browser.

## Known Bugs

- None

## License

[MIT](LICENSE.txt)
Copyright (c) Alan Call

## _Contact Information_

 * Alan Call alanmatthewcall@gmail.com

 

