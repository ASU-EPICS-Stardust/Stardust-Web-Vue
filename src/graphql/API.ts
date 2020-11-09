/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type PanelInformation = {
  modelName?: string | null,
  modelNumber?: string | null,
  pOut: number,
  pMax: number,
  operationalEfficiency?: number | null,
  currentIrradiance: number,
  stdIrradiance?: number | null,
  weatherStatus?: CurrentSkyCondition | null,
  testTime: number,
  testLat: number,
  testLon: number,
};

export enum CurrentSkyCondition {
  Sunny = "Sunny",
  Cloudy = "Cloudy",
  PartiallySunny = "PartiallySunny",
  PartiallyCloudy = "PartiallyCloudy",
}


export type GetIrradianceDataForQueryVariables = {
  lat?: number | null,
  lon?: number | null,
};

export type GetIrradianceDataForQuery = {
  // Get a single value of type 'Post' by primary key.
  getIrradianceDataFor: number | null,
};

export type CalculateDegradationQueryVariables = {
  panelInfo?: PanelInformation | null,
};

export type CalculateDegradationQuery = {
  calculateDegradation: number | null,
};
