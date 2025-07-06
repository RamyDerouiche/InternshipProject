import { CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MoreHorizontal, GripVertical, Calendar, Clock, Video, Users } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// Dados das reuniões
const meetings = [
  {
    id: 1,
    title: "Daily Standup",
    time: "9:30 AM - 10:00 AM",
    date: "Today",
    participants: 8,
    isVideo: true,
  },
  {
    id: 2,
    title: "Game Design Review",
    time: "11:00 AM - 12:00 PM",
    date: "Today",
    participants: 5,
    isVideo: true,
  },
  {
    id: 3,
    title: "Sprint Planning",
    time: "2:00 PM - 3:30 PM",
    date: "Today",
    participants: 12,
    isVideo: true,
  },
  {
    id: 4,
    title: "Art Team Sync",
    time: "10:00 AM - 11:00 AM",
    date: "Tomorrow",
    participants: 6,
    isVideo: false,
  },
  {
    id: 5,
    title: "Client Demo",
    time: "3:00 PM - 4:00 PM",
    date: "Tomorrow",
    participants: 15,
    isVideo: true,
  },
]

// Dados dos participantes
const participants = [
  {
    id: "alex",
    name: "Alex",
    avatar: "/placeholder.svg?height=32&width=32",
    initials: "AM",
    color: "bg-primary",
  },
  {
    id: "sarah",
    name: "Sarah",
    avatar: "/placeholder.svg?height=32&width=32",
    initials: "SL",
    color: "bg-pink-500",
  },
  {
    id: "james",
    name: "James",
    avatar: "/placeholder.svg?height=32&width=32",
    initials: "JW",
    color: "bg-amber-500",
  },
]

export function MeetingsCard() {
  return (
    <>
      <CardHeader className="flex flex-row items-center justify-between pb-2 px-4">
        <div className="flex items-center">
          <GripVertical className="h-4 w-4 text-muted-foreground mr-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          <CardTitle className="text-sm font-medium">Meetings</CardTitle>
        </div>
        <Button variant="ghost" size="icon" className="h-7 w-7">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent className="px-4 pb-4 h-[350px] overflow-auto">
        <div className="space-y-4">
          {meetings.map((meeting) => (
            <div key={meeting.id} className="p-3 border rounded-md">
              <div className="flex justify-between items-start mb-2">
                <div className="text-xs font-medium">{meeting.title}</div>
                {meeting.isVideo ? (
                  <Video className="h-3.5 w-3.5 text-primary" />
                ) : (
                  <Users className="h-3.5 w-3.5 text-primary" />
                )}
              </div>
              <div className="flex items-center text-[10px] text-muted-foreground mb-2">
                <Calendar className="h-3 w-3 mr-1" />
                <span>{meeting.date}</span>
                <span className="mx-1">•</span>
                <Clock className="h-3 w-3 mr-1" />
                <span>{meeting.time}</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex -space-x-2">
                  {participants.map((participant) => (
                    <Avatar key={participant.id} className="h-5 w-5 border-2 border-background">
                      <AvatarImage src={participant.avatar || "/placeholder.svg"} />
                      <AvatarFallback className={participant.color}>{participant.initials}</AvatarFallback>
                    </Avatar>
                  ))}
                  {meeting.participants > 3 && (
                    <div className="h-5 w-5 rounded-full bg-secondary flex items-center justify-center text-[8px] border-2 border-background">
                      +{meeting.participants - 3}
                    </div>
                  )}
                </div>
                <Button variant="outline" size="sm" className="h-6 text-[10px]">
                  Join
                </Button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <Button variant="default" size="sm" className="w-full text-xs bg-primary hover:bg-primary/90">
            Schedule Meeting
          </Button>
        </div>
      </CardContent>
    </>
  )
}
