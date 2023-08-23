What is Emmet?
Emmet generates the code inside VS Code.
Emmet is a set of plug-ins for vs code which allows high speed coding and editing in HTML.
Difference between library and Framework?
A framework is a pre-written code that provides a structure for developing software applications.

A library is a collection of pre-written code that can be used to perform specific task

What is CDN? Why do we use it?
CDN is Content Delivery Network. It is a group of geographically distributed servers that speed up delivery of the web content by bring the content closer to where users are.
Why is React known as React?
React is one of many libraries and it's completely frontend and specifies in thigs that the user interacts with when they're using a website. It is called React because it reacts.

React is called "React" because of its core feature, which is its ability to "react" or respond dynamically to changes in data, React's primary goal is to simplify the creation of complex, interactive user interfaces by breaking them down into smaller, reusable components.

What is cross-origin in the script tag?
The cross-origin is a attribute used to share resource from one domain to another domain.

Mainly it is used to handle CORS(Cross-Origin Resource sharing) request that checks whether it is safe to allow for sharing the resources from other domains. Resources like external scripts, links, images, videos.

What is the difference between React and ReactDOM?
React is a JS library for building User Interfaces and ReactDOM is the Javascript library that allows React to interact with the DOM.
What is the difference between react.development.js and react.production.js files via CDN?
In production mode, compression and minification of JS and other resources happens to reduce the size of the code which is not the case when it comes to development mode.

Performance will be much more faster in production mode when compared to development mode.

What are async and defer?
Async allows script to run as soon as it is loaded without blocking other elements on the page. Defer means script will only execute after the page has finished loading.
What is NPM?
The full form of NPM is Node Package Manager.

NPM does not have full form.

NPM manages packages but it does not stand for node package manager

NPM is standard repository for all the packages. It is the biggest package manager.

What is Parcel/Webpack? Why do we need it?
Parcel and Webpack are the bundlers used in JavaScript that helps to build code together, to minify our App, to compress our code, to clean our code before it moves to production.
What is .parcel-cache?
Parcel creates .pacel-cache which contains html, css and JS file for storing the information about the project to reduce the time when we rebuild our time.
What is npx?
NPX is used to execute a package.
What is the difference between dependencies vs devDependencies?
dependencies: Package required by our application in Prod.

devDependencies: Package required by our application in Development phase.

What is Tree Shaking?
Tree Shaking removes unused and unwanted code from our application. For example, in our code out of 10 functions, we are using only 2 functions then it will just use only 2 functions and it will ignore rest 8 functions.
What is Hot Module Replacement?
HMR is a feature of parcel. It automatically updates the code without refreshing the page in the browser when we make any change in our code. It uses File Watcher Algorithm to keep track of file changes while development and render those changes on the web page.
List down your favourite superpowers of Parcel and describe any 3 of them in your own words.
HMR - It gives us automatic refresh feature when we change or update anything in our code.

Minify

Image Optimization - It gives us feature to Image Optimization and using this feature we can optimize our image so, it can make huge impact on web page reloading.

Tree Shaking - It is used for removing unused code.

Differential Bundling: It is used for old browser support

What is .gitignore ? What should we add and not add into it?
.gitignore file is used for ignoring files and folders which we don't need to push on Github.

We should add those files or folders that we can recreate or regenerate through the servers such node_modules, .parcel-cache, dist etc.

What is the difference between package.json and package-lock.json?
In package.json file we define the rules required to run our applications. It contains the approximate version.

Whereas package-lock.json keeps track of exact versions of the dependencies that is being installed.

Why should I not modify package-lock.json?
Because it holds the actual and exact information about the dependencies or packages.
What is node_modules? Is it a good idea to push that on git?
The node_modules is folder which handles all the dependencies, dev-dependencies and transitive dependencies.

It is not a good idea to push that on Git because node_modules folder size is very huge and also we can recreate or regenerate those in Server using package.json.

What is the dist folder?
After we run npx parcel build index.html or npx parcel index.html it will automatically generates dist folder. The dist folder contains the build script of the application. It contains compressed and minified version code.
What is browserlists?
Browserlists is a tool or package which specifies the compatibility with the browser. For example we can specify browserlists like last 2 chrome versions.
Difference between ~ and ^?
~ version: Approximately equivalent to version.

^ version: Compatible with version i.e accept new minor version.
