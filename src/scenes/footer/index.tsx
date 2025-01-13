import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={Logo} alt="logo" />
          <p className="my-5">
            EvoGym is your ultimate fitness destination, offering
            state-of-the-art facilities, expert trainers, and a variety of
            classes to help you achieve your health and wellness goals. Whether
            you're just starting your fitness journey or looking to push your
            limits, we provide the support and community you need to succeed.
            Join EvoGym today and experience the perfect blend of innovation,
            motivation, and results!
          </p>
          <p>© Evogym All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">
            Blog - Fitness tips, success stories, and updates on new programs or
            events
          </p>
          <p className="my-5">
            Quick access to EvoGym’s social media platforms like Facebook,
            Instagram, Twitter, etc
          </p>
          <p className="my-5">
            Testimonials - Customer reviews and experiences at EvoGym
          </p>
          <p>
            Privacy Policy - Legal information on how member data is handled and
            protected
          </p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">
            A form or contact information for inquiries and support
          </p>
          <p>(021)234-567-8</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
