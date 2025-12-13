import { useAccount, useConnect, useDisconnect } from "wagmi";

export default function ConnectMenu() {
  const { isConnected, address } = useAccount();
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();

  // if (isConnected) {
  //   return (
  //     <>
  //       <div>You're connected!</div>
  //       <div>Address: {address}</div>
  //     </>
  //   );
  // }

  return (
    <div className="flex">
      <button
        type="button"
        onClick={() => connect({ connector: connectors[0] })}
      >
        Connect
      </button>

      {/* <button onClick={() => disconnect()}>Disconnect</button> */}
    </div>
  );
}
