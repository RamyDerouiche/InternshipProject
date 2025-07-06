import { CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MoreHorizontal, GripVertical, Users, Hash } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// Dados do Discord
const discordChannels = [
  {
    id: "general",
    name: "general",
    unread: 5,
    type: "text",
  },
  {
    id: "game-dev",
    name: "game-dev",
    unread: 12,
    type: "text",
  },
  {
    id: "art-assets",
    name: "art-assets",
    unread: 0,
    type: "text",
  },
  {
    id: "team-meeting",
    name: "Team Meeting",
    users: 3,
    type: "voice",
  },
]

// Dados das mensagens recentes
const recentMessages = [
  {
    id: 1,
    user: {
      name: "Alex Morgan",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "AM",
      color: "bg-primary",
    },
    message: "Just pushed the new character controller to the repo",
    time: "10 min ago",
    channel: "game-dev",
  },
  {
    id: 2,
    user: {
      name: "Sarah Lee",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "SL",
      color: "bg-pink-500",
    },
    message: "The new level design is ready for review",
    time: "25 min ago",
    channel: "game-dev",
  },
  {
    id: 3,
    user: {
      name: "James Wilson",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "JW",
      color: "bg-amber-500",
    },
    message: "Anyone available for a quick meeting?",
    time: "1 hour ago",
    channel: "general",
  },
]

export function DiscordCard() {
  return (
    <>
      <CardHeader className="flex flex-row items-center justify-between pb-2 px-4">
        <div className="flex items-center">
          <GripVertical className="h-4 w-4 text-muted-foreground mr-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          <CardTitle className="text-sm font-medium">Discord</CardTitle>
        </div>
        <Button variant="ghost" size="icon" className="h-7 w-7">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent className="px-4 pb-4 h-[350px] overflow-auto">
        <div className="mb-4">
          <h3 className="text-xs font-medium mb-2">Channels</h3>
          <div className="space-y-1">
            {discordChannels.map((channel) => (
              <div key={channel.id} className="flex items-center justify-between p-1.5 rounded-md hover:bg-secondary">
                <div className="flex items-center">
                  {channel.type === "text" ? (
                    <Hash className="h-3.5 w-3.5 mr-2 text-muted-foreground" />
                  ) : (
                    <Users className="h-3.5 w-3.5 mr-2 text-muted-foreground" />
                  )}
                  <span className="text-xs">{channel.name}</span>
                </div>
                {channel.type === "text" && channel.unread > 0 ? (
                  <div className="bg-primary text-primary-foreground text-[10px] rounded-full px-1.5 min-w-[18px] text-center">
                    {channel.unread}
                  </div>
                ) : channel.type === "voice" ? (
                  <div className="text-[10px] text-muted-foreground">{channel.users} users</div>
                ) : null}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xs font-medium mb-2">Recent Messages</h3>
          <div className="space-y-3">
            {recentMessages.map((msg) => (
              <div key={msg.id} className="p-2 border rounded-md">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center">
                    <Avatar className="h-5 w-5 mr-2">
                      <AvatarImage src={msg.user.avatar || "/placeholder.svg"} />
                      <AvatarFallback className={msg.user.color}>{msg.user.initials}</AvatarFallback>
                    </Avatar>
                    <span className="text-xs font-medium">{msg.user.name}</span>
                  </div>
                  <div className="flex items-center">
                    <Hash className="h-3 w-3 mr-1 text-muted-foreground" />
                    <span className="text-[10px] text-muted-foreground">{msg.channel}</span>
                  </div>
                </div>
                <p className="text-xs mb-1">{msg.message}</p>
                <div className="text-[10px] text-muted-foreground">{msg.time}</div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </>
  )
}
