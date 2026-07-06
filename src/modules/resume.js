import React, { useRef } from "react";
import "../styles/resumeStyles.css";
import SideBar from "../components/sideBar";
import Education from "../components/education";
import Experience from "../components/experience";
import useAnalyticsEventTracker from "../analytics/AnalyticsEventTracker";
import { useSectionTracker, useScrollDepth } from "../analytics/pageEngagement";

const skillGroups = [
  {
    label: "Backend",
    skills: [".NET Core", "FastAPI", "Python", "ASP.NET", "Entity Framework"],
  },
  {
    label: "AI / RAG",
    skills: [
      "vLLM",
      "HuggingFace",
      "Whisper",
      "Qwen",
      "GLM-OCR",
      "Weaviate",
      "Milvus",
      "NeMo Guardrails",
    ],
  },
  {
    label: "Edge AI",
    skills: ["Jetson Nano", "Jetson Orin Nano", "Jetson Orin NX", "RunPod"],
  },
  {
    label: "Infra",
    skills: ["Docker", "Kubernetes", "Minio", "Redis", "RabbitMQ", "Consul"],
  },
  {
    label: "Database",
    skills: ["PostgreSQL", "SQLAlchemy", "MSSQL"],
  },
  {
    label: "Frontend",
    skills: ["Angular", "React.js", "Flutter", "JavaScript"],
  },
];

function SectionHeading({ children }) {
  return (
    <div className="flex items-center gap-4 mb-6">
      <h2 className="cv-h2 whitespace-nowrap">{children}</h2>
      <div className="cv-divider" />
    </div>
  );
}

function Resume() {
  const gaLink = useAnalyticsEventTracker("Project");

  const scrollRef = useRef(null);
  const introRef = useSectionTracker("Intro");
  const techRef = useSectionTracker("Technologies");
  const eduRef = useSectionTracker("Education");
  const expRef = useSectionTracker("Experience");
  useScrollDepth(() => scrollRef.current);

  return (
    <div className="flex h-full lg:flex-col lg:h-auto">
      <SideBar />
      <div
        ref={scrollRef}
        className="flex-1 min-h-0 overflow-y-auto lg:overflow-visible resume-scroll"
      >
        <div className="mx-auto w-full max-w-[900px] px-[6%] py-[7%] lg:px-6 lg:py-8">
          {/* Header */}
          <div ref={introRef} className="flex items-start justify-between gap-8 mb-12">
            <div className="flex-1">
              <h1 className="cv-name">Erdal NAYİR</h1>
              <p className="cv-role mt-3">Backend Engineer</p>
              <p className="cv-body mt-5 max-w-[36ch]">
                Backend engineer specialized in .NET and Python. I design and
                ship containerized microservices and production AI systems, with
                a strong focus on clean architecture and developer tooling.
              </p>
            </div>
            <img
              className="rounded-2xl object-cover flex-shrink-0 shadow-md w-[clamp(6rem,9vw,11rem)] h-[clamp(6rem,9vw,11rem)] lg:hidden"
              src={require("../assets/images/ProfileImg.jpg")}
              alt="Erdal Nayir"
            />
          </div>

          {/* Technologies */}
          <section ref={techRef} className="mb-12">
            <SectionHeading>Technologies</SectionHeading>
            <div className="space-y-5">
              {skillGroups.map((group) => (
                <div key={group.label}>
                  <p className="cv-label mb-2">{group.label}</p>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span key={skill} className="skill-chip">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section ref={eduRef} className="mb-12">
            <SectionHeading>Education</SectionHeading>
            <Education
              name="Bursa Technical University"
              field="M.Sc. Computer Science"
              gpa={3.64}
              date="Oct 2024 - Present"
              logo={require("../assets/images/btuLogo.jpg")}
            />
            <Education
              name="Bursa Technical University"
              field="B.Sc. Computer Engineering"
              gpa={3.42}
              date="2020 - 2024"
              logo={require("../assets/images/btuLogo.jpg")}
            />
          </section>

          {/* Experience */}
          <section ref={expRef} className="mb-8">
            <SectionHeading>Experience</SectionHeading>
            <Experience
              logo={require("../assets/images/ozdilekLogo.jpg")}
              name="Özdilek Holding"
              role="Backend Developer"
              date="May 2024 - Present"
              bullets={[
                "AI-focused backend services with FastAPI and .NET, deploying models on Jetson Nano / Orin Nano / Orin NX for edge inference.",
                "Built a face-recognition payment service, OCR (GLM-OCR on vLLM), Whisper transcription over RabbitMQ, and a RAG API (Qwen + Weaviate, RunPod GPU, NeMo Guardrails).",
                "Containerized service infrastructure with Docker — Minio, Milvus, Weaviate, Redis, PostgreSQL, RabbitMQ, PyTorch/CUDA environments and OpenSearch for logging.",
                <>
                  Developed explainability for services using xAI methods (LIME,
                  SHAP, etc.) on company data —{" "}
                  <a
                    className="cv-link"
                    href="https://github.com/ErdalNayir/xAI-Methods"
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => gaLink("open_repo", "xAI-Methods")}
                  >
                    xAI-Methods
                  </a>
                  .
                </>,
                "Authored and published a Python/FastAPI helper library (Redis, Consul, RabbitMQ, SQLAlchemy) to the GitHub registry via CI/CD.",
              ]}
            />
            <Experience
              logo={require("../assets/images/ozdilekLogo.jpg")}
              name="Özdilek Holding"
              role="Backend Developer Intern"
              date="Aug 2023 - Jan 2024"
              bullets={[
                "R&D Center — TagSpot project.",
                "Clean Architecture, CQRS, .NET, Fluent Validation, Mediatr and SignalR.",
              ]}
            />
            <Experience
              logo={require("../assets/images/tubitakLogo.png")}
              name="TÜBİTAK"
              role="Scholarship Holder"
              date="Feb 2023 - Dec 2023"
              bullets={[
                "Academic NLP — patent similarity search and academic report summarization.",
              ]}
            />
            <Experience
              logo={require("../assets/images/MoskLogo.jpg")}
              name="MOSK Bilişim"
              role="Frontend Intern"
              date="Jul 2022 - Aug 2022"
              bullets={[
                "Built the frontend of a GIS route-sharing app with React.js and Leaflet.js.",
              ]}
            />
          </section>
        </div>
      </div>
    </div>
  );
}

export default Resume;
