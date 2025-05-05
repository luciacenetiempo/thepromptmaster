export function formatDate(dateStr: string) {
    // Convert date format like "4.23.25" to a more readable format
    const parts = dateStr.split(".")
    if (parts.length !== 3) return dateStr
  
    const month = Number.parseInt(parts[0])
    const day = Number.parseInt(parts[1])
    const year = Number.parseInt(parts[2]) + 2000
  
    const date = new Date(year, month - 1, day)
  
    // Format in Italian style (e.g., "23 aprile 2025")
    return new Intl.DateTimeFormat("it-IT", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(date)
  }
  
  export function isWithinLastDays(dateStr: string, days: number): boolean {
    const parts = dateStr.split(".")
    if (parts.length !== 3) return false
  
    const month = Number.parseInt(parts[0])
    const day = Number.parseInt(parts[1])
    const year = Number.parseInt(parts[2]) + 2000
  
    const date = new Date(year, month - 1, day)
    const now = new Date()
  
    // Set time to midnight for accurate day comparison
    date.setHours(0, 0, 0, 0)
    now.setHours(0, 0, 0, 0)
  
    const diffTime = Math.abs(now.getTime() - date.getTime())
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  
    return diffDays <= days
  }
  