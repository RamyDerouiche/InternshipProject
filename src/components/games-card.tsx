import { CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MoreHorizontal, Plus, GripVertical } from "lucide-react"

// Dados dos projetos de jogos
const games = [
  {
    id: "cosmic-adventure",
    name: "Cosmic Adventure",
    progress: 65,
    status: "In Development",
    image: "/placeholder.svg?height=80&width=120",
  },
  {
    id: "mystic-realms",
    name: "Mystic Realms",
    progress: 40,
    status: "Concept Phase",
    image: "/placeholder.svg?height=80&width=120",
  },
  {
    id: "robot-uprising",
    name: "Robot Uprising",
    progress: 85,
    status: "Beta Testing",
    image: "/placeholder.svg?height=80&width=120",
  },
  {
    id: "space-odyssey",
    name: "Space Odyssey",
    progress: 20,
    status: "Pre-production",
    image: "/placeholder.svg?height=80&width=120",
  },
]

export function GamesCard() {
  return (
    <>
      <CardHeader className="flex flex-row items-center justify-between pb-2 px-4">
        <div className="flex items-center">
          <GripVertical className="h-4 w-4 text-muted-foreground mr-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          <CardTitle className="text-sm font-medium">Game Projects</CardTitle>
        </div>
        <Button variant="ghost" size="icon" className="h-7 w-7">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent className="px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="flex flex-col items-center justify-center p-3 border border-dashed rounded-md h-[140px]">
            <Plus className="h-6 w-6 mb-2 text-muted-foreground" />
            <span className="text-xs">New Game Project</span>
          </div>

          {games.map((game) => (
            <div key={game.id} className="flex flex-col border rounded-md overflow-hidden">
              <img src={game.image || "/placeholder.svg"} alt={game.name} className="w-full h-20 object-cover" />
              <div className="p-3">
                <div className="font-medium text-xs mb-1">{game.name}</div>
                <div className="text-[10px] text-muted-foreground mb-2">{game.status}</div>
                <div className="w-full bg-secondary rounded-full h-1.5">
                  <div className="bg-primary h-1.5 rounded-full" style={{ width: `${game.progress}%` }}></div>
                </div>
                <div className="text-[10px] text-right mt-1 text-muted-foreground">{game.progress}%</div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </>
  )
}
