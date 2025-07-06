"use client"

import type React from "react"
import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"
import {
  LayoutDashboard,
  Gamepad2,
  CheckCircle,
  Users,
  CalendarDays,
  Trello,
  MessageSquare,
  MessageCircle,
  LineChart,
  Settings,
  GripVertical,
} from "lucide-react"

// Logo do Vertex Studios
const VertexLogo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
    <line x1="12" y1="22" x2="12" y2="15.5" />
    <polyline points="22 8.5 12 15.5 2 8.5" />
    <line x1="2" y1="15.5" x2="12" y2="8.5" />
    <line x1="12" y1="8.5" x2="22" y2="15.5" />
  </svg>
)

// Mapeamento de ícones
const iconMap: Record<string, React.ReactNode> = {
  LayoutDashboard: <LayoutDashboard size={16} />,
  Gamepad2: <Gamepad2 size={16} />,
  CheckCircle: <CheckCircle size={16} />,
  Users: <Users size={16} />,
  CalendarDays: <CalendarDays size={16} />,
  Trello: <Trello size={16} />,
  MessageSquare: <MessageSquare size={16} />,
  MessageCircle: <MessageCircle size={16} />,
  LineChart: <LineChart size={16} />,
  Settings: <Settings size={16} />,
}

// Componente para cada item do menu - modificado para ser totalmente arrastável
const SortableMenuItem = ({ item }: { item: { id: string; label: string; icon: string } }) => {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: item.id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 10 : 1,
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={cn(
        "flex items-center p-2.5 rounded-md cursor-grab active:cursor-grabbing mb-1 group",
        isDragging ? "bg-secondary opacity-80" : "hover:bg-secondary",
      )}
      {...attributes}
      {...listeners}
    >
      <GripVertical className="h-4 w-4 text-muted-foreground mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="mr-3 text-muted-foreground">{iconMap[item.icon]}</div>
      <span className="text-xs font-medium">{item.label}</span>
    </div>
  )
}

// Modificar o componente Sidebar para incluir o logotipo e torná-lo sticky
export function VertexSidebar({
  items,
  activeUser,
}: {
  items: Array<{ id: string; label: string; icon: string }>
  activeUser: { name: string; role: string; avatar: string }
}) {
  return (
    <div className="w-60 border-r sticky top-0 h-screen flex flex-col font-['Inter',sans-serif]">
      {/* Adicionar o logotipo */}
      <div className="p-4 border-b">
        <div className="flex items-center">
          <div className="text-primary">
            <VertexLogo />
          </div>
          <div className="ml-2">
            <span className="font-semibold text-foreground">Vertex</span>
            <span className="text-primary font-semibold"> Studios</span>
          </div>
        </div>
      </div>

      <div className="flex-1 py-4 px-3 overflow-y-auto">
        {items.map((item) => (
          <SortableMenuItem key={item.id} item={item} />
        ))}
      </div>

      <div className="p-4 border-t">
        <div className="flex items-center">
          <Avatar className="h-7 w-7 mr-2">
            <AvatarImage src={activeUser.avatar || "/placeholder.svg"} alt={activeUser.name} />
            <AvatarFallback>AM</AvatarFallback>
          </Avatar>
          <div>
            <div className="font-medium text-xs">{activeUser.name}</div>
            <div className="text-[10px] text-muted-foreground">{activeUser.role}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
