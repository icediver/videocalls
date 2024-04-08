import type { Metadata } from "next";

import { NO_INDEX_PAGE } from "@/constants/seo.constants";
import { usePathname } from "next/navigation";
import { Room } from "@/components/screen/room/Room";

export const metadata: Metadata = {
  title: "Videocalls",
  ...NO_INDEX_PAGE,
};
export function generateStaticParams() {
  const paths = [...Array(20)].map((_, index) => {
    return { id: (index + 1).toString() };
  });

  return paths;
}

export default function RoomPage({ params }: { params: { id: string } }) {
  const { id } = params;

  // const myMeeting = async (element: HTMLDivElement) => {
  //   const appId = 932582383;
  //   const secret = "8e3d92832b9d9cdaaf08d1573329c84f";
  //
  //   const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appId, secret);
  // };

  return <Room id={id} />;
}
