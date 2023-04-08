# REST API

**REST**- Representational State Transfer

Change the representation of the data. For example you can change the representation of the backend (JSON) data into a website (HTML) data.

![image](https://user-images.githubusercontent.com/33658792/230184654-ce3f1c43-ab6a-4ca6-ae67-6be37a85a45d.png)

App send request to server(nodejs). Username and Password. Server will send response the details of the user after login.

Whole in JSON or XML format. 

Whole function is called API

REST API - Stateless backend (doesnot care who is requesting.). Request will come and accordingly will work.

```
http://localhost.com/api/users
```

![image](https://user-images.githubusercontent.com/33658792/230185220-60effc65-3364-47b0-9787-11e86c33070d.png)

TYPE: GET, POST, PUT, DELETE, PATCH

* GET: The GET method is used to retrieve data from the server.

* POST: The POST method sends data to the server and creates a new resource.

* PUT: The PUT method is most often used to update an existing resource.

* PATCH: The PATCH method is very similar to the PUT method because it also modifies an existing resource. The difference is that for the PUT method, **the request body contains the complete new version**, whereas for the PATCH method, **the request body only needs to contain the specific changes to the resource**, specifically a set of instructions describing how that resource should be changed, and the API service will create a new version according to that instruction.

* DELETE: The DELETE method is used to delete a resource specified by its URI.

To represent a data, we can change it from JSON to HTML like below.

![image](https://user-images.githubusercontent.com/33658792/230186537-aaf089bf-7815-4e9c-8a76-a978257b3c5b.png)

Example: HTTP and Path parameters to get response from API server

![image](https://user-images.githubusercontent.com/33658792/230722393-e4755868-00de-4e57-87ee-0e4aa646a75a.png)
