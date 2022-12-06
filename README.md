# IHH

#### Figma design for conception
![image](https://user-images.githubusercontent.com/97509680/205793980-8d23ff59-7899-46d0-8a61-a1d6d5f6f856.png)
#### Login page
![image](https://user-images.githubusercontent.com/97509680/205794004-12ac76b1-f45b-4cc1-8f9d-1128ed72fc9d.png)
#### Create Account page
![image](https://user-images.githubusercontent.com/97509680/205794201-6e18d966-2086-4d63-81c2-2c3a75c95e2a.png)
#### Order page
![image](https://user-images.githubusercontent.com/97509680/205794246-d577a470-06a7-454c-bf4d-3ef26e768170.png)
#### Fulfill orders page
![image](https://user-images.githubusercontent.com/97509680/205794287-25444a65-e9f6-4578-b79f-9b5876ea9291.png)
#### Profile page
![image](https://user-images.githubusercontent.com/97509680/205794305-95306952-03c6-4e46-8643-fa95ac54b104.png)
#### QR code for app
![image](https://user-images.githubusercontent.com/97509680/205794326-874810e7-0f2d-43bc-9bf1-e697a0a294d3.png)


## Inspiration
Lunch time is supposed to be the time when we can take a break and relax. But the incessant queues at various food outlets during lunchtime in NUS can make lunch a stressful experience - Imagine having to wait half an hour just for some chicken rice! Also, our rooms can be too cozy to leave during lunch time. If only someone who was going to buy lunch could help me get my order for me too...... I wouldn't mind giving a small tip to that person to show my appreciation!

## What it does
This app caters to two main kinds of students - the "Orderers" and the "Fulfillers". The Orderers first place their orders through the NUSmart dining app, alerting the kitchens to start preparing their food. They then place a collection request via GrabbedFood, asking other Fulfillers to collect the orders from them. This is done through the Order page.
Meanwhile, Fulfillers are students who actually go down to a particular food location (like PGP canteen). They are then able to receive requests from the Orderers, and can decide to fulfill these requests, by collecting on behalf of them. They are incentivised to collect for the Orderers through a small payment fee that the Orderers pay to the Fulfillers directly. This is done through the Fulfillment page.
The profile page allows for students to set up their profile. Students with the profiles can start using the app, either as Orderers or Fulfillers (depending on their mood!).

## How we built it
* ReactNative
* Firebase
* Javascript

## Challenges we ran into
The integration of backend and frontend can be quite challenging in such a short span of time because we have to work on the new features simultaneously.
Most of us are new to the tech stack that we used and we have to learn on the go, watching tutorials while doing it.
Some of the features, such as live updates, require more time for us to work on it due to its complexity. Therefore, we had to settle for a simpler version for the hackathon because of a lack of time.
The user interface can be improved upon and be made more intuitive, but similarly, due to a lack of time, we settled for a very basic user interface.

## Accomplishments that we're proud of
Get the user authentication to work (at least account creation and logging in)
Managed to integrate Firebase into our solution, and we are able to create requests, fulfil them and see the pending and past requests.
Scrollable card components on various pages that reads and displays orders from database

## What we learned
We learnt a lot about the tech stack that we are using, ReactNative, Firebase and Javascript as we are quite new to it.
We also learnt how to split the work between frontend and backend and work on them separately, then integrating them together subsequently.

## What's next for GrabbedFood
In-app payment feature to allow for the Orderers to pay the Fulfillers (who wants to have to open up Paylah/Paynow and ask for their number and amount anyway?)
In-app communication feature to allow the Orderers to communicate with the Fulfillers (we envision the Orderers to perhaps suddenly have cravings for drinks and too lazy to place another order)
Feature for the Orderers to cancel request for collection (if no Fulfillers students have fulfilled it yet).
Maybe the Orderers decide to be hardworking enough to get their food if they are sufficiently hungry.
More refinement for profile pages, ordering history and filter, order management, authentication features and User Interface changes.

## Built With
<img src="https://user-images.githubusercontent.com/97509680/205794815-3542e4e5-2937-4130-96fc-d4ab338236b2.png" alt="Firebase" width="200"/>
<img src="https://user-images.githubusercontent.com/97509680/205794898-20a98ac2-351f-4a76-9de4-3c687678943f.png" alt="React Native" width="200"/>

