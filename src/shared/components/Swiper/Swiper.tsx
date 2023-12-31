// import { useEffect, useRef } from "react";
// import { SwiperRef } from "swiper/react";
// import { register } from "swiper/element/bundle";
// import { Swiper as SwiperType } from "swiper/types";

// export function Swiper(props) {
//   const swiperRef = useRef<SwiperRef>(null);
//   const { children, ...rest } = props;

//   useEffect(() => {
//     // Register Swiper web component
//     register();

//     // pass component props to parameters
//     const params = {
//       ...rest,
//     };

//     // Assign it to swiper element
//     Object.assign(swiperRef.current, params);

//     // initialize swiper
//     swiperRef.current.initialize();
//   }, []);

//   return (
//     <swiper-container init="false" ref={swiperRef}>
//       {children}
//     </swiper-container>
//   );
// }
