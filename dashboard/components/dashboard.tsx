"use client"

import { useState, useEffect } from "react"
import { DndContext, type DragEndEvent, closestCenter } from "@dnd-kit/core"
import { SortableContext, arrayMove, verticalListSortingStrategy } from "@dnd-kit/sortable"

import { Sidebar } from "./sidebar"
import { DraggableCards } from "./draggable-cards"

// Dados iniciais do menu
const initialMenuItems = [
  { id: "dashboard", label: "Dashboard", icon: "LayoutDashboard" },
  { id: "project", label: "Project", icon: "Briefcase" },
  { id: "task", label: "Task", icon: "CheckCircle" },
  { id: "team", label: "Team", icon: "Users" },
  { id: "client", label: "Client", icon: "UserCircle" },
  { id: "finance", label: "Finance", icon: "BarChart3" },
  { id: "analytics", label: "Analytics", icon: "LineChart" },
  { id: "notifications", label: "Notifications", icon: "Bell" },
  { id: "support", label: "Support", icon: "HeadphonesIcon" },
  { id: "settings", label: "Settings", icon: "Settings" },
]

// Dados iniciais dos cards
const initialCards = [
  { id: "projects", type: "projects" },
  { id: "tasks", type: "tasks" },
  { id: "team", type: "team" },
  { id: "finance", type: "finance" },
  { id: "activities", type: "activities" },
]

// Adicionar a função para obter a saudação baseada na hora
const getGreeting = () => {
  const hour = new Date().getHours()
  if (hour >= 5 && hour < 12) return "Bom dia"
  if (hour >= 12 && hour < 18) return "Boa tarde"
  return "Boa noite"
}

export default function Dashboard() {
  const [menuItems, setMenuItems] = useState(initialMenuItems)
  const [cards, setCards] = useState(initialCards)
  const [activeUser, setActiveUser] = useState({
    name: "John Doe",
    role: "Support",
    avatar: "/images/avatar2.png", // Atualizado para usar o avatar fornecido
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
    <div className="flex min-h-screen bg-gray-100 font-['Inter',sans-serif]">
      <DndContext collisionDetection={closestCenter} onDragEnd={handleMenuDragEnd}>
        <SortableContext items={menuItems.map((item) => item.id)} strategy={verticalListSortingStrategy}>
          <Sidebar items={menuItems} activeUser={activeUser} />
        </SortableContext>
      </DndContext>

      <main className="flex-1 p-6">
        <div className="mb-6">
          <h1 className="text-xl font-semibold text-gray-800">
            {`Olá ${activeUser.name.split(" ")[0]}, ${greeting}!`}
          </h1>
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
