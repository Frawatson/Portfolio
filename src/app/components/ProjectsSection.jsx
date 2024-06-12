"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Amazon Clone",
    description: "Deployed an Amazon clone using Terraform, Jenkins, SonarQube, Docker, Kubernetes, Prometheus, and Grafana.",
    image: "/images/projects/amazonclone.jpg",
    tag: ["All", "CI/CD"],
    gitUrl: "https://github.com/Frawatson/amazonclone.git",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Springboot Microservices",
    description: "Microservices user management application utilizing Springboot, Zipkin, Eureka, Docker, Maven and Mysql.",
    image: "/images/projects/project-3.png",
    tag: ["All", "Springboot Development"],
    gitUrl: "https://github.com/Frawatson/Springboot-Microservices.git",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Springboot Employee Management Application",
    description: "Continuous Integration and Continuous Deployment project utilizing Jenkins, SonarQube, Nexus, Docker, Kubernetes, prometheus, and Grafana.",
    image: "/images/projects/userdashboard.png",
    tag: ["All", "CI/CD"],
    gitUrl: "https://github.com/Frawatson/employeemanagement.git",
    previewUrl: "/",
    
  },
  {
    id: 4,
    title: "Voting Application",
    description: "Microservice project for voting application utilizing Azure Pipeline, AKS, Docker, Kubernetes, Redis, Postgres, Github Actions, Grafana, and Prometheus.",
    image: "/images/projects/voting_app.png",
    tag: ["All", "CI/CD"],
    gitUrl: "https://github.com/Frawatson/example-voting-app.git",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Movie Trailer App",
    description: "Fullstack project for movie trailer application utilizing React, Node.js, and MongoDB Atlas.",
    image: "/images/projects/project-1.png",
    tag: ["All", "Springboot Development"],
    gitUrl: "https://github.com/Frawatson/Movie-Trailer-app.git",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Todo List Application",
    description: "Todo List Application Deployed on AWS using Terraform, Jenkins, SonarQube, Docker, Kubernetes, Prometheus, and Grafana.",
    image: "/images/projects/Screenshot.png",
    tag: ["All", "CI/CD"],
    gitUrl: "https://github.com/Frawatson/Todo-list.git",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="CI/CD"
          isSelected={tag === "CI/CD"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Springboot Development"
          isSelected={tag === "Springboot Development"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
