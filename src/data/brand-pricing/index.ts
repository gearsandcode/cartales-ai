import { ModelPricing } from "../types/pricing-types";
import { PorschePricing } from "./porsche";
import { FerrariPricing } from "./ferrari";
import { BMWPricing } from "./bmw";
import { MercedesPricing } from "./mercedes";
import { BugattiPricing } from "./bugatti";
import { LamborghiniPricing } from "./lamborghini";
import { McLarenPricing } from "./mclaren";
import { RollsRoycePricing } from "./rolls-royce";
import { BentleyPricing } from "./bentley";
import { AstonMartinPricing } from "./aston-martin";
import { MaybachPricing } from "./maybach";
import { LexusPricing } from "./lexus";
import { JaguarPricing } from "./jaguar";
import { CadillacPricing } from "./cadillac";
import { InfinitiPricing } from "./infiniti";
import { AcuraPricing } from "./acura";
import { AlfaRomeoPricing } from "./alfa-romeo";
import { LincolnPricing } from "./lincoln";
import { VolvoPricing } from "./volvo";
import { ChryslerPricing } from "./chrysler";
import { VolkswagenPricing } from "./volkswagen";
import { GenesisPricing } from "./genesis";
import { ToyotaPricing } from "./toyota";
import { HondaPricing } from "./honda";
import { FordPricing } from "./ford";
import { ChevroletPricing } from "./chevrolet";
import { MazdaPricing } from "./mazda";
import { DodgePricing } from "./dodge";
import { SubaruPricing } from "./subaru";
import { MitsubishiPricing } from "./mitsubishi";
import { OtherPricing } from "./other";

export const MODEL_PRICING: Record<string, Record<string, ModelPricing>> = {
  Bugatti: BugattiPricing,
  Ferrari: FerrariPricing,
  Lamborghini: LamborghiniPricing,
  McLaren: McLarenPricing,
  Porsche: PorschePricing,
  "Mercedes-Benz": MercedesPricing,
  BMW: BMWPricing,
  "Rolls-Royce": RollsRoycePricing,
  Bentley: BentleyPricing,
  "Aston Martin": AstonMartinPricing,
  Maybach: MaybachPricing,
  Lexus: LexusPricing,
  Jaguar: JaguarPricing,
  Cadillac: CadillacPricing,
  Infiniti: InfinitiPricing,
  Acura: AcuraPricing,
  "Alfa Romeo": AlfaRomeoPricing,
  Lincoln: LincolnPricing,
  Volvo: VolvoPricing,
  Chrysler: ChryslerPricing,
  Volkswagen: VolkswagenPricing,
  Genesis: GenesisPricing,
  Toyota: ToyotaPricing,
  Honda: HondaPricing,
  Ford: FordPricing,
  Chevrolet: ChevroletPricing,
  Mazda: MazdaPricing,
  Dodge: DodgePricing,
  Subaru: SubaruPricing,
  Mitsubishi: MitsubishiPricing,
  Other: OtherPricing,
};
