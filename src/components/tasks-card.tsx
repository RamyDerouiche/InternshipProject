import { CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MoreHorizontal, Check, GripVertical } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

const tasks = [
  {
    id: 1,
    name: "Rédiger le rapport de stage",
    completed: false,
    assignee: {
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "AB",
      color: "bg-primary",
    },
  },
  {
    id: 2,
    name: "Participer a la réunion quotidienne",
    completed: false,
    assignee: {
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "YK",
      color: "bg-pink-500",
    },
  },
  {
    id: 3,
    name: "Corriger le bug du formulaire",
    completed: true,
    assignee: {
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "LG",
      color: "bg-amber-500",
    },
  },
  {
    id: 4,
    name: "Concevoir la maquette de l'application",
    completed: false,
    assignee: {
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "OZ",
      color: "bg-orange-500",
    },
  },
  {
    id: 5,
    name: "Optimiser le code backend",
    completed: true,
    assignee: {
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "ST",
      color: "bg-yellow-500",
    },
  },
  {
    id: 6,
    name: "Sauvegarder la base de données",
    completed: false,
    assignee: {
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "BH",
      color: "bg-emerald-500",
    },
  },
]

export function TasksCard() {
  return (
    <>
      <CardHeader className="flex flex-row items-center justify-between pb-2 px-4">
        <div className="flex items-center">
          <GripVertical className="h-4 w-4 text-muted-foreground mr-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          <CardTitle className="text-sm font-medium">Taches</CardTitle>
        </div>
        <Button variant="ghost" size="icon" className="h-7 w-7">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent className="px-4 pb-4 h-[250px] overflow-auto">
        <div className="space-y-3">
          {tasks.map((task) => (
            <div key={task.id} className="flex items-center justify-between">
              <div className="flex items-center">
                <div
                  className={cn(
                    "w-4 h-4 rounded-full border flex items-center justify-center mr-3",
                    task.completed ? "bg-primary/20 border-primary" : "border-muted-foreground/30",
                  )}
                >
                  {task.completed && <Check className="h-2.5 w-2.5 text-primary" />}
                </div>
                <span className={cn("text-xs", task.completed && "line-through text-muted-foreground")}>
                  {task.name}
                </span>
              </div>
              <div className="flex items-center">
                <Avatar className="h-5 w-5">
                  <AvatarImage src={task.assignee.avatar || "/placeholder.svg"} />
                  <AvatarFallback className={task.assignee.color}>{task.assignee.initials}</AvatarFallback>
                </Avatar>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </>
  )
}
