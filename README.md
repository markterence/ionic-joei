go to [dev branch](https://github.com/markterence/ionic-joei/tree/dev)  

# ionic-joei
A ~~chemical~~ bond formed by the electrostatic attraction of oppositely charged ~~ions~~ feelings.  
A sample ionic rest client application.

# ionic info
`$>ionic g page <page_name>`  
this generates a page

# basic ionic tutorials
- https://taco.visualstudio.com/en-us/docs/tutorial-ionic2/
- http://www.9lessons.info/2017/01/ionic-2-mobile-app-using-angular-2-and.html
- https://scotch.io/tutorials/build-a-mobile-app-with-angular-2-and-ionic-2
- https://gonehybrid.com/build-your-first-mobile-app-with-ionic-2-angular-2-part-6/
- http://blog.ionic.io/layout-the-cool-way-using-the-ionic-2-grid-component/
- http://www.gajotres.net/ionic-2-making-rest-http-requests-like-a-pro/
- http://coenraets.org/blog/2017/04/dreamhouse-sample-application-ionic3-angular4/
- http://mcgivery.com/understanding-ionic-2-class/
- https://github.com/dreamhouseapp/dreamhouse-mobile-ionic
- http://angularcode.com/demo-of-a-simple-crud-restful-php-service-used-with-angularjs-and-mysql/
- https://www.joshmorony.com/an-in-depth-look-at-the-grid-system-in-ionic-2/  
Rapid Prototyping with Ionic 2 and Node.js – Part 2  
- https://devdactic.com/prototyping-ionic-2-nodejs-2/  
- https://stackoverflow.com/a/37292510
- http://blog.ionic.io/twitter-app-ionic-2/
# creating providers
`ionic g provider <provider_name>`
The ionic CLI will create a new folder in the project ```src\provider\```   

# Dealing with CORS #
Use a proxy.  
To configure the your Ionic App to use a proxy server.  
Define the `proxies` inside `ionic.config.json`  
```
{
  "name": "ionic-joei",
  "app_id": "",
  "type": "ionic-angular",
  "proxies":[{
	  "path":"/api",
	  "proxyUrl":"http://192.168.1.23:8888/api"
  }]
}
```

~~During testing, Javascript is not allowed to consume web page served from different origin.  
So I used a proxy script written in PHP to read the api outside the domain.~~  
**~~Simple Proxy Script~~** 
- https://gist.github.com/iovar/9091078 

**~~Usage~~**  
~~`
proxy.php?url=<url_encoded_uri>
localhost/proxy.php?url="api.cors-disabled.com%2F%3Fsearch%3Dcors%26ref%3Dweb
`~~
