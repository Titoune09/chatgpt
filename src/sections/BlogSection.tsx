import { motion } from 'framer-motion';
import { ScrollStack } from '../components/reactbits/ScrollStack';
import { blogPosts } from '../data/page';

export function BlogSection() {
  return (
    <section id="blog" className="relative mx-auto mt-40 max-w-6xl px-6">
      <div className="rounded-[3rem] border border-white/10 bg-steel/80 p-12 shadow-subtle backdrop-blur">
        <header className="text-center">
          <h2 className="font-display text-3xl text-chrome sm:text-4xl">Blog & ressources</h2>
          <p className="mt-4 text-base text-chrome/70">
            Cartes diagonales en escalier, révélées au scroll pour faciliter la lecture verticale.
          </p>
        </header>
        <div className="mt-12">
          <ScrollStack
            count={blogPosts.length}
            render={({ index }) => {
              const post = blogPosts[index];
              return (
                <motion.article
                  className="group relative overflow-hidden rounded-[2.75rem] border border-white/10 bg-night/70 p-6 shadow-subtle"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  style={{ transform: `translateX(${index % 2 === 0 ? '0%' : '8%'})` }}
                >
                  <div className="grid gap-6 md:grid-cols-[16rem,1fr]">
                    <div className="relative overflow-hidden rounded-[2rem] border border-white/10">
                      <img src={post.image} alt={post.title} className="h-full w-full object-cover" loading="lazy" />
                    </div>
                    <div className="space-y-4">
                      <h3 className="font-display text-2xl text-chrome">{post.title}</h3>
                      <p className="text-sm text-chrome/70">{post.excerpt}</p>
                      <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.35em] text-accent/70">
                        <span>{post.readingTime}</span>
                        {post.tags.map((tag) => (
                          <span key={tag} className="rounded-full border border-accent/30 px-3 py-1">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            }}
            className="space-y-8"
          />
        </div>
      </div>
    </section>
  );
}
