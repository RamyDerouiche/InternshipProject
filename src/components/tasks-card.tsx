import { CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MoreHorizontal, Check, GripVertical, MessageSquare, ListChecks } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

// Dados das tarefas
const tasks = [
  {
    id: 1,
    name: "Implement character controller",
    completed: false,
    assignee: {
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "AM",
      color: "bg-primary",
    },
    metrics: {
      comments: 5,
      subtasks: 3,
    },
  },
  {
    id: 2,
    name: "Design level 3 environment",
    completed: false,
    assignee: {
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "JD",
      color: "bg-pink-500",
    },
    metrics: {
      comments: 8,
      subtasks: 2,
    },
  },
  {
    id: 3,
    name: "Fix collision detection bug",
    completed: true,
    assignee: {
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "RK",
      color: "bg-amber-500",
    },
    metrics: {
      comments: 12,
      subtasks: 0,
    },
  },
  {
    id: 4,
    name: "Create enemy AI behavior",
    completed: false,
    assignee: {
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "SL",
      color: "bg-orange-500",
    },
    metrics: {
      comments: 3,
      subtasks: 4,
    },
  },
  {
    id: 5,
    name: "Optimize rendering performance",
    completed: true,
    assignee: {
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "TW",
      color: "bg-yellow-500",
    },
    metrics: {
      comments: 7,
      subtasks: 2,
    },
  },
  {
    id: 6,
    name: "Implement save/load system",
    completed: false,
    assignee: {
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "BH",
      color: "bg-emerald-500",
    },
    metrics: {
      comments: 4,
      subtasks: 5,
    },
  },
]

export function TasksCard() {
  return (
    <>
      <CardHeader className="flex flex-row items-center justify-between pb-2 px-4">
        <div className="flex items-center">
          <GripVertical className="h-4 w-4 text-muted-foreground mr-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          <CardTitle className="text-sm font-medium">My Tasks</CardTitle>
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
              <div className="flex items-center space-x-3">
                <Avatar className="h-5 w-5">
                  <AvatarImage src={task.assignee.avatar || "/placeholder.svg"} />
                  <AvatarFallback className={task.assignee.color}>{task.assignee.initials}</AvatarFallback>
                </Avatar>
                <div className="flex items-center text-[10px] text-muted-foreground">
                  <MessageSquare className="h-3 w-3 mr-1" />
                  <span>{task.metrics.comments}</span>
                </div>
                <div className="flex items-center text-[10px] text-muted-foreground">
                  <ListChecks className="h-3 w-3 mr-1" />
                  <span>{task.metrics.subtasks}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </>
  )
}
