import Text, {
  FontAlign,
  FontDecoration,
  FontSize,
  FontStyle,
  FontWeight,
} from "@/components/Text";
import collectBlogData, { BlogData } from "@/utils/BlogInfo";

const BlogSection = async () => {
  const { items }: BlogData = await collectBlogData();
  const blogItems: Array<{ name: string; link: string }> = [];
  items.forEach((item, _) => {
    const blog = { name: item.title, link: item.link };
    blogItems.push(blog);
  });
  console.log(blogItems);
  //   blogItems.map((values, items) => console.log(values));

  return (
    <div className="grid gap-y-1">
      <Text
        fontAlign={FontAlign.Start}
        fontSize={FontSize.Heading2}
        fontStyle={FontStyle.Lora}
        fontWeight={FontWeight.Bold}
        value="Blog"
      />
      <div>
        <Text
          fontAlign={FontAlign.Start}
          fontSize={FontSize.ListLinks}
          fontStyle={FontStyle.Poppins}
          fontWeight={FontWeight.Regular}
          linkList={blogItems}
        />
      </div>
    </div>
  );
};

export default BlogSection;
