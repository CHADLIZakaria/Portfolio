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
const springboot={
    'title': 'Spring boot',
    'image': require('./images/spring-boot-logo.png'),
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

export const projectsData = [
    {
        "title": "Snooker",
        "description": "Site web qui gère les joueurs, les tables de snooker, les gérants des tables",
        "category": "web",
        "website": "https://snooker-chadli.herokuapp.com/",
        "github": '',
        "image": require('./images/dashboard_snooker.png'),
        "technologies": [
            html5, 
            css3, 
            js,
            bootstrap,
            springboot,
        ],
        screenshoot: [
            require('./images/dashboard_snooker.png'),
            require('./images/ajouter_table_snooker.png'),
            require('./images/table_snooker.png'),
        ]
    },
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
            require('./images/movie.png'),
            
        ]
    },
]
export const competances = [
    {
        'domaine': {
            'name': 'Front End',
            'image':  require('./images/gestion_etat_command.png'),
            'className': 'front-end',
        },
        'values' : [
            html5,
            css3,
            js,
            bootstrap,
            react,
            flutter
        ],
    },
    {
        'domaine': {
            'name': 'Back End',
            'image':  require('./images/backend-background.jpg'),
            'className': 'back-end',
        },
        'values': [
            java,
            python,
            php,
        ],
    }, 
    {
        'domaine': {
            'name': 'Database',
            'image':  require('./images/database.jpeg'),
            'className': 'database',
        },
        'values': [
           mysql,
           postgresql,
           sqlserver,
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

