export default function Prose({ children }) {
    return (
        <article
            className={`
                mx-auto
                max-w-4xl
                text-gray-300

                [&>*]:scroll-mt-24

                [&_h1]:text-4xl
                [&_h1]:font-bold
                [&_h1]:mt-10
                [&_h1]:mb-6
                [&_h1]:leading-14
                [&_h1]:text-white

                [&_h2]:text-3xl
                [&_h2]:font-bold
                [&_h2]:mt-12
                [&_h2]:mb-5
                [&_h2]:text-white

                [&_h3]:text-2xl
                [&_h3]:font-semibold
                [&_h3]:mt-10
                [&_h3]:mb-4
                [&_h3]:text-white

                [&_p]:leading-9
                [&_p]:mb-6
                [&_p]:text-lg

                [&_strong]:font-semibold
                [&_strong]:text-white

                [&_em]:italic

                [&_a]:text-green-400
                [&_a]:underline
                [&_a:hover]:text-green-300
                [&_a]:transition-colors

                [&_img]:rounded-xl
                [&_img]:shadow-xl
                [&_img]:my-8

                [&_hr]:border-zinc-700
                [&_hr]:my-12

                [&_ul]:list-disc
                [&_ul]:mr-6
                [&_ul]:mb-6

                [&_ol]:list-decimal
                [&_ol]:mr-6
                [&_ol]:mb-6

                [&_li]:mb-2

                [&_blockquote]:border-r-4
              [&_blockquote]:border-green-500

              [&_blockquote]:bg-zinc-900/60

                [&_blockquote]:rounded-lg

                [&_blockquote]:px-5
                [&_blockquote]:py-4

                [&_blockquote]:my-8

                [&_blockquote]:italic


                [&_table]:w-full
                [&_table]:border-collapse
                [&_table]:my-8

                [&_thead]:bg-zinc-900

                [&_th]:border
                [&_th]:border-zinc-700
                [&_th]:p-3
                [&_th]:text-right

                [&_td]:border
                [&_td]:border-zinc-700
                [&_td]:p-3

              [&_tbody_tr:nth-child(even)]:bg-zinc-900/40

              [&_pre]:overflow-x-auto
              [&_pre]:my-8

                // [&_code]:font-mono
                // [&_code]:text-green-300

                [&_p_code]:bg-zinc-800
                [&_p_code]:px-1.5
                [&_p_code]:py-0.5
                [&_p_code]:rounded
                [&_p_code]:text-pink-300
            `}
        >
            {children}
        </article>
    )
}