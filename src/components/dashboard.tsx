import { useState, useEffect } from "react"
import { DndContext, type DragEndEvent, closestCenter } from "@dnd-kit/core"
import { SortableContext, arrayMove, verticalListSortingStrategy } from "@dnd-kit/sortable"

import { VertexSidebar } from "./vertex-sidebar"
import { DraggableCards } from "./draggable-cards"
import { ThemeToggle } from "./theme-toggle"
import { Button } from "./ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

// Dados iniciais do menu
const initialMenuItems = [
  { id: "dashboard", label: "Dashboard", icon: "LayoutDashboard" },
  { id: "games", label: "Games", icon: "Gamepad2" },
  { id: "tasks", label: "Tasks", icon: "CheckCircle" },
  { id: "team", label: "Team", icon: "Users" },
  { id: "meetings", label: "Meetings", icon: "CalendarDays" },
  { id: "jira", label: "Jira", icon: "Trello" },
  { id: "discord", label: "Discord", icon: "MessageSquare" },
  { id: "slack", label: "Slack", icon: "MessageCircle" },
  { id: "analytics", label: "Analytics", icon: "LineChart" },
  { id: "settings", label: "Settings", icon: "Settings" },
]

// Dados iniciais dos cards
const initialCards = [
  { id: "games", type: "games" },
  { id: "tasks", type: "tasks" },
  { id: "team", type: "team" },
  { id: "jira", type: "jira" },
  { id: "discord", type: "discord" },
  { id: "slack", type: "slack" },
  { id: "meetings", type: "meetings" },
]

// Adicionar a função para obter a saudação baseada na hora
const getGreeting = () => {
  const hour = new Date().getHours()
  if (hour >= 5 && hour < 12) return "Good morning"
  if (hour >= 12 && hour < 18) return "Good afternoon"
  return "Good evening"
}

export default function Dashboard() {
  const [menuItems, setMenuItems] = useState(initialMenuItems)
  const [cards, setCards] = useState(initialCards)
  const [activeUser, setActiveUser] = useState({
    name: "Alex Morgan",
    role: "Game Developer",
    avatar: "/placeholder.svg?height=40&width=40",
  })
  const [greeting, setGreeting] = useState("")

  // Atualizar a saudação quando o componente montar
  useEffect(() => {
    setGreeting(getGreeting())
  }, [])

  // Manipulador para quando termina o arrasto do menu
  const handleMenuDragEnd = (event: DragEndEvent) => {
    const { active, over } = event

    if (over && active.id !== over.id) {
      setMenuItems((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id)
        const newIndex = items.findIndex((item) => item.id === over.id)

        return arrayMove(items, oldIndex, newIndex)
      })
    }
  }

  // Manipulador para quando termina o arrasto dos cards
  const handleCardsDragEnd = (event: DragEndEvent) => {
    const { active, over } = event

    if (over && active.id !== over.id) {
      setCards((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id)
        const newIndex = items.findIndex((item) => item.id === over.id)

        return arrayMove(items, oldIndex, newIndex)
      })
    }
  }

  return (
    <div className="flex min-h-screen font-['Inter',sans-serif]">
      <DndContext collisionDetection={closestCenter} onDragEnd={handleMenuDragEnd}>
        <SortableContext items={menuItems.map((item) => item.id)} strategy={verticalListSortingStrategy}>
          <VertexSidebar items={menuItems} activeUser={activeUser} />
        </SortableContext>
      </DndContext>

      <main className="flex-1 p-6">
        <div className="mb-6 flex justify-between items-center">
          <div>
            <h1 className="text-xl font-semibold">{`${greeting}, ${activeUser.name.split(" ")[0]}!`}</h1>
            <p className="text-sm text-muted-foreground">Your game development dashboard</p>
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button variant="default" className="bg-primary hover:bg-primary/90">
              Join Community
            </Button>
            <Avatar className="h-9 w-9">
              <AvatarImage src={activeUser.avatar || "/placeholder.svg"} alt={activeUser.name} />
              <AvatarFallback>AM</AvatarFallback>
            </Avatar>
          </div>
        </div>

        <DndContext collisionDetection={closestCenter} onDragEnd={handleCardsDragEnd}>
          <SortableContext items={cards.map((card) => card.id)} strategy={verticalListSortingStrategy}>
            <DraggableCards cards={cards} />
          </SortableContext>
        </DndContext>
      </main>
    </div>
  )
}
