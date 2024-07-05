export default function Map({
  location,
  destination,
  mode,
  latitude,
  longitude,
}) {
  let src;

  if (mode === 'place') {
    src = `https://www.google.com/maps/embed/v1/place?key=${import.meta.env.VITE_MAPS_API_KEY}&q=${location}`;
  } else if (mode === 'view') {
    src = `https://www.google.com/maps/embed/v1/view?key=${import.meta.env.VITE_MAPS_API_KEY}&center=${latitude},${longitude}.0840&maptype=satellite`;
  } else if (mode === 'directions') {
    src = `https://www.google.com/maps/embed/v1/directions?key=${import.meta.env.VITE_MAPS_API_KEY}&origin=${location}&destination=${destination}`;
  } else if (mode === 'streetview') {
    src = `https://www.google.com/maps/embed/v1/streetview?key=${import.meta.env.VITE_MAPS_API_KEY}&location=${latitude},${longitude}&heading=210&pitch=10&fov=35`;
  } else {
    src = `https://www.google.com/maps/embed/v1/place?key=${import.meta.env.VITE_MAPS_API_KEY}&q=${location}`;
  }

  return (
    <iframe
      src={src}
      width="100%"
      height="100%"
      allowFullscreen=""
      loading="lazy"
      referRerpolicy="no-referrer-when-downgrade"></iframe>
  );
}
