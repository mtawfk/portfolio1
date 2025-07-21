import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

// Splash Screen
const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

// Summary And Greeting Section
const illustration = {
  animated: true
};

const greeting = {
  username: "Mahmoud Tawfik",
  title: "Hi all, I'm Mahmoud",
  subTitle: "Data Scientist | AI Enthusiast | Passionate about building smart systems.",
  resumeLink: "C:\Users\mtawf\portfolio1\src\containers\greeting\resume.pdf",
  display: true
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/mtawfk",
  linkedin: "https://www.linkedin.com/in/mahmoud-tawfik-103643235/",
  gmail: "mtawfek108@gmail.com",
  facebook: "https://www.facebook.com/mahmoud.tawfik.104802",
  display: true
};

// Skills Section
const skillsSection = {
  title: "What I do",
  subTitle: "Build smart systems using AI, ML, DL and data analysis.",
  skills: [
    "⚡ Develop intelligent ML models for classification and prediction",
    "⚡ Use TensorFlow, scikit-learn, pandas, NumPy...",
    "⚡ Work with computer vision and NLP tasks"
  ],
  softwareSkills: [
    { skillName: "Python", fontAwesomeClassname: "logos:python" },
    { skillName: "TensorFlow", fontAwesomeClassname: "logos:tensorflow" },
    { skillName: "scikit-learn", fontAwesomeClassname: "simple-icons:scikitlearn" },
    { skillName: "NumPy", fontAwesomeClassname: "logos:numpy" },
    { skillName: "Pandas", fontAwesomeClassname: "simple-icons:pandas" }
  ],
  display: true
};

// Open Source Section
const openSource = {
  showGithubProfile: true, // boolean, not string
  display: true
};

// Big Projects Section
const bigProjects = {
  projects: [
    {
      id: "1",
      name: "Virtual Keyboard",
      url: "https://github.com/M7mdAhmd/vision-based-virtual-keyboard",
      description: "A virtual keyboard built using Mediapipe and OpenCV."
    },
    {
      id: "2",
      name: "AiForge",
      url: "https://github.com/Loai-Hataba/DEPI-Data-Science-Project",
      description: "A platform to predict different diseases using AI and ML."
    }
  ],
  display: true
};

// Podcast Section
const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",
  podcast: [],
  display: true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  link: "C:\Users\mtawf\portfolio1\src\containers\greeting\resume.pdf",
  display: true
};

// Contact Info
const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "01016934712",
  email_address: "mtawfek108@gmail.com"
};

// Twitter Section
const twitterDetails = {
  userName: "Mahmoud",
  display: true
};

// Work Experience Section
const workExperiences = {
  experiences: [],
  display: false
};

// Achievement Section
const achievementSection = {
  title: "Achievements",
  subtitle: "My certifications and awards",
  achievementsCards: [],
  display: false
};

// Blog Section
const blogSection = {
  title: "Blogs",
  subtitle: "My latest writings",
  blogs: [],
  display: false
};

// Talk Section
const talkSection = {
  title: "Talks",
  subtitle: "My presentations and talks",
  talks: [],
  display: false
};

// Education Section
const educationInfo = {
  schools: [],
  display: false
};

// Tech Stack Section
const techStack = {
  viewSkillBars: false,
  experience: [],
  display: false
};

const isHireable = false;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  openSource,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection,
  workExperiences,
  achievementSection,
  blogSection,
  talkSection,
  educationInfo,
  bigProjects,
  techStack
};
