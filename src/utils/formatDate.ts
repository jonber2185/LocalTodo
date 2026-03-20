export default function formatDate(d: Date): string {
  return d.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  })
    .replace(/\. /g, '-')
    .replace('.', '');
};
