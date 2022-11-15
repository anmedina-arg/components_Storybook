export const LikeHand = ({ color = 'text-current' }: { color?: string }) => (
  <>
    {/* <!-- Heroicon name: outline/user-group --> */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"
      />
    </svg>
  </>
);

export const UserGroupOutline = ({
  color = 'text-current',
}: {
  color?: string;
}) => (
  <>
    {/* <!-- Heroicon name: outline/user-group --> */}
    <svg
      className={`${color} icon`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
      />
    </svg>
  </>
);

export const Moon = ({
  color = 'text-current',
  className = '',
  fill,
}: {
  color?: string;
  className?: string;
  fill?: string;
}) => (
  <svg
    className={`${color} ${className} icon`}
    viewBox="0 0 20 21"
    fill="currentColor"
    stroke="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M18.0349 11.3331C17.9146 11.2336 17.7688 11.17 17.6141 11.1493C17.4594 11.1287 17.3021 11.1519 17.1599 11.2164C16.2787 11.6196 15.3206 11.8272 14.3516 11.8247C12.559 11.8226 10.8399 11.1118 9.56919 9.84731C8.2985 8.58285 7.57924 6.86731 7.56825 5.07472C7.57205 4.51291 7.64197 3.95351 7.77658 3.40805C7.80514 3.26267 7.79443 3.1123 7.74554 2.97243C7.69665 2.83257 7.61136 2.70826 7.49845 2.61233C7.38553 2.5164 7.24909 2.4523 7.10316 2.42665C6.95723 2.401 6.80711 2.41471 6.66825 2.46639C5.36185 3.05381 4.22622 3.96369 3.36804 5.11054C2.50987 6.25739 1.95731 7.60357 1.76229 9.02262C1.56726 10.4417 1.73617 11.887 2.25314 13.2229C2.77011 14.5587 3.61817 15.7412 4.71766 16.6593C5.81715 17.5773 7.13198 18.2009 8.53862 18.4712C9.94526 18.7416 11.3975 18.65 12.759 18.2049C14.1205 17.7599 15.3465 16.976 16.3219 15.927C17.2973 14.878 17.99 13.5983 18.3349 12.2081C18.3769 12.0489 18.3709 11.8808 18.3175 11.7251C18.2641 11.5694 18.1658 11.433 18.0349 11.3331ZM10.1182 16.9081C8.71971 16.8982 7.35841 16.4563 6.22074 15.6428C5.08306 14.8294 4.22463 13.6842 3.76298 12.364C3.30133 11.0438 3.25902 9.61321 3.64186 8.26806C4.0247 6.9229 4.81396 5.72897 5.90158 4.84972V5.07472C5.90378 7.31512 6.79476 9.46313 8.37896 11.0473C9.96317 12.6315 12.1112 13.5225 14.3516 13.5247C14.9398 13.5269 15.5266 13.4654 16.1016 13.3414C15.5265 14.4293 14.6653 15.3396 13.6109 15.974C12.5564 16.6084 11.3488 16.9429 10.1182 16.9414V16.9081Z"
      fill={fill}
    />
  </svg>
);
