'use client';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
interface IRoom {
	id: string;
}

export function Room({ id }: IRoom) {
	const myMeeting = (element: HTMLDivElement) => {
		const appID = Number(process.env.APP_ID);
		const secret = String(process.env.SECRET_KEY);

		const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
			appID,
			secret,
			id,
			Date.now().toString(),
			'Artem'
		);

		const zp = ZegoUIKitPrebuilt.create(kitToken);

		zp.joinRoom({
			container: element,
			sharedLinks: [
				{
					name: 'Personal link',
					url: `${process.env.SERVER_URL}/room/${id}`,
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

	return <div ref={myMeeting} className="[&>*]:shadow-red" />;
}
