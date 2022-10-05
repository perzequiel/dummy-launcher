# Dummy Launcher

Dummy launcher provided by Pow Gaming to show how to implement the launcher token generator in the backend side

---
## Files

### server.js : 
dummy express server implementation with 2 routes
- /[root] : game selection page that request gameList from the pow api.
- /game/:gameId : launcher token generation and redirect to pow lancher.

### index.js : 
Basic implementation of the root html with the game list requested from the pow api.

### launcher-token-generator.js : 
class definition of the launcher token generator
- constructor: save params
- encode: data encoding in launcher token.
- getLaunchToken: obtaine the laucher token generated
- getLaunchURL: obtaine the launch url

### .env.example
copy this file to .env and replace the params to make the project works.

## how to run
```bash
# copy .env file and replace values
cp .env.example .env  
npm install
npm start
```
Now! go to http://localhost:3000

That's it!