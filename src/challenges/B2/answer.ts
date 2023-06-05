/**
 * In this challenge, you have to get all the categories from the events. The categories 
 * must be unique and sorted from A to Z.
 * 
 * @param events List of events with their categories
 * @returns All existing categories sorted alphabatically without duplicates (A to Z)
 */

// ↓ uncomment bellow lines and add your response!

export default function ({ events }: { events: EventWithCategory[] }): string[] {
    // Créer un ensemble pour stocker les catégories uniques
    const categoriesSet = new Set<string>();

    // Parcourir tous les événements et ajouter les catégories dans l'ensemble
    events.forEach(event => {
        event.categories.forEach(category => {
            categoriesSet.add(category);
        });
    });

    // Convertir l'ensemble en tableau et le trier par ordre alphabétique
    const categoriesArray = Array.from(categoriesSet).sort();

    // Retourner le tableau des catégories triées
    return categoriesArray;
}

//OU


/*export default function ({
  events,
}: {
  events: EventWithCategory[];
}): string[] {
  // const categories: string[] = []
  const categories: Set<string> = new Set();

  events.forEach((event) => {
    event.categories.forEach((category) => {
      categories.add(category);
    });
  });
  return Array.from(categories).sort();
  //   events.forEach((event)=>{
  //     categories.push(...event.categories)
}
//   })
//   const sortedUniqueCategories = [...new Set(categories)].sort()
//   return sortedUniqueCategories;
// }*/ 

// used interfaces, do not touch
export interface EventWithCategory {
    startDatetime: string;
    endDatetime: string;
    event: string;
    categories: string[];
}
