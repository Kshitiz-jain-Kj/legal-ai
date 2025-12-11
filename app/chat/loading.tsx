import { Scale } from "lucide-react"

export default function Loading() {
  return (
    <div className="min-h-screen bg-muted/30 flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="h-12 w-12 rounded-xl bg-primary flex items-center justify-center animate-pulse">
          <Scale className="h-6 w-6 text-primary-foreground" />
        </div>
        <p className="text-muted-foreground">Loading chat...</p>
      </div>
    </div>
  )
}
