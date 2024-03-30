<Table className="rounded-lg border">
  <TableHeader>
    <TableRow>
      <TableHead>Status</TableHead>
      <TableHead>Email</TableHead>
      <TableHead>Video</TableHead>{" "}
    </TableRow>
  </TableHeader>
  <TableBody>
    {submissions
      .filter((value) => value.requestId === selected?.requestId)
      .map((value, index) => (
        <TableRow key={index}>
          <TableCell>
            <Badge>{value.status}</Badge>
          </TableCell>
          <TableCell>{value.requesteeEmail}</TableCell>
          <TableCell>
            {value.status === "COMPLETED" ? (
              <Button>
                Video
                <ChevronRightIcon className="h-4 w-4" />
              </Button>
            ) : (
              <Button disabled>
                Video
                <ChevronRightIcon className="h-4 w-4" />
              </Button>
            )}
          </TableCell>
        </TableRow>
      ))}
  </TableBody>
</Table>;
