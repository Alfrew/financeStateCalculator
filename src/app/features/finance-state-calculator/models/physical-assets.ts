export interface PhysicalAssetsBase {
  vehicle: number;
  property: number;
  equipment: number;
  electronics: number;
  other: number;
}

export interface PhysicalAssets extends PhysicalAssetsBase {
  interests: PhysicalAssetsBase;
}
