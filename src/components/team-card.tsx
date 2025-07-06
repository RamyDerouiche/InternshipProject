import { CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MoreHorizontal, GripVertical } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// Dados da equipe
const teamMembers = [
  {
    id: "alex",
    name: "Alex Morgan",
    role: "Lead Developer",
    avatar: "/placeholder.svg?height=40&width=40",
    initials: "AM",
    status: "online",
    color: "bg-primary",
  },
  {
    id: "sarah",
    name: "Sarah Lee",
    role: "Game Designer",
    avatar: "/placeholder.svg?height=40&width=40",
    initials: "SL",
    status: "online",
    color: "bg-pink-500",
  },
  {
    id: "james",
    name: "James Wilson",
    role: "3D Artist",
    avatar: "/placeholder.svg?height=40&width=40",
    initials: "JW",
    status: "offline",
    color: "bg-amber-500",
  },
  {
    id: "maria",
    name: "Maria Garcia",
    role: "Sound Designer",
    avatar: "/placeholder.svg?height=40&width=40",
    initials: "MG",
    status: "online",
    color: "bg-orange-500",
  },
  {
    id: "david",
    name: "David Kim",
    role: "QA Tester",
    avatar: "/placeholder.svg?height=40&width=40",
    initials: "DK",
    status: "offline",
    color: "bg-yellow-500",
  },
]

export function TeamCard() {
  return (
    <>
      <CardHeader className="flex flex-row items-center justify-between pb-2 px-4">
        <div className="flex items-center">
          <GripVertical className="h-4 w-4 text-muted-foreground mr-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          <CardTitle className="text-sm font-medium">Team</CardTitle>
        </div>
        <Button variant="ghost" size="icon" className="h-7 w-7">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent className="px-4 pb-4 h-[250px] overflow-auto">
        <div className="space-y-4">
          {teamMembers.map((member) => (
            <div key={member.id} className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="relative">
                  <Avatar className="h-8 w-8 mr-3">
                    <AvatarImage src={member.avatar || "/placeholder.svg"} />
                    <AvatarFallback className={member.color}>{member.initials}</AvatarFallback>
                  </Avatar>
                  <div
                    className={`absolute bottom-0 right-2 h-2.5 w-2.5 rounded-full border-2 border-background ${
                      member.status === "online" ? "bg-green-500" : "bg-gray-400"
                    }`}
                  ></div>
                </div>
                <div>
                  <div className="text-xs font-medium">{member.name}</div>
                  <div className="text-[10px] text-muted-foreground">{member.role}</div>
                </div>
              </div>
              <Button variant="ghost" size="sm" className="h-7 text-xs">
                Message
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </>
  )
}
