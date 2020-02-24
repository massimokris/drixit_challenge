# Drixit Challenge

## /API
Basic Node application for user autentication and retrieve them with a token
- [Postman collection](https://www.getpostman.com/collections/e8faf009404dafbb50ba)

##### ENDPOINTS
```
POST /api/v0/authenticate
{
	"email": "some@example.com",
	"password": "some-password",
} => Promise<{ "token": "jwt-token" }>
```
```
GET /api/v0/users/me 
{
	"token": "jwt-token"
} => Promise<UserClient>
```

##### SCRIPTS
- Production `$ npm run start`
- Develop `$ npm run dev`
- Insert Users `$ npm run insert:users`

## /Frontend
Basic React and Redux application with a login and user information.

##### ROUTES
- /login: If the user enters a valid email, then the password input shows up and can proceed to login
- /user-info: If the user login successfully the user information will be displayed

##### SCRIPTS
- Build `$ npm run build`
- Develop `$ npm run dev`
