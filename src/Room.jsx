// import React from "react";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

import { useParams } from "react-router-dom";

function Room() {
  const { roomId } = useParams();

  function randomID(len) {
    let result = "";
    if (result) return result;
    var chars =
        "12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP",
      maxPos = chars.length,
      i;
    len = len || 5;
    for (i = 0; i < len; i++) {
      result += chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return result;
  }

  let myMeeting = async (element) => {
    const appID = 1019242541;
    const serverSecret = "812935fc5b5cd785ef86d065c6a1b0fb";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomId,
      randomID(5),
      randomID(5)
    );

    // Create instance object from Kit Token.
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    // start the call
    zp.joinRoom({
      container: element,
      scenario: {
        mode: ZegoUIKitPrebuilt.LiveStreaming,
        // config: {
        //   role,
        // },
      },
      sharedLinks: [
        {
          name: "Copy link",
          url: `http://localhost:5173/room/${roomId}`,
        },
      ],
    });
  };

  return <div ref={myMeeting}></div>;
}

export default Room;
