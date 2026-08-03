import { MDXRemote } from "next-mdx-remote/rsc"
import Prose from "./Prose"
import { mdxOptions } from "@/lib/mdx";
import components from "./MDX/components";
import { JalaliDate } from "./Date";

export default function PostContentRender({ content, post }) {


    return (
        <Prose>
            <div className="flex justify-between">
                <span>نویسنده : {post.frontMatter.author}</span>
                <span className="fanum">تاریخ انتشار پست : {JalaliDate(post.date)}</span>
            </div>
            <h1 className="text-xl md:text-3xl font-bold mb-2">{post.frontMatter.title}</h1>
            <img id="content" src={post.frontMatter.thumb} loading="lazy" alt={post.frontMatter.title} className="rounded-xl mb-4 object-contain mt-5 mx-auto" width={800} height={400} />
            <MDXRemote source={content} components={components} options={{
                mdxOptions
            }} />
        </Prose>
    )
}