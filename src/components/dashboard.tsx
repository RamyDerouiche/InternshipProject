import { useState, useEffect } from "react"
import { DndContext, type DragEndEvent, closestCenter } from "@dnd-kit/core"
import { SortableContext, arrayMove, verticalListSortingStrategy } from "@dnd-kit/sortable"

import { DraggableCards } from "./draggable-cards"
import { ThemeToggle } from "./theme-toggle"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"


const initialCards = [
  { id: "games", type: "games" },
  { id: "tasks", type: "tasks" },
  { id: "team", type: "team" },
  { id: "jira", type: "jira" },
  { id: "discord", type: "discord" },
  { id: "slack", type: "slack" },
  { id: "meetings", type: "meetings" },
]

const getGreeting = () => {
  const hour = new Date().getHours()
  if (hour >= 5 && hour < 12) return "Good morning"
  if (hour >= 12 && hour < 18) return "Good afternoon"
  return "Good evening"
}

export default function Dashboard() {
  const [cards, setCards] = useState(initialCards)
  const [activeUser, setActiveUser] = useState({
    name: "User2",
    role: "web Developer",
    avatar: "/placeholder.svg?height=40&width=40",
  })
  const [greeting, setGreeting] = useState("")

  useEffect(() => {
    setGreeting(getGreeting())
  }, [])

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
    <div className="flex-1 p-6 bg-white min-h-screen font-['Inter',sans-serif]">
        <div className="mb-6 flex justify-between items-center">
          <div>
            <h1 className="text-xl font-semibold">{`${greeting}, ${activeUser.name.split(" ")[0]}!`}</h1>
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
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
      </div>
  )
}
