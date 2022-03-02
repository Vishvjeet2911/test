import React from "react";

const SocialIcons = () => {
  return (
    <div className="absolute-right fixed space-y-1 -right-6">
      <div className="bg-gray p-2 rounded-l-lg">
        <a target="_blank" href="https://www.linkedin.com/company/iglogistics">
          <img src="/static/icons/linkedin.png" width="25px" />
        </a>
      </div>
      <div className="bg-gray p-2 rounded-l-lg">
        <a
          className="cursor-pointer"
          onClick={() => {
            window.location.href = "mailto:iglogistics11101@gmail.com";
          }}
        >
          <img src="/static/icons/gmail.png" width="25px" />
        </a>
      </div>
      <div className="bg-gray p-2 rounded-l-lg">
        <a target="_blank" href="https://wa.me/message/5VWNILWDGMTDM1">
          <img src="/static/icons/whatsapp.png" width="25px" />
        </a>
      </div>
      <div className="bg-gray p-2 rounded-l-lg ">
        <a target="_blank" href="https://www.instagram.com/iglogistics.in/">
          <img src="/static/icons/instagram.png" width="25px" />
        </a>
      </div>
    </div>
  );
};

export default SocialIcons;
