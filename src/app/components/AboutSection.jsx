"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Java</li>
        <li>Kubernetes</li>
        <li>Terraform</li>
        <li>Docker</li>
        <li>Jenkins</li>
        <li>Github Actions</li>
        <li>AWS</li>
        <li>Azure</li>
        <li>Linux</li>
        <li>SQL</li>
        <li>MongoDB</li>
        <li>Git</li>
        <li>Promethues</li>
        <li>Ansible</li> 
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>BSc, Computer Science</li>
        <h2>Southwestern College, Kansas</h2>
        <li>AA. Justice & Security Studies (Cyber Security)</li>
        <h2>Valley Forge Military College, Pennsylvania</h2>
      </ul>
    ),
    
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>AWS Solution Architect</li>
        <li>AWS Developer Associate</li>
        <li>AWS Cloud Practitioner</li>
        <li>Azure 900</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/Architecture.jpg" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          I am an IT professional with a dual focus on application support and DevOps engineering. 
          In my role as an <i><b>Application Support Engineer</b></i>, I am dedicated to ensuring seamless operations and system reliability by providing expert technical middleware support, managing incidents, and performing thorough root cause analysis.
          As a <i><b>DevOps Engineer</b></i>, I specialize in crafting Infrastructure-as-Code (IaC) using Terraform, optimizing build pipelines with Jenkins, Docker, and Kubernetes, and implementing robust monitoring solutions with Prometheus and Grafana. 
          My expertise enables efficient, scalable, and reliable application deployment within AWS-managed environments.
          I am passionate about leveraging technology to drive business success and operational excellence. With a commitment to continuous improvement and a proactive approach to problem-solving, I strive to deliver high-quality solutions that meet the evolving needs of any organization. Let's connect and explore how my skills and experience can contribute to your team's success.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
