import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styles from "../../styles/styles";
import EventCard from "./EventCard.jsx";
const Events = () => {
  const { event, isLoading } = useSelector((state) => state.event);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      {!isLoading && (
        <div className={`${styles.section}`}>
          <div className={`${styles.heading}`}>
            <h1>Sự kiện nổi bật</h1>
          </div>

          <div className="w-full grid">
            {event.length === 1 && <EventCard data={event && event[0]} />}
            {event.length >= 2 && <EventCard data={event && event[0]} />}
            {event.length >= 2 && <EventCard data={event && event[1]} />}
            <h4>{event?.length === 0 && "Hiện tại không có sự kiện nào!"}</h4>
          </div>
        </div>
      )}
    </div>
  );
};

export default Events;
