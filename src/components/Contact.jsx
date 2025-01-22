import {
  RiGithubFill,
  RiInstagramFill,
  RiLinkedinBoxFill,
} from "@remixicon/react";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const Contact = () => {
  const contactRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-text ", {
        opacity: 0,
        y: 30,
        duration: 1,
        // stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contactRef.current,
          start: "top 80%",
          toggleActions: "play non none none",
        },
      });

      gsap.from(".contact-icon ", {
        opacity: 0,
        y: 20,
        duration: 1,
        stagger: 0.4,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contactRef.current,
          start: "top 80%",
          toggleActions: "play non none none",
        },
      });
    }, contactRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-16" id="contact" ref={contactRef}>
      <div className="px-4 text-center">
        <h2 className="contact-text mb-4 text-3xl font-medium lg:text-4xl">Contact</h2>
        <p className="contact-text text-lg lg:text-xl">
          Feel Free to reach out to me via email :
        </p>
        <a href="mailto:varun.567.kashyap@gmail.com" className="border-b">
          varun.567.kashyap@gmail.com
        </a>
        <div className="mt-4 flex justify-center space-x-6 ">
          <a
            href="https://www.linkedin.com/in/vedant-kashyap-aa4341201/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-icon"
            aria-label="Visit my LinkedIn Profile"
          >
            <RiLinkedinBoxFill className="text-3xl " />
          </a>
          <a
            href="https://github.com/vedant1003k"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-icon"
            aria-label="Visit my Github Profile"
          >
            <RiGithubFill className="text-3xl " />
          </a>
          <a
            href="https://www.instagram.com/vedant_kashyap_/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-icon"
            aria-label="Visit my Instagram Profile"
          >
            <RiInstagramFill className="text-3xl " />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
