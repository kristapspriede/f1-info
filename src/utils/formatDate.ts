/**
 * Converts UTC date + time to Latvian local format: "DD.MM.YYYY HH:mm"
 * Example: formatDateTime('2025-07-13', '14:00:00Z') → "13.07.2025 17:00"
 */
export function formatDateTime(dateStr: string | undefined, timeStr: string | undefined): string {
    if (!dateStr || !timeStr) {
      return ''; // or return 'TBD' if preferred
    }
    
    const isoString = `${dateStr}T${timeStr}`;
    const date = new Date(isoString);
    
    return date.toLocaleString('lv-LV', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  }
  