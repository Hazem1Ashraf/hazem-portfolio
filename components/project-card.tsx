import { ExternalLink, Github } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string 
  image: string
  tags: string[]
  github?: string
  live?: string
  featured?: boolean
}

export function ProjectCard({ title, description, image, tags, github, live, featured = false }: ProjectCardProps) {
  return (
    <div
      className={`group bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all ${
        featured ? "md:col-span-2" : ""
      }`}
    >
      <div className="relative h-48 md:h-64 overflow-hidden bg-muted">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {featured && (
          <div className="absolute top-4 right-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded">
            Featured
          </div>
        )}
      </div>

      <div className="p-6 space-y-4">
        <h3 className="text-xl font-semibold text-foreground">{title}</h3>

        <p className="text-muted-foreground leading-relaxed">{description}</p>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="px-2.5 py-1 text-xs bg-primary/10 text-primary rounded">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-3 pt-2">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Github size={18} />
              Code
            </a>
          )}
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <ExternalLink size={18} />
              Live
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
