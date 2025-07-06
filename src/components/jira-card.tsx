import { CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MoreHorizontal, GripVertical, ArrowRight } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

const jiraIssues = [
  {
    id: "TACHE-101",
    title: "Problème d'affichage des taches sur les calendrier",
    priority: "Elevée",
    status: "En cours",
    assignee: {
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "AB",
      color: "bg-primary",
    },
  },
  {
    id: "TACHE-102",
    title: "Ajouter une vérification de role lors de la connexion",
    priority: "Moyenne",
    status: "A Faire",
    assignee: {
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "SL",
      color: "bg-pink-500",
    },
  },
  {
    id: "TACHE-103",
    title: "Correction du téléchargement de documents dans la page Ressources",
    priority: "Faible",
    status: "Terminé",
    assignee: {
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "LG",
      color: "bg-amber-500",
    },
  },
  {
    id: "TACHE-104",
    title: "Optimisation du chargement de la page Calendrier avec des filtres dynamiques",
    priority: "Elevée",
    status: "En cours",
    assignee: {
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "OZ",
      color: "bg-orange-500",
    },
  },
]

const getStatusColor = (status: string) => {
  switch (status) {
    case "A Faire":
      return "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
    case "En cours":
      return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
    case "Terminé":
      return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
    default:
      return "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
  }
}

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case "Elevée":
      return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
    case "Moyenne":
      return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
    case "Faible":
      return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
    default:
      return "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
  }
}

export function JiraCard() {
  return (
    <>
      <CardHeader className="flex flex-row items-center justify-between pb-2 px-4">
        <div className="flex items-center">
          <GripVertical className="h-4 w-4 text-muted-foreground mr-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          <CardTitle className="text-sm font-medium">Problème Signalés</CardTitle>
        </div>
        <Button variant="ghost" size="icon" className="h-7 w-7">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent className="px-4 pb-4 h-[350px] overflow-auto">
        <div className="space-y-3">
          {jiraIssues.map((issue) => (
            <div key={issue.id} className="p-3 border rounded-md">
              <div className="flex justify-between items-start mb-2">
                <div className="text-xs font-medium text-primary">{issue.id}</div>
                <Avatar className="h-5 w-5">
                  <AvatarImage src={issue.assignee.avatar || "/placeholder.svg"} />
                  <AvatarFallback className={issue.assignee.color}>{issue.assignee.initials}</AvatarFallback>
                </Avatar>
              </div>
              <div className="text-xs mb-2">{issue.title}</div>
              <div className="flex justify-between items-center">
                <div className={cn("text-[10px] px-2 py-0.5 rounded-full", getPriorityColor(issue.priority))}>
                  {issue.priority}
                </div>
                <div className={cn("text-[10px] px-2 py-0.5 rounded-full", getStatusColor(issue.status))}>
                  {issue.status}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 flex justify-center">
          <Button variant="outline" size="sm" className="text-xs w-full">
            Afficher tous les problèmes <ArrowRight className="ml-2 h-3 w-3" />
          </Button>
        </div>
      </CardContent>
    </>
  )
}
