import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Github, ExternalLink, Search, Filter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// This would typically come from your database
const projects = [
  {
    id: 1,
    name: "Deploying Deep Learning Models on MCUs",
    description: "Deep learning model using CNN architecture with 90% accuracy deployed on resource constrained microcontrollers",
    technologies: ["Python", "TensorFlow", "TensorFlow-Lite", "Seaborn", "Matplotlib"],
    image: "/project1.jpg",
    githubUrl: "https://github.com/ApurvaMalasi23/Optimizing-TinyML.git",
    liveUrl: "https://ml-classifier-demo.vercel.app",
  },
]

const categories = ["All", "Machine Learning", "Web Development", "Data Science"]

export default function ProjectsPage() {
  return (
    <div className="min-h-screen py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12">
          {/* Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold">
              My <span className="tech-gradient">Projects</span>
            </h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto font-mono">
              A comprehensive collection of my work in machine learning, web development, and data science
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between animate-fade-in">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-tech-red" />
              <Input
                placeholder="Search projects..."
                className="pl-10 bg-tech-black-light/50 border-tech-red/30 focus:border-tech-red font-mono text-white placeholder:text-white/50"
              />
            </div>

            <div className="flex gap-4">
              <Select defaultValue="All">
                <SelectTrigger className="w-48 bg-tech-black-light/50 border-tech-red/30 font-mono text-white">
                  <Filter className="h-4 w-4 mr-2 text-tech-red" />
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent className="bg-black border-tech-red/30">
                  {categories.map((category) => (
                    <SelectItem key={category} value={category} className="font-mono text-white hover:bg-tech-red/20">
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select defaultValue="newest">
                <SelectTrigger className="w-48 bg-tech-black-light/50 border-white/30 font-mono text-white">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent className="bg-black border-white/30">
                  <SelectItem value="newest" className="font-mono text-white hover:bg-white/10">
                    Newest First
                  </SelectItem>
                  <SelectItem value="oldest" className="font-mono text-white hover:bg-white/10">
                    Oldest First
                  </SelectItem>
                  <SelectItem value="name" className="font-mono text-white hover:bg-white/10">
                    Name A-Z
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={project.id}
                className="tech-card group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video relative overflow-hidden rounded-t-lg">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {project.featured && (
                    <div className="absolute top-4 left-4">
                      <Badge className="red-gradient text-white font-mono font-semibold">Featured</Badge>
                    </div>
                  )}
                  <div className="absolute top-4 right-4">
                    <Badge
                      variant="secondary"
                      className={`font-mono ${
                        project.category === "Machine Learning"
                          ? "bg-tech-red/20 text-tech-red border-tech-red/30"
                          : project.category === "Web Development"
                            ? "bg-white/20 text-white border-white/30"
                            : "bg-white/10 text-white/80 border-white/20"
                      }`}
                    >
                      {project.category}
                    </Badge>
                  </div>
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
                        className="text-xs font-mono border-tech-red/30 text-tech-red/80 hover:bg-tech-red/10 transition-colors"
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
                      className="flex-1 border-white/50 text-white hover:bg-white/10 font-mono bg-transparent"
                    >
                      <Link href={project.githubUrl} target="_blank">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Link>
                    </Button>
                  </div>

                  <Button
                    variant="ghost"
                    size="sm"
                    asChild
                    className="w-full hover:text-tech-red hover:bg-tech-red/10 font-mono"
                  >
                    <Link href={`/projects/${project.id}`}>
                      Read More <span className="ml-1 text-tech-red">→</span>
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center">
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-black bg-transparent font-mono"
            >
              Load More Projects
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
