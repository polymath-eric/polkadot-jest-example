# Polkadot + jest interaction

This repo demonstrates stdout getting polluted in tests when using `jest` to test a project using the polkadot/api package

It seems when using jest "auto mock" feature with a package that uses polkadot/api while importing another package that also requires the package to cause stdout to get polluted with a warning message that appears to be a false positive based on the message

To see the error, pull this package and run:

`npm i`
`npm run test`

Expected output:

```
 npm run test

> mock-warnings@0.0.0 test
> jest

  console.warn
    @polkadot/util has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
        cjs 10.4.2      node_modules/@polkadot/util/cjs
        cjs 10.4.2      node_modules/@polkadot/util/cjs

      1 | import { init } from "@moonbeam-network/xcm-sdk";
    > 2 | import { ApiPromise } from "@polkadot/api"; // A second import is needed in the package under test
        | ^
      3 |
      4 | export const connectXcm = async () => {
      5 |   return init();

      at warn (node_modules/@polkadot/util/cjs/versionDetect.js:75:11)
      at detectPackage (node_modules/@polkadot/util/cjs/versionDetect.js:101:5)
      at Object.<anonymous> (node_modules/@polkadot/util/cjs/detectPackage.js:10:34)
      at Object.<anonymous> (node_modules/@polkadot/util/cjs/index.js:6:1)
      at Object.<anonymous> (node_modules/@polkadot/api/cjs/detectPackage.js:4:13)
      at Object.<anonymous> (node_modules/@polkadot/api/cjs/index.js:6:1)
      at Object.require (src/polkadot/index.ts:2:1)
      at Object.require (src/polkadot/polkadot.test.ts:1:1)

  console.warn
    @polkadot/api has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
        cjs 9.14.2      node_modules/@polkadot/api/cjs
        cjs 9.14.2      node_modules/@polkadot/api/cjs

      1 | import { init } from "@moonbeam-network/xcm-sdk";
    > 2 | import { ApiPromise } from "@polkadot/api"; // A second import is needed in the package under test
        | ^
      3 |
      4 | export const connectXcm = async () => {
      5 |   return init();

      at warn (node_modules/@polkadot/util/cjs/versionDetect.js:75:11)
      at detectPackage (node_modules/@polkadot/util/cjs/versionDetect.js:101:5)
      at Object.<anonymous> (node_modules/@polkadot/api/cjs/detectPackage.js:12:25)
      at Object.<anonymous> (node_modules/@polkadot/api/cjs/index.js:6:1)
      at Object.require (src/polkadot/index.ts:2:1)
      at Object.require (src/polkadot/polkadot.test.ts:1:1)

  console.warn
    @polkadot/rpc-augment has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
        cjs 9.14.2      node_modules/@polkadot/rpc-augment/cjs
        cjs 9.14.2      node_modules/@polkadot/rpc-augment/cjs

      1 | import { init } from "@moonbeam-network/xcm-sdk";
    > 2 | import { ApiPromise } from "@polkadot/api"; // A second import is needed in the package under test
        | ^
      3 |
      4 | export const connectXcm = async () => {
      5 |   return init();

      at warn (node_modules/@polkadot/util/cjs/versionDetect.js:75:11)
      at detectPackage (node_modules/@polkadot/util/cjs/versionDetect.js:101:5)
      at Object.<anonymous> (node_modules/@polkadot/rpc-augment/cjs/detectPackage.js:12:25)
      at Object.<anonymous> (node_modules/@polkadot/rpc-augment/cjs/index.js:6:1)
      at Object.<anonymous> (node_modules/@polkadot/api/cjs/bundle.js:50:1)
      at Object.<anonymous> (node_modules/@polkadot/api/cjs/index.js:7:15)
      at Object.require (src/polkadot/index.ts:2:1)
      at Object.require (src/polkadot/polkadot.test.ts:1:1)

  console.warn
    @polkadot/keyring has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
        cjs 10.4.2      node_modules/@polkadot/keyring/cjs
        cjs 10.4.2      node_modules/@polkadot/keyring/cjs

      1 | import { init } from "@moonbeam-network/xcm-sdk";
    > 2 | import { ApiPromise } from "@polkadot/api"; // A second import is needed in the package under test
        | ^
      3 |
      4 | export const connectXcm = async () => {
      5 |   return init();

      at warn (node_modules/@polkadot/util/cjs/versionDetect.js:75:11)
      at detectPackage (node_modules/@polkadot/util/cjs/versionDetect.js:101:5)
      at Object.<anonymous> (node_modules/@polkadot/keyring/cjs/detectPackage.js:12:25)
      at Object.<anonymous> (node_modules/@polkadot/keyring/cjs/index.js:8:1)
      at Object.<anonymous> (node_modules/@polkadot/api/cjs/bundle.js:51:16)
      at Object.<anonymous> (node_modules/@polkadot/api/cjs/index.js:7:15)
      at Object.require (src/polkadot/index.ts:2:1)
      at Object.require (src/polkadot/polkadot.test.ts:1:1)

  console.warn
    @polkadot/util-crypto has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
        cjs 10.4.2      node_modules/@polkadot/util-crypto/cjs
        cjs 10.4.2      node_modules/@polkadot/util-crypto/cjs

      1 | import { init } from "@moonbeam-network/xcm-sdk";
    > 2 | import { ApiPromise } from "@polkadot/api"; // A second import is needed in the package under test
        | ^
      3 |
      4 | export const connectXcm = async () => {
      5 |   return init();

      at warn (node_modules/@polkadot/util/cjs/versionDetect.js:75:11)
      at detectPackage (node_modules/@polkadot/util/cjs/versionDetect.js:101:5)
      at Object.<anonymous> (node_modules/@polkadot/util-crypto/cjs/detectPackage.js:12:25)
      at Object.<anonymous> (node_modules/@polkadot/util-crypto/cjs/index.js:6:1)
      at Object.<anonymous> (node_modules/@polkadot/keyring/cjs/keyring.js:8:19)
      at Object.<anonymous> (node_modules/@polkadot/keyring/cjs/bundle.js:64:16)
      at Object.<anonymous> (node_modules/@polkadot/keyring/cjs/index.js:9:15)
      at Object.<anonymous> (node_modules/@polkadot/api/cjs/bundle.js:51:16)
      at Object.<anonymous> (node_modules/@polkadot/api/cjs/index.js:7:15)
      at Object.require (src/polkadot/index.ts:2:1)
      at Object.require (src/polkadot/polkadot.test.ts:1:1)

  console.warn
    @polkadot/wasm-crypto has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
        cjs 6.4.1       node_modules/@polkadot/wasm-crypto/cjs
        cjs 6.4.1       node_modules/@polkadot/wasm-crypto/cjs

      1 | import { init } from "@moonbeam-network/xcm-sdk";
    > 2 | import { ApiPromise } from "@polkadot/api"; // A second import is needed in the package under test
        | ^
      3 |
      4 | export const connectXcm = async () => {
      5 |   return init();

      at warn (node_modules/@polkadot/util/cjs/versionDetect.js:75:11)
      at detectPackage (node_modules/@polkadot/util/cjs/versionDetect.js:101:5)
      at Object.<anonymous> (node_modules/@polkadot/wasm-crypto/cjs/detectPackage.js:12:25)
      at Object.<anonymous> (node_modules/@polkadot/wasm-crypto/cjs/index.js:6:1)
      at Object.<anonymous> (node_modules/@polkadot/util-crypto/cjs/crypto.js:8:19)
      at Object.<anonymous> (node_modules/@polkadot/util-crypto/cjs/bundleInit.js:6:15)
      at Object.<anonymous> (node_modules/@polkadot/util-crypto/cjs/bundle.js:15:1)
      at Object.<anonymous> (node_modules/@polkadot/util-crypto/cjs/index.js:7:15)
      at Object.<anonymous> (node_modules/@polkadot/keyring/cjs/keyring.js:8:19)
      at Object.<anonymous> (node_modules/@polkadot/keyring/cjs/bundle.js:64:16)
      at Object.<anonymous> (node_modules/@polkadot/keyring/cjs/index.js:9:15)
      at Object.<anonymous> (node_modules/@polkadot/api/cjs/bundle.js:51:16)
      at Object.<anonymous> (node_modules/@polkadot/api/cjs/index.js:7:15)
      at Object.require (src/polkadot/index.ts:2:1)
      at Object.require (src/polkadot/polkadot.test.ts:1:1)

  console.warn
    @polkadot/wasm-bridge has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
        cjs 6.4.1       node_modules/@polkadot/wasm-bridge/cjs
        cjs 6.4.1       node_modules/@polkadot/wasm-bridge/cjs

      1 | import { init } from "@moonbeam-network/xcm-sdk";
    > 2 | import { ApiPromise } from "@polkadot/api"; // A second import is needed in the package under test
        | ^
      3 |
      4 | export const connectXcm = async () => {
      5 |   return init();

      at warn (node_modules/@polkadot/util/cjs/versionDetect.js:75:11)
      at detectPackage (node_modules/@polkadot/util/cjs/versionDetect.js:101:5)
      at Object.<anonymous> (node_modules/@polkadot/wasm-bridge/cjs/detectPackage.js:12:25)
      at Object.<anonymous> (node_modules/@polkadot/wasm-bridge/cjs/index.js:6:1)
      at Object.<anonymous> (node_modules/@polkadot/wasm-crypto/cjs/init.js:8:19)
      at Object.<anonymous> (node_modules/@polkadot/wasm-crypto/cjs/bundle.js:24:13)
      at Object.<anonymous> (node_modules/@polkadot/wasm-crypto/cjs/index.js:7:15)
      at Object.<anonymous> (node_modules/@polkadot/util-crypto/cjs/crypto.js:8:19)
      at Object.<anonymous> (node_modules/@polkadot/util-crypto/cjs/bundleInit.js:6:15)
      at Object.<anonymous> (node_modules/@polkadot/util-crypto/cjs/bundle.js:15:1)
      at Object.<anonymous> (node_modules/@polkadot/util-crypto/cjs/index.js:7:15)
      at Object.<anonymous> (node_modules/@polkadot/keyring/cjs/keyring.js:8:19)
      at Object.<anonymous> (node_modules/@polkadot/keyring/cjs/bundle.js:64:16)
      at Object.<anonymous> (node_modules/@polkadot/keyring/cjs/index.js:9:15)
      at Object.<anonymous> (node_modules/@polkadot/api/cjs/bundle.js:51:16)
      at Object.<anonymous> (node_modules/@polkadot/api/cjs/index.js:7:15)
      at Object.require (src/polkadot/index.ts:2:1)
      at Object.require (src/polkadot/polkadot.test.ts:1:1)

  console.warn
    @polkadot/wasm-crypto-wasm has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
        cjs 6.4.1       node_modules/@polkadot/wasm-crypto-wasm/cjs
        cjs 6.4.1       node_modules/@polkadot/wasm-crypto-wasm/cjs

      1 | import { init } from "@moonbeam-network/xcm-sdk";
    > 2 | import { ApiPromise } from "@polkadot/api"; // A second import is needed in the package under test
        | ^
      3 |
      4 | export const connectXcm = async () => {
      5 |   return init();

      at warn (node_modules/@polkadot/util/cjs/versionDetect.js:75:11)
      at detectPackage (node_modules/@polkadot/util/cjs/versionDetect.js:101:5)
      at Object.<anonymous> (node_modules/@polkadot/wasm-crypto-wasm/cjs/detectPackage.js:12:25)
      at Object.<anonymous> (node_modules/@polkadot/wasm-crypto-wasm/cjs/index.js:6:1)
      at Object.<anonymous> (node_modules/@polkadot/wasm-crypto-init/cjs/wasm.js:14:23)
      at Object.<anonymous> (node_modules/@polkadot/wasm-crypto/cjs/init.js:9:23)
      at Object.<anonymous> (node_modules/@polkadot/wasm-crypto/cjs/bundle.js:24:13)
      at Object.<anonymous> (node_modules/@polkadot/wasm-crypto/cjs/index.js:7:15)
      at Object.<anonymous> (node_modules/@polkadot/util-crypto/cjs/crypto.js:8:19)
      at Object.<anonymous> (node_modules/@polkadot/util-crypto/cjs/bundleInit.js:6:15)
      at Object.<anonymous> (node_modules/@polkadot/util-crypto/cjs/bundle.js:15:1)
      at Object.<anonymous> (node_modules/@polkadot/util-crypto/cjs/index.js:7:15)
      at Object.<anonymous> (node_modules/@polkadot/keyring/cjs/keyring.js:8:19)
      at Object.<anonymous> (node_modules/@polkadot/keyring/cjs/bundle.js:64:16)
      at Object.<anonymous> (node_modules/@polkadot/keyring/cjs/index.js:9:15)
      at Object.<anonymous> (node_modules/@polkadot/api/cjs/bundle.js:51:16)
      at Object.<anonymous> (node_modules/@polkadot/api/cjs/index.js:7:15)
      at Object.require (src/polkadot/index.ts:2:1)
      at Object.require (src/polkadot/polkadot.test.ts:1:1)

  console.warn
    @polkadot/wasm-util has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
        cjs 6.4.1       node_modules/@polkadot/wasm-util/cjs
        cjs 6.4.1       node_modules/@polkadot/wasm-util/cjs

      1 | import { init } from "@moonbeam-network/xcm-sdk";
    > 2 | import { ApiPromise } from "@polkadot/api"; // A second import is needed in the package under test
        | ^
      3 |
      4 | export const connectXcm = async () => {
      5 |   return init();

      at warn (node_modules/@polkadot/util/cjs/versionDetect.js:75:11)
      at detectPackage (node_modules/@polkadot/util/cjs/versionDetect.js:101:5)
      at Object.<anonymous> (node_modules/@polkadot/wasm-util/cjs/detectPackage.js:12:25)
      at Object.<anonymous> (node_modules/@polkadot/wasm-util/cjs/index.js:6:1)
      at Object.<anonymous> (node_modules/@polkadot/wasm-crypto-wasm/cjs/bundle.js:13:17)
      at Object.<anonymous> (node_modules/@polkadot/wasm-crypto-wasm/cjs/index.js:7:15)
      at Object.<anonymous> (node_modules/@polkadot/wasm-crypto-init/cjs/wasm.js:14:23)
      at Object.<anonymous> (node_modules/@polkadot/wasm-crypto/cjs/init.js:9:23)
      at Object.<anonymous> (node_modules/@polkadot/wasm-crypto/cjs/bundle.js:24:13)
      at Object.<anonymous> (node_modules/@polkadot/wasm-crypto/cjs/index.js:7:15)
      at Object.<anonymous> (node_modules/@polkadot/util-crypto/cjs/crypto.js:8:19)
      at Object.<anonymous> (node_modules/@polkadot/util-crypto/cjs/bundleInit.js:6:15)
      at Object.<anonymous> (node_modules/@polkadot/util-crypto/cjs/bundle.js:15:1)
      at Object.<anonymous> (node_modules/@polkadot/util-crypto/cjs/index.js:7:15)
      at Object.<anonymous> (node_modules/@polkadot/keyring/cjs/keyring.js:8:19)
      at Object.<anonymous> (node_modules/@polkadot/keyring/cjs/bundle.js:64:16)
      at Object.<anonymous> (node_modules/@polkadot/keyring/cjs/index.js:9:15)
      at Object.<anonymous> (node_modules/@polkadot/api/cjs/bundle.js:51:16)
      at Object.<anonymous> (node_modules/@polkadot/api/cjs/index.js:7:15)
      at Object.require (src/polkadot/index.ts:2:1)
      at Object.require (src/polkadot/polkadot.test.ts:1:1)

  console.warn
    @polkadot/rpc-provider has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
        cjs 9.14.2      node_modules/@polkadot/rpc-provider/cjs
        cjs 9.14.2      node_modules/@polkadot/rpc-provider/cjs

      1 | import { init } from "@moonbeam-network/xcm-sdk";
    > 2 | import { ApiPromise } from "@polkadot/api"; // A second import is needed in the package under test
        | ^
      3 |
      4 | export const connectXcm = async () => {
      5 |   return init();

      at warn (node_modules/@polkadot/util/cjs/versionDetect.js:75:11)
      at detectPackage (node_modules/@polkadot/util/cjs/versionDetect.js:101:5)
      at Object.<anonymous> (node_modules/@polkadot/rpc-provider/cjs/detectPackage.js:12:25)
      at Object.<anonymous> (node_modules/@polkadot/rpc-provider/cjs/index.js:6:1)
      at Object.<anonymous> (node_modules/@polkadot/api/cjs/bundle.js:52:20)
      at Object.<anonymous> (node_modules/@polkadot/api/cjs/index.js:7:15)
      at Object.require (src/polkadot/index.ts:2:1)
      at Object.require (src/polkadot/polkadot.test.ts:1:1)

  console.warn
    @polkadot/api-derive has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
        cjs 9.14.2      node_modules/@polkadot/api-derive/cjs
        cjs 9.14.2      node_modules/@polkadot/api-derive/cjs

      1 | import { init } from "@moonbeam-network/xcm-sdk";
    > 2 | import { ApiPromise } from "@polkadot/api"; // A second import is needed in the package under test
        | ^
      3 |
      4 | export const connectXcm = async () => {
      5 |   return init();

      at warn (node_modules/@polkadot/util/cjs/versionDetect.js:75:11)
      at detectPackage (node_modules/@polkadot/util/cjs/versionDetect.js:101:5)
      at Object.<anonymous> (node_modules/@polkadot/api-derive/cjs/detectPackage.js:12:25)
      at Object.<anonymous> (node_modules/@polkadot/api-derive/cjs/index.js:6:1)
      at Object.<anonymous> (node_modules/@polkadot/api/cjs/util/decorate.js:7:18)
      at Object.<anonymous> (node_modules/@polkadot/api/cjs/util/index.js:29:17)
      at Object.<anonymous> (node_modules/@polkadot/api/cjs/submittable/createClass.js:9:14)
      at Object.<anonymous> (node_modules/@polkadot/api/cjs/submittable/createSubmittable.js:7:20)
      at Object.<anonymous> (node_modules/@polkadot/api/cjs/submittable/index.js:18:26)
      at Object.<anonymous> (node_modules/@polkadot/api/cjs/bundle.js:54:20)
      at Object.<anonymous> (node_modules/@polkadot/api/cjs/index.js:7:15)
      at Object.require (src/polkadot/index.ts:2:1)
      at Object.require (src/polkadot/polkadot.test.ts:1:1)

  console.warn
    @polkadot/rpc-core has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
        cjs 9.14.2      node_modules/@polkadot/rpc-core/cjs
        cjs 9.14.2      node_modules/@polkadot/rpc-core/cjs

      1 | import { init } from "@moonbeam-network/xcm-sdk";
    > 2 | import { ApiPromise } from "@polkadot/api"; // A second import is needed in the package under test
        | ^
      3 |
      4 | export const connectXcm = async () => {
      5 |   return init();

      at warn (node_modules/@polkadot/util/cjs/versionDetect.js:75:11)
      at detectPackage (node_modules/@polkadot/util/cjs/versionDetect.js:101:5)
      at Object.<anonymous> (node_modules/@polkadot/rpc-core/cjs/detectPackage.js:12:25)
      at Object.<anonymous> (node_modules/@polkadot/rpc-core/cjs/index.js:6:1)
      at Object.<anonymous> (node_modules/@polkadot/api-derive/cjs/util/index.js:22:16)
      at Object.<anonymous> (node_modules/@polkadot/api-derive/cjs/accounts/accountId.js:10:14)
      at Object.<anonymous> (node_modules/@polkadot/api-derive/cjs/accounts/index.js:6:18)
      at Object.<anonymous> (node_modules/@polkadot/api-derive/cjs/derive.js:7:40)
      at Object.<anonymous> (node_modules/@polkadot/api-derive/cjs/bundle.js:17:15)
      at Object.<anonymous> (node_modules/@polkadot/api-derive/cjs/index.js:7:15)
      at Object.<anonymous> (node_modules/@polkadot/api/cjs/util/decorate.js:7:18)
      at Object.<anonymous> (node_modules/@polkadot/api/cjs/util/index.js:29:17)
      at Object.<anonymous> (node_modules/@polkadot/api/cjs/submittable/createClass.js:9:14)
      at Object.<anonymous> (node_modules/@polkadot/api/cjs/submittable/createSubmittable.js:7:20)
      at Object.<anonymous> (node_modules/@polkadot/api/cjs/submittable/index.js:18:26)
      at Object.<anonymous> (node_modules/@polkadot/api/cjs/bundle.js:54:20)
      at Object.<anonymous> (node_modules/@polkadot/api/cjs/index.js:7:15)
      at Object.require (src/polkadot/index.ts:2:1)
      at Object.require (src/polkadot/polkadot.test.ts:1:1)

  console.warn
    @polkadot/types has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
        cjs 9.14.2      node_modules/@polkadot/types/cjs
        cjs 9.14.2      node_modules/@polkadot/types/cjs

      1 | import { init } from "@moonbeam-network/xcm-sdk";
    > 2 | import { ApiPromise } from "@polkadot/api"; // A second import is needed in the package under test
        | ^
      3 |
      4 | export const connectXcm = async () => {
      5 |   return init();

      at warn (node_modules/@polkadot/util/cjs/versionDetect.js:75:11)
      at detectPackage (node_modules/@polkadot/util/cjs/versionDetect.js:101:5)
      at Object.<anonymous> (node_modules/@polkadot/types/cjs/detectPackage.js:12:25)
      at Object.<anonymous> (node_modules/@polkadot/types/cjs/index.js:6:1)
      at Object.<anonymous> (node_modules/@polkadot/rpc-core/cjs/bundle.js:18:14)
      at Object.<anonymous> (node_modules/@polkadot/rpc-core/cjs/index.js:7:15)
      at Object.<anonymous> (node_modules/@polkadot/api-derive/cjs/util/index.js:22:16)
      at Object.<anonymous> (node_modules/@polkadot/api-derive/cjs/accounts/accountId.js:10:14)
      at Object.<anonymous> (node_modules/@polkadot/api-derive/cjs/accounts/index.js:6:18)
      at Object.<anonymous> (node_modules/@polkadot/api-derive/cjs/derive.js:7:40)
      at Object.<anonymous> (node_modules/@polkadot/api-derive/cjs/bundle.js:17:15)
      at Object.<anonymous> (node_modules/@polkadot/api-derive/cjs/index.js:7:15)
      at Object.<anonymous> (node_modules/@polkadot/api/cjs/util/decorate.js:7:18)
      at Object.<anonymous> (node_modules/@polkadot/api/cjs/util/index.js:29:17)
      at Object.<anonymous> (node_modules/@polkadot/api/cjs/submittable/createClass.js:9:14)
      at Object.<anonymous> (node_modules/@polkadot/api/cjs/submittable/createSubmittable.js:7:20)
      at Object.<anonymous> (node_modules/@polkadot/api/cjs/submittable/index.js:18:26)
      at Object.<anonymous> (node_modules/@polkadot/api/cjs/bundle.js:54:20)
      at Object.<anonymous> (node_modules/@polkadot/api/cjs/index.js:7:15)
      at Object.require (src/polkadot/index.ts:2:1)
      at Object.require (src/polkadot/polkadot.test.ts:1:1)

  console.warn
    @polkadot/types-create has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
        cjs 9.14.2      node_modules/@polkadot/types-create/cjs
        cjs 9.14.2      node_modules/@polkadot/types-create/cjs

      at warn (node_modules/@polkadot/util/cjs/versionDetect.js:75:11)
      at detectPackage (node_modules/@polkadot/util/cjs/versionDetect.js:101:5)
      at Object.<anonymous> (node_modules/@polkadot/types-create/cjs/detectPackage.js:12:25)
      at Object.<anonymous> (node_modules/@polkadot/types-create/cjs/index.js:6:1)
      at Object.<anonymous> (node_modules/@polkadot/types/cjs/interfaces/xcm/definitions.js:7:20)
      at Object.<anonymous> (node_modules/@polkadot/types/cjs/interfaces/definitions.js:528:45)
      at Object.<anonymous> (node_modules/@polkadot/types/cjs/bundle.js:46:47)
      at Object.<anonymous> (node_modules/@polkadot/types/cjs/index.js:7:15)
      at Object.<anonymous> (node_modules/@polkadot/rpc-core/cjs/bundle.js:18:14)
      at Object.<anonymous> (node_modules/@polkadot/rpc-core/cjs/index.js:7:15)
      at Object.<anonymous> (node_modules/@polkadot/api-derive/cjs/util/index.js:22:16)
      at Object.<anonymous> (node_modules/@polkadot/api-derive/cjs/accounts/accountId.js:10:14)
      at Object.<anonymous> (node_modules/@polkadot/api-derive/cjs/accounts/index.js:6:18)
      at Object.<anonymous> (node_modules/@polkadot/api-derive/cjs/derive.js:7:40)
      at Object.<anonymous> (node_modules/@polkadot/api-derive/cjs/bundle.js:17:15)
      at Object.<anonymous> (node_modules/@polkadot/api-derive/cjs/index.js:7:15)
      at Object.<anonymous> (node_modules/@polkadot/api/cjs/util/decorate.js:7:18)
      at Object.<anonymous> (node_modules/@polkadot/api/cjs/util/index.js:29:17)
      at Object.<anonymous> (node_modules/@polkadot/api/cjs/submittable/createClass.js:9:14)
      at Object.<anonymous> (node_modules/@polkadot/api/cjs/submittable/createSubmittable.js:7:20)
      at Object.<anonymous> (node_modules/@polkadot/api/cjs/submittable/index.js:18:26)

  console.warn
    @polkadot/types-codec has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
        cjs 9.14.2      node_modules/@polkadot/types-codec/cjs
        cjs 9.14.2      node_modules/@polkadot/types-codec/cjs

      at warn (node_modules/@polkadot/util/cjs/versionDetect.js:75:11)
      at detectPackage (node_modules/@polkadot/util/cjs/versionDetect.js:101:5)
      at Object.<anonymous> (node_modules/@polkadot/types-codec/cjs/detectPackage.js:12:25)
      at Object.<anonymous> (node_modules/@polkadot/types-codec/cjs/index.js:6:1)
      at Object.<anonymous> (node_modules/@polkadot/types-create/cjs/create/class.js:9:19)
      at Object.<anonymous> (node_modules/@polkadot/types-create/cjs/create/index.js:6:14)
      at Object.<anonymous> (node_modules/@polkadot/types-create/cjs/bundle.js:24:15)
      at Object.<anonymous> (node_modules/@polkadot/types-create/cjs/index.js:7:15)
      at Object.<anonymous> (node_modules/@polkadot/types/cjs/interfaces/xcm/definitions.js:7:20)
      at Object.<anonymous> (node_modules/@polkadot/types/cjs/interfaces/definitions.js:528:45)
      at Object.<anonymous> (node_modules/@polkadot/types/cjs/bundle.js:46:47)
      at Object.<anonymous> (node_modules/@polkadot/types/cjs/index.js:7:15)
      at Object.<anonymous> (node_modules/@polkadot/rpc-core/cjs/bundle.js:18:14)
      at Object.<anonymous> (node_modules/@polkadot/rpc-core/cjs/index.js:7:15)
      at Object.<anonymous> (node_modules/@polkadot/api-derive/cjs/util/index.js:22:16)
      at Object.<anonymous> (node_modules/@polkadot/api-derive/cjs/accounts/accountId.js:10:14)
      at Object.<anonymous> (node_modules/@polkadot/api-derive/cjs/accounts/index.js:6:18)
      at Object.<anonymous> (node_modules/@polkadot/api-derive/cjs/derive.js:7:40)
      at Object.<anonymous> (node_modules/@polkadot/api-derive/cjs/bundle.js:17:15)
      at Object.<anonymous> (node_modules/@polkadot/api-derive/cjs/index.js:7:15)
      at Object.<anonymous> (node_modules/@polkadot/api/cjs/util/decorate.js:7:18)

  console.warn
    @polkadot/types-known has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
        cjs 9.14.2      node_modules/@polkadot/types-known/cjs
        cjs 9.14.2      node_modules/@polkadot/types-known/cjs

      1 | import { init } from "@moonbeam-network/xcm-sdk";
    > 2 | import { ApiPromise } from "@polkadot/api"; // A second import is needed in the package under test
        | ^
      3 |
      4 | export const connectXcm = async () => {
      5 |   return init();

      at warn (node_modules/@polkadot/util/cjs/versionDetect.js:75:11)
      at detectPackage (node_modules/@polkadot/util/cjs/versionDetect.js:101:5)
      at Object.<anonymous> (node_modules/@polkadot/types-known/cjs/detectPackage.js:12:25)
      at Object.<anonymous> (node_modules/@polkadot/types-known/cjs/index.js:6:1)
      at Object.<anonymous> (node_modules/@polkadot/api/cjs/base/Init.js:12:19)
      at Object.<anonymous> (node_modules/@polkadot/api/cjs/base/Getters.js:9:13)
      at Object.<anonymous> (node_modules/@polkadot/api/cjs/base/index.js:8:16)
      at Object.<anonymous> (node_modules/@polkadot/api/cjs/promise/Api.js:8:13)
      at Object.<anonymous> (node_modules/@polkadot/api/cjs/promise/index.js:18:12)
      at Object.<anonymous> (node_modules/@polkadot/api/cjs/bundle.js:55:16)
      at Object.<anonymous> (node_modules/@polkadot/api/cjs/index.js:7:15)
      at Object.require (src/polkadot/index.ts:2:1)
      at Object.require (src/polkadot/polkadot.test.ts:1:1)

 PASS  src/polkadot/polkadot.test.ts
  connectXcm
    ✓ should not throw warnings (1 ms)

----------|---------|----------|---------|---------|-------------------
File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
----------|---------|----------|---------|---------|-------------------
All files |      75 |      100 |      50 |      75 |
 index.ts |      75 |      100 |      50 |      75 | 9
----------|---------|----------|---------|---------|-------------------
Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        1.487 s, estimated 2 s
Ran all test suites.
```
