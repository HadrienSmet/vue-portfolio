import type { ProjectInterface } from '@/interfaces/Project'

export const projectsData: ProjectInterface[] = [
  {
    id: 0,
    name: 'Booki - First project for OpenClassrooms',
    image_link: 'booki-square.webp',
    images: ['booki-home.webp', 'booki-mobile.webp', 'booki-pad.webp'],
    legends: ['Desktop version', 'Mobile version', 'Pad version'],
    description:
      'The goal of this project was to teach us how to integrate a basic template only using HTML and CSS. So we learned how to improve our workflow and wich details required most attention.',
    tools: ['HTML', 'CSS'],
    code_link: 'https://github.com/HadrienSmet/OpenClassroom-P2'
  },
  {
    id: 1,
    name: 'OhMyFood - Second project for OpenClassrooms',
    image_link: 'ohMyFood-square.webp',
    images: ['ohMyFood.webp', 'ohmyfood-home.webp', 'ohmyfood-pad.webp'],
    legends: [
      'Desktop version of the menu page',
      'Desktop version of the home page',
      'Pad version of the home page'
    ],
    description:
      'The goal of this project was to teach us how to integrate a template and to handle basic animations only using HTML and CSS, but we were allowed to compile our style sheets with Sass. So we learned how to handle pseudo-classes, pseudo-elements and pseudo-selectors but also the keyframes to implement more complexe animations',
    tools: ['HTML', 'Sass'],
    code_link: 'https://github.com/HadrienSmet/OpenClassroom-P3'
  },
  {
    id: 2,
    name: 'LaPanthere - Third project for OpenClassrooms',
    image_link: 'lapanthere-square.webp',
    images: [
      'previous-mobile.webp',
      'previous-contact.webp',
      'lapanthere-home.webp',
      'lapanthere-contact.webp',
      'lapanthere-report.webp'
    ],
    legends: [
      'Version that needed to be optimized, home page',
      'Version that needed to be optimized, contact page',
      'Optimized version, home page',
      'Optimized version, contact page',
      "Lighthouse report, couldn't reach a better score using only HTML and CSS and without changig the intrinsic structure of the website"
    ],
    description:
      'The goal of this project was to teach us how to improve the SEO and the accessibility of an already existing website. So we learned how to fix bad practices and wich good practices we had to implement in order to be appreciated by the search engines. We also learned wich details were important during a website creation if you want that your services can be reach by a lot of users',
    tools: ['HTML', 'CSS'],
    code_link: 'https://github.com/HadrienSmet/lapanthere'
  },
  {
    id: 3,
    name: 'Kanap - Fourth project for OpenClassrooms',
    image_link: 'kanap-square.webp',
    images: ['kanap-home.webp', 'kanap-products.webp', 'kanap-basket.webp', 'kanap.webp'],
    legends: [
      'Viewport of the home page',
      'Products standing on the home page',
      'Basket page',
      'Basket page'
    ],
    description:
      'The goal of this project was to introduce us JavaScript. We only had to develop the JS, the HTML, CSS and the back were already done. We had to connect the pages together, to set a basket and all the functionalities related to it. Basically, we had to learn how to create a dynamic website using functions and loops',
    tools: ['JavaScript'],
    code_link: 'https://github.com/HadrienSmet/go-fullstack'
  },
  {
    id: 4,
    name: 'PIIIQUANTE - Fifth project for OpenClassrooms',
    image_link: 'piiiquante-square.webp',
    images: [
      'piiiquante.webp',
      'piiiquante-menu.webp',
      'piiiquante-sauce.webp',
      'piiiquante-add-form.webp'
    ],
    legends: [
      'Sign in page',
      'Home page, screenshot from my exam',
      'Page of a sauce, screenshot from my exam',
      'Page to add a sauce, screenshot from my exam'
    ],
    description:
      'The goal of this project was to teach us how to create a REST with NodeJS. The front-end was already set we just had to create the routes, the middlewares and the controllers in order to realize a CRUD. We had to create an app where the user can add, delete or modificate a sauce of his invention. And also like or dislike the sauce on the app',
    tools: ['NodeJS', 'multer'],
    code_link: 'https://github.com/HadrienSmet/Projet6'
  },
  {
    id: 5,
    name: 'Groupomania - Sixth project for OpenClassrooms',
    image_link: 'groupomania-square.webp',
    images: ['groupomania.webp', 'groupomania-home.webp', 'groupomania.webp'],
    legends: [
      'Welcome page',
      'Sign up page',
      'Home page (screenshot took during my presentation. The data base does not exist anymore'
    ],
    description:
      'For this project we had to build a really basic social network from scratch. The use a framework between Angular, React and Vue was mandatory. I chose React. We had to set a logic to signing up and signing in on the app thanks to a mail adress and a password. Then the user had to be able to realise some posts on the platform. The user had to be able to modificate or delete each one of his posts. An admin had to have the same rights on every posts made on the app. Each user had to be able to like or dislike the posts. I also implemented a logic to let the user provides a picture and chose a pseudo',
    tools: ['Sass', 'JavaScript', 'NodeJS', 'React', 'Redux', 'Multer', 'Mongoose'],
    code_link: 'https://github.com/HadrienSmet/Projet-Groupomania'
  },
  {
    id: 6,
    name: 'Travel App - First project on my own',
    images: [
      'travel-app-signup-album.webp',
      'travelApp-signup.webp',
      'travelApp-home.webp',
      'travelApp-profile.webp',
      'travelApp-profile-album.webp',
      'travelApp-mobile.webp'
    ],
    legends: [
      'Modal to create a album during the sign up form',
      'The last step of the sign up form',
      'A part of the posts on the home page',
      'Profile page',
      'Modal to explore an album of a user',
      'The viewport of the home page of the mobile version'
    ],
    image_link: 'travelApp-profile.webp',
    description:
      "When I started developping this website I was dreaming about a tool that would help and fit to any kind of travellers. I wanted to create a place where we could meet and talk to people, share pictures from your trip and precise where you took it on a map, book hostels and plane tickets and save all those data in the same place in the user's phone, share your trip and all kinds of tips like that an algo could have offer great trip to the futur users based on the data provided by the users. And even warns you about hard to cross borders and provides you all the links to your ambassy to get you visa. But this app will probably never possess all those functionalities. I implemented a signing in form made of three steps. The first one is for the authentification data, the second one for his personal data like the user's name and the third one is for the extra data (all the data that will be public). Every user can create a post containing a text and or a picture. After creating it he can delete it or edit it if he wants. An admin possess the same rights to insure that the app remains a secure area for all the users. All the posts can be filtered by country. A like and dislike logic has been implemented on the posts. Every user has his own profile page where he can add some more extra data, like new trips he made or create a new album containing all the pictures he made during his trip. Each user can follow or unfollow the other users.",
    tools: [
      'Sass',
      'NodeJS',
      'React',
      'ThreeJS',
      'Redux',
      'Multer',
      'GoogleCloudStorage',
      'MongoDB'
    ],
    code_link: 'https://github.com/HadrienSmet/travel-app-client',
    code_server_link: 'https://github.com/HadrienSmet/travel-app-server',
    link: 'https://travel-app-client.netlify.app/'
  },
  {
    id: 7,
    name: 'Tinyclip - Third project on my own (the second is the portfolio)',
    images: [
      'tinyclip.webp',
      'tinyclip-snakepage.webp',
      'tinyclip-pongpage.webp',
      'tinyclip-tetrispage.webp',
      'tinyclip-flappypage.webp'
    ],
    legends: ['Home Page', 'Snake', 'Pong', 'Tetris', 'Flappy Bird'],
    image_link: 'tinyclip-square.webp',
    description:
      'In order to improve my skills in programming I coded a few small games. And I created a website to gather them. I called it tinyclip in memory of the website called miniclip wich stole a lot of hours to my youth. This website is only available on desktop version for now. Even if the home page is responsive, you can not play yet with your phone or tablet!',
    tools: ['Sass', 'React', 'TypeScript'],
    code_link: 'https://github.com/HadrienSmet/Tinyclip',
    link: 'https://hs-tinyclip.netlify.app/'
  },
  {
    id: 8,
    name: 'Cloned Gartic Phone, Fourth project on my own',
    images: [
      'cloned-home-page.webp',
      'cloned-room-page.webp',
      'cloned-canvas-page.webp',
      'cloned-results-page.webp'
    ],
    legends: ['Home Page', 'Room Page', 'Game page (drawing round)', 'Results Page'],
    image_link: 'cloned-square.webp',
    description:
      'I wanted to learn more about web sockets and I wanted to work based on templates made by a professional so I choose to clone famous web game Gartic Phone. It seamed me that it was a good project to challenge myself. Here is the version I ended up with. The responsive is made but you need a mouse to be able to play!! There is only one tool and one mode to play',
    tools: ['NextJS', 'React', 'TypeScript', 'Socket.IO', 'NodeJS'],
    code_link: 'https://github.com/HadrienSmet/gartic-clone',
    code_server_link: 'https://github.com/HadrienSmet/gartic-clone-server',
    link: 'https://hs-gartic-clone.netlify.app'
  }
]
