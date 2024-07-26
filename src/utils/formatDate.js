import { formatDistanceToNow, format, isToday, isYesterday } from 'date-fns';
import { enUS } from 'date-fns/locale';

export const formatDate = (date) => {
  const postDate = new Date(date);

  if (isToday(postDate)) {
    return 'Today';
  } else if (isYesterday(postDate)) {
    return 'Yesterday';
  } else {
    return formatDistanceToNow(postDate, { addSuffix: true, locale: enUS });
  }
};
