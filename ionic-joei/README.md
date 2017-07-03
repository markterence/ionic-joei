# ionic-joei
A ~~chemical~~ bond formed by the electrostatic attraction of oppositely charged ~~ions~~ feelings.

# ionic info
`$>ionic g page <page_name>`  
this generates a page

# basic ionic tutorial
`https://taco.visualstudio.com/en-us/docs/tutorial-ionic2/`
`http://www.9lessons.info/2017/01/ionic-2-mobile-app-using-angular-2-and.html`
`https://scotch.io/tutorials/build-a-mobile-app-with-angular-2-and-ionic-2`

# creating providers
`ionic g provider <provider_name>`
The ionic CLI will create a new folder in the project ```src\provider\```   

# Dealing with CORS
During testing, Javascript is not allowed to consume web page served from different origin.  
So I used a proxy script written in PHP to read the api outside the domain.  
``https://gist.github.com/iovar/9091078``

proxy.php -->
|Header # | Header2 # |
|--- |:---:|
|ragsekemnmn|hello aewaskj|