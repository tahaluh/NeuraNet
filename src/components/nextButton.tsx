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

const getNextUrl = (topic: string) => {
  const actualPathNumber =
    Object.keys(pathOrder).find(
      (key) => pathOrder[+key as keyof typeof pathOrder] === topic
    ) || 0;
  return pathOrder[(+actualPathNumber + 1) as keyof typeof pathOrder];
};

export default function NextButton({ text, topic, lang }: propsInterface) {
  const router = useRouter();
  return (
    <OutlinedButton
      onClick={() => {
        router.push(getPath[getNextUrl(topic) as keyof typeof getPath](lang));
      }}
    >
      {text}
    </OutlinedButton>
  );
}
