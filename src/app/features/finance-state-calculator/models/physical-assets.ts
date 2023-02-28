export interface PhysicalAssetsInterests {
  vehicle: number;
  property: number;
  equipment: number;
  electronics: number;
  other: number;
}

export interface PhysicalAssets extends PhysicalAssetsInterests {
  interests: PhysicalAssetsInterests;
}
