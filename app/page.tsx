import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Github, ExternalLink, Terminal, Code2, Cpu, FolderOpen, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { DuckDuckGoSearch } from "@/components/DuckDuckGoSearch"; // Import the search component

const techStack = [
  "Python",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "TensorFlow",
  "PyTorch",
  "Scikit-learn",
  "Pandas",
  "NumPy",
  "PostgreSQL",
  "MongoDB",
  "Docker",
  "AWS",
  "Git",
];

const featuredProjects = [
  {
    id: 1,
    name: "Deploying Deep Learning Models on MCUs",
    description: "Deep learning model using CNN architecture with 90% accuracy deployed on resource constrained microcontrollers",
    technologies: ["Python", "TensorFlow", "TensorFlow-Lite", "Seaborn", "Matplotlib"],
    image: "/project1.jpg",
    githubUrl: "https://github.com/ApurvaMalasi23/Optimizing-TinyML.git",
    liveUrl: "https://ml-classifier-demo.vercel.app",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-6 md:py-32 matrix-bg">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              {/* === SEARCH BOX MOVED HERE === */}
              <DuckDuckGoSearch />

              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-4">
                  <Terminal className="h-8 w-8 text-tech-red animate-pulse-red" />
                  <span className="text-tech-red font-mono text-lg">~/apurva-malasi</span>
                </div>

                <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                  Hi, I'm <span className="tech-gradient">Apurva Malasi</span>
                </h1>

                <div className="space-y-2">
                  <p className="text-2xl md:text-3xl text-tech-red font-mono font-semibold">
                    ML Engineer & Full-Stack Developer
                  </p>
                  <div className="flex items-center gap-2 text-white/60 font-mono">
                    <Code2 className="h-4 w-4" />
                    <span>Building intelligent solutions</span>
                  </div>
                </div>

                <p className="text-lg text-white/80 max-w-lg leading-relaxed">
                  I build intelligent applications that solve real-world problems using machine learning and modern web
                  technologies. Passionate about creating scalable solutions that make a difference.
                </p>
              </div>

              <div className="flex gap-4">
                <Button
                  asChild
                  size="lg"
                  className="red-gradient hover:bg-tech-red-light text-white font-semibold red-glow font-mono"
                >
                  <Link href="/projects">
                    <FolderOpen className="h-5 w-5 mr-2" />
                    View Projects
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="border-white text-white hover:bg-white hover:text-black bg-transparent font-mono"
                >
                  <Link href="/contact">
                    <Mail className="h-5 w-5 mr-2" />
                    Get In Touch
                  </Link>
                </Button>
              </div>

              {/* Terminal-style status */}
              <div className="code-block p-4 rounded-lg font-mono text-sm">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 rounded-full bg-tech-red"></div>
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  <span className="ml-2 text-white/60">terminal</span>
                </div>
                <div className="space-y-1">
                  <div className="text-tech-red">$ whoami</div>
                  <div className="text-white">apurva-malasi: ML Engineer & Full-Stack Developer</div>
                  <div className="text-tech-red">$ status</div>
                  <div className="text-white">Available for new opportunities</div>
                  <div className="text-tech-red animate-pulse">$ _</div>
                </div>
              </div>
            </div>

            <div className="relative animate-fade-in">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-tech-red/20 to-black p-8 border border-tech-red/30 tech-card">
                <Image
                  src="/profile.png?height=400&width=400"
                  alt="Apurva Malasi"
                  width={400}
                  height={400}
                  className="rounded-xl object-cover w-full h-full"
                />
              </div>

              {/* Floating tech elements */}
              <div className="absolute -top-4 -right-4 code-block rounded-lg p-3 font-mono text-sm animate-red-glow">
                <div className="flex items-center gap-2">
                  <Cpu className="h-4 w-4 text-tech-red" />
                  <span className="text-white">AI/ML</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 code-block rounded-lg p-3 font-mono text-sm animate-red-glow">
                <div className="flex items-center gap-2">
                  <Code2 className="h-4 w-4 text-tech-red" />
                  <span className="text-white">Full-Stack</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-16 px-6 bg-tech-black-light/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="tech-gradient">Tech Arsenal</span>
              </h2>
              <p className="text-lg text-white/70 max-w-2xl mx-auto font-mono">
                Technologies and tools I use to bring ideas to life
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {techStack.map((tech, index) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className={`px-4 py-2 text-sm font-mono border transition-all duration-300 hover:scale-105 cursor-pointer ${
                    ["Python", "TensorFlow", "PyTorch"].includes(tech)
                      ? "border-tech-red bg-tech-red/20 text-tech-red hover:bg-tech-red/30"
                      : ["JavaScript", "TypeScript", "React", "Next.js"].includes(tech)
                      ? "border-white bg-white/10 text-white hover:bg-white/20"
                      : "border-white/30 bg-white/5 text-white/80 hover:bg-white/10"
                  }`}
                  style={{
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">
                Featured <span className="tech-gradient">Projects</span>
              </h2>
              <p className="text-lg text-white/70 max-w-2xl mx-auto font-mono">
                A selection of my recent work in machine learning and web development
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project, index) => (
                <Card key={project.id} className="tech-card group">
                  <div className="aspect-video relative overflow-hidden rounded-t-lg">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <CardContent className="p-6 space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold group-hover:text-tech-red transition-colors font-mono">
                        {project.name}
                      </h3>
                      <p className="text-white/70 text-sm leading-relaxed">{project.description}</p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="text-xs font-mono border-tech-red/50 text-tech-red/80 hover:bg-tech-red/10"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-2 pt-2">
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="flex-1 border-white/50 text-white hover:bg-white/10 bg-transparent font-mono"
                      >
                        <Link href={project.githubUrl} target="_blank">
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button
                asChild
                size="lg"
                className="red-gradient hover:bg-tech-red-light text-white font-semibold red-glow font-mono"
              >
                <Link href="/projects">View All Projects</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-tech-black-light/50 to-black matrix-bg">
        <div className="container mx-auto max-w-4xl text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Let's <span className="tech-gradient">Build Something</span>
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto font-mono">
              Ready to collaborate on your next project? Let's discuss how we can bring your ideas to life with
              cutting-edge technology.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="red-gradient hover:bg-tech-red-light text-white font-semibold red-glow font-mono"
            >
              <Link href="/contact">Start a Project</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="border-white text-white hover:bg-white hover:text-black bg-transparent font-mono"
            >
              <Link href="/blog">Read My Blog</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
