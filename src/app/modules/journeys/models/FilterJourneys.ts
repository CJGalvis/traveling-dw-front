export interface FilterJourneys {
  origin?: string;
  destination?: string;
  departureDate?: Date;
  returnDate?: Date;
  isReturn?: boolean;
  passengers?: string;
}
