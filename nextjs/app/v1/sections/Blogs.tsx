import { Timestamp } from "firebase/firestore";
import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import { getOrderedData } from "@/data/init";

interface BlogDataProps {
  title: string;
  link: Url;
  tags: Array<String>;
  timestamp: Timestamp;
}

const Blog = ({ title, link, tags, timestamp }: BlogDataProps) => {
  return (
    <Link href={link} target="_blank" rel="noreferrer">
      <div className="flex flex-col gap-y-1 p-2 lg:p-3 lg:w-full hover:ring-2 hover:ring-blue-300 hover:bg-blue-100 rounded-md">
        <div>
          <div className="flex justify-between items-center">
            <h2
              style={{ lineHeight: 1.25 }}
              className="font-poppins font-medium text-base lg:text-lg 2xl:text-xl text-stone-800 tracking-tight lg:w-5/6"
            >
              {title}
            </h2>
            <div className="size-4 transition ease-in-out delay-150 lg:hover:-translate-y-1 lg:hover:translate-x-1 lg:hover:scale-110">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4 text-stone-950"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </div>
          </div>
          <p className="font-poppins text-sm lg:text-base text-stone-800 tracking-tighter">
            {tags.join(" | ")}
          </p>
        </div>
        <div>
          <p className="font-poppins font-light text-xs xl:text-sm text-stone-800 tracking-tight leading-tight">
            {new Date(timestamp.seconds * 1000).toUTCString()}
          </p>
        </div>
      </div>
    </Link>
  );
};

const ViewOnMediumLink = () => {
  return (
    <Link
      href="https://medium.com/@abhisheksriram845"
      target="_blank"
      rel="noreferrer"
      className="mt-1 flex items-center gap-x-1 transition ease-in-out delay-150 lg:hover:translate-x-8 xl:hover:translate-x-10 2xl:hover:translate-x-12 lg:hover:scale-110"
    >
      <span className="font-poppins font-semibold text-sm text-stone-800">
        View on Medium
      </span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
        />
      </svg>
    </Link>
  );
};

const Blogs = async () => {
  const blogsInfo = await getOrderedData("blogs", "timestamp", "desc");

  return (
    <div className="flex flex-col gap-y-2">
      <h3 className="font-poppins font-semibold text-stone-800 text-xl lg:text-2xl xl:text-3xl">
        Blogs
      </h3>
      <div className="grid gap-y-px lg:gap-y-1 xl:gap-y-2">
        {blogsInfo.slice(0, 5).map((blog, idx) => (
          <Blog
            key={idx}
            link={blog.link}
            title={blog.title}
            tags={blog.tags}
            timestamp={blog.timestamp}
          />
        ))}
      </div>
      <ViewOnMediumLink />
    </div>
  );
};

export default Blogs;
