const styles = {
    boxWidth: "xl:max-w-[1280px] w-full",
  
    heading: "font-montserrat font-semibold xs:text-[48px] text-[40px] text-[#000029] xs:leading-[76.8px] leading-[66.8px] w-full",
    paragraph: "font-montserrat font-normal text-[#000029] text-[18px] leading-[30.8px]",

  
    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-center items-start",
    flexEnd: "flex justify-center text-end justify-end",
  
    paddingX: "sm:px-16 ",
    paddingY: "sm:py-20 py-20",
    padding: "sm:px-16 px-6 sm:py-12 py-4",
  
    marginX: "sm:mx-16 mx-6",
    marginY: "sm:my-16 my-6",

    navButton: "w-[65%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 text-gray-800",
    topNav: "p-2 border-bottom-white border-transparent  hover:border-white ease-in duration-300 hover:text-white"
  };
  
  export const layout = {
    section: `flex md:flex-row flex-col ${styles.paddingY}`,
    sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,
  
    sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
    sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,
  
    sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
  };
  
  export default styles;