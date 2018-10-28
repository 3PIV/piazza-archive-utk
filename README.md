# piazza-archive-utk

This is the front/back end for the website which student will be able to find old Piazza posts for Systems Programming that have been archived. Using a Mongo, Express, React, Node.js (MERN) stack we will be able to preserve posts that can be of importance to students. 

### Prerequisites

A few a necessities in order to begin working on a local copy:

```
Heroku CLI
Github CLI
Node.js + CLI
React + React CLI
```

### Installing

In a suitable working directory:

```
1.) git clone
2.) heroku . <- this will set up a heroku instance through your herokue account
2.a.) heroku ps:scale web=0 <- stop heroku instance from launching on the web [optional] 
3.) cd piazza-archive-utk && npm install <- install from package.json
4.) heroku local <- run local on port 5000
```

### Coding Style

Please, abide by the eslint + airbnb preset with the following attributes:

```
{
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "indent": [
            "error",
            "tab"
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "never"
        ]
    }
}
```

## Deployment

Heroku handles everything for deployment. To make your changes public please submit a pull request and document your changes, the request then can be evaluated and pulled.

## Built With

* [React](https://reactjs.org/) - The web framework used
* [mLab](https://mlab.com/) - Mongo Database Host
* [heroku](https://heroku.com) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Paul Preston Provins IV** - *Initial work* - [3PIV](https://github.com/3PIV)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## Acknowledgments

* The Fall 2018 CS360 students, thank you for being patient.
