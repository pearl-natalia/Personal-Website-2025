import {
  Mail,
  Github,
  Linkedin,
  Car,
  Divide,
  Cctv,
  BookCopy,
  Shield,
  HandCoins,
} from "lucide-react";
// E! change font here to name
import { Shantell_Sans } from "next/font/google";

const headerFont = Shantell_Sans({ weight: "400", subsets: ["latin"] });

// Data for work experience
const workExperience = [
  // {
  //   logo: "images/amazon-logo.png",
  //   hoverLogo: "images/amazon-logo-hover.png",
  //   title: "software engineer intern",
  //   role: "working on robots",
  //   period: "incoming summer 2026",
  //   company: "Amazon Robotics",
  //   link: "https://www.aboutamazon.com/news/tag/robotics",
  // },
  // {
  //   logo: "images/globe-logo.png",
  //   hoverLogo: "images/globe-logo-hover.png",
  //   title: "machine learning intern",
  //   role: "working on agents for news outlets",
  //   period: "incoming fall 2025",
  //   company: "The Globe & Mail",
  //   link: "https://www.theglobeandmail.com/",
  // },
  {
    Icon: Car,
    title: "machine learning engineer",
    role: "working on perception for a self-driving car design team",
    period: "present",
    company: "WATonomous",
    link: "https://www.watonomous.ca/",
  },
  {
    logo: "images/legacy-logo.png",
    hoverLogo: "images/legacy-logo-hover.png",
    title: "machine learning engineer",
    role: "contracted with a startup to build tools that give clinicians real-time feedback during appointments",
    period: "may 2025",
    company: "Legacy",
    link: "https://www.legacytheapp.com/",
  },
  {
    logo: "images/mimrr-logo.png",
    hoverLogo: "images/mimrr-logo-hover.png",
    title: "machine learning engineer",
    role: "built agents to automate product management tasks",
    period: "2024 - 2025",
    company: "Mimrr",
    link: "https://www.linkedin.com/company/mimrrhq/about/",
  },
  {
    logo: "images/pcc-logo.png",
    hoverLogo: "images/pcc-logo-hover.png",
    title: "software engineer intern",
    role: "optimized EHR infra & worked on distributed database systems to handle millions of patient records",
    period: "winter 2025",
    company: "PointClickCare",
    link: "https://pointclickcare.com/products/",
  },
  {
    logo: "images/generis-logo.png",
    hoverLogo: "images/generis-logo-hover.png",
    title: "web developer intern",
    role: "built websites & automated web-dev processes with ML",
    period: "summer 2024",
    company: "Generis",
    link: "https://generisgp.com/",
  },
];

// Data for projects
const projects = [
  {
    Icon: Divide,
    name: "mathOCR",
    link: "https://github.com/pearl-natalia/MathOCR/blob/main/README.md",
    description:
      "a low-level OCR implementation to calculate handwritten equations via neural networks and image processing",
    tech: "neural networks • computer vision",
  },
  {
    Icon: Cctv,
    name: "siren",
    link: "https://github.com/pearl-natalia/Siren/blob/master/README.md",
    description:
      "an powered dash cam to monitor driving behavior using computer vision and geolocation processing",
    tech: "embedded AI • YOLOv8",
  },
  {
    Icon: BookCopy,
    name: "UI cloner",
    link: "https://github.com/pearl-natalia/component-generation",
    description:
      "an extension to recreate UI components using an image render, DOM HTML/CSS and prompt chaining",
    tech: "prompt chaining • Chrome extension",
  },
  {
    Icon: Shield,
    name: "guardian",
    link: "https://devpost.com/software/group-123",
    description:
      "a multimodal wearable that sends reports to 911 by analyzing live video, audio and location data with CNNs",
    tech: "CNNs • Raspberry Pi",
  },
  {
    Icon: HandCoins,
    name: "spave",
    link: "https://github.com/pearl-natalia/SPAVE/blob/main/README.md",
    description:
      "a Google Play-Store published budgeting app to optimize user savings when shopping",
    tech: "budgeting app • Android development",
  },
  {
    logo: "images/autorithm.png",
    hoverLogo: "images/autorithm-hover.png",
    name: "autorithm",
    link: "https://devpost.com/software/handsfree-y7lsbq",
    description:
      "an EV3 robot to automate food-package assembly via colour and ultrasonic sensors",
    tech: "robotics • sensors",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black font-sans text-base">
      <div className="max-w-4xl mx-auto px-6 pt-8 pb-8 sm:py-20 md:pb-8">
        {/* Header */}
        <header className="mb-15">
          <h1 className={`text-5xl font-light mb-8 ${headerFont.className}`}>
            Pearl Natalia
          </h1>
          <div className="max-w-3xl space-y-4 text-lg text-gray-800">
            <p>building all things ai/ml</p>
            <p>
              currently studying software engineering at{" "}
              <a
                href="https://se-webring.xyz/"
                target="_blank"
                className="mr-1 text-blue-700 hover:underline hover:text-blue-900 transition-colors "
              >
                UWaterloo
              </a>
              {/* , and am studying abroad in Spain at{" "}
              <a
                href="https://en.tecnun.unav.edu/"
                className="mr-1 text-blue-700 hover:underline hover:text-blue-900 transition-colors"
              >
                UNavarra
              </a>
              this Winter */}
            </p>
          </div>

          {/* Contact Links */}
          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href="https://www.linkedin.com/in/pearlnatalia/"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 hover:bg-blue-400 hover:text-white transition-colors text-base ${headerFont.className}`}
            >
              <Linkedin className="w-4 h-4" /> linkedin
            </a>
            <a
              href="https://github.com/pearl-natalia"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 hover:bg-blue-400 hover:text-white transition-colors text-base ${headerFont.className}`}
            >
              <Github className="w-4 h-4" /> github
            </a>
            <a
              href="mailto:pearlnnatalia@gmail.com"
              className={`flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 hover:bg-blue-400 hover:text-white transition-colors text-base ${headerFont.className}`}
            >
              <Mail className="w-4 h-4" /> email
            </a>
          </div>
        </header>

        {/* Work Experience */}
        <section className="mb-15">
          <h2 className={`text-3xl mb-6 font-light ${headerFont.className}`}>
            work
          </h2>
          <div className="space-y-8">
            {workExperience.map((work, idx) => {
              const {
                Icon,
                logo,
                hoverLogo,
                title,
                role,
                company,
                period,
                link,
              } = work;
              return (
                <div
                  key={idx}
                  className="flex flex-col sm:flex-row justify-between items-start group hover:text-blue-700 transition-colors"
                >
                  <div className="flex items-start">
                    {logo ? (
                      <>
                        <img
                          src={logo}
                          alt={company}
                          className="w-6 h-6 object-contain flex-shrink-0 mt-1 mr-4 block group-hover:hidden"
                        />
                        {hoverLogo && (
                          <img
                            src={hoverLogo}
                            alt={`${company} hover`}
                            className="w-6 h-6 object-contain flex-shrink-0 mt-1 mr-4 hidden group-hover:block"
                          />
                        )}
                      </>
                    ) : Icon ? (
                      <Icon className="w-6 h-6 text-gray-500 group-hover:text-blue-700 transition-colors flex-shrink-0 mt-1 mr-4" />
                    ) : null}
                    <div>
                      <h3 className="text-xl font-medium mb-1 group-hover:text-blue-700 transition-colors">
                        {title}
                      </h3>
                      <p className="text-gray-700 group-hover:text-blue-700 mb-1 transition-colors">
                        {role}
                      </p>
                      <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="italic group-hover:text-blue-700 hover:underline transition-colors text-sm"
                      >
                        {company}
                      </a>
                    </div>
                  </div>
                  <span className="text-gray-600 group-hover:text-blue-700 text-sm mt-2 pl-10 sm:mt-1 sm:pl-0 transition-colors">
                    {period}
                  </span>
                </div>
              );
            })}
          </div>
        </section>

        {/* Projects */}
        <section className="mb-15">
          <h2 className={`text-3xl mb-6 font-light ${headerFont.className}`}>
            projects
          </h2>
          <div className="space-y-8">
            {projects.map((proj, idx) => {
              const { Icon, logo, hoverLogo, name, link, description, tech } =
                proj;
              return (
                <div
                  key={idx}
                  className="flex items-start group transition-colors"
                >
                  {logo ? (
                    <>
                      {" "}
                      <img
                        src={logo}
                        alt={name}
                        className="w-6 h-6 object-contain flex-shrink-0 mt-1 mr-4 block group-hover:hidden"
                      />
                      {hoverLogo && (
                        <img
                          src={hoverLogo}
                          alt={`${name} hover`}
                          className="w-6 h-6 object-contain flex-shrink-0 mt-1 mr-4 hidden group-hover:block"
                        />
                      )}
                    </>
                  ) : Icon ? (
                    <Icon className="w-6 h-6 text-gray-500 group-hover:text-blue-700 transition-colors flex-shrink-0 mt-1 mr-4" />
                  ) : null}

                  <div>
                    <h3 className="text-xl font-medium mb-1">
                      <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-900 group-hover:text-blue-700 hover:underline transition-colors"
                      >
                        {name}
                      </a>
                    </h3>
                    <p className="text-gray-700 group-hover:text-blue-700 mb-1 transition-colors">
                      {description}
                    </p>
                    <div className="text-gray-600 group-hover:text-blue-700 font-mono text-xs transition-colors italic">
                      {tech}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Footer */}
        <footer
          className={`pt-8 sm:pt-16 pb-8 sm:pb-16 border-t border-gray-200 text-sm text-gray-600 text-center ${headerFont.className}`}
        >
          <p>i love meeting new people — feel free to reach out :)</p>
        </footer>
      </div>
    </div>
  );
}
