# LLM usado
He usado ChatGPT

# Prompts
He tenido que hacer 6 prompts:

## Primer prompt
You are an expert web developer. Your goal is to build an online stopwatch and countdown web page, so they can be used online.

You have to take into account the following aspects:

## User Interface
The web page will show three screens:
1. The main page, where the user will be able to choose between:
  - Stopwatch: a button with the text "stopwatch" and a green arrow pointing up.
  - Countdownd: a button with the text "Countdown" and a red arrow pointing down.
2- The Stopwatch page, where the user will be able to use an stopwatch:
  - The stopwatch will have hours:minutes:seconds format, in 00:00:00 format, and below, in smaller fontsize, the milliseconds in 000 format.
  - The page will have below the stopwatch, two buttons: 
  -- Start the stopwatch, which will start the stopwatch and will refresh the numbers
  -- Reset the stopwatch, to put the stopwatch to 0.
  - The page will have always in the lower part a back button to return to the first page.
  - Attached is the visual UI of this page (stopwatch.png)
3 - The countdown page, where the user will be able to use an online countdown. The page will have this structure:
   - In the upper part, the hour:minutes:second display in 00:00:00 format, with milliseconds below in 000 format, as in the stopwatch page.
   - Below, several buttons:
      - Buttons from 0 to 9, so the user can introduce the digits of the 00:00:00 display, beginning from hours to seconds. As an example: If the user press "1" + "0" + "0" + "1" + "0" + "0", the display will show 10:01:00.
     - Two action button:
        -- "Set": when pressed the introduced digits will be set, and the page will show the same look & feel as the stopwatch, with the introduced digits, with two actions:
       ---  "Start": will start to countdown from the introduced digits. The button "Start" will change to "Pause", that if pressed, will stop the countdown.
       ---  "Reset": will set all the digits to 00:00:00 and milliseconds to 000.
- The page will have always in the lower part a back button to return to the first page.

You have to build all the web using two assets as its template:
 - index.html (It's attached)
 - script.js.

Please, use these best practises in web development:
 - Responsive page.
 - Business code and UI must be separated.
 - Please add some unit tests to the script.js functions.
 - Please add a final README.md with a brief wrap-up

 ## Segundo Prompt
 Al no proveerme de la parte de CSS, se la he tenido que pedir explícitamente:

 Please, add all the needed detail of the CSS and UI part, please make sure that the design follows the image attached of the stopwatch, and use this visual styling for all the pages.

 ## Tercer Prompt 

 There is an error in you proposal. I see all the three pages simultaneously, and I want to see them one by one:
 1. First, the stopwatch or countdown selector buttons (there are no buttons, remember the previous context).
 2. If we select stopwatch, we see the stopwatch. We return to the first page with the "Back· button.
3. If we select countdown, we see the countdown. We return to the first page with the "Back· button.

Also the countdown is not working, when entering the digits, the 00:00:00 structure is lost, and we need to include the digits from right to left as they are entered, without moving any ":". 

## Cuarto Prompt

Could you give the updated CSS file?

## Quinto Prompt

Thank you, selector page and stopwatch are working perfect, but the countdown, after entering the digits, is not behaving as expected:
 - Once entered the digits, if the user press "Set", the page changes to show a page similar to the stopwatch, but when you press "Start", it begins to count down from this digits, I mean, to go back from this digits until it reaches 0. When it reaches 0, you can show an alert "Time is up!". 

 ## Sexto Prompt

 There is a javascript error in the file: line 89: "document.getElementById("set-countdown").addEventListener("click", function () {"