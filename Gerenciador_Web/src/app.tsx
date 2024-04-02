import { AttendeeList } from "./components/attendee_list"
import { Header } from "./components/header"

export function App() {
  return( 
    <div className="flex gap-2 my-1">
      <Header/>
      <AttendeeList />
    </div>
  )
}

