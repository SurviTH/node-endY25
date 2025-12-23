// ======= Importing the Express framework =======
const express = require('express');
// ======= Importing Morgan logging middleware =======
const morgan = require('morgan');
// ======= Importing Mongoose for MongoDB interaction =======
const mongoose = require('mongoose');
// ======= Blog model =======
const Blog = require('./models/blog');

// Connect to MongoDB database (if needed in future)
const db = "mongodb+srv://guanyin:73Gpxqjh68pdjTEW@node.mvr4olc.mongodb.net/?appName=node";
mongoose.connect(db)
    // successful connection message
    // .then((result) => console.log('Connected to MongoDB')) // successful connection
    .then((result) => app.listen(3000)) // listen for requests only after DB connection is successful
    .catch((err) => console.log(err));


// ====== Create an instance of an Express application
const app = express();

// ====== express app listen on port 3000
// app.listen(3000);

// ====== Middleware functions ======
app.set('view engine', 'ejs'); // set EJS as the templating engine

// Middleware to serve static files from the 'public' directory
app.use(express.static('public'));

// ====== Custom Middleware for logging request details ======
// app.use((req, res, next) => {
//     console.log('New request made:');
//     console.log('Host:', req.hostname);
//     console.log('Path:', req.path);
//     console.log('Method:', req.method);
//     next(); // proceed to the next middleware or route handler
// });

// ====== Using Morgan logging middleware ======
app.use(morgan('dev')); // 'dev' is a predefined format string

// ====== create a blog =======
app.get('/add-blog', (req, res) => {
    const blog = new Blog({
        title: 'New Blog Post',
        snippet: 'This is a snippet of the new blog post.',
        body: 'This is the body of the new blog post.'
    });

    blog.save()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        });
});

// ====== get all blogs =======
app.get('/all-blogs', (req, res) => {
    Blog.find()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        });
});

// ====== get a single blog by ID =======
app.get('/single-blog', (req, res) => {
    Blog.findById('694a8490d45bca1e7d63614d')
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        });
});

app.get('/', (req, res) => {
    // basic response
    // res.write('Hello World\n');
    // res.end();

    // express response
    // res.send('<h1>Home Page</h1>'); 

    // send HTML file as response
    // res.sendFile('./views/index.html', { root: __dirname }); // relative path won't work

    // dynamic content - render EJS template
    const blogs = [
        { title: 'Blog One', snippet: 'This is blog one snippet' },
        { title: 'Blog Two', snippet: 'This is blog two snippet' },
        { title: 'Blog Three', snippet: 'This is blog three snippet' },
    ];
    // render EJS template
    res.render('index', { title: 'Home', blogs: blogs });
});

app.get('/about', (req, res) => {
    // res.send('<h1>About Page</h1>');

    // res.sendFile('./views/about.html', { root: __dirname });

    res.render('about', { title: 'About' });
});

app.get('/blogs/create', (req, res) => {
    // res.send('<h1>Create a New Blog</h1>');

    // res.sendFile('./views/create.html', { root: __dirname });

    res.render('create', { title: 'Create a New Blog' });
});

// ====== Redirect from /about-me to /about ======
// app.get('/about-me', (req, res) => {
//     // permanent redirection
//     res.redirect(301, '/about');  // 301 - permanent redirection
// });

// ====== handle 404 - keep this as the last route ======
app.use((req, res) => {
    // res.status(404).sendFile('./views/404.html', { root: __dirname });

    res.status(404).render('404', { title: '404' });
});