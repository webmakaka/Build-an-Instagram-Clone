import React from "react";
import { makeStyles } from "@material-ui/core";

export const LogoLoadingIcon = props => (
  <svg
    width={50}
    height={50}
    viewBox="0 0 50 50"
    style={{
      position: "absolute",
      top: "50%",
      left: "50%",
      margin: "-25px 0 0 -25px"
    }}
    fill="#c7c7c7"
    {...props}
  >
    <path d="M25 1c-6.52 0-7.34.03-9.9.14-2.55.12-4.3.53-5.82 1.12a11.76 11.76 0 00-4.25 2.77 11.76 11.76 0 00-2.77 4.25c-.6 1.52-1 3.27-1.12 5.82C1.03 17.66 1 18.48 1 25c0 6.5.03 7.33.14 9.88.12 2.56.53 4.3 1.12 5.83a11.76 11.76 0 002.77 4.25 11.76 11.76 0 004.25 2.77c1.52.59 3.27 1 5.82 1.11 2.56.12 3.38.14 9.9.14 6.5 0 7.33-.02 9.88-.14 2.56-.12 4.3-.52 5.83-1.11a11.76 11.76 0 004.25-2.77 11.76 11.76 0 002.77-4.25c.59-1.53 1-3.27 1.11-5.83.12-2.55.14-3.37.14-9.89 0-6.51-.02-7.33-.14-9.89-.12-2.55-.52-4.3-1.11-5.82a11.76 11.76 0 00-2.77-4.25 11.76 11.76 0 00-4.25-2.77c-1.53-.6-3.27-1-5.83-1.12A170.2 170.2 0 0025 1zm0 4.32c6.4 0 7.16.03 9.69.14 2.34.11 3.6.5 4.45.83 1.12.43 1.92.95 2.76 1.8a7.43 7.43 0 011.8 2.75c.32.85.72 2.12.82 4.46.12 2.53.14 3.29.14 9.7 0 6.4-.02 7.16-.14 9.69-.1 2.34-.5 3.6-.82 4.45a7.43 7.43 0 01-1.8 2.76 7.43 7.43 0 01-2.76 1.8c-.84.32-2.11.72-4.45.82-2.53.12-3.3.14-9.7.14-6.4 0-7.16-.02-9.7-.14-2.33-.1-3.6-.5-4.45-.82a7.43 7.43 0 01-2.76-1.8 7.43 7.43 0 01-1.8-2.76c-.32-.84-.71-2.11-.82-4.45a166.5 166.5 0 01-.14-9.7c0-6.4.03-7.16.14-9.7.11-2.33.5-3.6.83-4.45a7.43 7.43 0 011.8-2.76 7.43 7.43 0 012.75-1.8c.85-.32 2.12-.71 4.46-.82 2.53-.11 3.29-.14 9.7-.14zm0 7.35a12.32 12.32 0 100 24.64 12.32 12.32 0 000-24.64zM25 33a8 8 0 110-16 8 8 0 010 16zm15.68-20.8a2.88 2.88 0 10-5.76 0 2.88 2.88 0 005.76 0z" />
  </svg>
);

export const SaveIcon = props => (
  <svg
    aria-label="Save"
    className="_8-yf5"
    fill="#262626"
    height={24}
    viewBox="0 0 48 48"
    width={24}
    {...props}
  >
    <path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z" />
  </svg>
);

export const CommentIcon = props => (
  <svg
    aria-label="Comment"
    className="_8-yf5"
    fill="#262626"
    height={24}
    viewBox="0 0 48 48"
    width={24}
    {...props}
  >
    <path
      clipRule="evenodd"
      d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z"
      fillRule="evenodd"
    />
  </svg>
);

export const ExploreActiveIcon = props => (
  <svg
    aria-label="Find People"
    className="_8-yf5"
    fill="#262626"
    height={22}
    viewBox="0 0 48 48"
    width={22}
    {...props}
  >
    <path
      clipRule="evenodd"
      d="M24 47.5C11 47.5.5 37 .5 24S11 .5 24 .5 47.5 11 47.5 24 37 47.5 24 47.5zm4.4-20.3c-.3.5-.7.9-1.2 1.2l-14.8 8.1c-.3.1-.6.1-.8-.1-.2-.2-.3-.5-.1-.8l8.1-14.8c.3-.5.7-.9 1.2-1.2l14.8-8.1c.3-.1.6-.1.8.1.2.2.3.5.1.8l-8.1 14.8zm-6.2-5L17.9 30l7.8-4.3-3.5-3.5z"
      fillRule="evenodd"
    />
  </svg>
);

export const ExploreIcon = props => (
  <svg
    aria-label="Find People"
    className="_8-yf5"
    fill="#262626"
    height={22}
    viewBox="0 0 48 48"
    width={22}
    {...props}
  >
    <path
      clipRule="evenodd"
      d="M24 .5C37 .5 47.5 11 47.5 24S37 47.5 24 47.5.5 37 .5 24 11 .5 24 .5zm0 44c11.3 0 20.5-9.2 20.5-20.5S35.3 3.5 24 3.5 3.5 12.7 3.5 24 12.7 44.5 24 44.5zm-4.4-23.7c.3-.5.7-.9 1.2-1.2l14.8-8.1c.3-.1.6-.1.8.1.2.2.3.5.1.8l-8.1 14.8c-.3.5-.7.9-1.2 1.2l-14.8 8.1c-.3.1-.6.1-.8-.1-.2-.2-.3-.5-.1-.8l8.1-14.8zm6.2 5l4.3-7.8-7.8 4.3 3.5 3.5z"
      fillRule="evenodd"
    />
  </svg>
);

export const HomeActiveIcon = props => (
  <svg
    aria-label="Home"
    className="_8-yf5"
    fill="#262626"
    height={22}
    viewBox="0 0 48 48"
    width={22}
    {...props}
  >
    <path d="M45.5 48H30.1c-.8 0-1.5-.7-1.5-1.5V34.2c0-2.6-2.1-4.6-4.6-4.6s-4.6 2.1-4.6 4.6v12.3c0 .8-.7 1.5-1.5 1.5H2.5c-.8 0-1.5-.7-1.5-1.5V23c0-.4.2-.8.4-1.1L22.9.4c.6-.6 1.6-.6 2.1 0l21.5 21.5c.3.3.4.7.4 1.1v23.5c.1.8-.6 1.5-1.4 1.5z" />
  </svg>
);

export const HomeIcon = props => (
  <svg
    aria-label="Home"
    className="_8-yf5"
    fill="#262626"
    height={22}
    viewBox="0 0 48 48"
    width={22}
    {...props}
  >
    <path d="M45.3 48H30c-.8 0-1.5-.7-1.5-1.5V34.2c0-2.6-2-4.6-4.6-4.6s-4.6 2-4.6 4.6v12.3c0 .8-.7 1.5-1.5 1.5H2.5c-.8 0-1.5-.7-1.5-1.5V23c0-.4.2-.8.4-1.1L22.9.4c.6-.6 1.5-.6 2.1 0l21.5 21.5c.4.4.6 1.1.3 1.6 0 .1-.1.1-.1.2v22.8c.1.8-.6 1.5-1.4 1.5zm-13.8-3h12.3V23.4L24 3.6l-20 20V45h12.3V34.2c0-4.3 3.3-7.6 7.6-7.6s7.6 3.3 7.6 7.6V45z" />
  </svg>
);

export const LikeIcon = props => (
  <svg
    aria-label="Like"
    className="_8-yf5"
    fill="#262626"
    height={24}
    viewBox="0 0 48 48"
    width={24}
    {...props}
  >
    <path
      clipRule="evenodd"
      d="M34.3 3.5C27.2 3.5 24 8.8 24 8.8s-3.2-5.3-10.3-5.3C6.4 3.5.5 9.9.5 17.8s6.1 12.4 12.2 17.8c9.2 8.2 9.8 8.9 11.3 8.9s2.1-.7 11.3-8.9c6.2-5.5 12.2-10 12.2-17.8 0-7.9-5.9-14.3-13.2-14.3zm-1 29.8c-5.4 4.8-8.3 7.5-9.3 8.1-1-.7-4.6-3.9-9.3-8.1-5.5-4.9-11.2-9-11.2-15.6 0-6.2 4.6-11.3 10.2-11.3 4.1 0 6.3 2 7.9 4.2 3.6 5.1 1.2 5.1 4.8 0 1.6-2.2 3.8-4.2 7.9-4.2 5.6 0 10.2 5.1 10.2 11.3 0 6.7-5.7 10.8-11.2 15.6z"
      fillRule="evenodd"
    />
  </svg>
);

const useLoadingLargeStyles = makeStyles({
  container: {
    height: 50,
    width: 32,
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column"
  },
  loading: {
    animation: "$spinner-spin12 1.2s steps(12) infinite"
  },
  "@keyframes spinner-spin12": {
    "0%": {
      transform: "rotate(0deg)"
    },
    to: {
      transform: "rotate(360deg)"
    }
  }
});

export const LoadingLargeIcon = props => {
  const classes = useLoadingLargeStyles();

  return (
    <div className={classes.container} {...props}>
      <svg
        aria-label="Loading..."
        className={classes.loading}
        viewBox="0 0 100 100"
      >
        <rect
          fill="#555555"
          height={6}
          opacity={0}
          rx={3}
          ry={3}
          transform="rotate(-90 50 50)"
          width={25}
          x={72}
          y={47}
        />
        <rect
          fill="#555555"
          height={6}
          opacity="0.08333333333333333"
          rx={3}
          ry={3}
          transform="rotate(-60 50 50)"
          width={25}
          x={72}
          y={47}
        />
        <rect
          fill="#555555"
          height={6}
          opacity="0.16666666666666666"
          rx={3}
          ry={3}
          transform="rotate(-30 50 50)"
          width={25}
          x={72}
          y={47}
        />
        <rect
          fill="#555555"
          height={6}
          opacity="0.25"
          rx={3}
          ry={3}
          transform="rotate(0 50 50)"
          width={25}
          x={72}
          y={47}
        />
        <rect
          fill="#555555"
          height={6}
          opacity="0.3333333333333333"
          rx={3}
          ry={3}
          transform="rotate(30 50 50)"
          width={25}
          x={72}
          y={47}
        />
        <rect
          fill="#555555"
          height={6}
          opacity="0.4166666666666667"
          rx={3}
          ry={3}
          transform="rotate(60 50 50)"
          width={25}
          x={72}
          y={47}
        />
        <rect
          fill="#555555"
          height={6}
          opacity="0.5"
          rx={3}
          ry={3}
          transform="rotate(90 50 50)"
          width={25}
          x={72}
          y={47}
        />
        <rect
          fill="#555555"
          height={6}
          opacity="0.5833333333333334"
          rx={3}
          ry={3}
          transform="rotate(120 50 50)"
          width={25}
          x={72}
          y={47}
        />
        <rect
          fill="#555555"
          height={6}
          opacity="0.6666666666666666"
          rx={3}
          ry={3}
          transform="rotate(150 50 50)"
          width={25}
          x={72}
          y={47}
        />
        <rect
          fill="#555555"
          height={6}
          opacity="0.75"
          rx={3}
          ry={3}
          transform="rotate(180 50 50)"
          width={25}
          x={72}
          y={47}
        />
        <rect
          fill="#555555"
          height={6}
          opacity="0.8333333333333334"
          rx={3}
          ry={3}
          transform="rotate(210 50 50)"
          width={25}
          x={72}
          y={47}
        />
        <rect
          fill="#555555"
          height={6}
          opacity="0.9166666666666666"
          rx={3}
          ry={3}
          transform="rotate(240 50 50)"
          width={25}
          x={72}
          y={47}
        />
      </svg>
    </div>
  );
};

const useLoadingStyles = makeStyles({
  container: {
    height: 18,
    width: 18,
    margin: "0 auto"
  },
  loadingSvg: {
    animation: "$IGCoreSpinnerSpin8 .8s steps(8) infinite"
  },
  "@keyframes IGCoreSpinnerSpin8": {
    "0%": {
      transform: "rotate(180deg)"
    },
    to: {
      transform: "rotate(540deg)"
    }
  }
});

export const LoadingIcon = props => {
  const classes = useLoadingStyles();

  return (
    <div>
      <div className={classes.container}>
        <svg
          aria-label="Loading..."
          className={classes.loadingSvg}
          viewBox="0 0 100 100"
        >
          <rect
            fill="#555555"
            height={10}
            opacity={0}
            rx={5}
            ry={5}
            transform="rotate(-90 50 50)"
            width={28}
            x={67}
            y={45}
          />
          <rect
            fill="#555555"
            height={10}
            opacity="0.125"
            rx={5}
            ry={5}
            transform="rotate(-45 50 50)"
            width={28}
            x={67}
            y={45}
          />
          <rect
            fill="#555555"
            height={10}
            opacity="0.25"
            rx={5}
            ry={5}
            transform="rotate(0 50 50)"
            width={28}
            x={67}
            y={45}
          />
          <rect
            fill="#555555"
            height={10}
            opacity="0.375"
            rx={5}
            ry={5}
            transform="rotate(45 50 50)"
            width={28}
            x={67}
            y={45}
          />
          <rect
            fill="#555555"
            height={10}
            opacity="0.5"
            rx={5}
            ry={5}
            transform="rotate(90 50 50)"
            width={28}
            x={67}
            y={45}
          />
          <rect
            fill="#555555"
            height={10}
            opacity="0.625"
            rx={5}
            ry={5}
            transform="rotate(135 50 50)"
            width={28}
            x={67}
            y={45}
          />
          <rect
            fill="#555555"
            height={10}
            opacity="0.75"
            rx={5}
            ry={5}
            transform="rotate(180 50 50)"
            width={28}
            x={67}
            y={45}
          />
          <rect
            fill="#555555"
            height={10}
            opacity="0.875"
            rx={5}
            ry={5}
            transform="rotate(225 50 50)"
            width={28}
            x={67}
            y={45}
          />
        </svg>
      </div>
    </div>
  );
};

export const MoreIcon = props => (
  <svg
    aria-label="More options"
    className="_8-yf5"
    fill="#262626"
    height={16}
    viewBox="0 0 48 48"
    width={16}
    {...props}
  >
    <circle clipRule="evenodd" cx={8} cy={24} fillRule="evenodd" r={4.5} />
    <circle clipRule="evenodd" cx={24} cy={24} fillRule="evenodd" r={4.5} />
    <circle clipRule="evenodd" cx={40} cy={24} fillRule="evenodd" r={4.5} />
  </svg>
);

export const RemoveIcon = props => (
  <svg
    aria-label="Remove"
    className="_8-yf5"
    fill="#262626"
    height={24}
    viewBox="0 0 48 48"
    width={24}
    {...props}
  >
    <path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 28.9 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1z" />
  </svg>
);

export const ShareIcon = props => (
  <svg
    aria-label="Share Post"
    className="_8-yf5"
    fill="#262626"
    height={24}
    viewBox="0 0 48 48"
    width={24}
    {...props}
  >
    <path d="M46.5 3.5h-45C.6 3.5.2 4.6.8 5.2l16 15.8 5.5 22.8c.2.9 1.4 1 1.8.3L47.4 5c.4-.7-.1-1.5-.9-1.5zm-40.1 3h33.5L19.1 18c-.4.2-.9.1-1.2-.2L6.4 6.5zm17.7 31.8l-4-16.6c-.1-.4.1-.9.5-1.1L41.5 9 24.1 38.3zM14.7 48.4l2.9-.7" />
  </svg>
);

export const UnlikeIcon = props => (
  <svg
    aria-label="Unlike"
    className="_8-yf5"
    fill="#ed4956"
    height={24}
    viewBox="0 0 48 48"
    width={24}
    {...props}
  >
    <path
      clipRule="evenodd"
      d="M35.3 35.6c-9.2 8.2-9.8 8.9-11.3 8.9s-2.1-.7-11.3-8.9C6.5 30.1.5 25.6.5 17.8.5 9.9 6.4 3.5 13.7 3.5 20.8 3.5 24 8.8 24 8.8s3.2-5.3 10.3-5.3c7.3 0 13.2 6.4 13.2 14.3 0 7.8-6.1 12.3-12.2 17.8z"
      fillRule="evenodd"
    />
  </svg>
);

export const GearIcon = props => (
  <svg
    aria-label="Options"
    className="_8-yf5"
    fill="#262626"
    height={24}
    viewBox="0 0 48 48"
    width={24}
    {...props}
  >
    <path
      clipRule="evenodd"
      d="M46.7 20.6l-2.1-1.1c-.4-.2-.7-.5-.8-1-.5-1.6-1.1-3.2-1.9-4.7-.2-.4-.3-.8-.1-1.2l.8-2.3c.2-.5 0-1.1-.4-1.5l-2.9-2.9c-.4-.4-1-.5-1.5-.4l-2.3.8c-.4.1-.8.1-1.2-.1-1.4-.8-3-1.5-4.6-1.9-.4-.1-.8-.4-1-.8l-1.1-2.2c-.3-.5-.8-.8-1.3-.8h-4.1c-.6 0-1.1.3-1.3.8l-1.1 2.2c-.2.4-.5.7-1 .8-1.6.5-3.2 1.1-4.6 1.9-.4.2-.8.3-1.2.1l-2.3-.8c-.5-.2-1.1 0-1.5.4L5.9 8.8c-.4.4-.5 1-.4 1.5l.8 2.3c.1.4.1.8-.1 1.2-.8 1.5-1.5 3-1.9 4.7-.1.4-.4.8-.8 1l-2.1 1.1c-.5.3-.8.8-.8 1.3V26c0 .6.3 1.1.8 1.3l2.1 1.1c.4.2.7.5.8 1 .5 1.6 1.1 3.2 1.9 4.7.2.4.3.8.1 1.2l-.8 2.3c-.2.5 0 1.1.4 1.5L8.8 42c.4.4 1 .5 1.5.4l2.3-.8c.4-.1.8-.1 1.2.1 1.4.8 3 1.5 4.6 1.9.4.1.8.4 1 .8l1.1 2.2c.3.5.8.8 1.3.8h4.1c.6 0 1.1-.3 1.3-.8l1.1-2.2c.2-.4.5-.7 1-.8 1.6-.5 3.2-1.1 4.6-1.9.4-.2.8-.3 1.2-.1l2.3.8c.5.2 1.1 0 1.5-.4l2.9-2.9c.4-.4.5-1 .4-1.5l-.8-2.3c-.1-.4-.1-.8.1-1.2.8-1.5 1.5-3 1.9-4.7.1-.4.4-.8.8-1l2.1-1.1c.5-.3.8-.8.8-1.3v-4.1c.4-.5.1-1.1-.4-1.3zM24 41.5c-9.7 0-17.5-7.8-17.5-17.5S14.3 6.5 24 6.5 41.5 14.3 41.5 24 33.7 41.5 24 41.5z"
      fillRule="evenodd"
    />
  </svg>
);

export const LikeActiveIcon = props => (
  <svg
    aria-label="Activity Feed"
    className="_8-yf5"
    fill="#262626"
    height={24}
    viewBox="0 0 48 48"
    width={24}
    {...props}
  >
    <path
      clipRule="evenodd"
      d="M35.3 35.6c-9.2 8.2-9.8 8.9-11.3 8.9s-2.1-.7-11.3-8.9C6.5 30.1.5 25.6.5 17.8.5 9.9 6.4 3.5 13.7 3.5 20.8 3.5 24 8.8 24 8.8s3.2-5.3 10.3-5.3c7.3 0 13.2 6.4 13.2 14.3 0 7.8-6.1 12.3-12.2 17.8z"
      fillRule="evenodd"
    />
  </svg>
);

export const CloseIcon = props => (
  <svg
    aria-label="Close"
    className="_8-yf5"
    fill="#fff"
    height={24}
    viewBox="0 0 48 48"
    width={24}
    {...props}
  >
    <path
      clipRule="evenodd"
      d="M41.8 9.8L27.5 24l14.2 14.2c.6.6.6 1.5 0 2.1l-1.4 1.4c-.6.6-1.5.6-2.1 0L24 27.5 9.8 41.8c-.6.6-1.5.6-2.1 0l-1.4-1.4c-.6-.6-.6-1.5 0-2.1L20.5 24 6.2 9.8c-.6-.6-.6-1.5 0-2.1l1.4-1.4c.6-.6 1.5-.6 2.1 0L24 20.5 38.3 6.2c.6-.6 1.5-.6 2.1 0l1.4 1.4c.6.6.6 1.6 0 2.2z"
      fillRule="evenodd"
    />
  </svg>
);

export const AddIcon = props => (
  <svg
    aria-label="New Post"
    className="_8-yf5"
    fill="#262626"
    height={24}
    viewBox="0 0 48 48"
    width={24}
    {...props}
  >
    <path d="M31.8 48H16.2c-6.6 0-9.6-1.6-12.1-4C1.6 41.4 0 38.4 0 31.8V16.2C0 9.6 1.6 6.6 4 4.1 6.6 1.6 9.6 0 16.2 0h15.6c6.6 0 9.6 1.6 12.1 4C46.4 6.6 48 9.6 48 16.2v15.6c0 6.6-1.6 9.6-4 12.1-2.6 2.5-5.6 4.1-12.2 4.1zM16.2 3C10 3 7.8 4.6 6.1 6.2 4.6 7.8 3 10 3 16.2v15.6c0 6.2 1.6 8.4 3.2 10.1 1.6 1.6 3.8 3.1 10 3.1h15.6c6.2 0 8.4-1.6 10.1-3.2 1.6-1.6 3.1-3.8 3.1-10V16.2c0-6.2-1.6-8.4-3.2-10.1C40.2 4.6 38 3 31.8 3H16.2z" />
    <path d="M36.3 25.5H11.7c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5h24.6c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5z" />
    <path d="M24 37.8c-.8 0-1.5-.7-1.5-1.5V11.7c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5v24.6c0 .8-.7 1.5-1.5 1.5z" />
  </svg>
);

export const GridIcon = props => (
  <svg
    aria-label="Posts"
    className="_8-yf5"
    fill="#999"
    height={24}
    viewBox="0 0 48 48"
    width={24}
    {...props}
  >
    <path
      clipRule="evenodd"
      d="M45 1.5H3c-.8 0-1.5.7-1.5 1.5v42c0 .8.7 1.5 1.5 1.5h42c.8 0 1.5-.7 1.5-1.5V3c0-.8-.7-1.5-1.5-1.5zm-40.5 3h11v11h-11v-11zm0 14h11v11h-11v-11zm11 25h-11v-11h11v11zm14 0h-11v-11h11v11zm0-14h-11v-11h11v11zm0-14h-11v-11h11v11zm14 28h-11v-11h11v11zm0-14h-11v-11h11v11zm0-14h-11v-11h11v11z"
      fillRule="evenodd"
    />
  </svg>
);
