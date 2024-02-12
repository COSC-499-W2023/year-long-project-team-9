type RequestSummaryProps = {
  title: string;
  processing: string;
  date: string;
  is_read: boolean;
  description: string;
  due: string;
  status: string;
  display: any;
  id: string;
};

export function RequestSummary({
  title,
  processing,
  date,
  is_read,
  description,
  due,
  status,
  display,
  id,
}: RequestSummaryProps) {
  return (
    <button
      onClick={() => display(id)}
      className="flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent"
    >
      <div className="flex w-full flex-col gap-1">
        <div className="flex items-center">
          <div className="flex items-center gap-2">
            <div className="font-semibold">{title}</div>
            {is_read === false ? (
              <span className="flex h-2 w-2 rounded-full bg-blue-600"></span>
            ) : null}
          </div>
          <div className="ml-auto text-xs text-foreground">{date}</div>
        </div>
        <div className="text-xs font-medium">Processing: {processing}</div>
      </div>
      <div className="line-clamp-2 text-xs text-muted-foreground text-ellipsis">
        {description}
      </div>
      <div className="flex items-center gap-2">
        <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
          {due}
        </div>

        <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
          Status: {status}
        </div>
      </div>
    </button>
  );
}
