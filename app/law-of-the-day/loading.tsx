import { Scale } from "lucide-react"

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-primary/5">
      <div className="flex flex-col items-center gap-4">
        <div className="relative">
          <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center animate-pulse">
            <Scale className="h-8 w-8 text-primary" />
          </div>
          <div className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-accent animate-ping" />
        </div>
        <div className="text-center">
          <p className="font-medium">Loading Law of the Day</p>
          <p className="text-sm text-muted-foreground">Curating legal knowledge...</p>
        </div>
      </div>
    </div>
  )
}
