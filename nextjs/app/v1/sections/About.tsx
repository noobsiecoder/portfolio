import aboutInfo from "@/data/about";

const About = () => {
  return (
    <div>
      <h3 className="font-poppins font-semibold text-stone-800 text-xl lg:text-2xl xl:text-3xl">
        About Me
      </h3>
      <p className="font-poppins text-justify leading-snug text-stone-800">
        {aboutInfo.paragraph[0]}
      </p>
      <ul className="list-inside list-disc px-1">
        {aboutInfo.work.map((work, idx) => (
          <li
            key={idx + Math.random() * 100} // genrates a number between 0-99
            className="font-poppins text-justify text-stone-800"
          >
            {work}
          </li>
        ))}
      </ul>
      <p className="font-poppins text-justify text-stone-800">
        {aboutInfo.paragraph[1]}
      </p>
    </div>
  );
};

export default About;
