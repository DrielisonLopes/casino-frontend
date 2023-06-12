## Front End React Developer Test

- It needs to be done using React with Mobx or Redux with NodeJS API. - contain a README file with all the instructions to download and run the project.
- any unnecessary comments or console.(log) will be noted.

### Test Requirements

- Use latest React Hooks
- Use Eslint and prettifier 
- Organised folder structure
- Comment your code
- VCS implementation early on with commits and branches for features/fixes/refactoring

##### Bonus Points ✅
- Deploy the application using Heroku, Google Cloud or any cloud service.


### Question (1) ✅
- Create a page that will contain a list of all the games provided in the game-data.json file.
- For this task you can use the thumb.url property to display the game thumbnail.

### Question (2) ✅
- In this task you are required to create a search functionality:
When the user types inside the search bar, the game list created in Question 1 should be updated accordingly.

### Question (3) ✅
- Considering a Slot machine defined like this:
- Reel1: [“cherry”, ”lemon”, “apple”, ”lemon”, “banana”, “banana”, ”lemon”, ”lemon”]
- Reel2: [”lemon”, “apple”, ”lemon”, “lemon”, “cherry”, “apple”, ”banana”, ”lemon”]
- Reel3: [”lemon”, “apple”, ”lemon”, “apple”, “cherry”, “lemon”, ”banana”, ”lemon”]

- The user starts with 20 coins. Each spin will cost the user 1 coin.
- *Please note that slot machines only consider pairs a match if they are in order from left to right.<b>Eg:</b>
Apple, Cherry, Apple - no win
Apple, Apple, Cherry - win

###### Rewards ✅
- 3 cherries in a row: 50 coins, 2 cherries in a row: 40 coins
- 3 Apples in a row: 20 coins, 2 Apples in a row: 10 coins
- 3 Bananas in a row: 15 coins, 2 Bananas in a row: 5 coins
- 3 lemons in a row: 3 coins
Keep a record of the wins and losses for the user session.