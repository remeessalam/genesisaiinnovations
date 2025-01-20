import logoImg from "./assets/images/logo/logo.png";
import whyChooseUsIcon1 from "./assets/images/ph_target-light.png";
import whyChooseUsIcon2 from "./assets/images/mage_light-bulb.png";
import whyChooseUsIcon3 from "./assets/images/tdesign_user-talk.png";
import whyChooseUsIcon4 from "./assets/images/healthicons_ui-secure-outline.png";
import whyChooseUsPng from "./assets/images/whychooseus-png.png";
import faqPng from "./assets/images/faq-character.png";
import appDevBanner from "./assets/images/app-dev-banner.jpg";
import webDevBanner from "./assets/images/web-landing-banner.jpg";
import webLandingAbout from "./assets/images/web-landing-about1.jpg";
import appLandingAbout from "./assets/images/app-landing-about.jpg";
import endlessOpportunitiesImg1 from "./assets/images/section-8-img-1.png";
import endlessOpportunitiesImg2 from "./assets/images/section-8-img-2.png";
import endlessOpportunitiesImg3 from "./assets/images/section-8-img-3.png";
import homeBannerVideo from "./assets/videos/home-banner.mp4";
import defaultBanner from "./assets/images/banner.jpg";
import aboutUsBanner from "./assets/images/aboutusbanner.jpg";
import contactusbanner from "./assets/images/contactusbanner1.jpg";
import aboutUsGridImg1 from "./assets/images/aboutus-png1.png";
import aboutUsGridImg2 from "./assets/images/aboutus-png2.png";
import aboutUsGridImg3 from "./assets/images/aboutus-png3.png";
import aboutUsGridImg4 from "./assets/images/aboutus-png4.png";
import aboutUsGridImg5 from "./assets/images/aboutus-png5.png";
import profileImg1 from "./assets/images/profileimg-1.jpg";
import profileImg2 from "./assets/images/profileimg-2.jpg";
import serviceswebdevelopment from "./assets/images/services/serviceswebdevelopment.jpg";
import serviceaidevelopment from "./assets/images/services/serviceaidevelopment.jpg";
import chatbotdevelopment from "./assets/images/services/chatbotdevelopment.jpg";
import datadevelopment from "./assets/images/services/datadevelopment.jpg";
import gamedevelopment from "./assets/images/services/gamedevelopment.jpg";
import blockchaindevelopment from "./assets/images/services/blockchaindevelopment.jpg";
import machinelearning from "./assets/images/services/machinelearning.jpg";
import clouddevelopment from "./assets/images/services/clouddevelopment.jpg";
import rpa from "./assets/images/services/rpa.jpg";
import aboutone from "./assets/images/aboutone.jpg";
import abouttwo from "./assets/images/abouttwo.jpg";
import aboutthree from "./assets/images/aboutthree.jpg";
import aboutfour from "./assets/images/aboutfour.jpg";
import aboutfive from "./assets/images/aboutfive.jpg";
import aboutusintroone from "./assets/images/aboutusintroone.jpg";
import aboutusintrotwo from "./assets/images/aboutusintrotwo.jpg";
import allbgimage from "./assets/images/allbgimage.jpg";
import { lazy } from "react";
import { BiBrain, BiBulb, BiRocket } from "react-icons/bi";
import { GoFileMedia, GoGraph } from "react-icons/go";
import { SlBadge } from "react-icons/sl";
import {
  MdOutlineAnalytics,
  MdOutlineDashboardCustomize,
  MdOutlineDeveloperMode,
  MdOutlineWeb,
  MdPermMedia,
} from "react-icons/md";
import {
  GiArtificialIntelligence,
  GiGamepad,
  GiRobotLeg,
  GiVendingMachine,
} from "react-icons/gi";
import { HiChatBubbleBottomCenterText } from "react-icons/hi2";
import { BsFillClipboard2DataFill } from "react-icons/bs";
import {
  FaAppStoreIos,
  FaDatabase,
  FaGamepad,
  FaMobileAlt,
  FaNetworkWired,
} from "react-icons/fa";
import {
  SiFlutter,
  SiHiveBlockchain,
  SiJenkins,
  SiNumpy,
  SiTensorflow,
} from "react-icons/si";
import { IoLogoAndroid, IoMdCloudDone } from "react-icons/io";
import { CgWebsite } from "react-icons/cg";
import { TfiLayoutMediaRightAlt } from "react-icons/tfi";
import {
  RiChatSmile3Line,
  RiCustomSize,
  RiShieldUserLine,
  RiVirusLine,
} from "react-icons/ri";
import { TbAugmentedReality, TbDeviceMobileCode } from "react-icons/tb";
import { AiOutlineCode, AiOutlineDatabase } from "react-icons/ai";

//services react icon import {

const Home = lazy(() => import("./pages/website/Home"));
const Services = lazy(() => import("./pages/website/Services"));
const ContactUs = lazy(() => import("./pages/website/ContactUs"));
const AboutUs = lazy(() => import("./pages/website/AboutUs"));

export {
  logoImg,
  whyChooseUsPng,
  whyChooseUsIcon1,
  whyChooseUsIcon2,
  whyChooseUsIcon3,
  whyChooseUsIcon4,
  faqPng,
  appDevBanner,
  webDevBanner,
  webLandingAbout,
  appLandingAbout,
  endlessOpportunitiesImg1,
  endlessOpportunitiesImg2,
  endlessOpportunitiesImg3,
  homeBannerVideo,
  defaultBanner,
  aboutUsBanner,
  aboutUsGridImg1,
  aboutUsGridImg2,
  aboutUsGridImg3,
  aboutUsGridImg4,
  aboutUsGridImg5,
  serviceswebdevelopment,
  serviceaidevelopment,
  chatbotdevelopment,
  datadevelopment,
  gamedevelopment,
  blockchaindevelopment,
  machinelearning,
  clouddevelopment,
  rpa,
  contactusbanner,
  aboutusintroone,
  aboutusintrotwo,
  allbgimage,
};

// company details
export const companyDetails = {
  phone: "+91-9000000",
  whatsapp: "+91-900000",
  whatsappbox: "90000000",
  email: "abc@xya.com",
  address: "[your company address]",
};

// website routes
export const routes = [
  {
    name: "Home",
    path: "/",
    component: <Home />,
  },
  {
    name: "Services",
    path: "/services",
    component: <Services />,
  },
  {
    name: "About Us",
    path: "/about-us",
    component: <AboutUs />,
  },
  {
    name: "Contact Us",
    path: "/contact-us",
    component: <ContactUs />,
  },
];

export const faqs = [
  {
    id: 1,
    question: "How do I get started?",
    answer:
      "Simply schedule a free consultation with us to discuss your idea. We will outline how we can help turn your vision into a successful AI company.",
  },
  {
    id: 2,
    question: "Do I need technical knowledge to start an AI company?",
    answer:
      "No, you don’t need technical expertise. Our team of AI experts will handle the technical aspects while you focus on the business vision and strategy.",
  },
  {
    id: 3,
    question: "How long does it take to launch an AI product?",
    answer:
      "The timeline varies, but typically it takes 3 to 6 months to develop a Minimum Viable Product (MVP) and begin the launch process.",
  },
  {
    id: 4,
    question: "How do I know if my AI idea is feasible?",
    answer:
      "We offer an initial consultation to evaluate your idea’s feasibility, its market potential, and provide feedback on how to refine it for success.",
  },
  {
    id: 5,
    question: "What kind of AI solutions do you offer?",
    answer:
      "We provide a wide range of AI solutions, including predictive analytics, natural language processing, computer vision, and custom AI model development tailored to your business needs.",
  },
];

// web development services
export const webDevelopmentServices = [
  {
    id: 1,
    title: "E-commerce Websites",
    icon: require("./assets/images/icons/online-shopping.png"),
    img: <CgWebsite />,
    description:
      "Empowering online businesses with tailored e-commerce solutions powered by AI. Our platforms enhance customer engagement, streamline operations, and drive substantial revenue growth through personalized shopping experiences and intelligent recommendations.",
  },
  {
    id: 2,
    title: "Social Media Websites",
    img: <GoFileMedia />,
    icon: require("./assets/images/icons/socialmedia.png"),
    description:
      "Creating custom social media websites that captivate audiences with AI-driven content recommendations and engagement strategies, building brand loyalty and driving growth effortlessly.",
  },
  {
    id: 3,
    title: "Landing Websites",
    img: <TfiLayoutMediaRightAlt />,
    icon: require("./assets/images/icons/landing-page.png"),
    description:
      "Crafting high-converting landing pages with AI-enhanced design and user behavior tracking to grab attention and inspire action. Designs that showcase your brand’s message and maximize conversions through personalized experiences.",
  },
  {
    id: 4,
    title: "Custom Websites",
    img: <MdOutlineDashboardCustomize />,
    icon: require("./assets/images/icons/software-development.png"),
    description:
      "Delivering bespoke websites powered by AI to meet your unique business needs. Our solutions seamlessly combine creativity, functionality, and AI-driven features for an exceptional online presence.",
  },
];

// app development services
export const appDevelopmentServices = [
  {
    id: 1,
    title: "iOS App Development",
    img: <FaAppStoreIos />,
    icon: require("./assets/images/icons/ios-development.png"),
    description:
      "Specializing in iOS app development using Swift and Objective-C. Delivering apps optimized for performance, speed, and responsiveness with AI-powered features like predictive analytics and personalized user experiences.",
  },
  {
    id: 2,
    title: "Android App Development",
    img: <IoLogoAndroid />,
    icon: require("./assets/images/icons/android-development.png"),
    description:
      "Designing and developing Android apps tailored to your business goals. Leveraging Java and Kotlin alongside AI technologies to create robust, efficient applications with intelligent automation and enhanced user engagement.",
  },
  {
    id: 3,
    title: "Flutter App Development",
    img: <SiFlutter />,

    icon: require("./assets/images/icons/flutter-development.png"),
    description:
      "Using Flutter to create apps for both iOS and Android with a single codebase. Integrating AI-driven solutions to overcome challenges, enhance performance, and deliver smarter, feature-rich applications.",
  },
  {
    id: 4,
    title: "Hybrid App Development",
    img: <TbDeviceMobileCode />,
    icon: require("./assets/images/icons/hybrid-app-development.png"),
    description:
      "Developing feature-rich hybrid apps tailored to your business needs. Incorporating AI-powered tools to create mobile-friendly apps that work seamlessly across iOS and Android platforms while delivering intelligent insights and improved functionality.",
  },
];

// all services
// export const allServices = [
//   {
//     id: 1,
//     img: <MdOutlineDeveloperMode className="w-6 h-6" />,
//     link: "/services/web-app-development",
//     title: "Mobile and Web Development",
//     desc: "Build a strong digital presence with custom mobile apps and websites that are designed with your audience in mind. Our team creates sleek, responsive, and engaging digital solutions powered by AI to enhance user experiences and drive personalized interactions.",
//     detailContent:
//       "We design and build mobile apps and websites that elevate your brand’s digital presence. From sleek designs to smooth user experiences, our team develops AI-powered solutions that not only look great but also engage and retain your audience. Whether it’s a user-friendly app or a responsive website, we’ve got you covered. We focus on scalability, performance optimization, and seamless integration with your existing systems. Our approach begins with a deep understanding of your goals and audience to create a product that aligns with your vision. Using modern frameworks and AI, we ensure your app or website is future-ready, secure, and adaptable to evolving user needs. Our development process is transparent and collaborative, allowing you to stay involved at every stage. From concept and wireframing to design, coding, testing, and launch, we handle all aspects of development with a commitment to excellence. Additionally, we offer ongoing support and maintenance to keep your digital presence fresh, relevant, and optimized for performance. Our ultimate aim is to deliver solutions that not only meet your current needs but also provide a strong foundation for growth and success in the competitive digital landscape. With an emphasis on AI, performance, and aesthetics, we strive to deliver apps and websites that captivate users, foster engagement, and drive measurable results.",
//   },
//   {
//     id: 2,
//     img: <GiArtificialIntelligence className="w-6 h-6" />,
//     link: "/services/ai-development",
//     title: "Artificial Intelligence Development",
//     desc: "Stay future-ready with our advanced AI solutions. From predictive analytics to machine learning models, we help you make smarter decisions, streamline operations, and boost productivity through intelligent AI-powered automation.",
//     detailContent:
//       "Our AI services help you make smarter decisions and automate processes that boost productivity. From intelligent data analysis to custom machine learning algorithms, we build AI solutions that enhance efficiency and uncover new growth opportunities. We specialize in natural language processing, image recognition, predictive modeling, and AI-driven automation. Our team focuses on understanding your unique challenges and tailoring AI solutions that drive meaningful results. With AI, you can identify patterns in large datasets, forecast trends, and personalize customer experiences like never before. Our solutions seamlessly integrate AI into your existing infrastructure, ensuring a smooth transition and minimal disruption to your operations. We use cutting-edge AI tools and technologies to build systems that are robust, secure, and scalable. Whether you are looking to implement AI chatbots, recommendation engines, fraud detection systems, or predictive analytics, our AI expertise ensures your business stays ahead of the curve. By integrating AI into your processes, we help you reduce costs, enhance customer satisfaction, and drive innovation in ways that were previously unimaginable. With a focus on transparency and collaboration, we ensure you understand and harness the full potential of AI for sustainable growth and competitive advantage.",
//   },
//   {
//     id: 3,
//     img: <HiChatBubbleBottomCenterText className="w-6 h-6" />,
//     link: "/services/chatbot-development",
//     title: "Chatbot Development",
//     desc: "Deliver efficient, around-the-clock customer service with AI-powered custom-built chatbots that handle inquiries, support users, and enhance the customer journey. Our bots are tailored to align with your brand’s voice and offer a seamless user experience.",
//     detailContent:
//       "Keep your customers engaged and supported with custom AI-powered chatbots that streamline communication. Our chatbots are designed to answer common questions, improve customer satisfaction, and provide real-time assistance 24/7, enhancing your service without added effort. From rule-based bots to advanced AI-driven conversational agents, we ensure your chatbot is equipped to handle diverse scenarios. Our development process involves understanding your business needs and crafting a chatbot that aligns with your brand’s tone and personality. We incorporate natural language processing (NLP) and AI to make interactions more human-like and intuitive. Our chatbots are capable of integrating with various platforms, including websites, social media, and messaging apps, to provide a seamless user experience. We also focus on scalability, ensuring your chatbot can handle increasing traffic as your business grows. Our post-launch support includes monitoring and updates to keep your chatbot performing optimally. By reducing response times and improving user engagement, our AI-powered chatbot solutions not only enhance customer satisfaction but also free up your team to focus on more complex tasks, ultimately driving efficiency and value for your organization.",
//   },
//   {
//     id: 4,
//     img: <BsFillClipboard2DataFill className="w-6 h-6" />,
//     link: "/services/data-analytics",
//     title: "Data Analytics and Business Intelligence",
//     desc: "Unlock actionable insights with AI-driven data analytics solutions. Our data analytics services provide a clearer picture of your business performance, helping you make informed, strategic decisions that fuel growth through intelligent data processing.",
//     detailContent:
//       "We turn data into insights that drive results with the power of AI. Our data analytics and BI services empower you to make informed, data-driven decisions. We help you visualize key metrics, understand trends, and gain actionable intelligence that aligns with your business strategy. Using cutting-edge AI tools and methodologies, we identify patterns, detect anomalies, and provide AI-based recommendations for optimizing performance. Our solutions are tailored to meet your unique business needs, ensuring you gain a competitive edge in your industry. From real-time AI-powered dashboards to predictive analytics, we help you stay ahead of market trends and customer demands. By integrating advanced AI-driven data processing technologies, we enable you to harness the full potential of your data while ensuring security and compliance. Whether you’re looking to improve operational efficiency, enhance customer experiences, or explore new growth opportunities, our AI-powered data analytics services provide the clarity and confidence you need to take your business to the next level.",
//   },
//   {
//     id: 5,
//     img: <FaGamepad className="w-6 h-6" />,
//     link: "/services/game-development",
//     title: "Game Development",
//     desc: "Bring your gaming ideas to life with immersive, AI-enhanced experiences that captivate players. From concept to final launch, we handle every step to create high-quality games powered by AI that resonate with audiences across platforms.",
//     detailContent:
//       "Our game development team transforms ideas into engaging AI-enhanced experiences that captivate players. From character design to immersive storylines and detailed gameplay mechanics, we bring each element to life, creating games that resonate with audiences across platforms. We specialize in mobile, console, and PC game development, ensuring each product is optimized for performance and player satisfaction. Our end-to-end services include concept design, AI-driven prototyping, testing, and post-launch support, ensuring your game exceeds expectations at every stage. We use advanced AI technologies and frameworks to deliver high-quality graphics, smooth performance, and engaging gameplay. Our team focuses on understanding your vision and audience, tailoring each game to meet your goals. Whether it’s a casual mobile game or an expansive multiplayer experience, we bring creativity and technical expertise to every project. With AI, we also incorporate intelligent behavior in NPCs, adaptive difficulty levels, and player-tailored experiences. We also provide marketing support and monetization strategies to maximize your game’s reach and profitability. Let us take your gaming vision to the next level with our comprehensive AI-powered development solutions.",
//   },
//   {
//     id: 6,
//     img: <SiHiveBlockchain className="w-6 h-6" />,
//     link: "/services/blockchain-development",
//     title: "Blockchain Development",
//     desc: "Leverage the power of AI and blockchain to build secure, transparent, and decentralized systems. From cryptocurrency solutions to smart contracts, we deliver innovative AI-powered blockchain applications tailored to your business.",
//     detailContent:
//       "Blockchain technology is revolutionizing industries, and we’re here to help you harness its potential with AI integration. Our blockchain development services empower your business with secure, transparent, and decentralized systems that drive trust and efficiency. Whether you need a cryptocurrency solution, a smart contract platform, or a decentralized app (dApp), we provide end-to-end AI-powered blockchain development tailored to your goals. We specialize in various blockchain frameworks, including Ethereum, Hyperledger, and Binance Smart Chain, ensuring the right solution for your needs. Our process begins with understanding your requirements and designing an AI-integrated system architecture that aligns with your business objectives. We then implement scalable, secure, and efficient solutions with a strong emphasis on performance and reliability. From digital wallets and token development to supply chain solutions and DeFi platforms, we cover a wide range of blockchain use cases. Our team ensures seamless integration of blockchain and AI technologies with your existing systems, minimizing disruption while maximizing value.",
//   },
//   {
//     id: 7,
//     img: <GiVendingMachine className="w-6 h-6" />,
//     link: "/services/machine-learning",
//     title: "Machine Learning",
//     desc: "Turn your data into actionable intelligence with custom machine learning models powered by AI. From predictive analytics to recommendation engines, we build solutions that learn and adapt to drive meaningful outcomes.",
//     detailContent:
//       "Machine learning (ML) powered by AI is a transformative technology that enables businesses to derive actionable insights and make smarter decisions. Our ML solutions are tailored to your unique needs, helping you unlock the potential of your data. We specialize in building custom algorithms for predictive analytics, recommendation engines, anomaly detection, and more. Our team uses advanced AI frameworks and tools like TensorFlow, PyTorch, and Scikit-learn to create models that learn and adapt as they process more data. Whether it’s analyzing customer behavior, optimizing supply chains, or automating complex processes, our AI-powered ML solutions drive efficiency and innovation. We start by understanding your business challenges and defining clear objectives for the ML project. Our team then cleanses and preprocesses your data, develops tailored AI-driven models, and integrates the solution seamlessly into your existing workflows.",
//   },
//   {
//     id: 8,
//     img: <IoMdCloudDone className="w-6 h-6" />,
//     link: "/services/cloud-computing",
//     title: "Cloud Computing",
//     desc: "Scale your infrastructure seamlessly with AI-enhanced cloud computing solutions. We build secure, scalable, and flexible cloud systems that help your business grow without worrying about limitations.",
//     detailContent:
//       "Cloud computing provides businesses with flexible, scalable infrastructure, and by integrating AI, we enhance these capabilities even further. We help you migrate to the cloud or optimize your existing cloud systems with AI-powered tools that increase efficiency, reduce costs, and improve scalability. Whether you’re looking for cloud storage, compute resources, or AI-driven automation, our cloud solutions are designed to meet your unique needs. Our team specializes in platforms like AWS, Google Cloud, and Microsoft Azure, leveraging the power of AI to enhance security, monitoring, and performance optimization. With AI, we can build systems that automatically adjust to changing demand, provide predictive insights for better decision-making, and enhance the overall efficiency of your cloud-based operations.",
//   },
//   {
//     id: 9,
//     img: <GiRobotLeg className="w-6 h-6" />,
//     link: "/services/rpa",
//     title: "Robotic Process Automation (RPA)",
//     desc: "Streamline repetitive tasks with AI-powered RPA solutions that increase efficiency, reduce errors, and free up your team for strategic initiatives. Automate workflows and processes to enhance productivity across your organization with intelligent automation.",
//     detailContent:
//       "Robotic Process Automation (RPA), powered by AI, is revolutionizing how businesses handle repetitive tasks by automating workflows to enhance efficiency and accuracy. Our AI-integrated RPA solutions free up your team to focus on higher-value tasks, allowing your organization to achieve greater productivity and operational excellence. We specialize in designing, developing, and deploying AI-driven RPA solutions tailored to your unique business processes. Using advanced tools like UiPath, Automation Anywhere, and Blue Prism, we create intelligent bots capable of handling tasks such as data entry, invoice processing, customer support, and more, with an added layer of AI to optimize decision-making. Our process begins by identifying areas where AI-driven automation can deliver the most value. We then design RPA workflows that integrate seamlessly with your existing systems and applications, ensuring minimal disruption and maximizing impact. Our AI-powered bots are designed to operate with precision, consistency, and speed, reducing errors and operational costs while learning from every task to continuously improve performance. We also provide ongoing support to monitor and refine the automation, ensuring it continues to deliver optimal results as your business evolves. By adopting AI-enhanced RPA, your business can achieve faster turnaround times, improved accuracy, cost savings, and smarter decision-making, all while maintaining high levels of service quality. RPA is not just a tool; it’s a strategic solution for transforming the way you work and unlocking new levels of efficiency, growth, and intelligence.",
//   },
// ];

export const allServices = [
  {
    id: 1,
    img: <MdOutlineDeveloperMode className="w-6 h-6" />,
    link: "/services/custom-software-development",
    title: "Custom Software Development",
    desc: "Build bespoke software solutions tailored to your unique business needs. Our custom software development services ensure seamless integration and high performance.",
    detailContent:
      "Our custom software development services are designed to address your specific business challenges. Whether you need a new system to streamline operations, a custom CRM, ERP software, or an enterprise-grade solution, we leverage the latest technologies to deliver scalable, secure, and high-performance applications. We work closely with you throughout the development lifecycle to ensure the final product aligns perfectly with your goals. Additionally, our expertise extends to integrating existing systems, modernizing legacy applications, and providing ongoing support to keep your business ahead of the competition.",
  },
  {
    id: 2,
    img: <FaMobileAlt className="w-6 h-6" />,
    link: "/services/mobile-app-development",
    title: "Mobile App Development",
    desc: "Create user-friendly mobile applications for iOS and Android platforms with a focus on performance and user engagement.",
    detailContent:
      "Our mobile app development services provide end-to-end solutions for building cutting-edge mobile applications. Whether it's native development for iOS or Android or cross-platform apps using frameworks like Flutter or React Native, we focus on delivering apps that are fast, intuitive, and engaging. We prioritize security, seamless performance, and scalability. Our team also specializes in incorporating advanced features like geolocation, real-time messaging, AI-driven functionality, and payment gateway integrations to ensure your app meets all user expectations and business requirements.",
  },
  {
    id: 3,
    img: <MdOutlineWeb className="w-6 h-6" />,
    link: "/services/web-development",
    title: "Web Development (Full Stack)",
    desc: "Develop full-stack web applications with modern frameworks and technologies that deliver a smooth user experience.",
    detailContent:
      "Our full-stack web development services cover everything from front-end design to back-end infrastructure. We build responsive, mobile-friendly websites and web apps that leverage modern frameworks like React, Angular, Vue.js, and Node.js. Our team ensures optimal performance, SEO compatibility, and seamless integration with third-party APIs or systems. We also provide custom CMS development and e-commerce solutions, as well as real-time features like chat functionalities and live dashboards. With our commitment to quality and attention to detail, we ensure your web application aligns with your business objectives and stands out in a competitive market.",
  },
  {
    id: 4,
    img: <IoMdCloudDone className="w-6 h-6" />,
    link: "/services/cloud-computing",
    title: "Cloud Computing Services",
    desc: "Scale and optimize your infrastructure with secure and flexible cloud computing solutions tailored to your business.",
    detailContent:
      "Our cloud computing services help businesses transition to the cloud with ease. From designing cloud-native applications to migrating existing infrastructure, we work with leading platforms like AWS, Azure, and Google Cloud to deliver reliable, scalable, and cost-effective solutions. Services include cloud architecture design, containerization using Docker and Kubernetes, serverless computing, and ongoing cloud optimization. We also offer disaster recovery planning, ensuring your business remains operational even in the face of unexpected challenges. With a focus on security, scalability, and performance, we tailor our solutions to meet your specific requirements.",
  },
  {
    id: 5,
    img: <GiArtificialIntelligence className="w-6 h-6" />,
    link: "/services/ai-development",
    title: "Artificial Intelligence Development",
    desc: "Integrate AI-driven solutions for smarter decision-making, predictive analytics, and intelligent automation.",
    detailContent:
      "Our AI development services empower businesses to harness the full potential of artificial intelligence. From creating intelligent chatbots and recommendation systems to implementing advanced AI models for predictive analytics, we ensure your business gains a competitive edge. We specialize in natural language processing (NLP), computer vision, and machine learning frameworks like TensorFlow and PyTorch. Whether you need AI for customer service, operational optimization, or data insights, we deliver custom solutions that are scalable and future-ready.",
  },
  {
    id: 6,
    img: <SiTensorflow className="w-6 h-6" />,
    link: "/services/machine-learning-solutions",
    title: "Machine Learning Solutions",
    desc: "Harness the power of machine learning to uncover insights, build predictive models, and optimize business processes.",
    detailContent:
      "Our machine learning solutions focus on leveraging data to solve complex problems and drive innovation. Services include developing predictive models, fraud detection systems, personalized recommendation engines, and image or speech recognition tools. We use cutting-edge algorithms and tools such as Python, TensorFlow, and Scikit-learn to develop scalable and efficient solutions. Our expertise extends to supervised, unsupervised, and reinforcement learning to cater to diverse industries like healthcare, finance, retail, and manufacturing.",
  },
  {
    id: 7,
    img: <AiOutlineCode className="w-6 h-6" />,
    link: "/services/user-experience-design",
    title: "User Experience (UX) Design",
    desc: "Enhance user engagement with intuitive and visually stunning UX designs tailored to your audience.",
    detailContent:
      "We provide user experience (UX) design services focused on creating intuitive, visually appealing, and engaging digital experiences. Our process includes user research, wireframing, prototyping, and usability testing to ensure the final design meets user needs. We combine creativity with a data-driven approach to craft designs that not only look great but also improve user engagement, retention, and satisfaction. Whether for websites, mobile apps, or software interfaces, our UX designs ensure seamless interaction and accessibility.",
  },
  {
    id: 8,
    img: <FaNetworkWired className="w-6 h-6" />,
    link: "/services/iot-development",
    title: "Internet of Things (IoT) Development",
    desc: "Develop smart IoT solutions that connect devices and streamline operations with real-time data insights.",
    detailContent:
      "Our IoT development services help businesses create smart ecosystems that connect devices, systems, and people. We specialize in IoT hardware integration, firmware development, and building scalable IoT platforms with robust data analytics. Applications include smart homes, industrial automation, wearable tech, and asset tracking. With a focus on security and reliability, we ensure your IoT solutions operate efficiently and deliver actionable insights in real-time.",
  },
  {
    id: 9,
    img: <AiOutlineDatabase className="w-6 h-6" />,
    link: "/services/data-science",
    title: "Data Science Services",
    desc: "Leverage data science to extract insights, make data-driven decisions, and stay ahead in a competitive market.",
    detailContent:
      "Our data science services are designed to transform raw data into valuable insights. We use advanced analytics, machine learning, and visualization techniques to uncover patterns, trends, and actionable intelligence. Services include data cleaning, exploratory analysis, predictive modeling, and interactive dashboards. We also assist in implementing end-to-end data pipelines for continuous analysis and reporting. Whether you're looking to improve decision-making, optimize operations, or understand customer behavior, our data science solutions deliver measurable results.",
  },
  {
    id: 10,
    img: <RiChatSmile3Line className="w-6 h-6" />,
    link: "/services/chatbot-development",
    title: "Chatbot Development",
    desc: "Automate customer interactions with intelligent, AI-powered chatbots for a seamless user experience.",
    detailContent:
      "Our chatbot development services help businesses automate customer interactions and enhance engagement. We build chatbots for multiple platforms, including websites, mobile apps, and messaging services like WhatsApp, Facebook Messenger, and Slack. Powered by advanced natural language processing (NLP) and AI technologies, our chatbots handle customer queries, process transactions, and provide personalized recommendations. Whether you need a simple rule-based bot or a sophisticated conversational AI, we design and develop solutions that improve customer satisfaction and reduce response times.",
  },
  {
    id: 11,
    img: <SiJenkins className="w-6 h-6" />,
    link: "/services/devops-services",
    title: "DevOps Services",
    desc: "Streamline your software development process with efficient DevOps strategies and tools.",
    detailContent:
      "Our DevOps services focus on accelerating your software delivery lifecycle by bridging the gap between development and operations. We implement CI/CD pipelines, automate testing and deployments, and optimize infrastructure using tools like Jenkins, Docker, Kubernetes, and Ansible. Our team ensures your systems are scalable, resilient, and secure, helping you deliver updates and new features faster. Whether you're adopting DevOps for the first time or optimizing your existing processes, our solutions enhance efficiency, collaboration, and reliability.",
  },
  {
    id: 12,
    img: <MdOutlineAnalytics className="w-6 h-6" />,
    link: "/services/data-analytics-bi",
    title: "Data Analytics and Business Intelligence",
    desc: "Transform your data into actionable insights with advanced analytics and business intelligence tools.",
    detailContent:
      "Our data analytics and business intelligence (BI) services help you make informed decisions by uncovering insights from your data. We specialize in creating interactive dashboards, reports, and data visualizations using tools like Power BI, Tableau, and Looker. Our services include data integration, predictive analytics, and KPI monitoring to help you track performance and identify growth opportunities. By leveraging cutting-edge analytics techniques, we empower you to make data-driven decisions that drive business success.",
  },
  {
    id: 13,
    img: <GiGamepad className="w-6 h-6" />,
    link: "/services/game-development",
    title: "Game Development",
    desc: "Bring immersive gaming experiences to life with our comprehensive game development services.",
    detailContent:
      "Our game development services cover the entire lifecycle of game creation, from concept design to deployment. We develop 2D and 3D games for mobile, PC, and consoles using advanced engines like Unity and Unreal Engine. Our expertise spans genres such as action, adventure, puzzles, and simulation. We also incorporate cutting-edge technologies like AR, VR, and AI to create engaging and immersive gaming experiences. With a focus on performance and user engagement, we ensure your game captivates audiences and stands out in the market.",
  },
  {
    id: 14,
    img: <RiVirusLine className="w-6 h-6" />,
    link: "/services/vr-ar-development",
    title: "Virtual Reality (VR) and Augmented Reality (AR) Development",
    desc: "Create immersive experiences with cutting-edge VR and AR solutions tailored to your industry.",
    detailContent:
      "Our VR and AR development services enable businesses to create immersive, interactive experiences for various applications, including training, education, marketing, and entertainment. Using platforms like Unity and Unreal Engine, we build solutions for AR headsets, VR devices, and mobile platforms. From virtual showrooms and interactive product demos to training simulators and AR-based learning tools, we deliver solutions that captivate users and add value to your business. Our focus on quality and innovation ensures your projects stay ahead of the curve.",
  },
  {
    id: 15,
    img: <RiShieldUserLine className="w-6 h-6" />,
    link: "/services/cybersecurity",
    title: "Cybersecurity Services",
    desc: "Protect your digital assets with robust cybersecurity strategies and solutions.",
    detailContent:
      "Our cybersecurity services safeguard your business against potential threats and vulnerabilities. We offer comprehensive solutions, including threat assessments, penetration testing, vulnerability scanning, and endpoint protection. Our team implements firewalls, intrusion detection systems, and encryption protocols to secure your data and applications. Additionally, we provide continuous monitoring, incident response, and compliance support for standards such as GDPR, HIPAA, and ISO 27001. With our expertise, you can ensure your organization's digital assets remain protected and resilient against cyberattacks.",
  },
  {
    id: 16,
    img: <FaDatabase className="w-6 h-6" />,
    link: "/services/big-data-solutions",
    title: "Big Data Solutions",
    desc: "Unlock the power of big data to drive innovation and make data-driven decisions.",
    detailContent:
      "Our big data solutions enable businesses to store, process, and analyze massive volumes of structured and unstructured data. We leverage technologies like Hadoop, Apache Spark, and NoSQL databases to deliver scalable and high-performance solutions. Services include data lake implementation, real-time analytics, and big data integration with existing systems. By extracting meaningful insights from large datasets, we help you identify trends, improve operations, and gain a competitive edge in your industry.",
  },
  {
    id: 17,
    img: <SiNumpy className="w-6 h-6" />,
    link: "/services/natural-language-processing",
    title: "Natural Language Processing (NLP)",
    desc: "Leverage NLP to build intelligent systems that understand and process human language.",
    detailContent:
      "Our NLP services empower businesses to develop applications that can understand, analyze, and generate human language. We specialize in building chatbots, sentiment analysis systems, text summarization tools, and language translation applications using frameworks like SpaCy and NLTK. Our solutions cater to industries such as customer service, healthcare, and finance, enabling them to automate tasks, enhance customer experiences, and gain actionable insights from textual data.",
  },
  {
    id: 18,
    img: <TbAugmentedReality className="w-6 h-6" />,
    link: "/services/computer-vision-solutions",
    title: "Computer Vision Solutions",
    desc: "Empower your business with AI-driven computer vision solutions for image and video analysis.",
    detailContent:
      "Our computer vision solutions enable businesses to extract valuable insights from visual data. We build applications for facial recognition, object detection, image classification, and video analytics using state-of-the-art frameworks like OpenCV and PyTorch. From enhancing security with surveillance systems to automating quality checks in manufacturing, our solutions cater to diverse needs. We prioritize accuracy, scalability, and efficiency to ensure our computer vision systems deliver measurable results for your business.",
  },
];

// about us page why choose content
export const whyChooseUsContent = [
  {
    img: <BiBrain className="w-6 h-6" />,
    title: "Transforming Vision into Reality",
    desc: "We collaborate closely to understand your vision and turn it into innovative digital solutions that exceed expectations, tailored specifically to your business needs.",
  },
  {
    img: <BiRocket className="w-6 h-6" />,
    title: "Empowering Businesses with Technology",
    desc: "Our expertise in cutting-edge technologies ensures that every solution we deliver helps your business thrive in today’s competitive landscape.",
  },
  {
    img: <BiBulb className="w-6 h-6" />,
    title: "Driving Efficiency with Innovation",
    desc: "From automating processes to building intelligent solutions, we bring innovation to the forefront, enabling your business to operate smarter and more efficiently.",
  },
  {
    img: <GoGraph className="w-6 h-6" />,
    title: "Data-Driven Decision Making",
    desc: "We provide insightful analytics and intelligence to help you make informed decisions, uncover opportunities, and stay ahead in your industry.",
  },
  {
    img: <SlBadge className="w-6 h-6" />,
    title: "Commitment to Excellence",
    desc: "We are dedicated to delivering exceptional service and long-term partnerships, supporting your journey from idea to execution and beyond.",
  },
];

export const reviews = [
  {
    id: 1,
    profileImg: profileImg2,
    name: "Mark S.",
    role: "Founder of UrbanTrends",
    desc: "“Partnering with [you company name] was a breath of fresh air. They not only brought our mobile app and website ideas to life but also helped us think through user experience details that made a huge impact. They truly understood our vision and delivered a solution that has taken our online presence to the next level.”",
  },
  {
    id: 2,
    profileImg: profileImg1,
    name: "Lisa T.",
    role: "Operations Manager at HealthPro Analytics",
    desc: "“The AI solutions from [you company name] have completely transformed our operations. Their team helped us automate data processes, which has freed up our team for higher-level tasks. The insights and predictive analytics they’ve provided have given us a competitive edge we didn’t think was possible.”",
  },
  {
    id: 3,
    profileImg: profileImg2,
    name: "John P.",
    role: "Customer Service Lead at QuickResponse",
    desc: "“The chatbot that [you company name] developed for us has been a game-changer. It’s seamless, efficient, and our customers are happier than ever with the faster response times. We’re saving so much time on routine inquiries, and it’s made a noticeable difference in customer satisfaction.”",
  },
  {
    id: 4,
    profileImg: profileImg1,
    name: "Samantha K.",
    role: "CEO at Retail Innovations",
    desc: "“Working with [you company name] on our data analytics strategy was one of our best investments. Their team transformed our raw data into meaningful insights that have guided our recent business decisions. We’ve already seen measurable results, and we’re excited to keep building on this foundation.”",
  },
  {
    id: 5,
    profileImg: profileImg2,
    name: "Alex R.",
    role: "Product Manager at PlaySphere",
    desc: "“The gaming app [you company name] created exceeded all our expectations. From design to development, every aspect was handled with incredible attention to detail. Our players are hooked, and we couldn’t have achieved this level of engagement without their expertise!”",
  },
  {
    id: 6,
    profileImg: profileImg1,
    name: "Monica B.",
    role: "CTO at FinSecure",
    desc: "“We were initially overwhelmed by the complexity of blockchain, but [you company name] made it easy to understand and implement. Their team developed a secure blockchain solution tailored to our needs, and it’s given us and our clients peace of mind in every transaction.”",
  },
  {
    id: 7,
    profileImg: profileImg2,
    name: "Daniel L.",
    role: "Head of Product at InsightIQ",
    desc: "“Thanks to [you company name], we’ve integrated machine learning into our products, giving us a new level of insight into customer behavior. Their team’s knowledge and hands-on approach made the entire process smooth and rewarding. It’s changed the way we operate.”",
  },
  {
    id: 8,
    profileImg: profileImg1,
    name: "Claire J.",
    role: "IT Director at GlobalTech Solutions",
    desc: "“The cloud migration and management services we received from [you company name] have been invaluable. They took us from a traditional setup to a flexible cloud environment, allowing us to scale easily. It’s been a huge boost for our team’s productivity.”",
  },
  {
    id: 9,
    profileImg: profileImg2,
    name: "Evan W.",
    role: "Operations Director at Streamline Logistics",
    desc: "“Implementing RPA with [you company name] has transformed our day-to-day operations. Tasks that used to be time-consuming are now handled quickly and accurately, giving our team more freedom to focus on strategic initiatives. The impact on efficiency is undeniable.”",
  },
];

// portfolio images (web development)
export const webPortfolio = [
  {
    id: 1,
    img: require("./assets/images/web_projects/1.webp"),
    title: "FE-Finance",
  },
  {
    id: 2,
    img: require("./assets/images/web_projects/2.webp"),
    title: "Ocxee",
  },
  {
    id: 3,
    img: require("./assets/images/web_projects/3.webp"),
    title: "Leaderbridge",
  },
  {
    id: 4,
    img: require("./assets/images/web_projects/4.webp"),
    title: "Gigzio",
  },
  {
    id: 5,
    img: require("./assets/images/web_projects/5.webp"),
    title: "FE Group",
  },
  {
    id: 6,
    img: require("./assets/images/web_projects/6.webp"),
    title: "V Talkz",
  },
];

export const webPortfolioHomepage = [
  {
    id: 1,
    img: require("./assets/images/web_projects/1.webp"),
    title: "FE-Finance",
    description:
      "A comprehensive finance platform streamlining investments and portfolio management efficiently.",
  },
  {
    id: 2,
    img: require("./assets/images/web_projects/2.webp"),
    title: "Ocxee",
    description:
      "A global relocation service platform for seamless student mobility and accommodations.",
  },
  {
    id: 3,
    img: require("./assets/images/web_projects/3.webp"),
    title: "Leaderbridge",
    description:
      "A networking platform connecting leaders and professionals to foster meaningful collaborations.",
  },
  {
    id: 4,
    img: require("./assets/images/web_projects/4.webp"),
    title: "Gigzio",
    description:
      "An innovative job marketplace connecting freelancers and employers for diverse gig opportunities.",
  },
  {
    id: 5,
    img: require("./assets/images/web_projects/5.webp"),
    title: "FE Group",
    description:
      "A corporate solution provider enhancing business growth with tailored financial services.",
  },
  {
    id: 6,
    img: require("./assets/images/web_projects/6.webp"),
    title: "V Talkz",
    description:
      "A dynamic communication platform revolutionizing team collaboration and connectivity.",
  },
];

// portfolio images (app development)
export const appPortfolio = [
  {
    id: 1,
    img: require("./assets/images/app_projects/1.webp"),
    title: "PartEx",
  },
  {
    id: 2,
    img: require("./assets/images/app_projects/2.webp"),
    title: "Find A Driver",
  },
  {
    id: 3,
    img: require("./assets/images/app_projects/3.webp"),
    title: "Glowsy",
  },
  {
    id: 4,
    img: require("./assets/images/app_projects/4.webp"),
    title: "Artisan Express",
  },
  {
    id: 5,
    img: require("./assets/images/app_projects/5.webp"),
    title: "House of Deliverance",
  },
];

export const appPortfolioHomepage = [
  {
    id: 1,
    img: require("./assets/images/app_projects/1.webp"),
    title: "PartEx",
    description:
      "An intuitive platform simplifying vehicle part exchanges and purchases.",
  },
  {
    id: 2,
    img: require("./assets/images/app_projects/2.webp"),
    title: "Find A Driver",
    description:
      "A driver-matching app ensuring efficient and reliable transportation services.",
  },
  {
    id: 3,
    img: require("./assets/images/app_projects/3.webp"),
    title: "Glowsy",
    description:
      "A beauty and wellness app offering personalized skincare and grooming solutions.",
  },
  {
    id: 4,
    img: require("./assets/images/app_projects/4.webp"),
    title: "Artisan Express",
    description:
      "A platform connecting users with skilled artisans for home services.",
  },
  {
    id: 5,
    img: require("./assets/images/app_projects/5.webp"),
    title: "House of Deliverance",
    description:
      "A spiritual app offering resources for faith-building and inspiration.",
  },
];

export const aboutUsItems = [
  {
    title: "Innovation at Heart",
    description:
      "At [you company name], innovation is at the core of everything we do. We continuously embrace emerging technologies and industry trends to craft future-ready solutions that redefine possibilities.",
    image: aboutone,
    gradient: "from-primary/60 to-primary/80",
  },
  {
    title: "Client-Centric Approach",
    description:
      "We adopt a personalized approach, customizing each project to align seamlessly with your specific requirements. We collaborate closely with our clients, fostering long-term partnerships built on trust, transparency, and shared success.",
    image: abouttwo,
    gradient: "from-secondary/60 to-secondary/80",
  },
  {
    title: "Commitment to Excellence",
    description:
      "Quality and reliability form the foundation of our work. We take pride in crafting world-class digital solutions that are robust, scalable, and secure. Every project undergoes thorough quality assurance.",
    image: aboutthree,
    gradient: "from-primary/60 to-primary/80",
  },
  {
    title: "Innovation with Purpose",
    description:
      "We believe that technology is only as valuable as the purpose it serves. Our mission is to harness the power of technology to create meaningful impacts—streamlining operations, elevating customer experiences, and driving business growth.",
    image: aboutfour,
    gradient: "from-secondary/60 to-secondary/80",
  },
  {
    title: "End to End Solutions",
    description:
      "We provide a comprehensive range of services, ensuring end-to-end support from initial concept to deployment and beyond. Our aim is to be your trusted partner throughout your digital journey.",
    image: aboutfive,
    gradient: "from-primary/60 to-primary/80",
  },
];

// Custom Software Development
// Mobile App Development
// Web Development (Full stack)
// Cloud Computing Services
// Artificial Intelligence Development
// Machine Learning Solutions
// User Experience (UX) Design
// Internet of Things (IoT) Development
// Data Science Services
// Chatbot Development
// DevOps Services
// Data Analytics and Business Intelligence
// Game Development
// Virtual Reality (VR) and Augmented Reality (AR) Development
// Cybersecurity Services
// Big Data Solutions
// Natural Language Processing (NLP)
// Computer Vision Solutions
