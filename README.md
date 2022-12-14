# RESTy

A web application that allows users to send HTTP requests using a form-like interface. The design of the application is roughty based on [Thunder Client](https://www.thunderclient.com/).
A living diagram for the application can be found [here](https://www.figma.com/file/zjEXRgVFWfxPtkjXgSXJsV/RESTy-Diagram?node-id=0%3A1), hosted on [FigJam](https://www.figma.com/figjam/).

[Test phase 1 on CodeSandbox.](https://codesandbox.io/p/github/ShepleySound/resty/phase-1?file=%2Fsrc%2Fapp.scss&workspace=%257B%2522activeFileId%2522%253A%2522cl9nf3f3u0008lrhl6loc4874%2522%252C%2522openFiles%2522%253A%255B%2522%252Fsrc%252Fapp.scss%2522%252C%2522%252Fsrc%252Fcomponents%252Ffooter%252Ffooter.scss%2522%252C%2522%252Fsrc%252Fcomponents%252Fheader%252Fheader.scss%2522%252C%2522%252Fsrc%252Fcomponents%252Fresults%252Fresults.scss%2522%252C%2522%252Fsrc%252Fcomponents%252Fform%252Fform.scss%2522%252C%2522%252Fsrc%252Fcomponents%252Fresults%252Findex.js%2522%252C%2522%252Fsrc%252Fcomponents%252Ffooter%252Findex.js%2522%252C%2522%252Fsrc%252Fcomponents%252Fheader%252Findex.js%2522%252C%2522%252Fsrc%252Fcomponents%252Fform%252Findex.js%2522%252C%2522%252Fsrc%252Fapp.test.js%2522%252C%2522%252Fsrc%252Fapp.js%2522%252C%2522%252Fsrc%252Findex.js%2522%255D%252C%2522sidebarPanel%2522%253A%2522GIT%2522%252C%2522gitSidebarPanel%2522%253A%2522PR%2522%252C%2522sidekickItems%2522%253A%255B%257B%2522type%2522%253A%2522TASK_LOG%2522%252C%2522taskId%2522%253A%2522test%2522%252C%2522key%2522%253A%2522cl9nj1l5w02k9356i30ab89kp%2522%252C%2522isMinimized%2522%253Afalse%257D%252C%257B%2522type%2522%253A%2522PREVIEW%2522%252C%2522taskId%2522%253A%2522start%2522%252C%2522port%2522%253A3000%252C%2522key%2522%253A%2522cl9nfcdzj01hn356i8k5whynx%2522%252C%2522isMinimized%2522%253Afalse%257D%255D%257D)

[Test phase 2 on CodeSandbox.](https://codesandbox.io/p/github/ShepleySound/resty/phase-2?file=%2FREADME.md&workspace=%257B%2522activeFileId%2522%253A%2522cl9nf3f3s0003lrhlf2bb3mfx%2522%252C%2522openFiles%2522%253A%255B%255D%252C%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522gitSidebarPanel%2522%253A%2522COMMIT%2522%252C%2522sidekickItems%2522%253A%255B%257B%2522type%2522%253A%2522PREVIEW%2522%252C%2522taskId%2522%253A%2522start%2522%252C%2522port%2522%253A3000%252C%2522key%2522%253A%2522cl9p8ydgd008x356hfkg5i5d5%2522%252C%2522isMinimized%2522%253Afalse%257D%255D%257D)

[Test phase 3 on CodeSandbox.](https://codesandbox.io/p/github/ShepleySound/resty/phase-3?file=%2FREADME.md&workspace=%257B%2522activeFileId%2522%253A%2522cl9nf3f3s0003lrhlf2bb3mfx%2522%252C%2522openFiles%2522%253A%255B%255D%252C%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522gitSidebarPanel%2522%253A%2522COMMIT%2522%252C%2522sidekickItems%2522%253A%255B%257B%2522type%2522%253A%2522PREVIEW%2522%252C%2522taskId%2522%253A%2522start%2522%252C%2522port%2522%253A3000%252C%2522key%2522%253A%2522cl9qgbh7o009n356h159822t0%2522%252C%2522isMinimized%2522%253Afalse%257D%255D%257D)

[Test phase 4 on CodeSandbox.](https://codesandbox.io/p/github/ShepleySound/resty/phase-4?file=%2Fsrc%2Findex.js&selection=%5B%7B%22endColumn%22%3A1%2C%22endLineNumber%22%3A16%2C%22startColumn%22%3A1%2C%22startLineNumber%22%3A16%7D%5D&workspace=%257B%2522activeFileId%2522%253A%2522cl9nf3f3u0009lrhlfy0k9fot%2522%252C%2522openFiles%2522%253A%255B%255D%252C%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522gitSidebarPanel%2522%253A%2522COMMIT%2522%252C%2522sidekickItems%2522%253A%255B%257B%2522type%2522%253A%2522PREVIEW%2522%252C%2522taskId%2522%253A%2522start%2522%252C%2522port%2522%253A3000%252C%2522key%2522%253A%2522cl9rudkja00tt356hiopmh7nv%2522%252C%2522isMinimized%2522%253Afalse%257D%252C%257B%2522type%2522%253A%2522TASK_LOG%2522%252C%2522taskId%2522%253A%2522start%2522%252C%2522key%2522%253A%2522cl9rudgke00ql356hfiht0qcy%2522%252C%2522isMinimized%2522%253Afalse%257D%255D%257D)

## Using the application

To make a request, use the dropdown box in the request section to select an HTTP method. GET is the default. In the text box, input the URL that you would like to query. Whenever a request is made, it will be added to the history section. Clicking on previous entries will recall that request, which will create a *new* HTTP request.

## Purpose

RESTy is an API testing tool that can be run in a web browser. It allows users to interact with APIs using a simple interface. Currently, the four basic HTTP methods (GET, POST, PUT, and DELETE) are supported along with a request body. In the future, I hope to add functionality that includes the following:

- Set request headers
- Keep a record of past requests in local storage
- Implement tabs for request options and response sections
- Implement a form for custom query parameters
- Implement auth request parameters
