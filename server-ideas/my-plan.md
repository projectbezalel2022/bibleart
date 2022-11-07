# Sam's ideas for server
In order to scale up the project to more than one chapter, we are going to want a way to store the images and text outside the client and loaded when the user navigates to a particular chapter and verse.

- I don't know if Azure has a good way of hosting images cheaply, but Cloudinary can store 20-25 GB of images for free. This is just enough to fit a picture of 1MB for every two verses in the Bible.
- I am able to make a server in node, though if node-TypeScript is required, I need to check for cloudinary compatibility.
- A server can be hosted in various places but I would love it if there is room on the Azure for it. As I am not confident on devops, I would love to get the opinion of our cloud engineer.
- A database to store the biblical text may not be needed, but can be used if an external api is not suitable

