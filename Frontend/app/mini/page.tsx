import { useEffect } from "react";
import { sdk } from "@farcaster/miniapp-sdk";

const page = () => {
  useEffect(() => {
    async function init() {
      await sdk.actions.ready();
    }
  }, []);
  return <div></div>;
};

export default page;
