import React, { useState } from "react";
// import section5Img1 from "../../assets/images/section-5-img-1.png";
// import section5Img2 from "../../assets/images/section-5-img-2.png";
// import section5Img3 from "../../assets/images/section-5-img-3.png";
// import section5Img4 from "../../assets/images/section-5-img-4.png";
// import section5Img5 from "../../assets/images/section-5-img-5.png";
// import section5Img6 from "../../assets/images/section-5-img-6.png";
// import section5Img7 from "../../assets/images/section-5-img-7.png";
import Contact from "../../componets/landingPages/Contact";
import {
  appDevBanner,
  appLandingAbout,
  companyDetails,
  webDevBanner,
  crmSolutions,
  webLandingAbout,
} from "../../constant";
import { Link as ScrollLink } from "react-scroll";
import WhyChooseUs from "../../componets/common/WhyChooseUs";
// import EndlessOpportunitiesSection from "../../componets/common/EndlessOpportunitiesSection";
import LandingServices from "../../componets/landingPages/LandingServices";
import UnlockEfficiency from "../../componets/common/UnlockEfficiency";
import Testimonials from "../../componets/common/Testimonials";
import Portfolio from "../../componets/landingPages/Portfolio";
import ReactPlayer from "react-player";
import landingpagevideo from "../../assets/videos/home-banner.mp4";
import Faqs from "../../componets/common/Faqs";
import { useForm } from "react-hook-form";
import Credibility from "../../componets/common/Credibility";
import image from "../../assets/images/contactimage.jpg";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import CRMWhyChooseUs from "../../componets/common/CRMWhychooseus";
import CRMFaq from "../../componets/common/CRMFaq";

export const CRMLandingPage = () => {
  const [spinner, setSpinner] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    console.log(data);
    setSpinner(true);

    var emailBody = "Name: " + data.fullName + "\n\n";
    emailBody += "Email: " + data.email + "\n\n";
    emailBody += "Phone: " + data.mobileNumber + "\n\n";
    // emailBody += "Subject: " + data.subject + "\n\n";
    emailBody += "Message:\n" + data.message;

    // Construct the request payload
    var payload = {
      to: companyDetails.email,
      // to: "remeesreme4u@gmail.com",
      subject: "You have a new message from Genesis AI",
      body: emailBody,
    };

    await fetch("https://smtp-api-tawny.vercel.app/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then(() => {
        toast.success("Email sent successfully");
        reset();
        navigate("/thank-you");
      })
      .catch((error) => {
        toast.error(error.message);
      })
      .finally(() => setSpinner(false));
  };
  const content = [
    {
      id: 1,
      title: "Technical Expertise",
      description:
        "Proven expertise in building tailored, intelligent CRM systems that align with your business objectives.",
    },
    {
      id: 2,
      title: "Innovation & Adaptability",
      description:
        "Adaptive solutions designed to evolve with your business needs, ensuring sustained success.",
    },
    {
      id: 3,
      title: "Effective Communication",
      description:
        "Transparent and collaborative communication, fostering trust and alignment throughout the process.",
    },
    {
      id: 4,
      title: "Security & Compliance",
      description:
        "Robust security measures and compliance protocols to safeguard customer data and ensure regulatory adherence.",
    },
  ];
  return (
    <>
      <div id="banner" className="h-screen relative">
        <ReactPlayer
          url={landingpagevideo}
          loop
          muted
          width="100vw"
          height="100%"
          playsinline
          playing
          className="react-player left-0 top-0 absolute object-cover h-full w-full"
        />
        {/* <img
          src={isWebDevelopment ? webDevBanner : appDevBanner}
          className="w-full h-full object-cover object-right absolute"
          alt=""
        /> */}
        <div className="bg-black/50 absolute w-full h-full"></div>
        <div
          data-aos="fade-up"
          className="pt-[3rem] wrapper flex items-center h-full"
        >
          <div className="relative z-10 px-6 justify-center h-full flex flex-col items-center gap-5 text-center md:max-w-[60rem] mx-auto">
            <div className="rounded-text-box border-white/70 font-medium text-white">
              CRM Solution
            </div>
            {/* <h1 className="heading-1 text-white">
              {isWebDevelopment
                ? `Building Websites That Leverage ${(
                    <span className="text-primary">AI</span>
                  )} to Define Your Brand's Digital Presence`
                : ""}
            </h1> */}

            <h1 className="heading-1 text-white leading-tight">
              Harnessing <span className="text-primary"> AI </span> to
              Revolutionize Your Customer Management
            </h1>

            <p className="text-white desc font-medium">
              We specialize in delivering intelligent CRM solutions designed to
              streamline your operations, strengthen customer relationships, and
              drive your business toward success.
            </p>
            <ScrollLink
              to="contact"
              smooth
              offset={-90}
              className="primary-btn mt-2"
            >
              Get Started
            </ScrollLink>
          </div>
        </div>
      </div>
      {/* <Contact /> */}
      <Contact />
      <section
        id="about"
        className="py-[3rem] bg-backgroundcolor text-primarytextcolor wrapper"
      >
        <div
          data-aos="fade-up"
          className="gradient-rounded-text-box mx-auto lg:mx-0"
        >
          CRM Solution
        </div>
        <div className="flex flex-col-reverse items-center lg:grid grid-cols-2 gap-10 mt-7">
          <div
            data-aos="fade-right"
            className="flex h-full flex-col gap-7 text-center lg:text-start"
          >
            <div className="flex flex-col gap-7">
              <h2 className="heading-2">
                Empowering Businesses with Smarter CRM Solutions
              </h2>
              <p className="desc">
                From small businesses to large enterprises, we offer
                comprehensive CRM services tailored to optimize your customer
                interactions, enhance communication, and drive growth. Our CRM
                solutions deliver actionable insights, ensuring a seamless
                customer experience that sets you apart.
              </p>
            </div>
            <div className="flex justify-center lg:justify-start gap-5 mt-4">
              <ScrollLink
                to="contact"
                smooth
                offset={-90}
                className="primary-btn"
              >
                Contact Us
              </ScrollLink>
              <ScrollLink
                to="services"
                smooth
                offset={-80}
                className="secondary-btn"
              >
                Our Services
              </ScrollLink>
            </div>
          </div>
          <div data-aos="fade-left" className="h-full">
            <img
              src={webLandingAbout}
              className="object-contain max-h-[30rem] w-full rounded-lg"
              alt=""
            />
          </div>
        </div>
      </section>
      <div id="services" className="flex justify-center relative">
        <div className="wrapper py-10 flex flex-col items-center gap-5 z-10 text-primarytextcolor">
          <div data-aos="fade-up" className="gradient-rounded-text-box mx-auto">
            CRM Services
          </div>
          <h1 data-aos="fade-up" className="heading-2 text-center max-w-2xl">
            {/* We provide the Best IT solution services */}
            Empowering Businesses with Smarter CRM Solutions{" "}
          </h1>
          <p data-aos="fade-up" className="text-center max-w-2xl desc">
            From small businesses to large enterprises, we offer comprehensive
            CRM services tailored to optimize your customer interactions,
            enhance communication, and drive growth. Our CRM solutions deliver
            actionable insights, ensuring a seamless customer experience that
            sets you apart.
          </p>
          <div
            data-aos="fade-up"
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-10 py-[2rem] mx-auto max-w-6xl"
          >
            {crmSolutions.map((item) => (
              <div
                key={item.id}
                className="shadow-2xl transition-all  bg-primary/15 hover:-translate-y-1 hover:bg-primary/25 duration-300 rounded-lg"
              >
                <div className="   group rounded-lg bg-backgro-gradient  hover:scale-105 shadow-2xl hover:shadow-primary/10 p-[1px] transition-all h-full duration-500 overflow-hidden">
                  <div className="rounded-lg bg-white hover:bg-custom-gradient p-5 flex flex-col justify-between items-start text-start h-full gap-4">
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                          {/* <BiBrain className="w-6 h-6" /> */}
                          {item.img}
                        </div>
                      </div>
                      <h5 className="font-semibold text-2xl font-raleway transition-colors duration-300 text-primary">
                        {item.title}
                      </h5>
                      <p className="desc text-primarytextcolor">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <CRMWhyChooseUs />
      {/* <Faqs /> */}
      <section className="py-[3rem] text-primarytextcolor bg-backgroundcolor">
        <div
          data-aos-offset={-400}
          data-aos="fade-up"
          className="wrapper flex flex-col text-primarytextcolor items-center gap-5 text-center"
        >
          <div className="gradient-rounded-text-box">Unlock Efficiency</div>
          <h2 className="heading-2">
            Ready to Elevate Your Customer Management?
          </h2>
          <p className="desc max-w-[40rem] text-center">
            Our mission is to provide AI-driven CRM solutions that empower your
            business. Let’s connect and create a smarter, more customer-focused
            future together!
          </p>
          <Link to="/contact-us" className="primary-btn mt-3">
            Contact Us
          </Link>
        </div>
      </section>{" "}
      {/* <Portfolio page={page} /> */}
      <Testimonials />
      <Credibility />
      <CRMFaq />
      {/* <EndlessOpportunitiesSection /> */}
      <div
        data-aos="fade-up"
        id="contacts"
        className=" py-[2rem] sm:py-[5rem] text-primarytextcolor bg-backgro-gradient-revert"
      >
        <div className="wrapper">
          <div className="h-full grid md:grid-cols-2 gap-10 py-5">
            <div className="flex flex-col gap-4">
              <h2 className="heading-2">Get In Touch With Us!</h2>
              <p className="desc">
                Get in touch with{" "}
                <span className="font-semibold">Genesis AI </span>
                and let us be the catalyst for your digital transformation.
                Together, we can create solutions that align with your vision,
                helping your business reach new heights.
              </p>
              <img
                src={image}
                alt=""
                className="max-h-[21rem] object-cover rounded-xl"
              />
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-4 md:px-[1rem] text-black"
            >
              <div className="hover:scale-105 transition-all duration-500">
                <label htmlFor="" className="mb-6 font-medium">
                  Full Name
                </label>
                <input
                  type="text"
                  className="mt-1 w-full bg-[#faf3ef] placeholder-slate-800  outline-none border-2 rounded-sm font-light border-primary px-2 py-3"
                  placeholder="Enter Full Name"
                  {...register("fullName", {
                    required: "Full name is required",
                  })}
                  style={{
                    borderImageSource:
                      "linear-gradient(90deg, rgba(250,120,67,0.545) 0%, rgba(164,164,164,0.612) 100%)",
                    borderImageSlice: 1,
                  }}
                />
                {errors.fullName && (
                  <span className="text-red-500 text-sm">
                    {errors.fullName.message}
                  </span>
                )}
              </div>

              <div className="hover:scale-105 transition-all duration-500">
                <label htmlFor="" className="mb-6 font-medium">
                  Mobile Number
                </label>
                <input
                  type="text"
                  className="mt-1 w-full bg-[#faf3ef] outline-none placeholder-slate-800 border-2 rounded-sm font-light border-primary px-2 py-3"
                  placeholder="Enter Mobile Number"
                  {...register("mobileNumber", {
                    required: "Mobile number is required",
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: "Invalid phone number",
                    },
                  })}
                  style={{
                    borderImageSource:
                      "linear-gradient(90deg, rgba(250,120,67,0.545) 0%, rgba(164,164,164,0.612) 100%)",
                    borderImageSlice: 1,
                  }}
                />
                {errors.mobileNumber && (
                  <span className="text-red-500 text-sm">
                    {errors.mobileNumber.message}
                  </span>
                )}
              </div>

              <div className="hover:scale-105 transition-all duration-500">
                <label htmlFor="" className="mb-6 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  className="mt-1 w-full bg-[#faf3ef] outline-none placeholder-slate-800 border-2 rounded-sm font-light border-primary px-2 py-3"
                  placeholder="Enter Email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  style={{
                    borderImageSource:
                      "linear-gradient(90deg, rgba(250,120,67,0.545) 0%, rgba(164,164,164,0.612) 100%)",
                    borderImageSlice: 1,
                  }}
                />
                {errors.email && (
                  <span className="text-red-500 text-sm">
                    {errors.email.message}
                  </span>
                )}
              </div>

              <div className="hover:scale-105 transition-all duration-500">
                <label htmlFor="" className="mb-6 font-medium">
                  Message
                </label>
                <textarea
                  rows="4"
                  className="mt-1 w-full bg-[#faf3ef] outline-none placeholder-slate-800 border-2 rounded-sm font-light border-primary px-2 py-3"
                  placeholder="Enter Message"
                  {...register("message", { required: "Message is required" })}
                  style={{
                    borderImageSource:
                      "linear-gradient(90deg, rgba(250,120,67,0.545) 0%, rgba(164,164,164,0.612) 100%)",
                    borderImageSlice: 1,
                  }}
                />
                {errors.message && (
                  <span className="text-red-500 text-sm">
                    {errors.message.message}
                  </span>
                )}
              </div>

              <button className="primary-btn" type="submit">
                {spinner ? "Sending..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
