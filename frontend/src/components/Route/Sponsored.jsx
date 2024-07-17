import React from "react";
import styles from "../../styles/styles";

const Sponsored = () => {
  return (
    <div
      className={`${styles.section} hidden sm:block bg-white py-10 px-5 mb-12 cursor-pointer rounded-xl`}
    >
      <div className="flex justify-between w-full">
        <div className="flex items-start">
          <img
            src="https://static.nike.com/a/images/f_jpg,q_auto:eco/61b4738b-e1e1-4786-8f6c-26aa0008e80b/swoosh-logo-black.png"
            alt=""
            style={{  width: "150px", objectFit: "contain" }}
          />
        </div>
        <div className="flex items-start">
          <img
            src="https://theme.hstatic.net/1000312752/1001099452/14/share_fb_home.png?v=403"
            style={{ width: "150px", objectFit: "contain" }}
            alt=""
          />
        </div>
        <div className="flex items-start">
          <img
            src="https://cdn.vuahanghieu.com/unsafe/1200x0/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/news/2021/01/tim-hieu-lich-su-ra-doi-va-phat-trien-cua-thuong-hieu-puma-05012021111158.jpg"
            style={{ width: "150px", objectFit: "contain" }}
            alt=""
          />
        </div>
        <div className="flex items-start">
          <img
            src="data:image/png;base64,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"
            style={{ width: "150px", objectFit: "contain" }}
            alt=""
          />
        </div>
        <div className="flex items-start">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAgVBMVEX///8AAAD8/PwEBAT19fXw8PDn5+e9vb3U1NRPT09eXl5ra2uGhobExMTj4+Ps7OyqqqrNzc2YmJh+fn4iIiKioqLc3NzKyso5OTkMDAxWVlYnJye4uLiTk5NycnIxMTFBQUFISEgWFhZ4eHg8PDxcXFyEhIQbGxumpqYsLCwkJCQF7wMnAAAEX0lEQVR4nO3caXObQAwGYFbgMz7jI3brM0lz/f8fWLCDdx2DhGMbLZ73+dSZ0laKAC3anQYBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA3CHSDuDGeg3tCG6JgqhjTO2eizgwsRftKG6D4sINZ2Znqh3MjdTbxoS7DFvaodxEtEzy22UYmnt82Sz21fs2v7t3TXNr0jt0b6kd0XXVHsyJvnZQ1/R4XL69B+2oriR+3Brz0wImhtqxXcm0lZ2fMRvt0K4iesnLLzao/gqcJibrCTyItAO82JQpYKKjHeDlRkKKde0ALxYJGf7RDvByAyHFrnaAl6LgL5dfaNbaEV5uKBRxoh3g5TJWpEdq2gFerM7mF5pR9dt+Ryhi9Qca9MxneAcDjYVQxDsYaLzyGc614/sVCqb2868pFLGSAw0amc/0lxSshBQrtjxNBr+7xdrk0Af6QoYr1YB/YbiOG13oNvNHNsHQNBWjPU9StF47jdzZnRjzRXxVi/h81HG+6m0zbwj36UIx5PMs5u7YYmt/o8VNM+I/U5GBRnP2I3DbzHt8hqZTheVp//QzYpyGTZUfaFBAy6y4bTOvCRm2FaMvZJHztrS7ExMhxSfF6AXxnTjd5MX9YK9a84/il8dPYm3FzH3TZk5BVyjiQDUJBvG338yW5p+Qoq8DDb6Zh3Z3gviBRrIG8vI+pWDLxz23HaPDPomh6almkk/anXg7XFnZEfibELht5lUdaPClCd1mvuU7xrteErzizZwfgYf+jsB/rrh/+LRXSiNwX09oPAlxD6o/0GgLgdvPv6XwGdX0sykKuxPGjL6vi79Bcs6epDaKWbCW7JEEO9AgcaDh6/I0EjJs2Zsv94DN3rNXd2ndrrP4Zu4et5TWQN6MwCk5MOpsHOV+Iu45A40X4WVT96WKjXfjrrOK7meTuDz1YKCRDO53B0bjdZb9ea+E0vQPj6K0Bhp60DGS82rhUWkCkmZN9rglsSc0kjWQboZ0/FlfdHfCOLsT/BooNB8aeTm6Yzcau84iYXdiY/8KaaChNwKP757eUT8L3dIU353oCVe+Zf3j5YhOZ9eH3QmSmrlzQN/bExofXGnojGYufTVrDDTin/9TzjvQlkbenUiv9fFMX6+dt/Y8lIbOaObCV/O43OTiH3zEPTl21pR5GzuKntAIzWO5CdKAPdnklOaTz3Bmr/TrTJ/01NjSDIXPKHtCQ+oYZQ404piEddbMXsoONOLko8N7SV4Dlbl4K75xxJcmdJq5dKZvW+7yVJ41peFkbgY77EBDGoGXe0JDemrsUQNp1pR+NZNvA43i66zizVxeA5WZYySUJl1nxTGt+Su/3K9mXtkdI2T7QPfwA5eOW9pm7tVAg8TS2GuLN3O/TmgULg0V352QBhqzzEhupvjGkdTM0zWQdyNw7s1GRHYkGlDBS4X/5+ToSgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEr7D0b6KSIFBl4TAAAAAElFTkSuQmCC"
            style={{ width: "150px", objectFit: "contain" }}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Sponsored;
