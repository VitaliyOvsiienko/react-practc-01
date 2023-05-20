import { formatDistanceToNow } from 'date-fns';
import { format } from 'date-fns';

export function formatDate(date) {
  return formatDistanceToNow(new Date(date), { addSuffix: true });
}

export function formatDatePp(date, pattern) {
  return format (new Date(date), pattern);
}