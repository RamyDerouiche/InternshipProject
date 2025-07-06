import { CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MoreHorizontal, GripVertical, Hash, MessageSquare, ArrowRight } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// Dados do Slack
const slackChannels = [
  {
    id: "general",
    name: "general",
    unread: 3,
  },
  {
    id: "game-dev",
    name: "game-dev",
    unread: 8,
  },
  {
    id: "design",
    name: "design",
    unread: 0,
  },
  {
    id: "announcements",
    name: "announcements",
    unread: 1,
  },
]

// Dados das mensagens diretas
const directMessages = [
  {
    id: "alex",
    name: "Alex Morgan",
    status: "online",
    avatar: "/placeholder.svg?height=32&width=32",
    initials: "AM",
    color: "bg-primary",
    unread: 2,
  },
  {
    id: "sarah",
    name: "Sarah Lee",
    status: "online",
    avatar: "/placeholder.svg?height=32&width=32",
    initials: "SL",
    color: "bg-pink-500",
    unread: 0,
  },
  {
    id: "james",
    name: "James Wilson",
    status: "offline",
    avatar: "/placeholder.svg?height=32&width=32",
    initials: "JW",
    color: "bg-amber-500",
    unread: 0,
  },
]

export function SlackCard() {
  return (
    <>
      <CardHeader className="flex flex-row items-center justify-between pb-2 px-4">
        <div className="flex items-center">
          <GripVertical className="h-4 w-4 text-muted-foreground mr-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          <CardTitle className="text-sm font-medium">Slack</CardTitle>
        </div>
        <Button variant="ghost" size="icon" className="h-7 w-7">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent className="px-4 pb-4 h-[350px] overflow-auto">
        <div className="mb-4">
          <h3 className="text-xs font-medium mb-2">Channels</h3>
          <div className="space-y-1">
            {slackChannels.map((channel) => (
              <div key={channel.id} className="flex items-center justify-between p-1.5 rounded-md hover:bg-secondary">
                <div className="flex items-center">
                  <Hash className="h-3.5 w-3.5 mr-2 text-muted-foreground" />
                  <span className="text-xs">{channel.name}</span>
                </div>
                {channel.unread > 0 && (
                  <div className="bg-primary text-primary-foreground text-[10px] rounded-full px-1.5 min-w-[18px] text-center">
                    {channel.unread}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <h3 className="text-xs font-medium mb-2">Direct Messages</h3>
          <div className="space-y-1">
            {directMessages.map((dm) => (
              <div key={dm.id} className="flex items-center justify-between p-1.5 rounded-md hover:bg-secondary">
                <div className="flex items-center">
                  <div className="relative mr-2">
                    <Avatar className="h-5 w-5">
                      <AvatarImage src={dm.avatar || "/placeholder.svg"} />
                      <AvatarFallback className={dm.color}>{dm.initials}</AvatarFallback>
                    </Avatar>
                    <div
                      className={`absolute bottom-0 right-0 h-1.5 w-1.5 rounded-full border border-background ${
                        dm.status === "online" ? "bg-green-500" : "bg-gray-400"
                      }`}
                    ></div>
                  </div>
                  <span className="text-xs">{dm.name}</span>
                </div>
                {dm.unread > 0 && (
                  <div className="bg-primary text-primary-foreground text-[10px] rounded-full px-1.5 min-w-[18px] text-center">
                    {dm.unread}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <h3 className="text-xs font-medium">Quick Actions</h3>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <Button variant="outline" size="sm" className="text-xs h-8">
              <MessageSquare className="h-3 w-3 mr-1" /> New Message
            </Button>
            <Button variant="outline" size="sm" className="text-xs h-8">
              <Hash className="h-3 w-3 mr-1" /> Join Channel
            </Button>
          </div>
          <Button variant="default" size="sm" className="text-xs w-full mt-2 bg-primary hover:bg-primary/90">
            Open Slack <ArrowRight className="ml-2 h-3 w-3" />
          </Button>
        </div>
      </CardContent>
    </>
  )
}
