import { init } from "@moonbeam-network/xcm-sdk";
import { ApiPromise } from "@polkadot/api"; // A second import is needed in the package under test

export const connectXcm = async () => {
  return init();
};

export const connectPolkadot = async () => {
  return ApiPromise.create();
};
