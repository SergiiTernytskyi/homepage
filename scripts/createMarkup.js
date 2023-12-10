export const skillsListMarkup = () => {
  return `HTML, CSS3, JavaScript, React, Node.js`;
};

export const skillsLogoListMarkup = () => {
  return `<div class="skills__list">
            <img class="skills__logo" src="./assets/HTML5_Badge_512.png"/>
            <img class="skills__logo" src="./assets/CSS3_logo.svg.png" />
            <img class="skills__logo" src="./assets/javascript-logo.png"/>
            <img class="skills__logo" src="./assets/React-icon.svg.png" />
            <img class="skills__logo" src="./assets/nodejs-logo.svg" />
          </div>`;
};

export const createProjectsMarkup = () => {
  return `<li class="projects__item">Web Studio, IceCream, Filmoteka, Phonebook, So Yummy
                  (Back-end), So Yummy (Front-end)</li>`;
};

export const createProjectsDetailedMarkup = () => {
  return `<li class="projects__item">
                  <h4 class="projects__title">Web Studio</h4>
                  <p class="experiences__company-project-role">
                    Technologies used: <b>HTML, SASS, JS</b>
                  </p>
                  <div class="project__wrapper">
                    <img
                      class="projects-image"
                      src="./assets/webStudio.jpg"
                      alt="web-studio"
                    />

                    <div>
                      <p class="projects-description">
                        Web Studio website with responsive layout, burger menu,
                        modal window and attractive design.
                      </p>
                      <a
                        class="project__link"
                        href="https://sergiiternytskyi.github.io/goit-markup-hw-08/"
                        target="_blank"
                        >Project Link</a
                      >
                      <a
                        class="project__link"
                        href="https://github.com/SergiiTernytskyi/goit-markup-hw-08"
                        target="_blank"
                        >Project Repository</a
                      >
                    </div>
                  </div>
                </li>
                
                <li class="projects__item">
                  <h4 class="projects__title">Icecream</h4>
                  <p class="experiences__company-project-role">
                    Technologies used: <b>HTML, CSS, JS, Parcel</b>
                  </p>
                  <div class="project__wrapper">
                    <img
                      class="projects-image"
                      src="./assets/icecreamShop.jpg"
                      alt="Icecream"
                    />
                    <div>
                      <p class="projects-description">
                        Icecream production company website with responsive
                        layout, burger menu, modal windows, and slider. Role:
                        team member (main task - slider realisation)
                      </p>
                      <a
                        class="project__link"
                        href="https://nastyonasavina.github.io/project-group-27/"
                        target="_blank"
                        >Project Link</a
                      >
                      <a
                        class="project__link"
                        href="https://github.com/NastyonaSavina/project-group-27"
                        target="_blank"
                        >Project Repository</a
                      >
                    </div>
                  </div>
                </li>

                <li class="projects__item">
                  <h4 class="projects__title">Filmoteka</h4>
                  <p class="experiences__company-project-role">
                    Technologies used:
                    <b>HTML, SASS, JS, Parcel, Axios, REST API, Node.js</b>
                  </p>
                  <div class="project__wrapper">
                    <img
                      class="projects-image"
                      src="./assets/filmoteka.jpg"
                      alt="Filmoteka"
                    />
                    <div>
                      <p class="projects-description">
                        The website for films seeking, with the realisation of
                        HTTP requests, a responsive layout, and filters. Role:
                        team lead (main task -website page pagination).
                      </p>
                      <a
                        class="project__link"
                        href="https://sergiiternytskyi.github.io/goit-command-filmoteka/"
                        target="_blank"
                        >Project Link</a
                      >
                      <a
                        class="project__link"
                        href="https://github.com/SergiiTernytskyi/goit-command-filmoteka"
                        target="_blank"
                        >Project Repository</a
                      >
                    </div>
                  </div>
                </li>

                <li class="projects__item">
                  <h4 class="projects__title">Phonebook</h4>
                  <p class="experiences__company-project-role">
                    Technologies used:
                    <b
                      >HTML, ReactJS, WebPack, Axios, REST API, Node.js,
                      Redux</b
                    >
                  </p>
                  <div class="project__wrapper">
                    <img
                      class="projects-image"
                      src="./assets/phonebook.jpg"
                      alt="Phonebook"
                    />
                    <div>
                      <p class="projects-description">
                        The website Phonebook is an easy to use contact manager
                        that gives opportunity for saving and viewing your
                        contacts, so that you never lose your contacts.
                      </p>
                      <a
                        class="project__link"
                        href="https://sergiiternytskyi.github.io/goit-react-hw-08-phonebook/"
                        target="_blank"
                        >Project Link</a
                      >
                      <a
                        class="project__link"
                        href="https://github.com/SergiiTernytskyi/goit-react-hw-08-phonebook"
                        target="_blank"
                        >Project Repository</a
                      >
                    </div>
                  </div>
                </li>

                <li class="projects__item">
                  <h4 class="projects__title">So Yummy (Back-end)</h4>
                  <p class="experiences__company-project-role">
                    Technologies used:
                    <b
                      >Node.js, Express, Mongoose, Joi, Jsonwebtoken, Multer,
                      Yup
                    </b>
                  </p>
                  <div class="project__wrapper">
                    <img
                      class="projects-image"
                      src="./assets/soYummy-back.png"
                      alt="Phonebook"
                    />
                    <div>
                      <p class="projects-description">
                        The back-end part of the app is built using capabilities
                        of Node.js. The API server developed with use of Express
                        (create endpoints and authorization of the app),
                        Cloudinary (save files/avatar), MongoDB (store
                        information about user and all recipes) with library
                        Mongoose. The back-end supports all necessary operations
                        with recipes collection as well as user registration,
                        login and update using JWT. (main task - endpoints
                        /recipes/category-list, /recipes/main-page,
                        /recipes/:category, /recipes/:id.).
                      </p>
                      <a
                        class="project__link"
                        href="https://backend-x5bd.onrender.com/api-docs/"
                        target="_blank"
                        >Project Link</a
                      >
                      <a
                        class="project__link"
                        href="https://github.com/SergioDegas/SoYummyBackend"
                        target="_blank"
                        >Project Repository (Back-end)</a
                      >
                    </div>
                  </div>
                </li>

                <li class="projects__item">
                  <h4 class="projects__title">So Yummy (Front-end)</h4>
                  <p class="experiences__company-project-role">
                    Technologies used:
                    <b
                      >HTML, CSS, React, Redux Toolkit, Axios, Formik, Yup,
                      React hot toast, Styled Components
                    </b>
                  </p>
                  <div class="project__wrapper">
                    <img
                      class="projects-image"
                      src="./assets/soYummy.jpg"
                      alt="Phonebook"
                    />
                    <div>
                      <p class="projects-description">
                        This application saves Your time for finding exact
                        recipe and providing the possibility to learn how to
                        cook and become a Chef (main task - main page, recipes
                        categories page, favourite recipes page).
                      </p>
                      <a
                        class="project__link"
                        href="https://cookbook-so-yummy.netlify.app/"
                        target="_blank"
                        >Project Link</a
                      >
                      <a
                        class="project__link"
                        href="https://github.com/SergioDegas/SoYummy"
                        target="_blank"
                        >Project Repository (Front-end)</a
                      >
                    </div>
                  </div>
                </li>`;
};
