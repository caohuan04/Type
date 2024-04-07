import { createBrowserRouter } from 'react-router-dom'
import LayoutWebsite from './components/layouts/LayoutWebsite'
import Client from './pages/Client'
import Detail from './pages/Detail'
import Pay from './pages/Pay'
import LayoutAdmin from './components/layouts/LayoutAdmin'
import Admin from './admin/Admin'
import NotFound from './pages/notFound'
import TripList from './admin/Trips'
import AddTrip from './admin/Trips/add'
import { getBusHouses } from './api/busHouse.api'
import { getStations } from './api/stations.api'
import { getTripById } from './api/trip.api'
import UpdateTrip from './admin/Trips/update'

const App = createBrowserRouter([
  {
    path: '/',
    element: <LayoutWebsite />,
    children: [
      { path: "", element: <Client /> },
      { path: "detail", element: <Detail /> },
      { path: "pay", element: <Pay /> },
    ]
  },
  {
    path: 'admin',
    element: <LayoutAdmin />,
    children: [
      { path: "", element: <TripList /> },
      {
        path: "trips/add",
        loader: async () => {
          const { data: busHousesData } = await getBusHouses();
          const { data: stationsData } = await getStations();
          return { busHouses: busHousesData, stations: stationsData };
        },
        element: <AddTrip />
      },
      {
        path: "trips/:id",
        loader: async ({ params }) => {
          const { data: busHouses } = await getBusHouses();
          const { data: stations } = await getStations();
          if (params.id) {
            const { data: trip } = await getTripById(params.id);
            return { trip, busHouses, stations };
          }
          return { busHouses: busHouses, stations: stations };
        },
        element: <UpdateTrip />
      },
      { path: "dashboard", element: <Admin /> },
    ]
  },
  {
    path: "*",
    element: <NotFound />
  }
])

export default App
