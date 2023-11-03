const html5={
    'title':'HTML5',
    'image': require('./images/html5.png'),
}
const css3={
    'title':'CSS3',
    'image': require('./images/css3.png'),
}
const js={
    'title':'Javascript',
    'image':  require('./images/js.png')
}
const react={
    'title':'React',
    'image': require('./images/react.png'),
}
const flutter={
    'title':'Flutter',
    'image': require('./images/flutter.png'),
}
const bootstrap={  
    'title':'Bootstrap4',
    'image':  require('./images/bootstrap.png')
}
const java={  
    'title': 'Java',
    'image': require('./images/java.png'),
}
const python={  
    'title': 'Python',
    'image': require('./images/python.png'),
}
const php={  
    'title': 'PHP',
    'image':  require('./images/php.png'),
}
const mysql={  
    'title': 'MySQL',
    'image': require('./images/mysql.png'),
}
const postgresql={
    'title': 'PostgreSQL',
    'image': require('./images/postgresql.png'),
}
const sqlserver={
    'title': 'Sql Server',
    'image':  require('./images/sql-server.png'),
}
const angular={
    'title': 'Angular',
    'image':  require('./images/angular.png'),
}

export const projectsData = [
    {
        "title": "Movies",
        "description": 'Site web affiche les films, emissions téléviser en utilisant TheMovieDatabase API',
        "category": "web",
        "image": require('./images/movie_app.png'),
        "github": 'https://github.com/CHADLIZakaria/Movie',
        "website": 'https://movie05.netlify.app/',
        "technologies": [
            html5,
            css3,
            js,
            react
        ],
        screenshoot: [
            require('./images/home_movie.png'),
            require('./images/movie.png')
        ]
    },
]
export const competances = [
    {
        'domaine': {
            'name': 'Front End',
            'image':  require('./images/frontend-background.png'),
            'className': 'front-end',
        },
        'values' : [
            html5,
            angular,
            css3,
            react,
            js,
            flutter,
            bootstrap
        ],
    },
    {
        'domaine': {
            'name': 'Back End',
            'image':  require('./images/backend-background.jpg'),
            'className': 'back-end'
        },
        'values': [
            java,
            python,
            php
        ],
    }, 
    {
        'domaine': {
            'name': 'Database',
            'image':  require('./images/database.jpeg'),
            'className': 'database'
        },
        'values': [
           mysql,
           postgresql,
           sqlserver
        ]
    }
]
export const formations = [
    {   
        'formationName': 'Baccaleaurat',
        'formationDescription': 'Baccaleaurat option Physics Groupe pédagogique alpha',
        'formationImage': require('./images/alpha.png'),
    },
    {
        'formationName': 'DEUST MIP',
        'formationDescription': 'Diplôme d\'Etudes Universitaires Scientifiques et Techniques en Math Informatique Physiques',
        'formationImage': require('./images/fsts.png'),
    },
    {
        'formationName': 'LST GI',
        'formationDescription': 'Licences Sciences et Techniques en Génie informatique',
        'formationImage': require('./images/fsts.png'),
    },
    {
        'formationName': 'Master IMSC',
        'formationDescription': 'Master en Informtique et Modélisation des Sytèmes Complexes',
        'formationImage': require('./images/fsts.png'),
    }
]
export const certifications = [
    {
        'name': 'IBM Full Stack Software Developer',
        'societyName': 'Coursera',
        'societyLogo': require('./images/coursera.png'),
        'date': 'oct. 2023',
        'url': 'https://www.coursera.org/account/accomplishments/specialization/certificate/42AHDBBQDPJA'
    },
    {
        'name': 'JavaScript Algorithms and Data Structures',
        'societyName': 'freeCodeCamp',
        'societyLogo': require('./images/freeCodeCamp.jpg'),
        'date': 'août 2023',
        'url': 'https://www.freecodecamp.org/certification/fccef8ce5c1-6f4c-415a-8e23-804f593fd279/javascript-algorithms-and-data-structures'
    },
    {
        'name': 'Responsive Web Design',
        'societyName': 'freeCodeCamp',
        'societyLogo': require('./images/freeCodeCamp.jpg'),
        'date': 'juil. 2023',
        'url': 'https://www.freecodecamp.org/certification/fccef8ce5c1-6f4c-415a-8e23-804f593fd279/responsive-web-design'
    },
    {
        'name': 'Spécialisation Java Programming and Software Engineering Fundamentals',
        'societyName': 'Coursera',
        'societyLogo': require('./images/coursera.png'),
        'date': 'août 2022',
        'url': 'https://www.coursera.org/account/accomplishments/specialization/certificate/3TBF9GW38ZMV'
    }
]

