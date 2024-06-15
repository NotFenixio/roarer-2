import { twMerge } from "tailwind-merge";
import { MouseEventHandler } from "react";
import { ProfilePicture } from "./ProfilePicture";

export type UserViewProps = {
  username: string;
  text?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  secondary?: boolean;
};
export const UserView = (props: UserViewProps) => {
  return (
    <button
      className={twMerge(
        "flex w-full items-center gap-2 bg-white px-2 py-1 dark:bg-gray-950",
        props.secondary
          ? "bg-white dark:bg-gray-900"
          : "bg-white dark:bg-gray-950",
        props.disabled
          ? ""
          : props.secondary
            ? "hover:bg-gray-100 dark:hover:bg-gray-800"
            : "hover:bg-gray-100 dark:hover:bg-gray-900",
      )}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      <ProfilePicture
        className="inline-block"
        username={props.username}
        size="h-8 min-h-8 w-8 min-w-8"
      />
      <div>
        {props.username}{" "}
        {props.text ? (
          <span className="text-sm">({props.text})</span>
        ) : undefined}
      </div>
    </button>
  );
};
