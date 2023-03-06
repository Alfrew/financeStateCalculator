import { AssetFSC } from "./asset-fsc";

export interface PhysicalAssetsData {
  electronics: AssetFSC;
  equipment: AssetFSC;
  other: AssetFSC;
  property: AssetFSC;
  vehicle: AssetFSC;
}
