import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import { getSortedPostsData } from '@/lib/blog';

export default function Component() {
  const allPostsData = getSortedPostsData();

  return (
    <div className="min-h-screen bg-background font-sans">
      <header className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            MA
          </Link>
          <div className="space-x-4">
            <Link href="#about" className="hover:underline">
              About
            </Link>
            <Link href="#skills" className="hover:underline">
              Skills
            </Link>
            <Link href="#blog" className="hover:underline">
              Blog
            </Link>
            <Link href="#projects" className="hover:underline">
              Projects
            </Link>
            <Link href="#contact" className="hover:underline">
              Contact
            </Link>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-12 space-y-24">
        <section className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Mikael Aldy</h1>
          <p className="text-xl text-muted-foreground">Machine Learning Engineer</p>
        </section>

        <section id="about" className="max-w-2xl mx-auto space-y-4">
          <h2 className="text-2xl font-semibold">About Me</h2>
          <p className="text-muted-foreground">
            I&apos;m a passionate Machine Learning Engineer with a keen interest in developing intelligent systems and solving complex problems. With a strong foundation in Python and deep learning frameworks, I specialize in creating innovative ML solutions.
          </p>
        </section>

        <section id="skills" className="max-w-2xl mx-auto space-y-4">
          <h2 className="text-2xl font-semibold">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {["Python", "TensorFlow", "PyTorch", "Scikit-learn", "Data Analysis", "Deep Learning"].map((skill) => (
              <div key={skill} className="border p-4 rounded">
                <div className="p-4 text-center">{skill}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="blog" className="max-w-3xl mx-auto space-y-4">
          <h2 className="text-2xl font-semibold">Latest Blog Posts</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {allPostsData.slice(0, 4).map((post) => (
              <div key={post.slug} className="border p-4 rounded">
                <div className="p-4 space-y-2">
                  <h3 className="font-semibold">
                    <Link href={`/blog/${post.slug}`} className="hover:underline">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-sm text-muted-foreground">{post.date}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/blog" className="inline-block px-4 py-2 bg-blue-500 text-white rounded">
              View All Posts
            </Link>
          </div>
        </section>

        <section id="projects" className="max-w-3xl mx-auto space-y-4">
          <h2 className="text-2xl font-semibold">Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Image Classification Model", description: "A deep learning model for image classification using PyTorch" },
              { title: "Natural Language Processing Tool", description: "An NLP tool for sentiment analysis using TensorFlow" },
              { title: "Predictive Maintenance System", description: "An ML system for predicting equipment failures in industrial settings" },
              { title: "Recommendation Engine", description: "A collaborative filtering-based recommendation system for e-commerce" },
            ].map((project, index) => (
              <div key={index} className="border p-4 rounded">
                <div className="p-4 space-y-2">
                  <h3 className="font-semibold">{project.title}</h3>
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="max-w-md mx-auto space-y-4 text-center">
          <h2 className="text-2xl font-semibold">Get in Touch</h2>
          <p className="text-muted-foreground">
            I&apos;m always open to new opportunities and collaborations. Feel free to reach out!
          </p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="p-2 border rounded">
              <Mail className="h-4 w-4" />
              <span className="sr-only">Email</span>
            </a>
            <a href="#" className="p-2 border rounded">
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="#" className="p-2 border rounded">
              <Linkedin className="h-4 w-4" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t mt-24">
        <div className="container mx-auto px-4 py-6 text-center text-sm text-muted-foreground">
          © 2024 Mikael Aldy. All rights reserved.
        </div>
      </footer>
    </div>
  )
}