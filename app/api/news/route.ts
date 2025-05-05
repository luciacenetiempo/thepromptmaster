import { NextResponse } from "next/server"
import * as cheerio from "cheerio"
import type { NewsItem } from "../../../lib/news/types"

export async function GET() {
  try {
    // Fetch the HTML content from futuretools.io/news
    const response = await fetch("https://www.futuretools.io/news", {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
      },
      cache: "no-store",
    })

    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.status}`)
    }

    const html = await response.text()
    const $ = cheerio.load(html)
    const newsItems: NewsItem[] = []

    // Utilizziamo i selettori CSS specifici forniti
    $(".news-item").each((_, element) => {
      // Estrai la data
      const dateElement = $(element).find(".text-block-30.blue-text-dm")
      const date = dateElement.text().trim()

      // Estrai il titolo
      const titleElement = $(element).find(".text-block-27.white-text-db-gc")
      const title = titleElement.text().trim()

      // Estrai la fonte
      const sourceElement = $(element).find(".text-block-28.blue-text-dm")
      const source = sourceElement.text().trim()

      // Estrai l'URL
      const linkElement = $(element).find("a.link-block-8.w-inline-block")
      let url = linkElement.attr("href") || "#"

      // Sostituisci i parametri UTM
      url = url.replace(
        /\?utm_source=futuretools\.io(&amp;|&)utm_medium=newspage/,
        "?utm_source=thepromptmaster.it&utm_medium=newspage",
      )

      // Aggiungi la notizia solo se abbiamo almeno data e titolo
      if (date && title) {
        newsItems.push({
          date,
          title,
          source,
          url,
        })
      }
    })

    return NextResponse.json(newsItems)
  } catch (error) {
    console.error("Error fetching news:", error)
    return NextResponse.json({ error: "Failed to fetch news" }, { status: 500 })
  }
}
