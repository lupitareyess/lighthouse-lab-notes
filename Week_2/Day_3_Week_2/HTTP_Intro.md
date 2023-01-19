## HTTP Intro

- Request-response based protocol
  - Client makes request to server by sending message to request a resource
  - Sever then sends response
  - Client must initiate communication, server never will

### HTTP Flow

1. TCP connection opens

- sends request
- can make several connections

2. Send HTTP message
3. Read response sent by server
4. Close or resuse connection

### HTTP Messages

[MDN web docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview#http_flow)

- Embedded in a fram
- 2 types of HTTP messages

1. Request

- Has the following elements:
  - **HTTP method - `GET` `POST`, etc - that defines the operation client is requesting**
  - **Path of the resource**
  - HTTP protocol version
  - Optional headers
  - A body

2. Responses

- Has the following elements
  - HTTP protocol version
  - Status code - indicates if request was successful
  - HTTP headers
  - Perhaps a body

### HTTP Methods

- 9 request methods, but focus on following 4
  1. `GET` - gets data from server
  2. `POST` - creates new data
  3. `PUT` - to edit existing data on the server
  4. `DELETE` - delete existing data

### HTTP Responses 
- Serever reads path and method to figure out what to do 
- Sends response to client with info including:
  - **Status Code** 
    - Tells user if requested resource isn't found or server unable to perform action
    - 3 digit number that server puts in response to client 
    - Some good ones to know:
      - 200: "Everything went great!"
      - 201: "The request has succeeded and a new resource has been created"
      - 404: "Resource not found
      - 500: "Server had an error"
  - **Response Body**
    - Contains data - data, text, video, etc

