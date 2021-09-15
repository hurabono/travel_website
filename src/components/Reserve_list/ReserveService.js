import { events } from "./data";

export function getEventData() {
  const eventList = events;
  return eventList;
}

export function filterEventList(eventType) {
  let filtredEvents = getEventData().filter(
    (type) => type.category === eventType
  );
  return filtredEvents;
}
