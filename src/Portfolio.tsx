import { FaApple } from "react-icons/fa";
import React, { useEffect, useState, useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Linkedin,
  Mail,
  FileText,
  Github,
} from "lucide-react";

import Images from "./img";

declare module "react" {
  interface StyleHTMLAttributes<T> extends React.HTMLAttributes<T> {
    jsx?: boolean;
    global?: boolean;
  }
}

const Portfolio = () => {
  const projects = [
    {
      name: "Culturist",
      description: `
Culturist is an app designed to enhance your art exhibition experiences by helping you discover nearby coffee shops and bookstores. It offers seamless navigation, detailed venue information, and personalized recommendations to ensure you find the perfect spot to unwind after exploring art. Save your favorite locations, customize searches to suit your preferences, and receive reminders for upcoming exhibitions, making your post-exhibition relaxation both easy and enjoyable.
`,
      skills: ["ARKit", "SceneKit", "MapKit", "Firebase", "EventKit"],
      github: "https://github.com/Phrase0/Culturist",
      appStore: "https://apps.apple.com/tw/app/culturist/id6467009064",
      media: [
        {
          type: "image",
          url: Images.project1.mock1,
        },
        {
          type: "image",
          url: Images.project1.mock2,
        },
        {
          type: "image",
          url: Images.project1.mock3,
        },
        {
          type: "video",
          url: "https://www.youtube.com/embed/gBbpMCp_yWQ?si=4co12o6hN7IDIcuY",
        },
      ],
    },
    {
      name: "STYLiSH",
      description:
        "STYLiSH is a comprehensive e-commerce app designed to elevate your shopping experience. It features a seamless shopping cart, easy checkout, and the ability to add items to your favorites. With third-party login options, you can quickly access your account, while the app's store locator helps you find nearby physical stores. STYLiSH combines convenience and functionality, making your shopping journey smooth and enjoyable.",
      skills: [
        "RESTful APIs",
        "Third-party LogIn",
        "CoreData",
        "TayPay SDK",
        "Singleton",
      ],
      media: [
        {
          type: "image",
          url: Images.project2.mock1,
        },
        {
          type: "image",
          url: Images.project2.mock2,
        },
        {
          type: "image",
          url: Images.project2.mock3,
        },
        {
          type: "video",
          url: "https://www.youtube.com/embed/WxQTK10pUoM?si=mZCbbBIFVg_CoyA0",
        },
      ],
    },
    {
      name: "Clima",
      description:
        "Clima is a weather app that provides accurate and up-to-date climate information, allowing users to quickly check current conditions and forecasts for any location. It features a user-friendly interface with a dark mode option for easy viewing at night, ensuring you have all the weather details you need, day or night.",
      skills: ["JSON Parsing", "Core Location", "MVC"],
      github: "https://github.com/Phrase0/Clima",
      media: [
        {
          type: "image",
          url: Images.project3.mock1,
        },
        {
          type: "video",
          url: "https://www.youtube.com/embed/Nix1U5GECq0?si=U6hEmEmoR0szU4Qq",
        },
      ],
    },
    {
      name: "FlashChat",
      description:
        "FlashChat is a straightforward chat application powered by Firebase on the backend. It enables users to engage in real-time one-on-one conversations with ease, offering a smooth and responsive chat experience. FlashChat is designed for quick and effortless communication, making it perfect for staying connected with friends.",
      skills: ["FirebaseAuth", "Autolayout", "Cocoapod", "CRUD"],
      github: "https://github.com/Phrase0/Flash-Chat",
      media: [
        {
          type: "image",
          url: Images.project4.mock1,
        },
        {
          type: "video",
          url: "https://www.youtube.com/embed/NySMv_c0uuI?si=QUV9NHWRMTkm5NkA",
        },
      ],
    },
  ];

  const [currentMedia, setCurrentMedia] = useState(projects.map(() => 0));
  const [animate, setAnimate] = useState(false);
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    setAnimate(true);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slideUp");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  const nextMedia = (index: number) => {
    setCurrentMedia((prev) => {
      const newMedia = [...prev];
      newMedia[index] = (newMedia[index] + 1) % projects[index].media.length;
      return newMedia;
    });
  };

  const prevMedia = (index: number) => {
    setCurrentMedia((prev) => {
      const newMedia = [...prev];
      newMedia[index] =
        (newMedia[index] - 1 + projects[index].media.length) %
        projects[index].media.length;
      return newMedia;
    });
  };

  return (
    <div
      className={`min-h-screen bg-gray-50 text-gray-800 p-8 flex flex-col items-center ${
        animate ? "animate-fadeIn" : "opacity-0"
      }`}
    >
      <header className="w-full max-w-3xl mb-12 text-left">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div className="md:order-2 md:ml-6 mb-4 md:mb-0">
            <div className="relative w-40 h-40 rounded-full overflow-hidden mx-auto md:mx-0">
              <img
                src={Images.profileImage}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="md:order-1 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold mb-2 text-red-600">
              Peiyun(Iris) Wu
            </h1>
            <p className="text-lg md:text-xl mb-4 text-gray-600">
              iOS Developer | Agile | Creative Thinker
            </p>
            <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3 items-center md:items-start">
              <button
                className="btn bg-gradient-to-r from-red-500 to-orange-500 flex items-center w-full md:w-auto"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/peiyun-iris-wu",
                    "_blank"
                  )
                }
              >
                <Linkedin className="mr-2" size={16} />
                LinkedIn
              </button>
              <button
                className="btn bg-gradient-to-r from-red-500 to-orange-500 flex items-center w-full md:w-auto"
                onClick={() => window.open("mailto:peiyunwu0911@gmail.com")}
              >
                <Mail className="mr-2" size={16} />
                Email
              </button>
              <button
                className="btn bg-gradient-to-r from-red-500 to-orange-500 flex items-center w-full md:w-auto"
                onClick={() => window.open(Images.cv, "_blank")}
              >
                <FileText className="mr-2" size={16} />
                CV
              </button>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <h2 className="text-2xl font-semibold mb-2 text-red-600">About Me</h2>
          <p className="text-base text-gray-600">
            With two years of hands-on iOS development experience, I excel in
            Swift, SwiftUI, and Apple frameworks. I have successfully managed
            the full development lifecycle, delivering robust and user-friendly
            applications. My collaborative approach and skills in performance
            tuning, threading, and on-device storage ensure high-quality
            results. I am detail-oriented, innovative, and eager to contribute
            to impactful software projects.
          </p>
        </div>
      </header>

      <main className="w-full max-w-3xl text-left">
        {projects.map((project, projectIndex) => (
          <section
            key={projectIndex}
            ref={(el) => (sectionsRef.current[projectIndex] = el)}
            className="bg-white rounded-lg shadow-md mb-8 overflow-hidden opacity-0 transition-opacity duration-1000"
          >
            <div className="media-container">
              {project.media && project.media.length > 0 && (
                <>
                  {project.media[currentMedia[projectIndex]].type ===
                  "image" ? (
                    <img
                      src={project.media[currentMedia[projectIndex]].url}
                      alt={`${project.name} screenshot`}
                      className="media-content"
                    />
                  ) : project.media[currentMedia[projectIndex]].type ===
                      "video" &&
                    project.media[currentMedia[projectIndex]].url.includes(
                      "youtube.com"
                    ) ? (
                    <iframe
                      className="media-content"
                      src={project.media[currentMedia[projectIndex]].url}
                      title={`${project.name} YouTube video`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <video
                      className="media-content"
                      controls
                      key={project.media[currentMedia[projectIndex]].url}
                    >
                      <source
                        src={project.media[currentMedia[projectIndex]].url}
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
                  )}
                </>
              )}
              {project.media && project.media.length > 1 && (
                <>
                  <button
                    onClick={() => prevMedia(projectIndex)}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-1 shadow transition-transform hover:scale-110 text-red-500"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={() => nextMedia(projectIndex)}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-1 shadow transition-transform hover:scale-110 text-red-500"
                  >
                    <ChevronRight size={24} />
                  </button>
                  <div className="absolute bottom-8 left-0 w-full flex justify-center">
                    {project.media.map((_, index) => (
                      <div
                        key={index}
                        className={`w-2 h-2 rounded-full cursor-pointer mx-1 ${
                          currentMedia[projectIndex] === index
                            ? "bg-gradient-to-r from-red-500 to-orange-500"
                            : "bg-gray-300"
                        }`}
                        onClick={() =>
                          setCurrentMedia((prev) => {
                            const newMedia = [...prev];
                            newMedia[projectIndex] = index;
                            return newMedia;
                          })
                        }
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
            <div className="p-6 text-lg">
              <h2 className="text-2xl font-semibold mb-2 text-red-600">
                {project.name}
              </h2>
              <p className="mb-4 text-base text-gray-600">
                {project.description}
              </p>
              <div className="flex mb-4 flex-wrap">
                {project.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-600 mr-2 mb-2"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn bg-gradient-to-r from-red-500 to-orange-500"
                  >
                    <Github className="mr-2" size={16} />
                    GitHub
                  </a>
                )}
                {project.appStore && (
                  <a
                    href={project.appStore}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn bg-gradient-to-r from-red-500 to-orange-500 flex items-center"
                  >
                    <FaApple className="mr-2" size={16} />
                    App Store
                  </a>
                )}
              </div>
            </div>
          </section>
        ))}
      </main>

      <footer className="text-center text-base text-gray-500 mt-12">
        <p>&copy; 2024 Peiyun Wu. All rights reserved.</p>
      </footer>

      <style jsx>{`
        .btn {
          display: inline-flex;
          align-items: center;
          padding: 0.5rem 1rem;
          color: white;
          border-radius: 0.375rem;
          font-weight: 500;
          font-size: 0.875rem;
          transition: opacity 0.2s, transform 0.2s;
        }
        .btn:hover {
          opacity: 0.9;
          transform: scale(1.05);
        }
        .media-container {
          width: 100%;
          height: 0;
          padding-bottom: 59.26%; /* 27:16 ratio (16/27 * 100) */
          position: relative;
          overflow: hidden;
          background-color: #000; /* Black background to avoid any visual glitches */
        }

        .media-content {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        @media (max-width: 768px) {
          .btn {
            justify-content: center;
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideUp {
          animation: slideUp 0.8s ease-out forwards;
        }

        .opacity-0 {
          opacity: 0;
        }
        .opacity-100 {
          opacity: 1;
        }
        .translate-x-0 {
          transform: translateX(0);
        }
        .translate-x-\[-50px\] {
          transform: translateX(-50px);
        }
      `}</style>
    </div>
  );
};

export default Portfolio;
