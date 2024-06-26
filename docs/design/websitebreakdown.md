# Website Breakdown
## Home Page
The home page for our obscurus with both dark and light mode color schemes. The landing page is the first page the user will see once they go to our website, displaying the animated logo and a getting started section. There is a navigation bar at the top that will allow users to nagivage the site with ease since it will move with the page even as the user scrolls. Additionally once the user scrolls down on the page they can find out more information about the website, such as the key features, a quick how-to and powered by sections.

Pages on the Nav Bar:
- Features: the list of key features we want to highlight for our website.
- Make a Request: will prompt the user to log in or create and account before allowing the user to make a request
- About: about section of website

[Figma Link](https://www.figma.com/file/EylIoScracFu8PrUmZP2nF/Home-Page?type=design&mode=design&t=nHHYTxyuNgzMtBmc-0)

## Create Request Page
Page accessed through the nav bar or home page after logged in. Allows user to create a request with the following information: 
- Request Title
- Client(s): up to 10 client emails can be added to a single request
- Request Description
- Video Proccessing: if the user wants submitted videos to have facial blurring or not
- Due Date
- Prefered Language (added in coding)
- Accept Terms and Condition

On the left side of the page is the editable card and on the right a dynamic preview of what requested user will see. Once the submit button is clicked, if any of the required information is missing, the text box will have a red outline signalling that the information is nescessary to proceed.

[Figma Link](https://www.figma.com/file/tpXy3TUeuksgePgUTgjeMN/Request-Page?type=design&node-id=0-1&mode=design&t=lfAx2CdPnpiqZWQs-0)

## Upload Video Page
Page accessed through the nav bar or home page after logged in that allows the user to upload a prerecored video or recording a video live.

Walkthrough of steps to submit a video:
- Displays description of the video request with `I accept this request` and `I agree to terms and conditions` checkboxes
- Select to upload or record a video
- If upload is selected: 
    - Prompts user to select file from file explorer 
- If record is selected:
    - Prompts user to give Obscurus access to their camera and microphone, if blocked prompts user to give permision
    - Start recording page
    - Review video, with the option to rerecord the video or contine
- Processing the video
- Review video after processing, with the option to rerecord the video or contine
- Provide any additional comments (optional)
- Success or failure message

[Figma Link](https://www.figma.com/file/tpXy3TUeuksgePgUTgjeMN/Request-Page?type=design&node-id=0-1&mode=design&t=lfAx2CdPnpiqZWQs-0)

## Request Listings Page
Accessed through the navigation bar and allows the user to view a listing of all requests and edit them. Includes a search bar and options to sort/filter the requests (sort by oldest, filter edited, filter overdue, filter completed). On the left side of the page have a listing of all requests and when one is selected, it will be displayed on the right of the page. 

[Figma Link](https://www.figma.com/file/53B85ff7eTiKnoamYX3Wec/Request-Listing-Page?type=design&node-id=0-1&mode=design&t=nHHYTxyuNgzMtBmc-0)

## Sign In Page
A pop-up accessed when the "sign in" button at the top of the page is clicked. Has been changed to allow creation of Obscurus account instead of exclusively social sign-ins as per client feedback. 

Allows login with Google or Obscurus account. With options for if the user forgets their password or needs to create a new account. If they click to create a new account, the pop-up will change to display a "sign up" interface.

## Messages Page
A page that will allow the user to message other users. The users can only message either the user requesting a video from them or a reciever of a request they've created. There is no messaging between users who have recieved the same request since this isn't a social feature. This page will be accessed either through the nav bar or from the requests listings page.

There is a listing of users they have messages they can click through on the left side of the page, then on the right is a message box displaying the conversation history and a text field allowing the user to message them. 

