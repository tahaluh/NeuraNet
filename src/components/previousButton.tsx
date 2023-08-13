"use client";

import { useRouter } from "next/navigation";
import pathOrder from "../routes/pathOrder";
import OutlinedButton from "./outlinedButton";
import getPath from "../routes/getPath";

interface propsInterface {
  text: string;
  topic: string;
  lang: string;
}

const getPreviousUrl = (topic: string) => {
  const actualPathNumber =
    Object.keys(pathOrder).find(
      (key) => pathOrder[+key as keyof typeof pathOrder] === topic
    ) || 1;
  return pathOrder[(+actualPathNumber - 1) as keyof typeof pathOrder];
};

export default function PreviousButton({ text, topic, lang }: propsInterface) {
  const router = useRouter();
  return (
    <OutlinedButton
      onClick={() => {
        router.push(
          getPath[getPreviousUrl(topic) as keyof typeof getPath](lang)
        );
      }}
    >
      {text}
    </OutlinedButton>
  );
}
