# Web-project-A58
# Giphy - Web Team Project

### 1. Description

Design and implement a Gifs SPA application for searching and sharing funny gifs with your friends. The application should be able to display the top trending gifs, upload gifs and much more! For our purposes we are going to use the [Giphy API.](https://developers.giphy.com/docs/api/#quick-start-guide)

<br>

### 2. Functional Requirements

Each requirement is categorized in one of three categories – $\textcolor{red}{\textsf{must}}$, $\textcolor{yellow}{\textsf{should}}$, or $\textcolor{green}{\textsf{could}}$.

· Must requirements have the highest priority and should be addressed first.

· Should requirements have medium priority and should be addressed after all or most must requirements have been implemented and tested.

· Could requirements should be left for last.

Any additional features are welcome, if you have covered all the listed requirements below.orm and version: **Node 14.0+**

<br>

### 3. Must Requirements

The application $\textcolor{red}{\textsf{must}}$ support the following functionalities:

**Display Trending Gifs**

The application must have **a display trending gifs** functionality, that will allow the user to see the top trending gifs. You should use the [trending endpoint](https://developers.giphy.com/docs/api/endpoint/#trending) with your **api_key**. You can limit the received gifs, by using the **limit** parameter.

**Search Gifs**

The application must have a **search gifs** functionality, that will allow the user to search gifs by a given **query**. You should use the [search endpoint](https://developers.giphy.com/docs/api/endpoint/#search) with your **api_key** and a search query – **q**, provided by the user. You can limit the received gifs, by using the **limit** parameter.

**Display Gif Details**

The application must have a **display gif details** functionality, that will allow the user to see a given gif’s detailed information like uploaded user’s username. You should use the [get-gif-by-id](https://developers.giphy.com/docs/api/endpoint/#get-gif-by-id) endpoint with your **api_key** and the desired gif’s id – **gif_id**.

**Upload Gif**

The application should have an **upload gif** functionality, that will allow the user to upload a gif from his file system. You should use the [upload endpoint](https://developers.giphy.com/docs/api/endpoint/#upload) with **POST request**, containing your **api_key** and in the request’s body you should send a **file** object as a [form data](https://developer.mozilla.org/en-US/docs/Web/API/FormData). You can see the uploaded gifs in your [Giphy Channel](https://giphy.com/explore/channel).

<br>

### 4. Should Requirements

This application $\textcolor{blue}{\textsf{should}}$ support the following functionalities:

**Display Uploaded Gifs**

The application should have a **display uploaded gifs** functionality, that will allow the user to see his uploaded gifs. You can do this by storing the ids of the uploaded gifs in the browser’s [local storage](https://www.w3schools.com/jsref/prop_win_localstorage.asp) and then use the [get-gifs-by-id endpoint](https://developers.giphy.com/docs/api/endpoint/#get-gifs-by-id) with your **api_key** and the desired ids, separated by commas – **ids**.

**Favorite Gif**

The application should have a **favorite gif** functionality, that will allow the user to make a gif his favorite and display it somewhere in the app. If the user hasn’t chosen a favorite gif yet, he should be notified, and a random gif will be shown as a favorite. You can do this by storing the chosen favorite gif’s id in the browser’s [local storage](https://www.w3schools.com/jsref/prop_win_localstorage.asp) and then use the [get-gif-by-id endpoint](https://developers.giphy.com/docs/api/endpoint/#get-gif-by-id) and if the user has no favorite gif yet, you can use the [random endpoint](https://developers.giphy.com/docs/api/endpoint/#random).

<br>

### 5. General Requirements

· You $\textcolor{red}{\textsf{must}}$ use Native DOM API for DOM manipulations.

· You $\textcolor{red}{\textsf{must}}$ use Git to keep your source code and for team collaboration.

· You $\textcolor{red}{\textsf{must}}$ use GitHubs issue tracking system.

· You $\textcolor{red}{\textsf{must}}$ use ESLint to write consistently styled code.

· You $\textcolor{red}{\textsf{must}}$ use modules and they should be single-responsible.

· You $\textcolor{red}{\textsf{must}}$ document your code explicitly following the JSDoc standard.

· You $\textcolor{red}{\textsf{must}}$ use correct naming and write clean, self-documenting code.

· You $\textcolor{red}{\textsf{must}}$ have usable user interface.

· You $\textcolor{red}{\textsf{must}}$ use the latest features of ECMAScript.

· You $\textcolor{green}{\textsf{could}}$ use external libraries such as Bootstrap, Materialize or other to style your project

· External libraries such as jQuery UI, Kendo UI or other for custom controls are allowed.

<br>

### 6. Teamwork Guidelines

Refer to the teamwork guidelines **[document](https://learn.telerikacademy.com/mod/page/view.php?id=60975)** found along with the project requirements.

<br>

### 7. Give Feedback about Your Teammate

You will be invited to provide feedback about all your teammates, their attitude about this project, their technical skills, their team working skills, their contributions to the project, etc. **The feedback is an important part of the project evaluation, so take it seriously and be honest**.

<br>

### 8. Step-by-step Guide for Giphy API

For Step-by-step guide to use Giphy API, please refer to the official **[Project Requirements](https://learn.telerikacademy.com/mod/page/view.php?id=60974)**.
