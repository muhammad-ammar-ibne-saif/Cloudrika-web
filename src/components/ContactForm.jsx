import Form from "./Form";

const ContactForm = () => {
  return (
    <>
      <section
        className="flex flex-col md:flex-row w-full px-6 md:px-12 pb-8"
        data-aos="zoom-in-up"
      >
        <div className="md:w-1/2">
          <p className="font-body text-[#5454D4] md:px-7 ">
            We’d love to hear from you
          </p>
          <h1 className="font-title text-[8vw] md:text-[4vw] 2xl:text-[3.5vw] md:px-6 leading-none pt-4 md:pt-6 ">
            Get in <span className="text-[#5454D4]">Touch With Us </span>
            We&apos;re here to assist you.
          </h1>
          <p className="font-body 2xl:text-[1.3vw] pt-4 md:px-6 ">
            Whether you’re looking for innovative solutions, need technical
            guidance, or have a project in mind, our team at Cloudrika Technologies
            is here to help. Let’s work together to create impactful web and
            mobile applications tailored to your business needs. Reach out and
            let’s start something amazing!
          </p>
        </div>
        <div className="md:w-1/2">
          <Form />
        </div>
      </section>
    </>
  );
};

export default ContactForm;
