import { CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MoreHorizontal, GripVertical, Calendar, Clock, Video, Users } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const meetings = [
  {
    id: 1,
    title: "Réunion d'Equipe Quotidienne",
    time: "9:30 AM - 10:00 AM",
    date: "Aujourd'hui",
    participants: 8,
    isVideo: true,
  },
  {
    id: 2,
    title: "Revenue des Taches Hebdomadaire",
    time: "11:00 AM - 12:00 PM",
    date: "Aujourd'hui",
    participants: 5,
    isVideo: true,
  },
  {
    id: 3,
    title: "Planification du Sprint",
    time: "2:00 PM - 3:30 PM",
    date: "Aujourd'hui",
    participants: 12,
    isVideo: true,
  },
  {
    id: 4,
    title: "Synchronisation Equipe Technique",
    time: "10:00 AM - 11:00 AM",
    date: "Demain",
    participants: 6,
    isVideo: false,
  },
  {
    id: 5,
    title: "Présentation au Responsable RH",
    time: "3:00 PM - 4:00 PM",
    date: "Demain",
    participants: 15,
    isVideo: true,
  },
]

const participants = [
  {
    id: "alyssa",
    name: "Alyssa",
    avatar: "/placeholder.svg?height=32&width=32",
    initials: "AB",
    color: "bg-primary",
  },
  {
    id: "yassine",
    name: "Yassine",
    avatar: "/placeholder.svg?height=32&width=32",
    initials: "YK",
    color: "bg-pink-500",
  },
  {
    id: "lina",
    name: "Lina",
    avatar: "/placeholder.svg?height=32&width=32",
    initials: "LG",
    color: "bg-amber-500",
  },
]

export function MeetingsCard() {
  return (
    <>
      <CardHeader className="flex flex-row items-center justify-between pb-2 px-4">
        <div className="flex items-center">
          <GripVertical className="h-4 w-4 text-muted-foreground mr-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          <CardTitle className="text-sm font-medium">Réunions</CardTitle>
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
                  Rejoindre
                </Button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <Button variant="default" size="sm" className="w-full text-xs bg-primary hover:bg-primary/90">
            Planifier une Réunion
          </Button>
        </div>
      </CardContent>
    </>
  )
}
