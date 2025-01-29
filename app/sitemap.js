import { getPostFromCategory } from '../lib/wordpress'

export default async function sitemap() {
  // Recupera tutti i post dalle varie categorie
  const promptChatGPT = await getPostFromCategory(17)
  const promptEng = await getPostFromCategory(3)
  const chatgpt = await getPostFromCategory(15)
  const midjourney = await getPostFromCategory(16)
  const newsAI = await getPostFromCategory(1)

  // Combina tutti i post in un unico array
  const allPosts = [...promptChatGPT, ...promptEng, ...chatgpt, ...midjourney, ...newsAI]

  // URL base del sito
  const baseUrl = 'https://www.thepromptmaster.it'

  // Pagine statiche del sito
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/speech/fba-1`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    // Aggiungi qui altre pagine statiche
  ]

  // Genera gli URL per i post dinamici aggiungendo /blog/ al percorso
  const dynamicPages = allPosts.map(post => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.modified),
    changeFrequency: 'weekly',
    priority: 0.5,
  }))

  return [...staticPages, ...dynamicPages]
} 