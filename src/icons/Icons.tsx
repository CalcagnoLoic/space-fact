import type { IconProps } from "../types/interface";

export const Icons = ({ kind }: IconProps) => {
  switch (kind) {
    case "chevron":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="6"
          height="8"
          className="self-center"
        >
          <path fill="none" stroke="#FFF" opacity=".4" d="M1 0l4 4-4 4" />
        </svg>
      );

    case "menu":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="17"
          className="hamburger flex cursor-pointer md:hidden"
        >
          <g fill="#FFF" fill-rule="evenodd">
            <path d="M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z" />
          </g>
        </svg>
      );

    case "src":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          className="mt-8 self-center"
        >
          <path
            fill="#FFF"
            d="M11.34.66C10.9.22 10.37 0 9.75 0h-7.5C1.63 0 1.1.22.66.66.22 1.1 0 1.63 0 2.25v7.5c0 .62.22 1.15.66 1.59.44.44.97.66 1.59.66h7.5c.62 0 1.15-.22 1.59-.66.44-.44.66-.97.66-1.59v-7.5c0-.62-.22-1.15-.66-1.59zM10 6.25a.467.467 0 01-.305.46.544.544 0 01-.195.04.465.465 0 01-.352-.149L8.023 5.476 3.852 9.648a.481.481 0 01-.352.149.48.48 0 01-.352-.149l-.796-.797a.48.48 0 01-.149-.351.48.48 0 01.149-.352l4.172-4.172-1.125-1.125c-.162-.15-.198-.333-.11-.546A.467.467 0 015.75 2H9.5c.135 0 .253.05.352.148A.48.48 0 0110 2.5v3.75z"
            opacity=".5"
          />
        </svg>
      );

    default:
      return null;
  }
};
