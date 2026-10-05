async function getTicket(id: number) {
  const res = await fetch('https://dummyjson.com/todos/' + id, { next: { revalidate: 60 } });
  return res.json();
}

export default async function TicketDetails(props: PageProps<'/tickets/[id]'>) {
  const { id } = await props.params
  const ticket = await getTicket(parseInt(id))

  return (
    <main>
      <nav>
        <h2>Ticket Details</h2>
      </nav>
      <div className="card">
        <h3>{ ticket.todo }</h3>
        <small>Created by { ticket.userId }</small>
        <p>{ ticket.todo }</p>
        <div className={`pill ${ticket.completed ? 'low':'high' }`}>
          {ticket.completed ? 'Done' : 'Pending'}
        </div>
      </div>
    </main>
  )
}