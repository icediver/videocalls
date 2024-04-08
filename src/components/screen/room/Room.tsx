"use client";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
interface IRoom {
  id: string;
}

export function Room({ id }: IRoom) {
  const myMeeting = (element: HTMLDivElement) => {
    const appId = 932582383;
    const secret = "8e3d92832b9d9cdaaf08d1573329c84f";

    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appId,
      secret,
      id,
      Date.now().toString(),
      "Artem",
    );

    const zp = ZegoUIKitPrebuilt.create(kitToken);

    zp.joinRoom({
      container: element,
      sharedLinks: [
        {
          name: "Personal link",
          url: `http://localhost:3003/room/${id}`,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.VideoConference,
      },
      showTurnOffRemoteCameraButton: true,
      showTurnOffRemoteMicrophoneButton: true,
      showRemoveUserButton: true,
    });
  };

  return <div ref={myMeeting} />;
}
