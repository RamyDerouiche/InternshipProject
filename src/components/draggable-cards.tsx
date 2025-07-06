import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import { Card } from "@/components/ui/card"
import { GamesCard } from "./cards/games-card"
import { TasksCard } from "./cards/tasks-card"
import { TeamCard } from "./cards/team-card"
import { JiraCard } from "./cards/jira-card"
import { DiscordCard } from "./cards/discord-card"
import { SlackCard } from "./cards/slack-card"
import { MeetingsCard } from "./cards/meetings-card"
import { cn } from "@/lib/utils"

// Componente para cada card arrastável
const SortableCard = ({ id, type }: { id: string; type: string }) => {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 10 : 1,
  }

  // Renderizar o conteúdo do card com base no tipo
  const renderCardContent = () => {
    switch (type) {
      case "games":
        return <GamesCard />
      case "tasks":
        return <TasksCard />
      case "team":
        return <TeamCard />
      case "jira":
        return <JiraCard />
      case "discord":
        return <DiscordCard />
      case "slack":
        return <SlackCard />
      case "meetings":
        return <MeetingsCard />
      default:
        return <div>Card not recognized</div>
    }
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      className={cn("transition-all", isDragging ? "opacity-70 scale-105" : "")}
    >
      <Card className={`relative group ${type}-card`}>
        <div className="absolute top-0 left-0 right-0 h-12 cursor-grab active:cursor-grabbing" {...listeners}></div>
        {renderCardContent()}
      </Card>
    </div>
  )
}

// Componente que renderiza os cards arrastáveis
export function DraggableCards({ cards }: { cards: Array<{ id: string; type: string }> }) {
  // Função para determinar a largura do card com base no tipo
  const getCardWidth = (type: string) => {
    if (type === "games") return "col-span-12"
    if (type === "jira" || type === "discord" || type === "slack") return "col-span-12 md:col-span-4"
    return "col-span-12 md:col-span-6"
  }

  return (
    <div className="grid grid-cols-12 gap-6">
      {cards.map((card) => (
        <div key={card.id} className={getCardWidth(card.type)}>
          <SortableCard id={card.id} type={card.type} />
        </div>
      ))}
    </div>
  )
}
