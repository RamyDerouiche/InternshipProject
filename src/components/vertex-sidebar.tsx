"use client"

import type React from "react"
import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { NavLink } from "react-router-dom"
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

const SortableMenuItem = ({ item }: { item: { id: string; label: string; icon: string; path: string } }) => {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: item.id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 10 : 1,
  }

  return (
    <NavLink
      to={item.path}
      ref={setNodeRef}
      style={style}
      className={({ isActive }) =>
        cn(
          "flex items-center p-2.5 rounded-md cursor-grab active:cursor-grabbing mb-1 group",
          isDragging && "opacity-80",
          isActive ? "text-red-600" : "hover:text-red-600"
        )
      }
      {...attributes}
      {...listeners}
    >
      <GripVertical className="h-4 w-4 text-muted-foreground mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="mr-3 text-muted-foreground">{iconMap[item.icon]}</div>
      <span className="text-xs font-medium">{item.label}</span>
    </NavLink>
  )
}

export function VertexSidebar({
  items,
  activeUser,
  onLogout,
}: {
  items: Array<{ id: string; label: string; icon: string; path: string }>
  activeUser: { name: string; role: string; avatar: string }
  onLogout?: () => void
}) {
  return (
    <div className="w-60 border-r sticky top-0 h-screen flex flex-col font-['Inter',sans-serif] bg-white">
      <div className="p-4 border-b">
        <span className="font-semibold text-foreground">SmartAssign</span>
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
            <AvatarFallback>Us</AvatarFallback>
          </Avatar>
          <div>
            <div className="font-medium text-xs">{activeUser.name}</div>
            <div className="text-[10px] text-muted-foreground">{activeUser.role}</div>
          </div>
        </div>
        {onLogout && (
          <button
            type="button"
            onClick={onLogout}
            className="mt-3 text-xs text-left bg-red-600 hover:bg-red-600 text-white"
          >
            Logout
          </button>
        )}
      </div>
    </div>
  )
}
