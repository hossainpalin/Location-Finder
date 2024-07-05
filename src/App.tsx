import { useState } from 'react';
import Fly from './components/Fly';
import Map from './components/Map';

export default function App() {
  const [location, setLocation] = useState<string | undefined>('');
  const [destination, setDestination] = useState<string | undefined>('');
  const [mode, setMode] = useState<string | undefined>('place');

  return (
    <section className="w-full h-screen">
      <Fly
        setLocation={setLocation}
        setMode={setMode}
        setDestination={setDestination}
      />
      <div className="w-full h-[calc(100%-86px)]">
        <Map
          location={location || 'New York'}
          destination={destination}
          mode={mode}
        />
      </div>
    </section>
  );
}
