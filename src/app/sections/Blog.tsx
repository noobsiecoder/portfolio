import { Fragment } from "react";
import {
  Description,
  SubTitle,
  Title,
  UnorderedLists,
} from "@/components/Info";
import { NewLink } from "@/components/NewLink";

type BlogDetailProps = {
  value: string;
  path: string | null;
  lists: string[];
};

const blogInfo = [
  {
    value: "Exploring Prime Number Gaps in Rust: A Practical Implementation",
    path: "exploring-prime-number-gaps-in-rust-a-practical-implementation-9f2d4ba188c5",
    lists: [
      "Discover the first pair of consecutive prime numbers with a specified gap in a given range, unraveling the beauty of prime number distribution.",
      "The Rust code's efficiency, employing O((n - m) * sqrt(n)) complexity, adds a computational perspective to this mathematical fascination.",
    ],
  },
  {
    value: "Rot13: Simple Caesar Encryption",
    path: "rot13-simple-caesar-encryption-981463589759",
    lists: [
      "Encrypting with ROT13, a Caesar cipher variant, is more than meets the eye.",
      "Check out how this Rust code navigates the alphabet cyclically, ensuring a seamless transformation, all while preserving non-alphabetic characters.",
    ],
  },
  {
    value: "What's a Perfect Power anyway?",
    path: "whats-a-perfect-power-anyway-6672572c9730",
    lists: [
      'Ever heard of perfect powers? Those numbers playing the "base and exponent" game? We\'re diving into the cool coding scene of these mathematical rockstars.',
      "Join on the quest as we spill the secrets of our slick pseudo-code, featuring a math-savvy loop and some wizardry. It's coding jazz with a twist!",
    ],
  },
];

const BlogDetail = ({ value, path, lists }: BlogDetailProps): JSX.Element => (
  <div className="grid gap-y-1">
    <SubTitle
      value={value}
      path={`https://medium.com/@abhisheksriram845/${path}`}
    />
    <UnorderedLists lists={lists} />
  </div>
);

const BlogComponent = (): JSX.Element => (
  <div id="blog" className="grid gap-y-5">
    <div className="flex flex-col gap-y-1 md:gap-y-1.5 lg:gap-y-2 xl:gap-y-3 md:justify-center">
      <Title value="Blog" />
      <Description
        value={
          <Fragment>
            Dive into my weekend tech adventures on Medium! Explore the world of
            coding, robotics and AI with me. Get ready for a dose of geeky
            excitement - your weekend just got a whole lot more tech-saavy. To
            read more, visit my{" "}
            <NewLink
              value="Medium Page"
              link="https://medium.com/@abhisheksriram845"
            />
          </Fragment>
        }
      />
    </div>
    <div className="grid space-y-3">
      {blogInfo.map((data, ind) => (
        <BlogDetail
          key={ind}
          value={data.value}
          path={data.path}
          lists={data.lists}
        />
      ))}
    </div>
  </div>
);

export default BlogComponent;
