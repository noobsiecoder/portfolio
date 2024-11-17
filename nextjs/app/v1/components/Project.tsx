"use client";
import { Url } from "next/dist/shared/lib/router/router";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

interface ProjectsInfoProps {
  display: boolean;
  image: string;
  alt: string;
  link: Url;
  title: string;
  desc: string;
  tags: Array<String>;
}

const Tag = ({ name }: { name: String }) => {
  return (
    <div className="p-2 bg-blue-50 rounded-md border-2 border-blue-300">
      <span className="font-poppins font-medium text-sm text-stone-800">
        {name}
      </span>
    </div>
  );
};

const Project = ({
  display,
  image,
  alt,
  link,
  title,
  desc,
  tags,
}: ProjectsInfoProps) => {
  const [loadingStatus, setLoadingStatus] = useState<boolean>(true);

  useEffect(() => {}, []);

  const imageLoad = () => {
    setLoadingStatus(false);
  };
  if (display) {
    return (
      <Link href={link} target="_blank" rel="noreferrer">
        <div className="flex flex-col p-2 gap-y-2 lg:flex-row lg:p-3 lg:gap-y-0 lg:gap-x-4 lg:w-full hover:ring-2 hover:ring-blue-300 hover:bg-blue-100 rounded-md">
          <div className="h-64 lg:w-64 rounded-md">
            <div className="flex relative h-full lg:w-64 justify-center items-center">
              <svg
                style={loadingStatus ? {} : { visibility: "hidden" }}
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-blue-600"
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
              <Image
                style={loadingStatus ? { visibility: "hidden" } : {}}
                src={image}
                alt={alt}
                fill={true}
                className="rounded-md"
                onLoad={imageLoad}
                quality={80}
              />
            </div>
          </div>
          <div className="flex flex-col gap-y-3 lg:gap-y-0 lg:justify-between w-full">
            <div className="flex flex-col gap-y-0.5">
              <div className="flex items-center justify-between">
                <h2 className="font-poppins font-medium text-lg lg:text-xl xl:text-2xl text-stone-800 tracking-tight leading-tight lg:w-5/6">
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
              <p className="font-poppins text-stone-800 tracking-tight leading-snug">
                {desc}
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, idx) => (
                <Tag key={idx} name={tag} />
              ))}
            </div>
          </div>
        </div>
      </Link>
    );
  }
};

export default Project;
