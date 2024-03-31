interface ImageType {
  src: string;
  alt: string;
  caption: string;
}

export interface About {
  title: string;
  description: string;
  image: ImageType;
}

export interface Links {
  links: Array<{
    name: string;
    value: string;
    link: string;
  }>;
}

export interface Education {
  education: Array<{
    title: string;
    school: string;
    location: string;
    timeline: string;
    description: {
      gpa: number | null;
      achievements: Array<string> | null;
      coursework: Array<string>;
    };
  }>;
}

export interface Experience {
  experiences: Array<{
    title: string;
    company: string;
    location: string;
    timeline: string;
    responsibilities: Array<string>;
    image: ImageType;
  }>;
}

export interface Projects {
  projects: Array<{
    title: string;
    description: Array<string>;
    technologies: Array<string>;
    challenges: Array<string>;
    achievements: Array<string>;
    image: ImageType;
    links: Array<{
      name: string;
      link: string;
    }>;
  }>;
}

export interface Skills {
  skills: Array<{
    name: string;
    values: Array<string>;
    show: boolean;
    size: string;
  }>;
}
