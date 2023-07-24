import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const { error, status } = useRouteError();
  // console.log(error.message, status);
  return (
    <section className="flex items-center h-screen p-16 bg-gray-100 text-gray-900">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 border border-orange-800 rounded-lg p-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="400"
          height="300"
          viewBox="0 0 400 300"
        >
          <rect width="400" height="300" fill="#ECEFF1" />
          <text
            x="50%"
            y="50%"
            fontFamily="Arial, sans-serif"
            fontSize="48"
            fill="#607D8B"
            textAnchor="middle"
            dy=".3em"
            id="text"
          >
            404
          </text>
          <g id="car">
            <rect
              x="120"
              y="170"
              width="160"
              height="30"
              rx="15"
              fill="#607D8B"
            >
              <animate
                attributeType="XML"
                attributeName="fill"
                dur="2s"
                values="#607D8B; #FF5722"
                repeatCount="1"
                fill="freeze"
              />
            </rect>
            <circle cx="140" cy="200" r="15" fill="#FFF">
              <animate
                attributeName="fill"
                dur="2s"
                values="#FFF; #FF5722"
                repeatCount="1"
                fill="freeze"
              />
            </circle>
            <circle cx="260" cy="200" r="15" fill="#FFF">
              <animate
                attributeName="fill"
                dur="2s"
                values="#FFF; #FF5722"
                repeatCount="1"
                fill="freeze"
              />
            </circle>
            <animateTransform
              attributeName="transform"
              type="translate"
              dur="2s"
              values="-200,0; 0,0; 0,0; -200,0"
              keyTimes="0; 0.25; 0.5; 1"
              repeatCount="1"
              fill="freeze"
              id="carAnimation"
            />
          </g>
          <g id="exclamation-mark" style={{ display: "none" }}>
            <rect
              x="170"
              y="100"
              width="60"
              height="150"
              rx="30"
              fill="#FF5722"
            >
              <animate
                attributeName="height"
                dur="0.5s"
                values="0; 150; 150; 0; 0"
                keyTimes="0; 0.25; 0.5; 0.75; 1"
                repeatCount="indefinite"
              />
            </rect>
            <rect x="170" y="70" width="60" height="30" rx="15" fill="#FF5722">
              <animate
                attributeName="height"
                dur="0.5s"
                values="0; 30; 30; 0; 0"
                keyTimes="0; 0.25; 0.5; 0.75; 1"
                repeatCount="indefinite"
              />
            </rect>
            <animate
              attributeName="display"
              dur="2s"
              begin="carAnimation.end"
              values="none; inline"
              fill="freeze"
            />
          </g>
        </svg>

        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-9xl text-orange-400">
            <span className="sr-only">Error</span> {status || 404}
          </h2>
          <p className="text-2xl font-semibold md:text-3xl mb-8">
            {error?.message}
          </p>
          <Link
            to="/"
            className="px-8 py-3 rounded-xl font-semibold bg-gray-600 text-white"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
