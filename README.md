# support-server

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

1) docker volume create --name support-postgres
2) docker volume create --name node_modules_support
3) docker-compose build
4) npm i   
5) npm run execute-migrations
6) npm run execute-seeding
7) docker-compose up

Postman
http://localhost:8081/solveIssue POST body: {"name": "name issue"}
the server will respond you:

{
"message": "Your issue is pending free agent and will be solved within 30 second.
Please send request to /solveIssue/57 for get response of the issue."
}

just click to this place -> /solveIssue/57 in the message, 
and send a "GET" request in the new opened postman's tab for got the status your issue.

