const html5={
    title:'HTML5',
    image: require('./images/skills/html5.png'),
    color: 'e34c26'
}
const css3={
    title:'CSS3',
    image: require('./images/skills/css3.png'),
    color: '264de4'
}
const js={
    title:'Javascript',
    image:  require('./images/skills/js.png'),
    color: 'F0DB4F'
}
const react={
    title:'React',
    image: require('./images/skills/react.png'),
    color: '61DBFB'
}
const flutter={
    title:'Flutter',
    image: require('./images/skills/flutter.png'),
    color: '40C4FF'
}
const bootstrap={  
    title:'Bootstrap5',
    image: require('./images/skills/bootstrap5.png'),
    color: '563d7c',
}
const bootstrapIcons={  
    title:'Bootstrap Icons',
    image:  require('./images/skills/bootstrap5.png'),
    color: '563d7c',
}
const tailwind = {
    title: 'Tailwind',
    image: require('./images/skills/tailwind.png'),
    color: '06B6D4'
}
const java={  
    title: 'Java',
    image: require('./images/skills/java.png'),
    color: 'f89820'
}
const python={  
    title: 'Python',
    image: require('./images/skills/python.png'),
    color: 'FFD43B'
}
const mysql={  
    title: 'MySQL',
    image: require('./images/skills/mysql.png'),
    color: '00758F'
}
const postgresql={
    title: 'PostgreSQL',
    image: require('./images/skills/postgresql.png'),
    color: '336791'
}
const angular={
    title: 'Angular',
    image:  require('./images/skills/angular.png'),
    color: 'd4173b'
}
const springBoot={
    title: 'Sprint Boot',
    image:  require('./images/skills/spring-boot.png'),
    color: '6DB33F'
}
const kafka={
    title: 'Kafka',
    image:  require('./images/skills/kafka.png'),
    color: '333333'
}
const kubernetes={
    title: 'Kubernetes',
    image:  require('./images/skills/kubernetes.png'),
    color: '3970e4'
}
const docker={
    title: 'Docker',
    image:  require('./images/skills/docker.png'),
    color: '0db7ed'
}


export const projectsData = {
    "en":  [
        {
            "title": "Portfolio",
            "description": 'Portfolio is website with multilingual capabilities, allowing visitors to explore my projects and learn about me in multiple languages. With customizable sections for showcasing my work and background, it delivers a tailored and informative experience.',
            "category": "web",
            "image": require('./images/projects/portfolio.png'),
            "github": 'https://github.com/CHADLIZakaria/Portfolio',
            "website": 'https://chadlizakaria.github.io/Portfolio/',
            "technologies": [
                html5,
                css3,
                js,
                react
            ]
        },
        {
            "title": "WeatherZ",
            "description": 'WeatherZ is a mobile weather app offering daily and hourly forecasts. With a favorites feature, users can save preferred locations for quick access. The app also provides historical weather data and supports multiple languages.',
            "category": "mobile",
            "image": require('./images/projects/weather/demo-weather1.png'),
            "github": 'https://github.com/CHADLIZakaria/Movie',
            "website": 'https://play.google.com/store/apps/details?id=com.zchadli.weather',
            "technologies": [
                flutter,
            ]
        },
        {
            "title": "WeatherZ Landing Page",
            "description": 'WeatherZ is a dynamic landing page showcasing the WeatherZ mobile app with animations and key highlights. It features app screenshots, benefits, and a seamless preview of its capabilities. Users can explore features and access quick download links.',
            "category": "web",
            "image": require('./images/projects/weather/weatherZ-landing.png'),
            "github": 'https://github.com/CHADLIZakaria/Movie',
            "website": '',
            "technologies": [
                html5,
                css3,
                bootstrapIcons,
                angular
            ]
        },       
    ],
    "fr":  [
        {
            "title": "Portfolio",
            "description": 'Mon portfolio est un site web avec des fonctionnalités multilingues, permettant aux visiteurs d\'explorer mes projets et d\'apprendre à me connaître dans plusieurs langues. Avec des sections personnalisables pour présenter mon travail et mon parcours, il offre une expérience sur mesure et informative.',
            "category": "web",
            "image": require('./images/projects/portfolio.png'),
            "github": 'https://github.com/CHADLIZakaria/Movie',
            "website": 'https://movie05.netlify.app/',
            "technologies": [
                html5,
                css3,
                js,
                react
            ]
        },
        {
            "title": "WeatherZ",
            "description": '"WeatherZ" est une application mobile fournissant des prévisions météorologiques quotidiennes et horaires. Grâce à sa fonctionnalité de favoris, les utilisateurs peuvent enregistrer leurs emplacements préférés pour un accès rapide. L\'application fournit également des données météorologiques historiques et prend en charge plusieurs langues.',
            "category": "mobile",
            "image": require('./images/projects/weather/demo-weather1.png'),
            "github": 'https://github.com/CHADLIZakaria/WeatherZ',
            "website": 'https://play.google.com/store/apps/details?id=com.zchadli.weather',
            "technologies": [
                flutter,
            ]
        },
        {
            title: "WeatherZ Landing Page",
            description: "WeatherZ is a dynamic landing page showcasing the WeatherZ mobile app with animations and key highlights. It features app screenshots, benefits, and a seamless preview of its capabilities. Users can explore features and access quick download links.",
            category: "web",
            image: require('./images/projects/weather/weatherZ-landing.png'),
            github: 'https://github.com/CHADLIZakaria/Movie',
            website: '',
            technologies: [
                html5,
                css3,
                bootstrapIcons,
                angular
            ]
        },  
    ]
}

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
            flutter,
            bootstrap,
            tailwind
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
            js,
            springBoot, 
            kafka
        ],
    }, 
    {
        'domaine': {
            'name': 'Database & DevOps',
            'image':  require('./images/database.jpeg'),
            'className': 'database'
        },
        'values': [
           mysql,
           postgresql,
           docker,
           kubernetes
        ]
    }
]
export const formations = {    
    'en': [
        {
            "formationName": "Bachelor's Degree",
            "formationDescription": "Bachelor's Degree in Physics at Group pédagogique alpha",
            "formationImage": require('./images/alpha.png')
        },
        {
            "formationName": "LST GI",
            "formationDescription": "Bachelor of Science in Computer Engineering Sciences and Techniques",
            "formationImage": require('./images/fsts.png')
        },
        {
            "formationName": "Master IMSC",
            "formationDescription": "Master's Degree in Computer Science and Modeling of Complex Systems",
            "formationImage": require('./images/fsts.png')
        }
    ],
    'fr':[
        {
            "formationName": "Baccalauréat",
            "formationDescription": "Baccalauréat option Physique au Groupe pédagogique alpha",
            "formationImage": require('./images/alpha.png')
        },
        {
            "formationName": "LST GI",
            "formationDescription": "Licence en Sciences et Techniques en Génie informatique",
            "formationImage": require('./images/fsts.png')
        },
        {
            "formationName": "Master IMSC",
            "formationDescription": "Master en Informatique et Modélisation des Systèmes Complexes",
            "formationImage": require('./images/fsts.png')
        }        
    ]
}
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

