import { format, parseISO } from 'date-fns';

type Props = {
  dateString: string;
};

const Date: React.FC<Props> = ({ dateString }) => {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
};

export default Date;
