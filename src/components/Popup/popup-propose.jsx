import React, { useState } from "react";
import "./popup.scss";
const PopupPropose = ({ info, isOpen, onClose }) => {
  console.log("showPopup", isOpen);
  if (!isOpen) {
    return null;
  }

  // lưu trạng thái của popup vào state

  return (
    <div className="overlay">
      <div className="popup">
        {" "}
        <div className="popup__wrapper">
          <div className="popup__content">
            <div className="popup__header">
              <button className="popup__close_suggest" onClick={onClose}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 2.25C6.615 2.25 2.25 6.615 2.25 12C2.25 17.385 6.615 21.75 12 21.75C17.385 21.75 21.75 17.385 21.75 12C21.75 6.615 17.385 2.25 12 2.25ZM10.28 9.22C10.2113 9.14631 10.1285 9.08721 10.0365 9.04622C9.94454 9.00523 9.84522 8.98318 9.74452 8.98141C9.64382 8.97963 9.54379 8.99816 9.4504 9.03588C9.35701 9.0736 9.27218 9.12974 9.20096 9.20096C9.12974 9.27218 9.0736 9.35701 9.03588 9.4504C8.99816 9.54379 8.97963 9.64382 8.98141 9.74452C8.98318 9.84522 9.00523 9.94454 9.04622 10.0365C9.08721 10.1285 9.14631 10.2113 9.22 10.28L10.94 12L9.22 13.72C9.14631 13.7887 9.08721 13.8715 9.04622 13.9635C9.00523 14.0555 8.98318 14.1548 8.98141 14.2555C8.97963 14.3562 8.99816 14.4562 9.03588 14.5496C9.0736 14.643 9.12974 14.7278 9.20096 14.799C9.27218 14.8703 9.35701 14.9264 9.4504 14.9641C9.54379 15.0018 9.64382 15.0204 9.74452 15.0186C9.84522 15.0168 9.94454 14.9948 10.0365 14.9538C10.1285 14.9128 10.2113 14.8537 10.28 14.78L12 13.06L13.72 14.78C13.7887 14.8537 13.8715 14.9128 13.9635 14.9538C14.0555 14.9948 14.1548 15.0168 14.2555 15.0186C14.3562 15.0204 14.4562 15.0018 14.5496 14.9641C14.643 14.9264 14.7278 14.8703 14.799 14.799C14.8703 14.7278 14.9264 14.643 14.9641 14.5496C15.0018 14.4562 15.0204 14.3562 15.0186 14.2555C15.0168 14.1548 14.9948 14.0555 14.9538 13.9635C14.9128 13.8715 14.8537 13.7887 14.78 13.72L13.06 12L14.78 10.28C14.8537 10.2113 14.9128 10.1285 14.9538 10.0365C14.9948 9.94454 15.0168 9.84522 15.0186 9.74452C15.0204 9.64382 15.0018 9.54379 14.9641 9.4504C14.9264 9.35701 14.8703 9.27218 14.799 9.20096C14.7278 9.12974 14.643 9.0736 14.5496 9.03588C14.4562 8.99816 14.3562 8.97963 14.2555 8.98141C14.1548 8.98318 14.0555 9.00523 13.9635 9.04622C13.8715 9.08721 13.7887 9.14631 13.72 9.22L12 10.94L10.28 9.22Z"
                    fill="#D9D9D9"
                  />
                </svg>
              </button>
              <h2 className="popup__title">{info.title}</h2>
              <div className="popup__subTitle">{info.subTitle}</div>
            </div>
            <div className="popup__body">
              <form className="popup__form">
                <input
                  type="text"
                  placeholder="Đặt tên group"
                  className="popup__input"
                />
                <input
                  type="text"
                  placeholder="Bạn học khóa nào"
                  className="popup__input"
                />

                <textarea
                  placeholder="Mục đích tạo nhóm này"
                  className="popup__textarea"
                />
              </form>
            </div>
            <div className="popup__footer">
              <div
                className="popup__title--footer"
                style={{
                  marginBottom: "10px",
                }}
              >
                Lưu ý:
                <span>
                  Khi duyệt bạn sẽ trở thành quản trị viên quản lí group này
                </span>
              </div>
              {/* checkbox */}

              <button className="popup__button" to="/forum-detail">
                Gửi
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupPropose;
