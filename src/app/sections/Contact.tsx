import { Description, Title } from "../components/Info";

const ContactComponent = (): JSX.Element => (
    <div id="contact" className="grid gap-y-5">
      <div className="flex flex-col gap-y-1 md:gap-y-1.5 lg:gap-y-2 xl:gap-y-3 md:justify-center">
        <Title value="Contact" />
        <Description value="Feel free to reach out for inquiries or collaboration opportunities. Use the form below to send a message, and I'll get back to you promptly." />
      </div>
    </div>
  );
  
  export default ContactComponent;