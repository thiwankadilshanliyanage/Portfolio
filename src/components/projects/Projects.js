import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Optical Shop Inventry Control System"
          des=" SE Application. This controls the stock here. It also helps in choosing lenses for eye
          diseases. Through this, you can get the reports and get the bills related to the disease. And here the
          owner can get every bill to his email at the time of issue
          Technologies - Java, Mysql Database, Jasper Reports (Develop with NetBeans, Mysql work bench &
            TIBCO)
"
          src={projectOne}
        />
        <ProjectsCard
          title="E-Commerce Android application"
          des=" Description - Android Application. This makes it possible to buy products online. It is also possible
          to include products for the cart. Here, there are two parts who buy the product as well as for the
          admins. Admins can add and remove products.
          Technologies - Java(Android), SQLite, Firebase, (Develop with Android Studio)
          "

          src={projectTwo}
        />
        <ProjectsCard
          title="Online Advertisement System Backend"
          des=" Design UI, Node JS & Mysql Backend
          There are two roles.
          Normal User & Seller 
          Technologies - Java Script framework, Express, mysql2 - sequelize, Jsonwebtoken, ENV file handling,
          multer file uploading (Develop with VS code, Mysql work bench, postman, Adobe XD)"
          src={projectThree}
        />
        <ProjectsCard
          title="Queue Management System"
          des=" Node JS, Mysql Backend & React Native Frontend
          There are two roles (Normal Users & Counter Users
          Technologies - Express, mysql2 - sequelize, Jsonwebtoken, i18Next, React-i18Next, Axios, @reactnavigation/native, React-native-vector-icons, Push Notification (Develop with VS code, Postman,
          Android Studio)"
          src={projectThree}
        />
        <ProjectsCard
          title="Video Chat Application"
          des=" This application will allow registered (and signed in) users to initiate video/audio calls to
          other users (can be registered/ not registered, guests) through sending them invite links.
          Technologies- Web application - ReactJs,Backend - NodeJs, Database - MongoDB, Sockets,WebRTC
          Library (Develop with VS code, Postman, Design UI in Adobe XD)"
          src={projectOne}
        />
        <ProjectsCard
          title="Quiz Management System"
          des=" Description - Java Web Application. This application has two roles (Teacher & Students).. Teachers
          can add question peppers & answers under the subjects. After they can put publish or pending
          peppers. Student can answer the questions in given time duration. Finally student can check their
          marks and teachers can who was amend to exam and their marks.
          Technologies - Java, Mysql Database, (Develop with NetBeans, Mysql work bench)"
          src={projectTwo}
        />
      </div>
    </section>
  );
}

export default Projects