import { LoadingSpinner } from "@/components/ui/loading-spinner"

interface LoadingStateProps {
  title?: string
  description?: string
}

export function LoadingState({
  title = "Loading...",
  description = "Please wait while we process your request.",
}: LoadingStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div className="mb-4">
        <LoadingSpinner size="lg" />
      </div>
      <h3 className="text-lg font-medium">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  )
}
