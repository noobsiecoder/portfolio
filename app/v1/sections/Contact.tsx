"use client";
import { Database } from "@/data/init";
import {
  Dispatch,
  FormEvent,
  HTMLInputTypeAttribute,
  SetStateAction,
  useState,
} from "react";

interface InputStateProps {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}

interface InputProps extends InputStateProps {
  title: string;
  inputType: HTMLInputTypeAttribute;
  text: string;
  pattern?: string;
  required: boolean;
}

const Input = ({
  title,
  text,
  pattern,
  required,
  inputType,
  value,
  setValue,
}: InputProps) => {
  return (
    <div className="flex flex-col gap-y-0.5 w-full">
      <div>
        <span className="font-poppins font-medium text-stone-800">{title}</span>
        {required ? (
          <span className="font-poppins font-semibold text-red-500">*</span>
        ) : (
          <></>
        )}
      </div>
      <input
        type={inputType}
        className="w-full px-3 py-2 rounded-md border-2 border-stone-300 font-poppins font-normal text-stone-800 placeholder:text-stone-400 placeholder:opacity-75 outline-none hover:border-blue-400 focus:border-blue-400 focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
        pattern={pattern ?? "*"}
        placeholder={text}
        value={value}
        onChange={(event) => setValue(event?.target.value)}
        required={required}
      />
    </div>
  );
};

const MessageBox = ({ value, setValue }: InputStateProps) => {
  return (
    <div className="flex flex-col gap-y-0.5 w-full">
      <div>
        <span className="font-poppins font-medium text-stone-800">Message</span>
        <span className="font-poppins font-semibold text-red-500">*</span>
      </div>
      <textarea
        rows={5}
        className="w-full px-3 py-2 rounded-md border-2 border-stone-300 font-poppins font-normal text-stone-800 resize-y placeholder:text-stone-400 placeholder:opacity-75 outline-none hover:border-blue-400 focus:border-blue-400 focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
        placeholder="(character limit: 512)"
        maxLength={512}
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    </div>
  );
};

const Contact = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [loadingStatus, setLoadingStatus] = useState<boolean>(false);

  const clearInputFields = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setMessage("");
  };

  const submitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoadingStatus(true);
    const collectionName = "messages";
    const data = {
      firstName,
      lastName,
      email,
      message,
    };

    const db = new Database();
    db.setMessageDocData(collectionName, data);
    clearInputFields();
    alert(
      "Your message has been sent successfully! Abhishek will get in touch with you shortly."
    );
    setLoadingStatus(false);
  };

  return (
    <div id="contact" className="flex flex-col gap-y-2">
      <h3 className="font-poppins font-semibold text-stone-800 text-xl lg:text-2xl xl:text-3xl">
        Contact
      </h3>
      <form className="grid gap-y-2" onSubmit={submitForm}>
        <div className="flex flex-col lg:flex-row gap-y-2 lg:gap-y-0 gap-x-4">
          <Input
            title="First Name"
            inputType="text"
            text="John"
            required={true}
            value={firstName}
            setValue={setFirstName}
          />
          <Input
            title="Last Name"
            inputType="text"
            text="Doe"
            required={false}
            value={lastName}
            setValue={setLastName}
          />
        </div>
        <Input
          title="Email"
          inputType="email"
          text="john.doe@email.com"
          pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$"
          required={true}
          value={email}
          setValue={setEmail}
        />
        <MessageBox value={message} setValue={setMessage} />
        <div className="mt-2">
          <button className="p-4 bg-gradient-to-r from-blue-600 to-blue-950 rounded-md w-full">
            <div className="flex justify-center items-center">
              <svg
                style={
                  loadingStatus ? { display: "block" } : { display: "none" }
                }
                className="animate-spin -ml-1 mr-3 size-4 text-stone-50"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              <h3 className="font-poppins font-semibold text-base lg:text-lg 2xl:text-xl text-stone-50">
                Submit
              </h3>
            </div>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
