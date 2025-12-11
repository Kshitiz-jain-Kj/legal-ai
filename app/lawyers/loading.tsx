import { Skeleton } from "@/components/ui/skeleton"

export default function LawyersLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 pb-20 md:pb-0">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur-lg">
        <div className="container flex h-16 items-center justify-between">
          <Skeleton className="h-8 w-32" />
          <Skeleton className="h-9 w-20" />
        </div>
      </header>
      <main className="container py-6">
        <div className="text-center mb-8">
          <Skeleton className="h-10 w-64 mx-auto mb-3" />
          <Skeleton className="h-5 w-96 mx-auto" />
        </div>
        <div className="mb-6">
          <Skeleton className="h-10 w-full mb-4" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <Skeleton key={i} className="h-64 w-full rounded-lg" />
          ))}
        </div>
      </main>
    </div>
  )
}
