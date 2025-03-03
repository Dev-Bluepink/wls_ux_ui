import React from "react";
import "./miniGame.scss";
import { Link } from "react-router-dom";

const Minigame = () => {
  return (
    <>
      <div className="MinigamePage">
        <div className="SidbarGame">
          <div className="SidbarGame__wrapper">
            {/* <Link
              to="/quiz"
              className="SidbarGame__item"
              style={{ textDecoration: "none" }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1314_9558)">
                  <path
                    d="M10.5454 19.9999C10.1867 19.9999 9.81509 19.9999 9.45635 19.9999C9.39229 19.9871 9.31542 19.9743 9.25135 19.9615C8.81573 19.8974 8.3673 19.859 7.9445 19.7693C5.52297 19.244 3.53707 18.0012 2.05084 16.0281C0.282744 13.6835 -0.332246 11.0441 0.193058 8.16137C0.641489 5.62454 1.92272 3.57457 3.97269 2.03709C6.24046 0.320245 8.80292 -0.294745 11.6088 0.140873C13.6716 0.46118 15.4525 1.37085 16.9387 2.81864C18.5531 4.39456 19.5396 6.30359 19.8728 8.54574C19.924 8.85324 19.9496 9.14792 19.9881 9.45541C19.9881 9.81416 19.9881 10.1857 19.9881 10.5445C19.9496 10.8904 19.9112 11.2363 19.8599 11.5823C19.4756 13.8628 18.4378 15.7975 16.7465 17.3606C15.2475 18.7443 13.4666 19.5899 11.4423 19.8846C11.1476 19.9231 10.8529 19.9615 10.5454 19.9999ZM5.45891 13.991C5.4461 14.5291 5.74078 14.9263 6.16359 15.0288C6.56077 15.1185 6.98358 15.0544 7.18857 14.5803C7.44482 13.9782 7.67544 13.376 7.90606 12.7738C7.95731 12.6072 8.02137 12.556 8.18793 12.556C9.28979 12.5688 10.3916 12.556 11.4935 12.556C11.9547 12.556 11.9419 12.556 12.1213 12.9788C12.3391 13.5169 12.5441 14.0678 12.8004 14.5931C13.0182 15.0288 13.4794 15.1569 13.915 14.9903C14.3635 14.8238 14.6197 14.3753 14.5172 13.9141C14.466 13.6963 14.4019 13.4913 14.3122 13.2863C13.505 11.2619 12.6851 9.23761 11.8523 7.20045C11.6473 6.68796 11.4423 6.17547 11.2116 5.67579C10.9554 5.16329 10.5198 4.91986 9.94322 4.93267C9.37948 4.93267 8.96948 5.20173 8.71324 5.70141C8.64918 5.82953 8.58511 5.95766 8.53386 6.08578C7.56013 8.53293 6.5864 10.9801 5.63829 13.44C5.5486 13.6578 5.49735 13.8757 5.45891 13.991Z"
                    fill="#0487D9"
                  />
                  <path
                    d="M11.4034 11.0443C10.4297 11.0443 9.48155 11.0443 8.50781 11.0443C8.98187 9.72465 9.45592 8.40498 9.94279 7.04688C10.4425 8.40498 10.9165 9.71183 11.4034 11.0443Z"
                    fill="#0487D9"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1314_9558">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              Trắc nghiệm
            </Link>
            <Link
              to="/quiz"
              className="SidbarGame__item"
              style={{ textDecoration: "none" }}
            >
              <svg
                width="24"
                height="21"
                viewBox="0 0 24 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24 17.46C24 17.7179 24 17.9751 24 18.233C23.9747 18.3344 23.9488 18.4358 23.9242 18.5372C23.5656 20.0295 22.3123 20.9952 20.6989 20.9972C15.9732 21.002 11.2468 20.9999 6.52107 20.9965C6.29581 20.9965 6.06703 20.9761 5.84597 20.9339C4.29928 20.6379 3.23259 19.3586 3.23119 17.7975C3.22908 14.0622 3.23048 10.3276 3.23048 6.59236C3.23048 6.5039 3.23048 6.41475 3.23048 6.32425C3.09083 6.30519 2.97504 6.28818 2.85925 6.27389C1.02202 6.05069 -0.262914 4.35148 0.0458634 2.65023C0.295693 1.27834 1.42975 0.0432287 3.1568 0.0248552C7.43688 -0.0200579 11.7184 0.00920366 15.9991 0.0112452C16.7044 0.0112452 17.3599 0.183412 17.936 0.58899C18.8813 1.25452 19.3003 2.17115 19.2996 3.2899C19.2975 6.99454 19.2989 10.6992 19.2989 14.4038C19.2989 14.4984 19.2989 14.593 19.2989 14.7026C19.7901 14.7026 20.2427 14.6951 20.6947 14.7039C22.0961 14.7305 23.1319 15.3293 23.7256 16.5773C23.8568 16.8536 23.9109 17.1653 24 17.46ZM13.218 1.68528C13.138 1.68528 13.0756 1.68528 13.0138 1.68528C9.7878 1.68528 6.56178 1.68528 3.33645 1.68596C3.21996 1.68596 3.10136 1.6914 2.98627 1.70977C1.97502 1.87037 1.43396 2.93808 1.91818 3.81592C2.2452 4.40932 2.80521 4.5985 3.44593 4.59986C6.62494 4.60598 9.80394 4.60258 12.983 4.60258C13.0566 4.60258 13.1303 4.5951 13.2089 4.59101C12.7654 3.17013 12.7654 3.04424 13.218 1.68528ZM16.9921 7.65258C13.0651 7.65258 9.16393 7.65258 5.25438 7.65258C5.25438 8.20583 5.25438 8.74683 5.25438 9.29327C9.17376 9.29327 13.0791 9.29327 16.9921 9.29327C16.9921 8.73866 16.9921 8.20379 16.9921 7.65258ZM16.9921 10.9911C13.063 10.9911 9.16112 10.9911 5.25859 10.9911C5.25859 11.5484 5.25859 12.0894 5.25859 12.6298C9.17797 12.6298 13.0798 12.6298 16.9921 12.6298C16.9921 12.0799 16.9921 11.5457 16.9921 10.9911ZM16.9914 14.3337C13.0637 14.3337 9.16183 14.3337 5.25859 14.3337C5.25859 14.8883 5.25859 15.428 5.25859 15.971C9.17797 15.971 13.0791 15.971 16.9914 15.971C16.9914 15.4191 16.9914 14.8843 16.9914 14.3337ZM19.3473 16.3399C19.3473 16.9407 19.3094 17.4865 19.3564 18.0248C19.4189 18.7427 20.0743 19.2708 20.8161 19.2687C21.5508 19.2667 22.1705 18.7495 22.2807 18.0459C22.3951 17.3191 21.9782 16.6005 21.2463 16.4617C20.6294 16.3453 19.9817 16.3752 19.3473 16.3399Z"
                  fill="#505050"
                />
              </svg>
              Luật chơi
            </Link> */}
          </div>
        </div>
        <section className="Minigame">
          <div className="Minigame__wrapper">
            <Link to="/rotation" className="Minigame__item">
              <img
                src={require("../../assets/images/minigame-01.png")}
                alt=""
              />
              <h4>Vòng quay may mắn</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetuer
                <br />
                adipiscing elit, sed diam nonummy{" "}
              </p>
            </Link>
            <div className="Minigame__item">
              <img
                src={require("../../assets/images/minigame-02.png")}
                alt=""
              />
              <h4>Vòng quay may mắn</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetuer
                <br />
                adipiscing elit, sed diam nonummy{" "}
              </p>
            </div>
          </div>
        </section>
        <div className="SidbarRule"></div>
      </div>
    </>
  );
};

export default Minigame;
