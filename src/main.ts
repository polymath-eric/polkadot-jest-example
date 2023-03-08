import "./style.css";
import { connectXcm } from "./clients";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <p class="read-the-docs">
      Demo for jest + polkadot api littering stdout

      Use "npm run test" to see the warnings like:
    </p>

    <code>
      @polkadot/types-known has multiple versions, ensure that there is only one installed.
      Either remove and explicitly install matching versions or dedupe using your package manager.
      The following conflicting packages were found:
          cjs 10.0.1      node_modules/@polkadot/types-known/cjs
          cjs 10.0.1      node_modules/@polkadot/types-known/cjs
    </code>
  </div>
`;

const main = async () => {
  connectXcm();
};
main();
