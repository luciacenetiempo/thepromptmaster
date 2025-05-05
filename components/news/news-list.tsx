import type { NewsItem } from "../../lib/news/types"
import { formatDate } from "../../lib/news/utils"
import { Button } from "../../components/ui/button"
import { ExternalLink } from "lucide-react"

interface NewsListProps {
  newsItems: NewsItem[]
}

export default function NewsList({ newsItems }: NewsListProps) {
  if (!newsItems.length) {
    return (
      <div className="text-center py-12 bg-card rounded-lg border border-border p-8">
        <p className="text-muted-foreground">Nessuna notizia trovata. Riprova più tardi.</p>
        <p className="text-muted-foreground/70 mt-2 text-sm">
          Potrebbe essere un problema temporaneo di connessione al sito FutureTools.io
        </p>
      </div>
    )
  }

  return (
    <div className="overflow-hidden rounded-lg border border-border bg-card">
      <table className="w-full">
        <thead>
          <tr className="bg-muted">
            <th className="w-40 px-4 py-3 text-left text-sm font-bold text-foreground uppercase">Data</th>
            <th className="px-4 py-3 text-left text-sm font-bold text-foreground uppercase">Titolo</th>
            <th className="w-28 px-4 py-3 text-right text-sm font-bold text-foreground uppercase"></th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {newsItems.map((item, index) => (
            <tr key={index} className="bg-card hover:bg-muted/50 transition-colors">
              <td className="whitespace-nowrap px-4 py-3 text-sm text-muted-foreground">{formatDate(item.date)}</td>
              <td className="px-4 py-3">
                <div className="font-medium text-foreground">{item.title}</div>
                <div className="text-xs text-muted-foreground">{item.source}</div>
              </td>
              <td className="whitespace-nowrap px-4 py-3 text-right">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`Leggi "${item.title}" su ${item.source}`}
                >
                  <Button size="sm" variant="default" className="text-xs">
                    <span>LEGGI</span>
                    <ExternalLink className="ml-1 h-3 w-3" />
                  </Button>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
