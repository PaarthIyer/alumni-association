import adapter from '@sveltejs/adapter-cloudflare'

import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

import { mdsvex } from 'mdsvex'
import remarkUnwrapImages from 'rehype-unwrap-images'
import remarkToc from 'remark-toc'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
    extensions: ['.md', '.mdsvex'],
    remarkPlugins: [remarkUnwrapImages],
    rehypePlugins: [rehypeAutolinkHeadings, rehypeSlug]
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
    extensions: ['.svelte', '.md', '.mdsvex'],
    preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],

    kit: {
        adapter: adapter({ include: ['/*'], exclude: ['<all>'] })
    }
}

export default config
