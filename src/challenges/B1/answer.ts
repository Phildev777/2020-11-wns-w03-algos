/**
 * In this challenge, you must sort events chronologically (oldest to latest) based on 
 * their startDatetime prop. If some events have the same startDatetime, then the shortest must appear
 * first
 * 
 * @param events Unsorted list of events
 * @returns Sorted list of events
 */

// ↓ uncomment bellow lines and add your response!

export default function sortEvents({ events }: { events: EventDatetime[] }): EventDatetime[] {
  return events.sort((a, b) => {
    // Compare the startDatetime values
    const startComparison = a.startDatetime.localeCompare(b.startDatetime);
    const endComparison = a.endDatetime.localeCompare(b.endDatetime);
    if (startComparison !== 0) {
      // If startDatetime values are different, return the result
      return startComparison;
    } else  if (endComparison !== 0) {
        return endComparison;
     } else{
      // If startDatetime values are the same, compare the lengths of events
      const lengthComparison = a.event.length - b.event.length;

      // If event lengths are different, return the result
      if (lengthComparison !== 0) {
        return lengthComparison;
      } else {
        // If event lengths are also the same, compare the startDatetime values
        return a.startDatetime.localeCompare(b.startDatetime);
      }
    }
    

  });
}

//OU

  /*export default function ({
  events,
}: {
  events: EventDatetime[];
}): EventDatetime[] {
  return events.sort((event1, event2) => {
    if (event1.startDatetime === event2.startDatetime) {
      return event1.endDatetime < event2.endDatetime ? -1 : 0;
    }
    return event1.startDatetime < event2.startDatetime ? -1 : 0;
  });
  // const collator = new Intl.Collator(undefined, { numeric: true });

  // return events.sort((event1, event2) => {
  //   if (event1.startDatetime === event2.startDatetime) {
  //     return collator.compare(event1.endDatetime, event2.endDatetime);
  //     // return event1.endDatetime.localeCompare(event2.endDatetime);
  //   }
  //   return collator.compare(event1.startDatetime, event2.startDatetime);
  //   // return event1.startDatetime.localeCompare(event2.startDatetime);
  // });
}*/ 
      
    


// used interfaces, do not touch
export interface EventDatetime {
    startDatetime: string;
    endDatetime: string;
    event: string;
}